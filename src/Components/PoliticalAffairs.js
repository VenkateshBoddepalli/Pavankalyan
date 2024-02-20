import React from 'react';
import Table from 'react-bootstrap/Table';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1200,
});

function PoliticalAffairs() {
  return (
    <div className='Political_table'>
    <div className='Political_table1'>
    <Table  hover="dark"  data-aos="fade-in">
    <thead style={{border:"2px solid black"}}>
      <tr>
        <th rowSpan={2}>Portrait</th>
        <th rowSpan={2}>Name(Year of Birth)</th>
        <th colSpan={3} style={{textAlign:"center"}}>Tenure</th>
        <th rowSpan={2}>Designation</th>
        <th rowSpan={2}>Ref</th>
      </tr>
      <tr>
        <th>Assumed Office</th> 
        <th>Left Office</th> 
        <th>Time In Office</th> 
      </tr>
    </thead>
    <tbody>
      <tr style={{verticalAlign:"middle"}}>
        <td><img src='https://w0.peakpx.com/wallpaper/686/100/HD-wallpaper-pawan-kalyan-jsp-1-janasena-pavan-pavan-kalyan-pawan-kalyan-pspk.jpg' alt='pawan'width={"130px"} height={"130px"} /> </td>
        <td style={{verticalAlign:"middle"}}>Pawan Kalayan(1969)</td>
        <td style={{verticalAlign:"middle"}}>14 September 2014</td>
        <td style={{verticalAlign:"middle"}}>Incumbent</td>
        <td style={{verticalAlign:"middle"}}>8 years, 300 day</td>
        <td style={{verticalAlign:"middle"}}>President	</td>
        <td></td>
      </tr>
      <tr>
      <td><img src='https://telugu.samayam.com/photo/msid-96773580,imgsize-23532/pic.jpg' alt='Manodhar' width={"130px"} height={"130px"}/> </td>
        <td style={{verticalAlign:"middle"}}>Nadendla Manohar(1964)</td>
        <td style={{verticalAlign:"middle"}}>12 October 2018</td>
        <td style={{verticalAlign:"middle"}}>Incumbent</td>
        <td style={{verticalAlign:"middle"}}>4 years, 272 days</td>
        <td style={{verticalAlign:"middle"}}>Chairman</td>
        <td style={{verticalAlign:"middle"}}>[40]</td>
      </tr>
    </tbody>
  </Table>
  </div>
  </div>
);
}

export default PoliticalAffairs;
