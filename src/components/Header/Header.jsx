import "./Header.scss";
import brainflixLogo from "../../assets/icons/Logo/BrainFlix-logo.svg";
import profilePicture from "../../assets/images/Mohan-muruge.jpg";
import SearchIcon from "../../assets/icons/search.svg";
import UploadIcon from "../../assets/icons/upload.svg";

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
            <img
              className="header__search-icon"
              src={SearchIcon}
              alt="search icon"
            />
          </span>
          <input
            type="text"
            className="header__search-input"
            placeholder="Search"
          />
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
        <img
          className="header__upload-icon"
          src={UploadIcon}
          alt="upload icon"
        />
        <button className="header__upload-btn">UPLOAD</button>
      </div>
    </nav>
  );
};

export default Header;
