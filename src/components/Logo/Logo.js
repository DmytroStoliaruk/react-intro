import './Logo.css';
import logoImage from '../../images/logo192.png'; 

function Logo() {
  return (
    <div className="logo">
      <img src={logoImage} alt="LOGO"/>
    </div>    
  );
}

export default Logo;
