import React from 'react'
import './index.css'
import './style1.css'
import './style3.css'

const account = () => {
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
                  <form action style={{marginTop: '50px'}}>
                    <div className="input-container">
                      <input type="text" id="user1" autoComplete="off" required className="text-input" placeholder="Enter the name of account holder" />
                      <label htmlFor="Registration Number" className="label">Account Holder Name</label>
                    </div>
                    <div className="input-container">
                      <input type="number" id="user1" autoComplete="off" required className="text-input" placeholder="XXXX XXXX XXXX" />
                      <label htmlFor="Owner full Name" className="label">Enter Account Number</label>
                    </div>
                    <div className="input-container">
                      <input type="number" id="user1" autoComplete="off" required className="text-input" placeholder="XXXX XXXX XXXX" />
                      <label htmlFor="Owner full Name" className="label">Reenter Account Number</label>
                    </div>
                    <div className="input-container">
                      <input type="number" id="user1" autoComplete="off" required className="text-input" placeholder="XXXX XXXX XXXX XXXX" />
                      <label htmlFor="Owner full Name" className="label">Enter IFSC Code</label>
                    </div>
                  </form>
                </div>
                <button className="nextbutton">Finish</button>
              </div>
              <div className="imagebox">
                <img src="./assets/Group 144.png" />
              </div>
            </div>
          </div>
        </main>
        
    </div>
  )
}

export default account
