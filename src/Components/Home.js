import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./mystyle.module.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    id: "1",
    url: "https://scontent.fhyd2-2.fna.fbcdn.net/v/t39.30808-6/278978058_535374167944029_6202116266511694709_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=nZyWVmU9d6IAX9H8m4g&_nc_ht=scontent.fhyd2-2.fna&oh=00_AfCRGfIwjRYckW_tDDbfn5t7-W-2TIafVNXxu69QCpX7bg&oe=64AD56BB",
  },
  {
    id: "2",
    url: "https://www.hindiprocess.com/wp-content/uploads/2023/03/15.jpg",
  },
  {
    id: "3",
    url: "https://scontent.fhyd2-1.fna.fbcdn.net/v/t39.30808-6/309301905_421541510064356_427481150263926250_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=s7EBVFua6ukAX9U5F0t&_nc_ht=scontent.fhyd2-1.fna&oh=00_AfD25VWzbnul57G7YtET8sSrTgEEfQkrNpVUsWuYJkbjJQ&oe=64AC526F",
  },
];

function Home() {
  const navigate = useNavigate();

  const navigateToSuccessPage = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="slide-container">
        <Fade>
          {slideImages.map((slideImage, id) => (
            <div key={id}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Fade>
      </div><br/>
      
      <h2 className="Home_mission"><span style={{color:"red", fontWeight:"bold" , fontSize:"25px"}}>Janasena</span> Mission</h2> 
      <p className="sentaince"><i className="fa-solid fa-quote-left"></i>    In Democracy for people to live happily, Political accountability should be mandated.     <i className="fa-solid fa-quote-left"></i></p>
     
     <div className="video-content">

     <div className="video1">
       <container>
        <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/UyfwGsWDJsk" title="YouTube video" allowFullScreen></iframe>
        </div>
       </container>
     </div>

     <div className="video2">
       <container>
        <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/XGrSt192Hxw" title="YouTube video" allowFullScreen></iframe>
        </div>
       </container>
     </div>

     <div className="video3">
       <container>
        <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/OXEX9JZ2wNk" title="YouTube video" allowFullScreen></iframe>
        </div>
       </container>
     </div>
     </div><br/><br/><br/>

     <div className="div-content">
      <div className="get_Membership" onClick={navigateToSuccessPage}><i className="fa-solid fa-address-card"></i> Get <br/><b style={{color:"red"}}>MEMBERSHIP</b></div>
      <div className="become_Volunteer" onClick={navigateToSuccessPage}><i className="fa-solid fa-person"></i> Become a<br/><b style={{color:"red"}}>VOLUNTEER</b></div>
      <div className="get_Email" onClick={navigateToSuccessPage}><i className="fa-solid fa-envelope"></i> Get <br/><b style={{color:"red"}}>EMAIL UPDATES</b></div>
      <div className="make_Donation" onClick={navigateToSuccessPage}><i className="fa-solid fa-person-circle-question"></i> Make a <br/><b style={{color:"red"}}>DONATION</b></div>
     </div>

      {/* <h1>Home</h1>
      <button onClick={navigateToSuccessPage}>submit form</button> */}
    </div>

  );
}

export default Home;
