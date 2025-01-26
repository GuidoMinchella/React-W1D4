import React from "react";


const MyFooter = function() {
    return (
        <footer style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            backgroundColor: "#333",
            color: "white",
            textAlign: "center",
            padding: "15px",
            fontSize: "14px",
        }}>
            <p>&copy; {new Date().getFullYear()} My Web App. MY FOOTER.</p>
        </footer>
    );
};

export default MyFooter;