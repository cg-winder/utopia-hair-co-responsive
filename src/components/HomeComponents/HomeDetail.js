import React from "react";

const HomeDetail = () => {
  return (
    <div className="homedetail-wrap">
      {/* <div className="homedetail-text">Your Hair Home </div>
      <div className="homedetail-welcome">Welcome to Utopia Hair Co.</div> */}
      <div className="homedetail-subtext">
        <p>
          Utopia Hair Co is a unique salon based in a beautiful barn conversion
          on Clifton Fields. Designed with you in mind, our salon really is a
          Utopia: a place to escape every day craziness and focus on what really
          matters... You.
        </p>
        <p className="homedetail-subtext-2">
          We are a hardworking, passion-driven salon who take pride in our work.
          We strive to create a warm and welcoming environment that you will be
          proud to call your hair home.
        </p>
      </div>
      <button
        className="homedetail-book-button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://linktr.ee/utopiahairco";
        }}
      >
        <span className="homedetail-book-now">BOOK NOW</span>
      </button>
    </div>
  );
};

export default HomeDetail;
