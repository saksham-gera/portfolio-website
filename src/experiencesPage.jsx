import ExperienceCard from "./experienceCard";
import "./experiencesPage.css"

export default function ExperiencesPage() {
    return (
        <div id="experiences" className="experiences-page">
            <h3>Past Experiences And Projects</h3>
            <div className="experiences-content">
                <ExperienceCard title="SPARSH" description="bye" experienceImageURL='url("https://github.com/saksham-gera/portfolio-website/blob/main/src/assets/trialProject.jpg")' link="sparshsvnit.in"/>
                <ExperienceCard title="SPARSH" description="bye" experienceImageURL='url("https://github.com/saksham-gera/portfolio-website/blob/main/src/assets/trialProject.jpg")' link="sparshsvnit.in"/>
            </div>
            <div className="experiences-content">
                <ExperienceCard title="SPARSH" description="bye" experienceImageURL='url("https://github.com/saksham-gera/portfolio-website/blob/main/src/assets/trialProject.jpg")' link="sparshsvnit.in"/>
                <ExperienceCard title="SPARSH" description="bye" experienceImageURL='url("https://github.com/saksham-gera/portfolio-website/blob/main/src/assets/trialProject.jpg")' link="sparshsvnit.in"/>
            </div>
            <div className="experiences-content">
                <ExperienceCard title="SPARSH" description="bye" experienceImageURL='url("https://github.com/saksham-gera/portfolio-website/blob/main/src/assets/trialProject.jpg")' link="sparshsvnit.in"/>
                <ExperienceCard title="SPARSH" description="bye" experienceImageURL='url("https://github.com/saksham-gera/portfolio-website/blob/main/src/assets/trialProject.jpg")' link="sparshsvnit.in"/>
            </div>
            <div className="experiences-content">
                <ExperienceCard title="SPARSH" description="bye" experienceImageURL='url("https://github.com/saksham-gera/portfolio-website/blob/main/src/assets/trialProject.jpg")' link="sparshsvnit.in"/>
                <ExperienceCard title="SPARSH" description="bye" experienceImageURL='url("https://github.com/saksham-gera/portfolio-website/blob/main/src/assets/trialProject.jpg")' link="sparshsvnit.in"/>
            </div>
        </div>
    );
}