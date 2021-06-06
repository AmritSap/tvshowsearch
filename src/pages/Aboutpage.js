import React from "react";

const Aboutpage = () => {
  return (
    <div className="about">
      <h3 className="about_title"> Tv Show Search App</h3>
      <div className="about_info">
        <p>Technology used</p>
        <ul>
          <li>React (create-react-app)</li>
          <li>CSS and HTML</li>
          <li>TVMAZE API (https://www.tvmaze.com/api)</li>
          <li>React Router</li>
          <li>Deploying to Netlify</li>
        </ul>
      </div>
    </div>
  );
};

export default Aboutpage;
