import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                name: "Dummy Name",
                location: "Dummy Location"
            }
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log("I am in componentDidMount");
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("componet UnMounted")
}
    render() {
        const { name, location } = this.state.info;

        return (
            <div className="UserCard">
            
                <h2>{name}</h2>

                <h3>Location: {location}</h3>

                <h4>Contact: naresh@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;