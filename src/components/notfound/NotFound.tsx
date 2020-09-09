import React from 'react';
import './NotFound.css'

function NotFound() {
    return (
        <div className="row">
            <div className="error col-xs-12">
                <h1>
                    Hoppsan… <br /> 404 <br /> Sidan hittades inte!
            </h1>
                <p>
                    <h4>
                        Sidan du begärde kunde inte hittas. <br /> Finns det någon chans att <br /> du letade efter någon av dessa kategorier ovan?
            </h4>
                </p>
            </div>
        </div>
    )
}

export default NotFound
