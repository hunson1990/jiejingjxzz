"use client";

import { useEffect } from "react";

interface VideoModalProps {
  videoUrl: string | null;
  onClose: () => void;
}

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  useEffect(() => {
    if (videoUrl) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [videoUrl]);

  if (!videoUrl) return null;

  return (
    <div className="video-modal active">
      <div className="video-modal-overlay" onClick={onClose}></div>
      <div className="video-modal-content">
        <button className="video-modal-close" onClick={onClose}>
          &times;
        </button>
        <iframe
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
