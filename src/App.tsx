import React, { useRef, useState } from 'react';

const GraphVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [zoom, setZoom] = useState(1);

  const generateGraph = () => {
    const context = canvasRef.current?.getContext('2d');
    if (context) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height); 
      for (let i = 0; i < 500000; i++) {
        context.beginPath();
        context.arc(Math.random() * context.canvas.width, Math.random() * context.canvas.height, 2, 0, 2 * Math.PI);
        context.fill();
      }
    }
  };

  const zoomIn = () => {
    setZoom(zoom * 1.1);
    applyZoom();
  };

  const zoomOut = () => {
    setZoom(zoom / 1.1);
    applyZoom();
  };

  const applyZoom = () => {
    const context = canvasRef.current?.getContext('2d');
    if (context) {
      context.setTransform(zoom, 0, 0, zoom, 0, 0);
      generateGraph(); // Regenerate the graph to apply the zoom effect
    }
  };

  return (
    <div>
      <button onClick={generateGraph}>Generate Graph</button>
      <button onClick={zoomIn}>Zoom In</button>
      <button onClick={zoomOut}>Zoom Out</button>
      <canvas ref={canvasRef} width="800" height="600" />
    </div>
  );
};

export default GraphVisualizer;
