import "./experienceCard.css"
import React from "react";

export default function ExperienceCard({ experienceImageURL, title, description, link, technologies }) {
    return (
            <div className="experience-card">
                <a href={"https://www." + link}>
                <div className="experience-image" style={{
                    backgroundImage: experienceImageURL,
                    backgroundRepeat: "no-repeat", backgroundSize: "contain"
                }}>
                    <div className="experience-image-clickToVisit">
                        Click To Visit
                    </div>
                </div></a>
                <div className="experience-content">
                    <h4>Project Name: {title}</h4>
                    <p>Description: <br /> {description}</p>
                    <p>Technologies Used: <br /> {technologies}</p>
                </div>
            </div>
    );
}