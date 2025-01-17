import React from 'react'
import PropTypes from 'prop-types'

const CompanyProfileTop = ({
  profile:{
    company:{name},
    location,
    industry,
    website,
    social
  }
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      {/* <img
            className="round-img my-1"
            src={avatar}
            alt="profile pic"
      /> */}
      <h1 className="large">{ name && name.charAt(0).toUpperCase() + name.slice(1)}</h1>
      <p className="lead">{ industry &&   industry+' '} Industry </p>
      <p className='lead'>{location && <span> {location.charAt(0).toUpperCase() + location.slice(1)}</span>}</p>
      <div className="icons my-1">
            {website && (
                <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe fa-2x"></i>
              </a>
            )}
            {social && social.twitter && (
                <a href={`https://${social.twitter}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
            )}
            {social && social.facebook && (
                <a href={`https://${social.facebook}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook fa-2x"></i>
                </a>
            )}
            {social && social.linkedin && (
                <a href={`https://${social.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
            )}
            {social && social.youtube && (
                <a href={`https://${social.youtube}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube fa-2x"></i>
                </a>
            )}
            {social && social.instagram && (
                <a href={`https://${social.instagram}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
            )}
          </div>
    </div>
  )
}

CompanyProfileTop.propTypes = {}

export default CompanyProfileTop