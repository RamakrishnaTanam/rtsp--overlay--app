import React, { useState, useEffect } from 'react';
import VideoPlayer from './components/VideoPlayer';
import OverlayEditor from './components/OverlayEditor';

function App() {
  const [overlays, setOverlays] = useState([]);

  useEffect(() => {
    fetch('/api/overlays/')
      .then(res => res.json())
      .then(data => setOverlays(data));
  }, []);

  const handleSaveOverlay = (overlay) => {
    fetch('/api/overlays/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(overlay)
    })
    .then(res => res.json())
    .then(newOverlay => setOverlays([...overlays, { ...overlay, _id: newOverlay._id }]));
  };

  return (
    <div>
      <h2>RTSP Livestream</h2>
      <VideoPlayer overlays={overlays} />
      <OverlayEditor onSave={handleSaveOverlay} />
    </div>
  );
}

export default App;