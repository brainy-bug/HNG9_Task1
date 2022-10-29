// Import React
import React from "react";

import data from "../data";

function App() {
  return (
    <>
      <div className="section">
        <section className="profile__section">
          <div id="profile__img">
            <img src="/assets/yinka.jpg" alt="profile__img" />
          </div>
          <h3 id="twitter">Yinka Madamidola</h3>
          <h3 id="slack">Abdulrasheed Madamidola</h3>
        </section>
        {data.map((link) => {
          const { id, url, title } = link;
          return (
            <a href={url} id="btn__zuri" key={id}>
              {title}
            </a>
          );
        })}
      </div>
      <section className="social__section">
        <a href="https://slack.com/">
          <img src="/assets/slack.svg" alt="slack_logo" />
        </a>
        <a href="https://github.com/yinkajs">
          <img src="/assets/github.svg" alt="github_logo" />
        </a>
      </section>
      <footer>
        <img
          src="/assets/Zuri.Internship_Logo.png"
          alt="Zuri.Internship_logo"
        />
        <h3>HNG Internship 9 Frontend Task</h3>
        <img src="/assets/I4G.png" alt="I4G_logo" />
      </footer>
    </>
  );
}

export default App;
