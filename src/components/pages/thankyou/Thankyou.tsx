import React from 'react'
import './Thankyou.css'

function Thankyou() {
    return (
        <div>
            <div className="text-center">
                <p className="thanks-header"> Tack för din bokning!</p>
                <p className="thanks-subtext">
                    Vi har skickat en bokningsbekräftelse till din mejl.
                    Du har nu bokat bord hos oss. <br />
                    Välkomna!
<br />
Avbokning sker via mejl eller telefon...
                </p>
                <i className="fas fa-utensils thank-you-logo"></i>
            </div>
        </div>
    )
}

export default Thankyou
