import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyCard({ books }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "150px", }}>
            {books.map((book) => (
                <div>
                    <Card key={book.asin} style={{ width: "18rem", }}>
                        <Card.Img variant="top" src={book.img} alt={book.title} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Button variant="primary">${book.price}</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default MyCard;
