import React, { useState } from 'react';

export default function OverlayEditor({ onSave }) {
  const [overlay, setOverlay] = useState({
    type: 'text',
    content: '',
    x: 50,
    y: 50,
    width: 100,
    height: 40
  });

  return (
    <form onSubmit={e => {e.preventDefault(); onSave(overlay);}}>
      <select value={overlay.type} onChange={e => setOverlay({...overlay, type: e.target.value})}>
        <option value="text">Text</option>
        <option value="image">Logo/Image</option>
      </select>
      <input
        type="text"
        placeholder="Content (text or image URL)"
        value={overlay.content}
        onChange={e => setOverlay({...overlay, content: e.target.value})}
      />
      <input type="number" value={overlay.x} onChange={e => setOverlay({...overlay, x: Number(e.target.value)})} placeholder="X" />
      <input type="number" value={overlay.y} onChange={e => setOverlay({...overlay, y: Number(e.target.value)})} placeholder="Y" />
      <input type="number" value={overlay.width} onChange={e => setOverlay({...overlay, width: Number(e.target.value)})} placeholder="Width" />
      <input type="number" value={overlay.height} onChange={e => setOverlay({...overlay, height: Number(e.target.value)})} placeholder="Height" />
      <button type="submit">Save Overlay</button>
    </form>
  );
}