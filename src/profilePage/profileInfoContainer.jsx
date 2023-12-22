import ProfilePageImage from "./profilePageImage";
import "./profileInfoContainer.css"
import ProfilePageContent from "./profilePageContent";
import Icon from '../icon.jsx';


export default function ProfileInfoContainer() {
    return (
        <div className="profile-info-container">
            <div className="profile-info-identity">
                <div className="profile-page-image">
                    <ProfilePageImage />
                </div>
                <div className="profile-page-content">
                    <ProfilePageContent />
                </div>
            </div>
            <div className="documents-links">
                <a href="https://drive.google.com/file/d/1G2j13jNLRxZ8ABLsN-PoyQ1MEchFQg8q/view?usp=drive_link">
                    <div className="resume ripple">Resume</div>
                </a>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/saksham-gera">
                        <div className="brand-logo ripple">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </a>
                    <a href="https://www.github.com/saksham-gera">
                        <div className="brand-logo ripple">
                            <i className="fa-brands fa-github"></i>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/urskshm"> 
                        <div className="brand-logo ripple">
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
}