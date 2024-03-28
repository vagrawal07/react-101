import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return(
        <div>
            <h1>Food Ordering About Page</h1>
            <User name={"Vaibhav Agrawal (Fn)"}/>
            <UserClass name={"Vaibhav Agrawal (class)"} location={'Toronto'}/>
        </div>
    );
}

export default About;