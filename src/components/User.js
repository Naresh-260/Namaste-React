import { useEffect, useState } from "react";

const User = (props) => {
    const {name} = props;
    const [count] = useState(0);
    const[count1] = useState(1);


  useEffect(() => {
  const timer = setInterval(() => {
    console.log("Namaste React");
  }, 1000);

  return () => {
    console.log("Cleanup called");
    clearInterval(timer);
  };
}, []);
  return (
    <div className='UserCard'>
        <h1>Count:{count}</h1>
        <h1>Count1:{count1}</h1>
        <h2>{name}</h2>
        <h3>Jogulamba Gadwal</h3>
        <h4>lnareshnaru@gmail.com</h4>
    </div>
  )
}

export default User;
