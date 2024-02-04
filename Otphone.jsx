import React from 'react'
import './style1.css'
import './style3.css'
import './index.css'
const Otphone = () => {
    function closeForm() {
        var formContainer = document.getElementById('formContainer');
        formContainer.classList.add('hidden');
    }
  return (
    <div>
        <main>
          <div className="box" id="formContainer">
            <button className="close-button" onClick={closeForm}><img src="./assets/x-button.png" /></button>
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
                <h1 className="heading1">OTP Verification</h1>
                <div className="form">
                  <form action>
                    <p className="questions" style={{marginTop: '60px'}}>
                      Enter six digit verification code received on your mobile phone number <a href className="questions" style={{color: '#0038FF'}}>+91 9508120493 
                      </a>via SMS. 
                    </p>
                    <section className="container-fluid bg-body-tertiary d-block">
                      <div className="row justify-content-left">
                        <div className="col-10 col-md-6 col-lg-4">
                          <div className="card bg-white mb-5 mt-5 border-0">
                            <div className="card-body p-5 text-center">
                              {/* <p class="questions" style="margin-top: 30px;">Enter Otp</p> */}
                              <div className="otp-field mb-2" style={{marginTop: '25px'}}>
                                <input type="number" />
                                <input type="number" />
                                <input type="number" />
                                <input type="number" />
                                <input type="number" />
                                <input type="number" />
                              </div>
                              <p className="questions" style={{marginTop: '30px'}}>
                                Having difficulty ? Contact us at <br /><a href className="questions" style={{color: '#0038FF'}}>+91 9508120493 
                                </a>  <a href className="questions" style={{color: '#0038FF'}}>sammadhaan@gamil.com
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* <button style="background-color: white; width: 40%;
                            height: 9%;
                            border-radius: 50px;
                            margin-top: 10px;
                            color: #555; /* Greyish color * /
                            font-size: 16px; /* Bigger font size 
                            font-weight: bold;  id="otpTrigger">Trigger OTP</button> */}
                  </form>
                </div>
                <button className="nextbutton" style={{marginTop: '200px'}}>Resent OTP in 00:24</button>
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

export default Otphone
