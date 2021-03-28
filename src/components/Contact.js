import React from 'react'
import { useState, useEffect } from 'react'

const Contact = () => {

useEffect(()=>{
  fetchUser();
}, []);

const [user, setUser]  = useState([]);



const fetchUser = async () => {
  const data = await fetch('https://randomuser.me/api/');
  const items = await data.json();

  console.log(items.results);
  setUser(items.results);
};

  return (
    <div>
      <h1>Contact</h1>
      {user.map(item => (
        <div>
          <h1 key={item.id}> {item.name.first} {item.name.last}</h1>
          <h2 key={item.login.uuid}> Phone: {item.phone}</h2>
        </div>
      ))}
    </div>
  )
}

export default Contact
