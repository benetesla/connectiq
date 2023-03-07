import React from 'react'
import './Register.css'
const Registration = () => {
  return (
    <div className="User_registration">
      <form className="form">
        <div className="card">
          <div className="card-header">
            <h1>
              <i className="fas fa-user-plus" aria-hidden="true"></i>
              Register
            </h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="fas fa-user" aria-hidden="true"></i>Name
                  </label>
                  <input type="text" name="name" id="name" className="form-control" />
                  <label htmlFor="password">
                    <i className="fas fa-lock" aria-hidden="true"></i> Password
                  </label>
                  <input type="password" name="password" id="password" className="form-control" />
                  <label htmlFor="email">
                    <i className="fas fa-envelope" aria-hidden="true"></i> Email
                  </label>
                  <input type="email" name="email" id="email" className="form-control" />
                  <label htmlFor="phone">
                    <i className="fas fa-phone" aria-hidden="true"></i> Phone
                  </label>
                  <input type="text" name="phone" id="phone" className="form-control" />
                  <label htmlFor="country">
                    <i className="fas fa-flag" aria-hidden="true"></i> Country
                  </label>
                  <select name="country" id="country" className="form-control">
                    <option value="Brasil">Brasil</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="New Zealand">New Zealand</option>
                  </select>
                  <label htmlFor="adress">
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i> Adress
                  </label>
                  <input type="text" name="adress" id="adress" className="form-control" />
                  <label htmlFor="role">
                    <i className="fas fa-user" aria-hidden="true"></i>Gender
                  </label>
                  <select name="role" id="role" className="form-control">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary btn-block">
              <i className="fas fa-user-plus" aria-hidden="true"></i> Register
             
            </button>
            <button type="submit" className="btn btn-warning btn-block">
              <a href="/login">
                <i className="fas fa-sign-in-alt" aria-hidden="true"></i> Login
              </a>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Registration