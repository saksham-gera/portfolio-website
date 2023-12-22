import Arrowbutton from "./arrowButton.jsx";
import IconBar from "./iconBar"
import ProfileImage from "./profileImage.jsx"
import "./sideNav.css"

export default function SideNav() {
    return (
        <div className="side-nav">
            <ProfileImage />
            <IconBar />
            <Arrowbutton />
        </div>
    );
}