import React from "react";
import Button from "../elements/Button";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <p className="brand-tagline">
              We Kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-6">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button>New Account</Button>
              </li>
              <li className="list-group-item">
                <Button>Star Booking a Room</Button>
              </li>
              <li className="list-group-item">
                <Button>Use Payments</Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-6">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button>Our Careers</Button>
              </li>
              <li className="list-group-item">
                <Button>Privacy</Button>
              </li>
              <li className="list-group-item">
                <Button>Terms & Conditions</Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-6">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal>Support@staycation.id</Button>
              </li>
              <li className="list-group-item">
                <Button isExternal>021-790-2131</Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Sudirman, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center copyrights">
          Copyright 2019 • All rights reserved • Staycation
        </div>
      </div>
    </footer>
  );
}
