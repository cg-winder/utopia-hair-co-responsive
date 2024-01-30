import React from 'react'
import utopia from "../imgs/utopiahairco-logo.jpeg"
import elth from "../imgs/elthlogo-removebg-preview.png"

const SalonShop = () => {
  return (
    <div className="salon-shop-wrap">
        <div className="salon-shop-header">Utopia Shop</div>
        <div className="salon-shop-content">In affiliation with Elth, Nicola has curated a list of her most well-loved hair products used in the salon. Please be aware Utopia Hair Co uses an affiliate link which generates a 20% commission from clicks that result in a purchase (at no extra cost to you!) Thank you for your support.</div>
        <button
                className="salon-shop-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://elth.co.uk/collections/utopia-hair-co?sca_ref=5257128.pkDGpvuY0z";
                }}
              >
              <span>shop our favourites</span>
              </button>
        <div className="salon-shop-logos">
            <img id="salon-shop-utopia-logo" src={utopia}/>
            <img id="salon-shop-elth-logo" src={elth}/>
        </div>
    </div>
  )
}

export default SalonShop;