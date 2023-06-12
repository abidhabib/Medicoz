import React from 'react';
import './insurance.css';
import insimg from '../img/ins.png';
const Insurance = () => {
  return (
    <>
<div className="ins-heading">
    <h1>
      Insurance
    </h1>
    <img className="ins-h" src={insimg} alt="" />
</div>
      <div className="ins-main">
        <div className="ins-center">
          <div className="ins-img">
            img
          </div>
          <div className="ins-content">
            <h1>Insurance</h1>
            <p>
              Bronx Park Urgent Care accepts most major insurances which are listed below:
            </p>
            <ul>
              <li>1199</li>
              <li>Aetna</li>
              <li>Affinity</li>
              <li>Beech Street</li>
              <li>CIGNA</li>
              <li>Empire Blue Cross/Blue Shield</li>
              <li>Empire Plan</li>
              <li>Emblem Health</li>
              <li>GHI</li>
              <li>Healthfirst</li>
              <li>HIP</li>
              <li>Magnacare</li>
              <li>Medicare</li>
              <li>Metroplus</li>
              <li>Workers Compensation insurances</li>
              <li>Multi Plan</li>
              <li>No Fault</li>
              <li>Oxford</li>
              <li>United Healthcare</li>
            </ul>
          </div>
          <div className="ins-contact"></div>
        </div>
      </div>
    </>
  );
};

export default Insurance;
