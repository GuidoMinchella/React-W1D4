import Nav from 'react-bootstrap/Nav';

const BasicNav =function() {
  return ( 
    <Nav class = "nav"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item >
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="About">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Browse">Browse</Nav.Link>
      </Nav.Item>
      
    </Nav>
  );
}

export default BasicNav;