import React from "react";

const Employee = ({firstName, lastName, age}) => {

    return (
        <h1>{firstName} {lastName} {age}</h1>
    )
}

export default Employee;