import React from "react";

function Wrapper({
  p,
  mt = 5,
  mb = 5,
  gap: gap,
  direction = "row",
  alignItems = "center",
  justifyContent = "space-between",
  children,
}) {
  return (
    <div
      style={{
        display: "flex",
        padding: p,
        // width: "100%",
        marginTop: mt,
        marginBottom: mb,
        gap: gap,
        flexDirection: direction,
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
