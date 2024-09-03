import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#22b8cf",
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#fcc419",
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#f06595",
    },
    {
        skill: "React",
        level: "advanced",
        color: "#ff6b6b",
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#94d82d",
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#cc5de8",
    },
];

function App() {
    return (
        <div className="container">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

function Card() {
    return (
        <div className="card">
            <CardImage />
            <CardBody />
        </div>
    );
}

//create an image component
function CardImage() {
    return (
        <img
            src="images/image.jpg"
            alt="the developer"
            className="card-image"
        />
    );
}

function CardBody() {
    const devSkills = skills;
    return (
        <div className="card-body">
            <h1>Kevin Njogu</h1>
            <p>
                Full stack web developer and banker at XYZ bank. When not coding
                or serving my clients, I like working out and going out to
                experience Nairobi's hidden Gems.
            </p>
            <ul className="card-footer">
                {devSkills.map((skill) => (
                    <CardFooter
                        skill={skill.skill}
                        color={skill.color}
                        level={skill.level}
                    />
                ))}
            </ul>
        </div>
    );
}

function CardFooter({ skill, color, level }) {
    return (
        <li style={{ backgroundColor: color }} className="skill">
            {skill}
            {level === "advanced"
                ? "💪"
                : level === "intermediate"
                ? "👍"
                : "🤦‍♂️"}
        </li>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
