const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationName = "shine";
  const animationDuration = `${speed}s`;

  if (
    typeof document !== "undefined" &&
    !document.getElementById("shiny-keyframes")
  ) {
    const style = document.createElement("style");
    style.id = "shiny-keyframes";
    style.innerHTML = `
      @keyframes ${animationName} {
        0% {
          background-position: 100%;
        }
        100% {
          background-position: -100%;
        }
      }
    `;
    document.head.appendChild(style);
  }

  const shinyStyle = {
    color: "#cccccca4",
    background: `linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0) 60%
    )`,
    backgroundSize: "200% 100%",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    display: "inline-block",
    animation: disabled
      ? "none"
      : `${animationName} ${animationDuration} linear infinite`,
  };

  return (
    <div className={`shiny-text ${className}`} style={shinyStyle}>
      {text}
    </div>
  );
};

export default ShinyText;
