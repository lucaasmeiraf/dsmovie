import {ReactComponent as IconeGitHub} from 'assets/img/github.svg'
import './styles.css';

function Navbar(){

return (
<header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSmovie</h1>
          <a href="https://github.com/lucaasmeiraf">
            <div className="dsmovie-contact-container">
              <IconeGitHub />
              <p className="dsmovie-contact-link">/lucaasmeiraf</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
);
}

export default Navbar;