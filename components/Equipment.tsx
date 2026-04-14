"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import VideoModal from "./VideoModal";

export default function Equipment() {
  const t = useTranslations("equipment");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const videos = [
    "https://www.youtube.com/embed/sOBuSHSk4OU",
    "https://www.youtube.com/embed/pJv331yThYA",
    null,
    null,
    null,
    null,
  ];

  return (
    <>
      <section className="equipment" id="equipment">
        <div className="container">
          <div className="section-title">
            <h2>{t("title")}</h2>
            <p>{t("subtitle")}</p>
          </div>
          <div className="equipment-grid">
            {[1, 2, 3, 4, 5, 6].map((i, idx) => {
              const video = videos[idx];
              if (video) {
                return (
                  <div
                    key={i}
                    className="equipment-item video-trigger"
                    onClick={() => setVideoUrl(video)}
                    style={{ padding: 0, cursor: "pointer" }}
                  >
                    <div
                      className="video-thumbnail"
                      style={{
                        width: "100%",
                        height: 180,
                        position: "relative",
                        borderRadius: "8px 8px 0 0",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={`/product${i > 2 ? 1 : i}.png`}
                        alt={`${t(`product${i}`)}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <div
                        className="play-button"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-50%)",
                          width: 67,
                          height: 60,
                          opacity: 0,
                          transition: "opacity 0.3s",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 67 60"
                          fill="#FF0000"
                          focusable="false"
                          aria-hidden="true"
                          style={{
                            pointerEvents: "none",
                            display: "inherit",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <path d="M63 14.87a7.885 7.885 0 00-5.56-5.56C52.54 8 32.88 8 32.88 8S13.23 8 8.32 9.31c-2.7.72-4.83 2.85-5.56 5.56C1.45 19.77 1.45 30 1.45 30s0 10.23 1.31 15.13c.72 2.7 2.85 4.83 5.56 5.56C13.23 52 32.88 52 32.88 52s19.66 0 24.56-1.31c2.7-.72 4.83-2.85 5.56-5.56C64.31 40.23 64.31 30 64.31 30s0-10.23-1.31-15.13z"></path>
                          <path
                            fill="#FFF"
                            className="logo-arrow"
                            d="M26.6 39.43L42.93 30 26.6 20.57z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <p style={{ padding: "0.75rem" }}>{t(`product${i}`)}</p>
                  </div>
                );
              }
              return (
                <div key={i} className="equipment-item" style={{ padding: 0 }}>
                  <div
                    style={{
                      width: "100%",
                      height: 180,
                      position: "relative",
                      borderRadius: "8px 8px 0 0",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={`/product${i > 2 ? 2 : i}.jpg`}
                      alt={`${t(`product${i}`)}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p style={{ padding: "0.75rem" }}>{t(`product${i}`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <VideoModal videoUrl={videoUrl} onClose={() => setVideoUrl(null)} />
    </>
  );
}
