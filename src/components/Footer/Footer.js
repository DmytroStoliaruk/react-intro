import { FacebookOutlined, LinkedinOutlined, TwitterOutlined, GoogleOutlined } from '@ant-design/icons';

import './Footer.css';
import Logo from '../Logo/Logo';

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="branding">
          <h3>Branding stuff</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo</p>
        </div>
        <div class="logo-image">
          <Logo />
        </div>
        <div class="social-icons">
          <FacebookOutlined style={{ color: '#3b5998' }} />
          <TwitterOutlined style={{ color: '#1da1f2',  marginLeft: '15px' }} />
          <LinkedinOutlined style={{ color: '#0077b5',  marginLeft: '15px' }} />
          <GoogleOutlined style={{ color: '#db4437',  marginLeft: '15px' }} />
        </div>
      </div>  
      <div class="footer-bottom">
        <hr />
        <p>2024 SoftServe Academy © Copyright all rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;