import React from "react";
import "./style.css";
import logo from "../../../assets/images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => (
  <div class="container home">
    <div class="card mb-3 home-card">
      <div class="row no-gutters">
        <div class="col-md-6 img-div">
          <img src={logo} alt="..."/>
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
