import React from "react";

function Error({ text = "Error Message" }) {
  if (!text) return null;
  return (
    <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">
      {text}
    </div>
  );
}

export default Error;
