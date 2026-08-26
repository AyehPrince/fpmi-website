// src/components/sections/VideoSection.jsx
"use client"
import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

const VIDEO_ID = "Sn7mbkPcQXg"

export default function VideoSection() {
  const playerRef = useRef(null)
  const containerRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [playerReady, setPlayerReady] = useState(false)

  useEffect(() => {
    function createPlayer() {
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: VIDEO_ID,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
        },
        events: {
          onReady: () => setPlayerReady(true),
        },
      })
    }

    if (window.YT && window.YT.Player) {
      createPlayer()
    } else if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      document.body.appendChild(tag)
      window.onYouTubeIframeAPIReady = createPlayer
    } else {
      window.onYouTubeIframeAPIReady = createPlayer
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy()
      }
    }
  }, [])

  function toggleMute() {
    if (!playerRef.current) return
    if (muted) {
      playerRef.current.unMute()
      setMuted(false)
    } else {
      playerRef.current.mute()
      setMuted(true)
    }
  }

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#f8f9fc" }}>
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "#1b3a4f" }}>
            <span className="w-8 h-px" style={{ backgroundColor: "#f5c518", display: "inline-block" }}></span>
            Life at FPMI
            <span className="w-8 h-px" style={{ backgroundColor: "#f5c518", display: "inline-block" }}></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 leading-tight" style={{ color: "#1b3a4f", letterSpacing: "-0.02em" }}>
            See What Happens Inside Our Studios
          </h2>
        </div>

        {/* Video frame */}
        <div className="relative mx-auto" style={{ maxWidth: "900px" }}>

          {/* Decorative corner accents */}
          <div style={{
            position: "absolute", top: -10, left: -10,
            width: 40, height: 40,
            borderTop: "3px solid #f5c518",
            borderLeft: "3px solid #f5c518",
            borderRadius: "4px 0 0 0",
            zIndex: 2,
          }} />
          <div style={{
            position: "absolute", top: -10, right: -10,
            width: 40, height: 40,
            borderTop: "3px solid #f5c518",
            borderRight: "3px solid #f5c518",
            borderRadius: "0 4px 0 0",
            zIndex: 2,
          }} />
          <div style={{
            position: "absolute", bottom: -10, left: -10,
            width: 40, height: 40,
            borderBottom: "3px solid #f5c518",
            borderLeft: "3px solid #f5c518",
            borderRadius: "0 0 0 4px",
            zIndex: 2,
          }} />
          <div style={{
            position: "absolute", bottom: -10, right: -10,
            width: 40, height: 40,
            borderBottom: "3px solid #f5c518",
            borderRight: "3px solid #f5c518",
            borderRadius: "0 0 4px 0",
            zIndex: 2,
          }} />

          {/* Video container with rounded clip */}
          <div style={{
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(27,58,79,0.25), 0 8px 24px rgba(27,58,79,0.12)",
            border: "1px solid rgba(27,58,79,0.1)",
            aspectRatio: "16/9",
            position: "relative",
            backgroundColor: "#000",
          }}>
            <div
              ref={containerRef}
              style={{
                position: "absolute",
                top: 0, left: 0,
                width: "100%",
                height: "100%",
              }}
            />

            {playerReady && (
              <button
                onClick={toggleMute}
                aria-label={muted ? "Unmute video" : "Mute video"}
                style={{
                  position: "absolute",
                  top: 16, right: 16,
                  zIndex: 5,
                  width: 40, height: 40,
                  borderRadius: "50%",
                  backgroundColor: "rgba(10,15,40,0.55)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  backdropFilter: "blur(4px)",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(10,15,40,0.8)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(10,15,40,0.55)")}
              >
                {muted ? <VolumeX size={18} color="white" /> : <Volume2 size={18} color="white" />}
              </button>
            )}

            {/* Subtle vignette overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.35) 100%)",
              pointerEvents: "none",
            }} />

            {/* Bottom label bar */}
            <div style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              padding: "20px 24px 16px",
              background: "linear-gradient(to top, rgba(27,58,79,0.95) 0%, transparent 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pointerEvents: "none",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 8, height: 8, borderRadius: "50%",
                  backgroundColor: "#f5c518",
                  animation: "pulse 2s infinite",
                }} />
                <span style={{ color: "white", fontSize: 13, fontWeight: 600 }}>Flash Prime Media Institute</span>
              </div>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>Accra, Ghana</span>
            </div>
          </div>

          {/* Side floating stats */}
          <div style={{
            position: "absolute",
            right: -130,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }} className="hidden xl:flex">
            {[
              { value: "70%", label: "Practical" },
              { value: "8", label: "Programs" },
              { value: "2017", label: "Est." },
            ].map(s => (
              <div key={s.label} style={{
                backgroundColor: "white",
                border: "1px solid rgba(27,58,79,0.1)",
                borderRadius: 12,
                padding: "12px 16px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(27,58,79,0.08)",
                minWidth: 80,
              }}>
                <p style={{ fontSize: 20, fontWeight: 900, color: "#1b3a4f", margin: 0, letterSpacing: "-0.02em" }}>{s.value}</p>
                <p style={{ fontSize: 11, color: "#888", margin: 0, marginTop: 2 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom caption */}
        <p className="text-center mt-10 text-sm" style={{ color: "#888", maxWidth: 500, margin: "40px auto 0" }}>
          Step inside our professional school and see where media professionals are made — from broadcast journalism to fashion, film and beyond.
        </p>

      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}