import React from "react";

export function Container({ settings, children }) {
  return (
    <div className={"container" + (settings ? " " + settings : "")}>
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

export function Img({ source }) {
  return (
    <img src={ source } alt="" className="img-fluid text pic" />
  );
}

export function Bp({ link, children }) {
  return (
    <li><a href={ link } target="_blank" rel="noreferrer">
      {children}  
    </a></li>
  );
}

export function Reach({ source }) {
  return (
    <img src={ source } alt="" className="img-fluid link" />
  );
}