import React  from 'react'
import { Consumer } from "../Context";


const Avatar = () => {

  const img = (users,currentUserId) => {
    let image = '';
    users.forEach( item =>{
      if(item.id === currentUserId){
        image = item.img
      }}  
    )
    return image;
  };

  return(
  <Consumer >
    {({users, currentUserId}) =>   
      <img
      width='40'
      height='40'
      className="mr-3"
      src= {img(users,currentUserId)}
      alt="Generic placeholder"
      />
    }
  </Consumer>
)}

export default Avatar;

