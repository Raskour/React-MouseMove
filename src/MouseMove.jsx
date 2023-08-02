import { useState, useEffect } from "react";

function MouseMove() {
  const [clientX, setClientX] = useState();
  const [clientY, setClientY] = useState();

  useEffect(() => {
    //NOTE:  We use effect to add any
    // event handlers that need not any user intervention

    // In this case, we will be adding mousemove event handler on
    // window object.
    window.addEventListener("mousemove", (e) => {
      setClientX(e.clientX);
      setClientY(e.clientY);
    });

    // We need to use empty deps array because we
    // want to run this effect only once (after first render only).
    // Otherwise (not using []), it will cause this effect to run everytime
    // there's a re-render, attaching multiple event handlers wastefully.
    // It will cause memory issues.
  }, []);

  return (
    <div>
      <span>X: {clientX}</span> - <span>Y: {clientY}</span>
      <div
        style={{
          height: 50,
          width: 50,
          backgroundColor: "red",
          borderRadius: "50%",
          position: "absolute",
          top: clientY,
          left: clientX
        }}
      />
    </div>
  );
}

export default MouseMove;
