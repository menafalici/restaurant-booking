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
        <input type="date" placeholder="full name"></input>
        <input type="email" placeholder="email"></input>
        <button type="submit"> Place reservation </button>
      </form>
    </div>
  )
}

export default Boka
