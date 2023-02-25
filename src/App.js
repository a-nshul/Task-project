import React, { useState, useEffect } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import axios from "axios";
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((response) => setUsers(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.first.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      
      <Row className = "upperRow">
        <Col md-6 className="companyBar my-auto">
          <ul className="unlist">            
            <li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
              Companies</li>         
            <li> 
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"></path></svg>
              Products
            </li>
            <li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path></svg>Categories</li>
          </ul>
        </Col>
        <Col md={{ span: 6, offset: 3, margin : "100px" ,padding:"10px"}} style = {{marginLeft:"100px", marginTop:"20px", width: "34%"}}>
          <h1>Companies & Brand</h1>
          <span className="parentSpan">
            <h2>Parent Companies ({users.length})</h2>
            <Button type="button" className="btn btn-primary btn-lg btn-block newButton">Add Company +</Button>
          </span>
          <InputGroup className="mb-3" >
            <FormControl
              className="searchBox"
              placeholder="Search Companies"
              aria-label="Search by name"
              aria-describedby="basic-addon2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
          {filteredUsers.map((user) => (
            <div key={user.login.uuid} className="d-flex align-items-center mb-3 outerDiv" style={{margin:"10px"}} >
              
                <img src={user.picture.thumbnail} alt={user.name.first} className="rounded-circle me-3" style = {{borderRadius:"50%"}}/>
                <div className="content">
                  <h5 className="mb-0">{`${user.name.first} ${user.name.last}`}</h5>
                </div>
              
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default App;