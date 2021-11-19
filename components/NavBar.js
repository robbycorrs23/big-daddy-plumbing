import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <>
      <Nav className="flex-1 justify-content-center" activeKey="/home">
        <div className="flex-row">
          <Nav.Item>
            <Nav.Link href="/" className="">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/about-us">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/services">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/contact">Contact</Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
}
