import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TbExternalLink } from "react-icons/tb";

const Download = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const { folderName } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  const startDownload = () => {
    setIsLoading(true);
  };

  return (
    <>
      <div className="download-details">
        <div className="col">
          <div className="col-box">
            <h1>
              {folderName}
              <TbExternalLink className="small" size={28} /> <br />
              <small className="opaq">(23.4 MB)</small>
            </h1>
            <p className="pill">wikipedia.com</p>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter valid email address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
              <button onClick={startDownload} disabled={isLoading}>
                {isLoading ? "..." : "Download ZIP"}
              </button>
            </div>
          </div>
        </div>
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
    </>
  );
};

export default Download;
