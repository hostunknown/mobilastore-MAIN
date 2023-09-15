import React from 'react'
import "./Homepage.css"

import { Link } from "react-router-dom"
import { X } from "phosphor-react"
// import img1 from "../../assets/delivery.png"

const Homepage = () => {

  const DisplayDetails1 = () => {
    const thisben = document.getElementById("ben-mobile1");

    thisben.style.display = "flex";
  }

  const DisplayDetails2 = () => {
    const thisben = document.getElementById("ben-mobile2");

    thisben.style.display = "flex";
  }

  const DisplayDetails3 = () => {
    const thisben = document.getElementById("ben-mobile3");

    thisben.style.display = "flex";
  }

  const DisplayDetails4 = () => {
    const thisben = document.getElementById("ben-mobile4");

    thisben.style.display = "flex";
  }





  const CloseDetails1 = () => {
    const thisben = document.getElementById("ben-mobile1")

    thisben.style.display = "none";
  }

  const CloseDetails2 = () => {
    const thisben = document.getElementById("ben-mobile2")

    thisben.style.display = "none";
  }

  const CloseDetails3 = () => {
    const thisben = document.getElementById("ben-mobile3")

    thisben.style.display = "none";
  }

  const CloseDetails4 = () => {
    const thisben = document.getElementById("ben-mobile4")

    thisben.style.display = "none";
  }


  const ScrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className='homepage'>
      <div className='home-content'>
        <div className='home-section-1'>
        <div className='header'>
          <h1>Bun venit!</h1>
        </div>
      </div>


      <div className="benefitsss">
        <p>BENEFICII</p>
        </div>
        
      <div className='benefits'>
  <div className='benefit'>
  <i class="fa-solid fa-truck"></i>

      <h1 className='benefit-name'>Livrare rapida</h1>
      <div className='benefit-description'>
      Îi lipsim pe clienții noștri de grija transportării mobilei. Livram mobila gratuit și în termenii stabiliți, adaptându-ne la programul și disponibilitatea clientului.
      </div>
      <div className='benefit-details-btn' onClick={DisplayDetails1}>Detalii</div>


      <div className='benefit-mobile-details1' id="ben-mobile1">
        <div className='benefit-mobile-icons'>
          <X onClick={CloseDetails1} classname="ben-icon" size={32}
         color='white'
         cursor="pointer"/>
          </div>
      <h1 className='benefit-mobile-name'>Livrare rapida</h1>
      <div className='benefit-mobile-description'>
      Îi lipsim pe clienții noștri de grija transportării mobilei. Livram mobila gratuit și în termenii stabiliți, adaptându-ne la programul și disponibilitatea clientului.
      </div>
      </div>


  </div>

  <div className='benefit'>
      <i class="fa-solid fa-square-check"></i>

      <h1 className='benefit-name'>Garantie</h1>
      <div className='benefit-description'>
      Îi lipsim pe clienții noștri de grija transportării mobilei. Livram mobila gratuit și în termenii stabiliți, adaptându-ne la programul și disponibilitatea clientului.
      </div>
      <div className='benefit-details-btn' onClick={DisplayDetails2}>Detalii</div>



      <div className='benefit-mobile-details2' id="ben-mobile2">
        <div className='benefit-mobile-icons'>
          <X onClick={CloseDetails2} classname="ben-icon" size={32}
         color='white'
         cursor="pointer"/>
          </div>
      <h1 className='benefit-mobile-name'>Garantie</h1>
      <div className='benefit-mobile-description'>
      Îi lipsim pe clienții noștri de grija transportării mobilei. Livram mobila gratuit și în termenii stabiliți, adaptându-ne la programul și disponibilitatea clientului.
      </div>
      </div>


  </div>

  <div className='benefit'>
      <i class="fa-sharp fa-solid fa-pen"></i>

      <h1 className='benefit-name'>Design modern</h1>
      <div className='benefit-description'>
      Îi lipsim pe clienții noștri de grija transportării mobilei. Livram mobila gratuit și în termenii stabiliți, adaptându-ne la programul și disponibilitatea clientului.
      </div>
      <div className='benefit-details-btn' onClick={DisplayDetails3}>Detalii</div>



      <div className='benefit-mobile-details3' id="ben-mobile3">
        <div className='benefit-mobile-icons'>
          <X onClick={CloseDetails3} classname="ben-icon" size={32}
         color='white'
         cursor="pointer"/>
          </div>
      <h1 className='benefit-mobile-name'>Design modern</h1>
      <div className='benefit-mobile-description'>
      Îi lipsim pe clienții noștri de grija transportării mobilei. Livram mobila gratuit și în termenii stabiliți, adaptându-ne la programul și disponibilitatea clientului.
      </div>
      </div>




  </div>

  <div className='benefit'>
      <i class="fa-solid fa-thumbs-up"></i>

      <h1 className='benefit-name'>Calitate</h1>
      <div className='benefit-description'>
      Îi lipsim pe clienții noștri de grija transportării mobilei. Livram mobila gratuit și în termenii stabiliți, adaptându-ne la programul și disponibilitatea clientului.
      </div>
      <div className='benefit-details-btn' onClick={DisplayDetails4}>Detalii</div>



      <div className='benefit-mobile-details4' id="ben-mobile4">
        <div className='benefit-mobile-icons'>
          <X onClick={CloseDetails4} classname="ben-icon" size={32}
         color='white'
         cursor="pointer"/>
          </div>
      <h1 className='benefit-mobile-name'>Calitate</h1>
      <div className='benefit-mobile-description'>
      Îi lipsim pe clienții noștri de grija transportării mobilei. Livram mobila gratuit și în termenii stabiliți, adaptându-ne la programul și disponibilitatea clientului.
      </div>
      </div>



  </div>
</div>


    {/* close home content 1 div */}
      </div> 

<div className='home-content2'>
    <div className='home-description'>
      <div className='header-description'>
        Ai nevoie de un mobilier calitativ?
      </div>

      <div className='description-information'>
      Ai nevoie de un mobilier calitativ? Atunci ai ajuns la locul potrivit.
       Înțelegem că alegerea mobilierului potrivit este esențială pentru a crea
        un ambient plăcut în locuința ta. De aceea, punem la dispoziție o colecție 
        diversificată de piese de mobilier, realizate cu măiestrie și atenție la detalii.

Indiferent dacă vă doriți o
canapea confortabilă și eleganta, 
un șifonier spațios, o masă de dining 
impresionantă sau un pat confortabil, suntem aici 
pentru a vă satisface toate cerințele. Mobilierul 
nostru este fabricat folosind materiale de cea mai bună calitate, care 
asigură durabilitate și rezistență în timp. Fiecare piesă de mobilier este atent
 proiectată pentru a se potrivi în diferite stiluri de interior, de la clasic și 
 elegant până la modern și minimalist.

      </div>

      <div className='description-information'>
      În plus, ne mândrim cu faptul că lucrăm cu designeri talentați și producători 
      renumiți, pentru a vă oferi cele mai bune opțiuni de mobilier disponibile pe piață.
       Suntem dedicați să vă oferim o experiență de cumpărare plăcută și ușoară, astfel
        că am creat o platformă online intuitivă și prietenoasă, unde puteți explora și 
        achiziționa produsele dorite în doar câteva clicuri.

Indiferent dacă sunteți în căutarea unui singur articol sau doriți să redecorați 
complet casa, vă garantăm că veți găsi mobilierul perfect în magazinul nostru. Echipa 
noastră dedicată este întotdeauna aici pentru a vă oferi asistență și sfaturi profesionale,
 astfel încât să vă puteți bucura de achizițiile dumneavoastră și să creați un mediu în care 
 să vă simțiți cu adevărat acasă.
      
      </div>

      <div className='description-information'>
      Așadar, dacă doriți mobilier calitativ, de încredere și deosebit, vă invităm să 
      explorați selecția noastră deosebită de produse și să vă transformați casa într-un
       spațiu frumos și funcțional. Alegeți excelenta calitate și stilul de neuitat cu 
       mobilierul nostru și bucurați-vă de fiecare moment petrecut în locuința dumneavoastră.
      </div>
    </div>



  {/* close home content 2 div */}
</div>


<div className='home-content3'>
<div className='home-information'>
  <div className='home-content3-header'>
    Acceseaza catalogul:
  </div>

<div className='buttons'>
<Link to="/about" onClick={ScrollToTop}><div className='home-btn'>
    Echipa
  </div></Link>

  <Link to="/shop" onClick={ScrollToTop}><div className='home-btn-right'>
    Magazin
  </div></Link>
  </div>
</div>


  {/* home content 3 */}
</div>

    </div>
  )
}

export default Homepage
