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
          <div class="card-body home-text">
            <h3 class="card-title">Joshua Alexander</h3>
            <h5 class="card-title"> Portfolio Site</h5>
            <br></br>
            <p class="card-text">With over half a decades experince in the finanaical industry working with family offices i understand the benefit a well-designed site brings to a fund</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
