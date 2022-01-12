

import React, { useCallback, useEffect, useRef, useState } from "react";

const Block = ({ onOpen, label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef();

  const onMouseDown = useCallback(
    (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    },
    [containerRef, setIsOpen]
  );

  useEffect(() => {
    if (isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  useEffect(() => {
    window.addEventListener("mousedown", onMouseDown);

    return () => window.removeEventListener("mousedown", onMouseDown);
  }, [onMouseDown]);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div ref={containerRef} className="dropdown-container">
      <div className="dropdown-label" onClick={toggleIsOpen}>{label}</div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default Block;