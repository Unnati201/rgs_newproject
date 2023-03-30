import React from 'react';
import "./Financedetail.scss";
import { useState } from "react";

const FinanaceDetail = () => {


  
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };


  return (
    <div className='finance_details'>
      {/* <h2>FinanaceDetail</h2> */}



      <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         Retail Banking
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
        Corporate Banking
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
         Payments
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >

<div className='retail-finance-img'>
        <img  src="rgs-img/Retails_bank.jpg" alt=""></img>
        </div>
          <h2>Retail Banking</h2>
          <hr />
          <p>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto tempore voluptatibus pariatur, amet vero consequatur totam alias modi aspernatur! Animi id voluptatibus ratione esse. Voluptatibus soluta voluptate iste dolor harum delectus !
          </p>
          <button className='finance_talk_btn'>Learn more about our industry experts</button>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className='retals_trans_img'>
        <img  src="rgs-img/onfocus_bank4.jpg" alt=""></img>
        </div>
          <h2>Corporate Banking</h2>
          <hr />
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio oluta voluptate iste dolor harum delectus.</p>


          <button className='finance_talk_btn'>Learn more about our industry experts</button>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >

<div className='retail-finance-img'>
        <img  src="rgs-img/payment.jpg" alt=""></img>
        </div>
          <h2>Payments</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            
          </p>
        </div>
      </div>
    </div>

     

      </div>
  )
}

export default FinanaceDetail