import React, { useState } from "react";

const Home = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const startMirror = () => {
    setIsLoading(true);
  };

  return (
    <>
      <div className="context">
        <div className="context-main">
          <div className="context-box">
            <h1>Website Code Mirror</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              mollis ipsum et egestas ultrices. Integer nisi mi, rhoncus vel
              sapien ut, sagittis pulvinar tellus.
            </p>
            <div className="form-box">
              <input
                type="url"
                placeholder="Enter website URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button onClick={startMirror} disabled={isLoading}>
                {isLoading ? "..." : "Mirror"}
              </button>
            </div>
            <h6>
              Created with love by{" "}
              <a href="https://codewithmorife.netlify.app">Morifeoluwa</a>
            </h6>
          </div>
        </div>
        <div>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
