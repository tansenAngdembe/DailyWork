import React from "react";
import facebook from "../image/facebook.png"
import twitter from "../image/twitter.png"


export const Footer = () => {
    const styling = {
        height: "33px",
        borderRadius: "23px",
        margin: "-4px"
    }
    const colorFooter = {
        backgroundColor: "#786c6c",
        color: "white",
        // margin:"23px",
        padding: "4px"
    }
    {/* <a className="nav-link" href="https://www.facebook.com/profile.php?id=100084134687365&mibextid=ZbWKwL" rel="noopener" target="_blank" style={{margin:"20px"}}><img src={facebook} style={styling} alt="Facebook" /></a>                                   
                                        <a className="nav-link" href="www.twitter.com" target="_blank" style={{margin:"20px"}}><img src={twitter} style={styling} alt="Twitter" /></a>        */}

    return (
        <>
            <div className="card text-left mt-5" style={colorFooter}>
                <div className="card-header text-center">
                    Join Us
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="card cardColoring">
                            <div className="card-body"  >
                                <h5 className="card-title">About Me</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Learning Web Development</h6>
                                <p className="card-text">Join with me in <strong>Facebook</strong>,           <strong>Twitter</strong>. Name Tansen Angdembe studying <strong><abbr title="Bachelor of Computer Application">BCA</abbr></strong> in <a target="_blank" href="https://www.kcmit.edu.np/" ><strong className="btn btn-primary" style={{color:"white"}}>kcMIT</strong>  </a> Collage <b>Kathmandu</b>
                                </p>
                                <a  className="card-link" href="https://www.facebook.com/profile.php?id=100084134687365&mibextid=ZbWKwL" rel="noopener" target="_blank" style={{margin:"20px"}}><img src={facebook} style={styling} alt="Facebook" /></a>                           
                                <a className="card-link"  target="_blank" style={{margin:"20px"}}><img src={twitter} style={styling} alt="Twitter" /></a> 
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card cardColoring" >
                            <div className="card-body">
                                <h5 className="card-title">Learn Web Development,AI,ML,Ethical Hacking</h5>
                                <p className="card-text">"<strong>Do not waste time</strong>" is a phrase that means to not spend time on activities or tasks that are not productive or efficient. It emphasizes the importance of using one's time wisely and avoiding distractions or unnecessary actions. The message is to be mindful of how time is spent and to prioritize activities that are important and have a purpose.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    copyright &copy;:2023-All right reserved
                </div>
            </div>
        </>
    )
}