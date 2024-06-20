import React from 'react'
import "../composantes/styles/login.css"

export default function Connexion() {
  return (
    <div className="container">
    <div className="forms-container">
      <div className="signin-signup">
        <form action="" className="sign-in-form">
          <h2 className="title">Connexion</h2>
          <div className="input-field">
            <i className="fa-solid fa-envelope"></i>
            <input type="mail" placeholder="e-mail" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="mot de passe" />
          </div>
          <input type="submit" value="Login" className="btn solid" />

          <p className="social-text">ou avec vos réseaux sociaux</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>

        <form action="" className="sign-up-form">
          <h2 className="title">Créer un compte</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Nom & Prénom" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="mot de passe " />
          </div>
          <input type="submit" value="Connexion" className="btn solid" />
          <p className="social-text">ou avec vos réseaux sociaux</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>
    </div>

    <div className="panels-container">
      <div className="panel left-panel">
          <div className="content">
              <h3>Sans Compte</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
              <button className="btn transparent" id="sign-up-btn">Connexion</button>
          </div>
         <img src="./img/log.svg" className="image" alt="" />
      </div>
      <div className="panel right-panel">
          <div className="content">
              <h3>Compte</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
              <button className="btn transparent" id="sign-in-btn">Connexion</button>
          </div>
            <img src="./img/register.svg" className="image" alt="" />
      </div>
    </div>
  </div>  

  )
}
