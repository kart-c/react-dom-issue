import React, { useState } from "react";
import { createPortal } from "react-dom";

type TooltipWithKeyProps = {
  children: React.ReactNode;
  text: string;
};

const TooltipWithoutKey: React.FC<TooltipWithKeyProps> = ({
  children,
  text,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        cursor: "pointer",
      }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show &&
        createPortal(
          <div
            style={{
              position: "absolute",
              backgroundColor: "#333",
              color: "#fff",
              padding: "5px",
              borderRadius: "4px",
              top: 0,
              left: 0,
            }}
          >
            {text}
          </div>,
          document.body
        )}
    </div>
  );
};

export default TooltipWithoutKey;
