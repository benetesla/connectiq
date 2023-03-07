import React, { useState } from 'react'
import './Register.css'
const Registration = () => {
  const [id, idChange] = useState(0)
  const [name, nameChange] = useState('')
  const [password, passwordChange] = useState('')
  const [email, emailChange] = useState('')
  const [phone, phoneChange] = useState('')
  const [country, countryChange] = useState('')
  const [adress, adressChange] = useState('')
  const [role, roleChange] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      id: id,
      name: name,
      password: password,
      email: email,
      phone: phone,
      country: country,
      adress: adress,
      role: role
    }
    idChange(id + 1)
    console.log(data)

  }
  return (
    <div className="User_registration">
      <form className="form" onSubmit={handleSubmit}>
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
                  <input type="text" name="name" id="name" className="form-control" value={name} onChange={e => nameChange(e.target.value)} />
                  <label htmlFor="password">
                    <i className="fas fa-lock" aria-hidden="true"></i> Password
                  </label>
                  <input type="password" name="password" id="password" className="form-control" value={password} onChange={e => passwordChange(e.target.value)} />
                  <label htmlFor="email">
                    <i className="fas fa-envelope" aria-hidden="true"></i> Email
                  </label>
                  <input type="email" name="email" id="email" className="form-control" value={email} onChange={e => emailChange(e.target.value)} />
                  <label htmlFor="phone">
                    <i className="fas fa-phone" aria-hidden="true"></i> Phone
                  </label>
                  <input type="text" name="phone" id="phone" className="form-control" value={phone} onChange={e => phoneChange(e.target.value)} />
                  <label htmlFor="country">
                    <i className="fas fa-flag" aria-hidden="true"></i> Country
                  </label>
                  <select name="country" id="country" className="form-control" value={country} onChange={e => countryChange(e.target.value)}>
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
                  <input type="text" name="adress" id="adress" className="form-control" value={adress} onChange={e => adressChange(e.target.value)} />
                  <label htmlFor="role">
                    <i className="fas fa-user" aria-hidden="true"></i> Role
                  </label>
                  <select name="role" id="role" className="form-control" value={role} onChange={e => roleChange(e.target.value)}>
                    <option value="0">Select</option>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
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