import React, { useImperativeHandle, useRef } from "react";

const TextInput = React.forwardRef((props, ref) => {
  const { hasEror, placeholder, value, update } = props;
  console.log(update);
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
    };
  });

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => update(e.target.value)}
      placeholder={placeholder}
      style={{
        boderColor: hasEror ? "red" : "black",
        outline: "none",
      }}
    />
  );
});

export default TextInput;
