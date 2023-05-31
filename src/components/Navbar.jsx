import React from 'react';
import './navbar.css';
import { Button } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/b2/67/52/b2675210-233a-d2a2-1ef2-d224d151ba3f/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg"
          alt="Logo"
          className="logo"
        />
      </div>
      <nav className="navigation">
        <ul className="nav-links">
          <li>
            <a href="/about">About Us</a>
          </li>
         
          <li>
            <a href="/self-awareness">Self-Awareness Test</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
            
          </li>
          <li>
            <a href="/work">Contact Us</a>
          </li>
          <li>
        <button className='btn'>Download App</button>
            
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// import React, { useRef } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import './navbar.css'
// const Header = () => {
//   return (
//     <Navbar bg="light" expand="lg" className="mb-4">
//       <Container>
//         <Navbar.Brand href="/">
//           <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/b2/67/52/b2675210-233a-d2a2-1ef2-d224d151ba3f/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" alt="Logo" className="logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar" />
//         <Navbar.Collapse id="navbar">
//           <Nav className="ml-auto">
//             <Nav.Link href="/about">About Us</Nav.Link>
//             <Nav.Link href="/self-awareness">Self-Awareness Test</Nav.Link>
//             <Nav.Link href="/blog">Blog</Nav.Link>
//             <Nav.Link href="/work">Work with Us</Nav.Link>
//             <Nav.Link href="/download">Download App</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;
