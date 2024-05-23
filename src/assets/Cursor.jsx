import React from "react";
import AnimatedCursor from "react-animated-cursor";
import "./Cursor.css";

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={3}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: "var(--cursor-color)",
      }}
      outerStyle={{
        border: "3px solid var(--cursor-color)",
      }}
      //   innerSize={8}
      //   outerSize={20}
      //   color="225,223,81"
      //   outerAlpha={0.2}
      //   innerScale={0.7}
      //   outerScale={5}

      //   clickables={[
      //     "a",
      //     'input[type="text"]',
      //     'input[type="email"]',
      //     'input[type="number"]',
      //     'input[type="submit"]',
      //     'input[type="image"]',
      //     "label[for]",
      //     "select",
      //     "textarea",
      //     "button",
      //     ".link",
      //   ]}
    />
  );
};

export default Cursor;
