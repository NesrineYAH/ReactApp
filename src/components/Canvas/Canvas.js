import React, { useRef, useEffect } from "react";
/*import useCanvas from "./useCanvas";

const useCanvas = (draw) => {
  const { draw, ...rest } = props;
  const canvasRef = useRef(null); //ref

  const draw = (context, count) => {
    context.fillStyle = "grey";
    delta = count % 800;
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillRect(0, 0, 100, 100);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let count = 0;
    let animationID;
    const render = () => {
      s;
      count++;
      draw(context, count);
      animationID = window.requestAnimationFrame(render);
    };
    render();

    return () => window.cancelAnimationFrame(animationID);
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
*/