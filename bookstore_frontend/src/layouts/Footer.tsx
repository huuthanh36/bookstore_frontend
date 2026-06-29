import React from "react";

const Footer: React.FC = () => {
  const menuItems = ["Home", "Features", "Pricing", "FAQs", "About"];

  return (
    <footer className="text-dark  py-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        {/* Top section */}
        <div className="row g-5">
          {/* 3 menu columns */}
          {[1, 2, 3].map((section) => (
            <div key={section} className="col-6 col-md-2">
              <h5 className="fw-bold mb-3">Section</h5>

              <ul className="list-unstyled">
                {menuItems.map((item) => (
                  <li key={item} className="mb-2">
                    <a
                      href="#"
                      className="text-decoration-none text-dark opacity-75"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-md-6">
            <h5 className="fw-bold mb-3">Subscribe to our newsletter</h5>

            <p className="text-dark opacity-75">
              Monthly digest of what's new and exciting from us.
            </p>

            <div className="d-flex gap-2">
              <input
                type="email"
                className="form-control bg-transparent text-dark  border-secondary"
                placeholder="Email address"
              />

              <button className="btn btn-primary px-4">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-secondary my-5" />

        {/* Bottom section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-3 mb-md-0 text-dark opacity-75">
            © 2026 Company, Inc. All rights reserved.
          </p>

          <div className="d-flex gap-4">
            <a href="#" className="text-dark fs-4">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="#" className="text-dark fs-4">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
