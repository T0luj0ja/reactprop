import React from 'react';
// import PropTypes from 'prop-types';


const Profile = ({fullName, bio,profession, children,handleName}) => {
    
    handleName  =   alert(`my name is ${fullName}`)
    return (
    <>
        <h2 style={{backgroundColor:"yellow", borderTop: 25} }>My name is {fullName} ,<br /> learn about me in my {bio} 
       <br /> I am an {profession}</h2>
       <br />
       <br />
       {children}
    </>
)
}

Profile.defaultProps = {fullName: "susan joja"}

// Profile.PropTypes = {
//     name : PropTypes.string.isRequired}
export default Profile