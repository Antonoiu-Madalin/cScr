import React from 'react'
import './Footer.css'
import './Gallery.css'
import { SocialIcon } from 'react-social-icons'



export default () => (
  <div className="footy">

  
  <div className="container taCenter">
    <h2 id='newsLetterTitle' className="taCenter">Newsletter</h2>
    <span className="newsLetterText">
        Abonează-te la buletinul nostru informativ si vei primii 
        notificare pe email atunci cand apar articole noi !
        </span>
    <form action="https://app.moosend.com/subscribe/5525d9b3-89f9-4595-af9e-45a37fdaca1a" method="post">
      <p><input className="FormInput" type="email" name="ms-email" placeholder="Adresa de email"/></p>
      <input type="hidden" value="CitesteScripturaro" name="uri"/>
      <input type="hidden" name="loc" value="en_US"/>
      <input className="Button" type="submit" value="Subscribe" />
     
    </form>


    </div>
   
    <section className="section taLeft" id="clearAll">
      <div id="footerColumns" className="container Gallery footerText pushCreditDown">
       
       <div id="footerColumnsBox1" className="Gallery--Item footerColored"><b>Vezi</b>
        <ul className="clearUl">
          <li><a href="/">Studiu biblic</a></li>
          <li><a href="/values">Stiinţă şi credinţă</a></li>
          <li><a href="/products">Ce este Biblia?</a></li>
          <li><a href="/products">Versete</a></li>
        </ul>
       </div> 

       <div id="footerColumnsBox2" className="Gallery--Item footerColored"><b>Mai multe</b>
          <ul className="clearUl">

              <li><a href="/despre">Despre noi</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/contact">Lasă o sugestie!</a></li>
              <li><a href="/contact">Live chat (Beta)</a></li>
          </ul>
        </div>

          <div id="socialMedia " className="Gallery--Item footerColored">
            <span className="socialMediaTitle">
              <b>Social media</b>
            </span>
          <ul id="socialNoPadding">
            <SocialIcon url="https://www.facebook.com" label="Our portfolio"/> 
            <SocialIcon url="https://www.youtube.com" label="Our portfolio" id="social-icon" /> 
            </ul>
          </div>

      </div>


      <div className="credit-text"> 
        <span> ©  {new Date().getFullYear()} {' '} <a href="https://scriptura.netlify.com">Citește Scriptura</a>. Toate drepturile rezervate.</span>
      </div>

    </section> 
  </div>
)