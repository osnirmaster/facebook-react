import React from 'react';

import avatarProfile from '../assets/profile.png';

import logo from '../assets/logo/facebook-1.png';


function Header (){

  return (

    <header className="header-main">
      <div className="logo">
        <img src={ logo } ></img>
      </div>
      <div className="avatar-perfil">
        <img src={ avatarProfile}></img>
        <h3>Meu Perfil</h3>
      </div>
    </header>
  )
}

export default Header;