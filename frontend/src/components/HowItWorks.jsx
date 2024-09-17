import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
  return (
    <section className="howItWorks">
      <h3>How does it work?</h3>
      <div className="container">
        <div className="card">
          <div className="icon">
            <LuUserPlus />
          </div>
          <h4>Create an Account</h4>
          <p>
            Sign Up for a free account as a Job Seeker or an Employer. Set up
            your profile in minutes to start posting jobs or applying to jobs.
            Customize your profile to highlight your skills or requirements.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <VscTasklist />
          </div>
          <h4>Post or Browse Jobs</h4>
          <p>
            Employers can post detailed job description and job seekers can
            browse a comprehensive lsit of available position. Utilise filters
            to find jobs that match your skills and preferences.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <BiSolidLike />
          </div>
          <h4>Hire or Get Hired</h4>
          <p>
            Employers can shortlist candidates and extend job offers. Job
            seekers can review job offers and accept positions that align with
            their career goals.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <BiSolidLike />
          </div>
          <h4>Get to see favorite Companies</h4>
          <p>
            We tie Up with many companies that offers lucrative positions and
            handsome packages to attract young brains. subscribe to update for
            timely notification to new positions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
