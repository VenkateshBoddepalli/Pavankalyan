import React from 'react'
import { Link } from "react-router-dom";
import usersData from  "./usersData";
import "./mystyle.module.css";
 
function Users() {
  return (
    <div>
      <div className='card-container'>
      {usersData.map((eachUser) => {
        const {id, name, email} = eachUser;
        return (
            <Link to={`/users/${id}`} key={id}>
            <article className="card">
                <h3 className='names'>{name}</h3>
                <h5 className='emails'>{email}</h5> 
            </article>
            </Link>
        )
      })}
    </div>
    </div>
  )
}

export default Users
