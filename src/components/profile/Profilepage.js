import React from 'react'
import "./Profilepage.css"
import profileimg from "../../assets/profileavatar.png"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo(0, 0)
}


const Profilepage = () => {
  const navigate = useNavigate();


  const EditProfile = () => {
    console.log("profileclicked")
    document.getElementById("profileinput").disabled = "false";
  }

  const LinkToHome = () => {
    // document.getElementsByClassName("add-btn").style.color = "white";
    navigate("/home");
    window.scrollTo(0, 0)
  }

  const LinkToShop = () => {
    navigate("/shop");
    window.scrollTo(0, 0)
  }

  const LinkToContact = () => {
    navigate("/contact");
    window.scrollTo(0, 0)
  }

  return (
    <div className='profilepage'>
      <div className='profile-info-1'>
    <div className='profile-img'>
      <img src={profileimg} alt="none"></img>
    </div>

    <div className='main-description'>
      <div className='main-d-title'>
      <p>Name Surname</p>
      </div>

      <div className='main-d-info'>
        <div className='main-d-info-container'>
        <p>Age:</p> <input id="profileinput" type='text' placeholder="17" disabled/>
        </div>

        <div className='main-d-info-container'>
        <p>Email Address:</p> <input id="profileinput" type='text' placeholder="tenbergandrew@gmail.com" disabled/>
        </div>

        <div className='main-d-info-container'>
        <p>Mobile number:</p> <input id="profileinput" type='text' placeholder="+37368483577" disabled/>
</div>

        <div className='main-d-info-container'>
        <p>Password:</p> <input id="profileinput" type='text' placeholder="******" disabled/>
        </div>

        <div className='d-profile-button'>
          <div className='d-btn-container' onClick={EditProfile}>
            <p>Editeaza</p>
          </div>
        </div>
      </div>
    </div>
      </div>



      <div className='profile-info-2'>
      <div className='profile-add'>
        <p>Pagina principala</p>
        <div className='add-btn' onClick={LinkToHome}><Link to="/home" onClick={scrollToTop}>Principala</Link></div>
      </div>


      <div className='profile-add'>
          <p>Acceseaza magazinul</p>
          <div className='add-btn' onClick={LinkToShop}><Link to="/shop" onClick={scrollToTop}>Magazin</Link></div>
      </div>

      <div className='profile-add'>
        <p>Contacteaza-ne!</p>
        <div className='add-btn' onClick={LinkToContact}><Link to="/contact" onClick={scrollToTop}>Contacte</Link></div>
      </div>
      </div>
    </div>
  )
}

export default Profilepage
