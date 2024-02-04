import React from 'react'
import './style1.css'
import './style3.css'
import './index.css'
const Index = () => {
  function closeForm() {
    var formContainer = document.getElementById('formContainer');
    formContainer.classList.add('hidden');
}
  return (
    <div>
        <main>
          <div className="box" id="formContainer">
            <button className="close-button" onClick={closeForm}><img src="./assets/x-button.png" style={{padding: '10px'}} /></button>
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
            <div className="lowerpart">
              <div className="formbox">
                <h1 className="heading1">New account</h1>
                <div className="content" style={{color: 'white'}}>
                  <p className="hifoodie">Hii Foodie!!</p>
                  <h1 className="welcome">Welcome to Samaadhaan</h1>
                </div>
                <div className="form">
                  <div className="information">
                    <p>As per government guideline, food business cannot operate and receive online order based on a FSSAI application starting 1st july 2021. So if you have applied for a FSSAI license or registration, let it get registered first and get approved. till then the details will be auto saved.</p>
                  </div>
                  <form action>
                    <div className="input-container">
                      <input type="text" id="user1" autoComplete="off" required className="text-input" />
                      <label htmlFor="Registration Number" className="label">Restaurant Name</label>
                    </div>
                    <div className="input-container">
                      <input type="text" id="user1" autoComplete="off" required className="text-input" />
                      <label htmlFor="Owner full Name" className="label">Owner full Name</label>
                    </div>
                    <div className="input-container">
                      <input type="text" id="user1" autoComplete="off" required className="text-input" />
                      <label htmlFor="Owner full Name" className="label">Phone No.</label>
                    </div>
                    <div className="facility"><input type="checkbox" className="checkboxcontent" />
                      <h5 className="questions">Delivery facility available ?</h5></div>
                  </form>
                </div>
                <button className="nextbutton">Next</button>
              </div>
              <div className="imagebox" style={{height: '450px', marginTop: '20px'}}>
                <img src="./assets/Group 144.png" />
              </div>
            </div>
          </div>
        </main>
        
       
    </div>
  )
}

export default Index
