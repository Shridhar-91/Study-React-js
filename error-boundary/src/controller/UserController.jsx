import React from "react";

const UserController = () => {
    // throw new Error("UserController App Crashed Error");    // simple example to test error boundary
    const user = null;
    if(!user) {
        throw new Error("UserController App Crashed Error");
    }

    return <h1>{user.name}</h1>;
}

export default UserController;