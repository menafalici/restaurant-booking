import React from "react";
import "./Kontakt.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Kontakt() {

    return (
        <div>
            <div>
                <img className="kontakt-img d-block w-100" src="images/flame.jpg" alt="" />
            </div>

            <div className='kontakt-oppettider m-5'>
             
                <div className="row">
             
                    <div className="col-sm-12 col-md-6">
             
                        <div className="card  mb-3;">
             
                            <div className="card-header text-white bg-dark"> <h5><b>ÖPPETTIDER</b></h5></div>
             
                            <div className="card-body">
                                <p className="card-text">
                                    Mon-Thu: 11:00 - 23:00
                                </p>
                                <p>
                                    Fredag: 11:00 - 00:00
                                </p>
                                <p>
                                    Lördag: 11:00 - 02:00
                                </p>
                                <p>
                                    Söndag: 11:00 - 01:00
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        
                        <div className="card  mb-3;">
                        
                            <div className="card-header text-white bg-dark"> <h5><b>KONTAKTUPPGIFTER</b></h5></div>
                        
                            <div className="card-body">
                                <div className="card-text">
                                    <b> Golden Fork</b>
                                    <p>
                                        Kajplats 18, Strandvägen
                                        114 56 Stockholm
                                    </p>
                                    <p>
                                    Tel: 08-6660202
                                    </p>
                                    <p>
                                        Mail:boka@goldenfork.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* google map */}
            <div className="kontakt-map m-4">

                <div className="col-sm-12 col-md-12">
                
                    <div className="card  mb-3">
                
                        <div className="card-header"> 
                            <h5><b>HITTA TILL OSS</b></h5>
                        </div>
                        
                        <div className="card-body">
                            <a className="linkedin" href="https://www.google.com/maps/place/Medieinstitutet/@59.330672,17.984364,12z/data=!4m5!3m4!1s0x0:0xdea95a59cde9090d!8m2!3d59.3306719!4d17.9843643?hl=en/" target="_blank">
                                <img className="kontakt-img d-block w-100" src="images/map.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}