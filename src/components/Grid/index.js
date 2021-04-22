import React from "react";


export function Container({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}

export function Row({ settings, children }) {
  return (
    <div className={"row" + (settings ? " " + settings : "")}>
      {children}
    </div>
  );
}

export function Col({ settings, children }) {
  return (
    <div className={"col" + (settings ? " " + settings : "")}>
      {children}
    </div>
  );
}