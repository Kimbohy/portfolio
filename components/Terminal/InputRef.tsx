import { useState } from "react";

const HighlightTextarea = () => {
  const [text, setText] = useState("");
  const keywords = ["react", "javascript", "css"]; 

  const highlightText = (input: string) => {
    const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");
    return input.split("\n").map((line, i) => (
      <span key={i}>
        {line.split(" ").map((word, index) =>
          regex.test(word) ? (
            <span key={index} style={{ color: "red" }}>{word} </span>
          ) : (
            <span key={index}>{word} </span>
          )
        )}
        <br />
      </span>
    ));
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tapez ici..."
        style={{ width: "100%", height: "100px" }}
      />
      <div
        style={{
          whiteSpace: "pre-wrap",
          width: "100%",
          height: "100px",
          marginTop: "10px",
          border: "1px solid #ccc",
          padding: "10px",
          position: "absolute",
          top: "120px",
        }}
      >
        {highlightText(text)}
      </div>
    </div>
  );
};

export default HighlightTextarea;
