import "./Header.scss";
import brainflixLogo from "../../assets/icons/Logo/BrainFlix-logo.svg";
import profilePicture from "../../assets/images/Mohan-muruge.jpg";
import SearchIcon from "../../assets/icons/search.svg";

const Header = () => {
  return (
    <nav className="header">
      <div className="header__logo-container">
        <img
          className="header__logo"
          src={brainflixLogo}
          alt="brainflix logo"
        />
      </div>
      <div className="header__search-pp">
        <div className="header__search-container">
          <span>
            <img className="header__search-icon"
             src={SearchIcon} alt="search icon" />
          </span>
          <input className="header__search-input" placeholder="Search" />
        </div>
        <div className="header__pp-container">
          <img
            className="header__pp"
            src={profilePicture}
            alt="profile picture"
          />
        </div>
      </div>

      <div className="header__upload-container">
        <button className="header__upload-btn">Upload</button>
      </div>
    </nav>
  );
};

export default Header;
