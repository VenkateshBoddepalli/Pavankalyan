import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 800,
});

function Manifesto() {
  return (
    <div className='Manifesto_div'>
     <p  className='Manifesto_para'>
     <b>Manifesto :&nbsp;</b>Pawan Kalyan released the party's 2019 election manifesto on 5th formation day of JSP at Rajahmundry.[19] The party declared war on unemployment and corruption, and wished to ensure the safety of women. Other goals included
     </p>
     <div className="Manifesto_div2">
      <ul className="Manifesto_ul" data-aos="fade-in">
        <li>Irrigation support fund of ₹8,000 per acre to every farmer's family[20]</li>
        <li>Dokka Seethamma canteen, which provides free food for students</li>
        <li>5,000 pension for small marginal tenant-farmers above 60 years of age and free solar pump-sets for all farmers</li>
        <li>Arts and science college at every mandal level </li>
        <li>10 lakh (one million rupees) free health insurance, and mobile diagnostic centers in all mandals</li>
        <li>10,000 financial support at 25 paisa interest to small businesses</li>
        <li>Implementation of Sachar Committee recommendations</li>
        <li>Free liquid petroleum gas cylinders for housewives</li>
        <li>Free education from LKG to PG</li>
        <li>33% reservations for women in the state legislature and establishment of Mahila banks in all districts</li>
      </ul>
     </div>
    </div>
  )
}

export default Manifesto;
