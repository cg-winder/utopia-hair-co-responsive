import React from 'react'

const ServicesPolicies = () => {
  return (
    <div className="services-policies">
        <div className="services-policies-header">Policies & FAQ's</div>
        <div className="cancellation-policy">
            <div className='policy-header'>Cancellation Policy</div>
            <p className="policy-p">We kindly ask that all cancellations are made at least 48 hours prior to appointment time. If you cancel or modify your appointment within 48 hours of your scheduled appointment time, it is classed as a late cancellation and there is a non-refundable 30% fee. There is also a non-refundable 50% fee for no shows. To cancel, you can choose to message your artist on their Instagram or cancel directly on their<a href="https://linktr.ee/utopiahairco"> booking system</a>. Appointments are held for up to 15 minutes. Please let us know if you are running late and we will try accommodate you as best we can.</p>
        </div>
        <div className="confirmation-policy">
            <div className="policy-header">Do I need to confirm my booking?</div>
            <p className="policy-p">You will automatically receive a confirmation email for your appointment, that requires confirmation of your booking. Not confirming your booking does not count as cancelling your appointment. To avoid a cancellation fee, you must cancel your appointment at least 48 hours before you alloted appointment time. As a courtesy, you will receive a confirmation SMS and email the day before your appointment.</p>
        </div>
        <div className="patchtest-policy">
            <div className="policy-header">Do I need a patch test or consultation?</div>
            <p className="policy-p">For all new hair clients, a consultation and skin test is required before any appointment. All extension services require a complimentary consultation with Nicola prior to booking of appointment. For brows and lashes, a skin test is required 48 hours before appointments.</p>
        </div>
      <div className="gift-card">
        <div className="policy-header">Do you offer gift cards?</div>
        <p className="policy-p">Want to treat someone? Gift cards of various values can be purchased from your stylist through their individual booking system found <a href="https://linktr.ee/utopiahairco">here.</a></p>
      </div>
    </div>
  )
}

export default ServicesPolicies;
