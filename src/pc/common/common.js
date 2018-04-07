import "./reset.css";
import "./layout.css";

let idealViewWidth = window.screen.width;
const BASICVALUE = 750;
document.documentElement.style.fontSize = (idealViewWidth / BASICVALUE) * 100 + 'px';