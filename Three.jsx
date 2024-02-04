import React from 'react'
import './style1.css'
import './style3.css'
import './index.css'
const Three = () => {
  return (
    <div>
   <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chef</title>
  <link rel="stylesheet" href="style3.css" />
  <div id="pop-up">
    <div id="heading-tile">
      <div
        id="crossimg"
        style={{
          backgroundColor: "black",
          border: "none",
          float: "left",
          paddingRight: 380
        }}
      >
       
      </div>
      <div className="users">
              <div className="user1">
                <button className="user_nav">  <img src="./assets/tiffin-img.png" className="icons_" style={{backgroundColor: 'black'}} /></button> 
                {/* <div class="username"><a href="#" class="all" >tiffin walla</a></div> */}
              </div>
              <div className="user1">
                <button className="user_nav">   <img src="./assets/Chef-img.png" className="icons_" /></button>
                {/* <div class="username"><a href="#" class="all">Master chef</a></div> */}
              </div><div className="user1">
                <button className="user_nav">   <img src="./assets/vendor-img.png" className="icons_" /></button>
                {/* <div class="username"><a href="#" class="all">Sreet vendor</a></div> */}
              </div><div className="user1">
                <button className="user_nav">     <img src="./assets/Group 12183.png" className="icons_" /></button>
                {/* <div class="username"><a href="#" class="all">RestroOwner</a></div> */}
              </div>
            </div>
      
    </div>
    <div id="content">
      <div id="left">
        <h1>Create new account</h1>
        <div id="Welcome">
          <p id="p1">Hii Chef!</p>
          <p id="p2">Welcome to Samaadhaan</p>
        </div>
        <div id="required">
          To be a chef at samadhaan follow the following steps
        </div>
        <div id="checkbox-area">
          <div className="checkboxes">
            Mail your resume to the Samaadhaan at:
            <span>
              <a href="#">samadhaanforchef@gmail.com</a>
            </span>
          </div>
          <div className="checkboxes">
            Fill the google form you get via mail with accurate details
          </div>
          <div className="checkboxes">
            Interview round (Your will get a mail for it)
          </div>
          <div className="checkboxes">
            Get the offer letter from Samaadhaan to be Master chef <br />
            <span>Contains Your Chef ID with ID password</span>
          </div>
          <div className="checkboxes">
            Login to Chef Account and start earning <br />
            <span>
              <a href="#">samaadhaan.com</a>
            </span>
          </div>
        </div>
      </div>
      <div className="imagebox">
                <img src="./assets/Group 144.png" width="100%" />
              </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Three
