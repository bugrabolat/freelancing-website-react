import Card from './card';
import card1 from "../picture/card1.png";
import card2 from "../picture/card2.png";
import card3 from "../picture/card3.png";

function Cards(props) {
    return (
        <div className="container cards">
            <Card
                image={card1}
                alt="card 1"
                title="Create Account"
                text="First you to have account here" />
            <Card
                image={card2}
                alt="card 2"
                title="Search work"
                text="Search the best freelance work here" />
            <Card
                image={card3}
                alt="card 3"
                title="Save and apply"
                text="Apply or save and start your work" />
        </div>
    )
}

export default Cards;