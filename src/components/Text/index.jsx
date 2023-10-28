import React from "react";

const sizeClasses = {
  txtSpaceMonoBold30: "font-bold font-spacemono",
  txtSpaceMonoBold5915: "font-bold font-spacemono",
  txtMontserratRomanExtraBold2419: "font-extrabold font-montserrat",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
