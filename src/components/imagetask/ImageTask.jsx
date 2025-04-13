import { useState } from "react";
import "./ImageTask.css";
function ImageTask() {
  var [url, setUrl] = useState(
    "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256"
  );
  var [title, setTitle] = useState("React");
  return (
    <div class="card">
      <h1>{title}</h1>
      <img src={url} alt="" width="300" height="300" />
      <br />
      <br />
      <button
        onClick={() => {
          setUrl(
            "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256"
          );
          setTitle("React");
        }}
      >
        React
      </button>
      <button
        onClick={() => {
          setUrl(
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
          );
          setTitle("Angular");
        }}
      >
        {" "}
        Angular
      </button>
    </div>
  );
}
export default ImageTask;
