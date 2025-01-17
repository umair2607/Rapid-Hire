import React,{ Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Spinner } from '../layout/Spinner'
import { getCurrentCompanyProfile, deleteCompanyAccount } from '../../actions/profile'
import { getPostedJobs } from '../../actions/job'
import PostedJobs from './PostedJobs'

const CompanyDashboard = ({getCurrentCompanyProfile, getPostedJobs, job, deleteCompanyAccount, auth:{ company }, profile:{profile, loading}}) => {

  useEffect(() => {
     async function fetchData() {
      await getCurrentCompanyProfile()
      await getPostedJobs()
    }
    fetchData();
  }, [loading]);

  return (
    loading && job.loading && profile === null ? <Spinner /> : <div className='container'>
      <div className='ml-10 mb-8'>
        <h1 className="text-6xl font-semibold  text-primary">Company Dashboard</h1>
        <div className="my-5 shadow-md py-6 px-8  rounded-md border-2 border-gray-300 text-3xl">
          <i className="fas fa-user "></i>
          <p className='inline-block ml-2 '>
            Welcome {company && company.name.charAt(0).toUpperCase() + company.name.slice(1)}
          </p>
          {profile !== null ? (
            // Dashboard Actions
            <div className="dash-buttons mt-5">
              <Link to='/edit-company-profile' className="btn btn-light">
                <i className="fas fa-user-circle text-primary"></i>
                <p className='inline-block ml-4'>Edit Profile</p>
              </Link>
              <Link to={'/post-job'} className="btn btn-light">
                <i className="fa fa-briefcase text-primary"></i>
                <p className='inline-block ml-4'>Post Job</p>
              </Link>
              {company && <Link to={`/company-profile/${company._id}`}  className="btn btn-primary">
                <p className='inline-block ml-4'>View Company Profile</p>
              </Link>}
            </div>
          ) : (
            // Company does not have Profile
            <div className='text-xl'>
            <p className='mt-3'>You have not created profile.</p>
            <p className='mt-1'>To post a job You must create Profile</p>
            <Link to='/create-company-profile' className='btn btn-primary mt-3' >Create Profile</Link> 
          </div>
          )}
        </div>
        {profile !== null ? (
          // Company has profile
        <Fragment>
          <PostedJobs jobs={job.jobs} />
          <div className='my-2'>
            <button onClick={() => deleteCompanyAccount()} className="btn btn-danger">
              <i className="fas fa-user-minus"></i>
              Delete Account
            </button>
          </div>
        </Fragment>) : (
          null
        )}
      </div>
    </div>
  )
}

CompanyDashboard.propTypes = {
  getCurrentCompanyProfile: PropTypes.func.isRequired,
  deleteCompanyAccount: PropTypes.func.isRequired,
  getPostedJobs: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  job: state.job
})

export default connect(mapStateToProps,{getCurrentCompanyProfile, deleteCompanyAccount, getPostedJobs})(CompanyDashboard)