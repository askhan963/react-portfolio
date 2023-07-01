import "./AboutMeStyles.css"
import React from 'react'

const AboutMe = () => {
  return (
    <div className="about">
    <div className="self">
        <div className="intro">
            <h1>I'm Awais Khan.</h1>
            <p>Student of BCS who specializes in MERN Stack development and Java programming. With my knowledge of React and proficiency in Java programming, I have the skills to build complex applications from start to finish.
            If you are looking for a self-motivated, detail-oriented developer with a passion for creating efficient and effective applications, I would love to hear from you. Please don't hesitate to reach out to me if you are interested in discussing potential opportunities.
</p>
        </div>
        <div className="img">
            <img src="https://boisterous-mermaid-9e3191.netlify.app/imgs/awais-img.png" alt="MyImage" />
        </div>
    </div>

    <div className="skills">
      <div className="intro">
        <h1>Skills</h1>
      </div>
      <div className="list">
        <div className="item">
          <div className="head">REACT.JS</div>
          <div class="container">
  <div class="lang css">85%</div>
</div>
        </div>

        <div className="item">
          <div className="head">Node JS</div>
          <div class="container">
  <div class="lang node">80%</div>
</div>
        </div>

        <div className="item">
          <div className="head">Mongo DB.</div>
          <div class="container">
  <div class="lang mg">90%</div>
</div>
        </div>

        <div className="item">
          <div className="head">Java</div>
          <div class="container">
  <div class="lang java">85%</div>
</div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default AboutMe