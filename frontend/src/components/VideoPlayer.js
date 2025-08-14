import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default function VideoPlayer({ overlays }) {
  const playerRef = useRef(null);

  useEffect(() => {
    const player = videojs(playerRef.current, {
      controls: true,
      autoplay: false,
      preload: 'auto',
      sources: [{
        src: "/stream/stream.m3u8",
        type: "application/x-mpegURL"
      }]
    });
    return () => { if (player) player.dispose(); };
  }, []);

  return (
    <div style={{ position: "relative", width: 600, height: 400 }}>
      <video ref={playerRef} className="video-js vjs-default-skin" width="600" height="400" />
      {overlays.map((ov, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            left: ov.x,
            top: ov.y,
            width: ov.width,
            height: ov.height,
            color: ov.color || '#fff',
            background: ov.bg || 'rgba(0,0,0,0.3)',
            fontSize: ov.fontSize || '20px',
            pointerEvents: 'none'
          }}
        >
          {ov.type === 'text' ? ov.content : <img src={ov.content} alt="logo" style={{ width: '100%', height: '100%' }} />}
        </div>
      ))}
    </div>
  );
}