import React from 'react';
import Footer from '../../Pages/NewFooter/Footer';
import './Banking.scss';
import FinanceDetail from './FinanaceDetail';

const Banking = () => {
  return (
    <div>
      <div className='banking_fiananc'>
        <img
          className='banking_img_data'
          src='rgs-img/Banking.png'
          alt=''
        ></img>
      </div>
      <div className='bank_finan_div'>
        <h2 className='banks_h2_ds'>Banking & Financial Services</h2>
        <p className='finan_p_sty'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque atque
          natus suscipit mollitia? Error, quam.
        </p>
      </div>

      <p className='finance_bank_p'>
        As traditional institutions and fintechs alike strive for growth and to
        improve margins, reducing complexity and optimizing operations is
        imperative to deliver differentiated experiences. We help our clients to
        achieve this through the implementation of a digital mosaic of
        disruptive technologies – empowering them to deliver hyper-personalized
        financial services that are valued by their customers.
      </p>

      <FinanceDetail />

      <div className='banks-info'>
        <h3 className='bnks-h3-des'>
          We selected RGS to help us build our platform for a number of reasons,
          including their deep experience and expertise in the digital banking
          space and with the core component technologies we have chosen, and
          also because our strategy aligns closely with Rhombus Global Serivce
          own thinking on Digital Mosaic. We took great comfort in finding that
          alignment, and as a result, our relationship is proving to be a great
          fit
        </h3>
        <p className='bank-fs-p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          eligendi.
        </p>
      </div>

      {/* why choose rgs */}

      <div className='banking_div_ds'>
    <p className='bank_p_fs'>Why Choose RGS ?</p> 


    <section className='bankings_sec_grid'>
    <div className='banks_grid'>
      <h2 className='bnking_h2_dsg'>Deep Industry Expertise</h2>
     <p className='bnks_p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique accusamus dolores esse cum perferendis eius id quaerat, libero nesciunt reiciendis sapiente quam soluta facilis nam harum cumque voluptatibus!</p>

      </div> 


      <div className='banks_grid'>
        <h2 className='bnking_h2_dsg'>Robust Partner Ecosystem</h2>
     <p className='bnks_p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique accusamus dolores esse cum perferendis eius id quaerat, libero nesciunt reiciendis sapiente quam soluta facilis nam harum cumque voluptatibus!</p>

      </div> 


      <div className='banks_grid'>
      <h2 className='bnking_h2_dsg'>Technology Insight</h2>

     <p className='bnks_p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique accusamus dolores esse cum perferendis eius id quaerat, libero nesciunt reiciendis sapiente quam soluta facilis nam harum cumque voluptatibus!</p>

      </div> 


      </section>



    </div>



    {/* On Focus Banking  */}
    <div className='infocus_bnking_divs'>
    <h2 className='in-focus_h2'>In Focus</h2>
    <div className='onfocus_bank'>
   
  
      <div className='onfcus_card'>
        <div className='onfocuses_cardimg'>
          <img src='rgs-img/bank3.png' alt=''></img>

        </div>
        
        <div className='onfoucs_content'>
          <h2>the Open Banking Solution Work</h2>
        </div>

      </div>



      <div className='onfcus_card'>
        <div className='onfocuses_cardimg'>
          <img src='rgs-img/onfocus_bank2.png' alt=''></img>

        </div>
        
        <div className='onfoucs_content'>
          <h2>Cloud Adoption in financial Services</h2>
        </div>

      </div>



      <div className='onfcus_card'>
        <div className='onfocuses_cardimg'>
          <img src='rgs-img/onfocus_bank3.png' alt=''></img>

        </div>
        
        <div className='onfoucs_content'>
          <h2>The new holesales payment paradigm</h2>
        </div>

      </div>

    
      <div className='onfcus_card'>
        <div className='onfocuses_cardimg'>
          <img src='rgs-img/bank4.png' alt=''></img>

        </div>
        
        <div className='onfoucs_content'>
          <h2>Legacy Modernization in world</h2>
        </div>

      </div>


      </div>

    </div>



{/* banking talk to experts */}

<div className="bank_talk_exp">

<div className='banks_learn_imgs'>
<img  src="rgs-img/bank_talk.jpg" alt=""></img>
</div>

<div className="bank_talk-learn_wrap">
<h3  className='bnk_talk-h3-style'> Transformation starts here</h3>

<p className='bnkstalk_to-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod . </p>

<button className='bnk_talk_btn'>Talk to our experts</button>
</div>
</div>
  
<div className="bank_foot_desgn">
  <Footer/>
  </div>

    </div>
   



   
  );
};

export default Banking;
