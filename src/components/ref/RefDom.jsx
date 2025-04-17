import React, { useRef } from "react";

export const RefDom = () => {
  let h2Ref = useRef(null); //{current:null}
  let btnRef = useRef(null);
  const changeContentStyle = () => {
    h2Ref.current.innerText = "Dom manipulated";
    h2Ref.current.style.color = "green";
    btnRef.current.style.color = "red";
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2 ref={h2Ref}>Dom manipulation using useref</h2>
      <button ref={btnRef} onClick={changeContentStyle}>
        Change content and style
      </button>
    </div>
  );
};
