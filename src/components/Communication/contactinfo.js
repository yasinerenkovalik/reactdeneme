import React from 'react';


function ContactInfo() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-4 d-flex">
          <div className="card flex-fill bg-light">
            <div className="card-body">
              <h5 className="card-title">Dükkanımız</h5>
              <p className="card-text">
                Emek Mahallesi,
                <br />
                Kocaeli Darıca
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4 d-flex">
          <div className="card flex-fill bg-light">
            <div className="card-body">
              <h5 className="card-title">Telefon Numaramız</h5>
              <p className="card-text">
                Support: 0552 685 8141
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.5043930995116!2d29.36940417599084!3d40.794908632535986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadfb52931a7d5%3A0xfb7f45b278069db1!2zS3VhZsO2ciBLw7xyxZ9hdA!5e0!3m2!1str!2str!4v1707847711051!5m2!1str!2str"  height="450" className='w-100' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

 
    </div>
    
  );
}

export default ContactInfo;