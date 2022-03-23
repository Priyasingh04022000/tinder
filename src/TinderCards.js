import React,{useState} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const[people,setPeople] = useState([
        {
            name:"AK",
            url:"https://a1png.com/wp-content/uploads/2020/08/shahrukh-khan-10.png",
        },
        {
            name:"Ps",
            url:"https://i.pinimg.com/originals/64/aa/17/64aa17d64b3784e5317f040b673220c0.png"
        },
        {
            name:"MM",
            url:"https://a1png.com/wp-content/uploads/2020/08/shahrukh-khan-10.png",
        },
    ]);
    const swiped=(direction,nameToDelete)=>{
        console.log("removing" + nameToDelete);
    };
    const outOfFrame=(name)=>{
        console.log(name+"Left the Screen!");
    };
    return (
        <div className="tinderCards">
            <div className="tindercards__CardContainer">
                 {
                people.map((person)=>(
                   <TinderCard
                   className ="swipe"
                   key={person.name}
                   preventSwipe={["up","down"]}
                   onSwipe={(dir)=>swiped(dir,person.name)}
                   onCardLeftScreen={()=>outOfFrame(person.name)}>
                       <div 
                       style={{backgroundImage:"url("+person.url +")"}}
                       className="card">
                           <h3>{person.name}</h3>
                       </div>

                   </TinderCard>
                ))
            }

            </div>
            
            
        </div>
    )
}

export default TinderCards
