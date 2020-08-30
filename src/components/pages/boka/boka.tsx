import React from 'react'

function Boka() {
  return (
    <div>
      <img
        className="kontakt-img d-block w-100"
        src="images/booking_pic.jpg" alt=""
      />
      <form>
        <h3>Make reservation</h3>
        <input type="name" placeholder="first name"></input>
        <input type="name" placeholder="last name"></input>
        <input type="email" placeholder="email"></input>
        <button type="submit"> Place reservation </button>
        <br></br>
        <link rel="stylesheet" href="" /> View my reservation
    <br></br>
        <input type="email" placeholder="email"></input>
        <button type="submit"> View </button>

      </form>
    </div>
  )
}

export default Boka
