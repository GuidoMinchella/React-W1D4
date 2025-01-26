import React from "react";


const Welcome = function() {
    
    React.useEffect(() => {
        alert("Benvenuto nella Mia ReactApp!");
    },[] );
    

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>La Mia ReactApp</h1>
        </div>
    );
};

export default Welcome;
