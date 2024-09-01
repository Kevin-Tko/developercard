import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    return (
        <div className="card-body">
            <h1>Kevin Njogu</h1>
            <p>
                Full stack wed developer and banker at XYZ bank. When not coding
                or serving my clients, I like working out and going out to
                experience Nairobi's hidden Gems.
            </p>
            <div className="card-footer">
                <CardFooter skill="HTML+CSS" emoji="💪" color="#22b8cf" />
                <CardFooter skill="Web Design" emoji="💪" color="#fcc419" />
                <CardFooter skill="Git/Github" emoji="👍" color="#94d82d" />
                <CardFooter skill="React" emoji="💪" color="#f06595" />
                <CardFooter skill="Javascript" emoji="💪" color="#ff6b6b" />
                <CardFooter skill="Svelte" emoji="🤦‍♂️" color="#cc5de8" />
            </div>
        </div>
    );
}

function CardFooter(props) {
    return (
        <div className="skills">
            <p style={{ backgroundColor: props.color }}>
                {props.skill} {props.emoji}
            </p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
