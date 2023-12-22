import AboutPage from "./aboutPage.jsx";
import ProfilePage from "./profilePage/profilePage.jsx";
import "./content.css";
import TechnologiesPage from "./technologiesPage.jsx";
import ExperiencesPage from "./experiencesPage.jsx";
import ContactPage from "./contactPage.jsx";

export default function Content() {
    return (
        <div className="content">
            <div className="profile"><ProfilePage /></div>
            <div className="about"><AboutPage /></div>
            <div className="technologies"><TechnologiesPage /></div>
            <div className="experiences"><ExperiencesPage /></div>
            <div className="contact"><ContactPage /></div>    
        </div>
    );
}


