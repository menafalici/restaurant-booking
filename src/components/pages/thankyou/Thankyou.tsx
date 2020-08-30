import React from 'react'
import './Thankyou.css'

function Thankyou() {
    return (
        <div>
            <div className="text-center">
                <p className="thanks-header">Thank You!</p>
                <p className="thanks-subtext">
                    You should receive an email with the details of your reservation.
                </p>
                <i className="fas fa-utensils thank-you-logo"></i>
            </div>
        </div>
    )
}

export default Thankyou
