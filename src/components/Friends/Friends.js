import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

const Friends = () => (
  <div className={styles.Friends}>
    <h1 className='pageTitle'>Friends</h1>
    <br/>
    <div className='friendActivityContainer'>
      <div className='friendActivity'>
        <h4>
          Dane Gledhill
        </h4>
        <p>Im feeling happy today, it was great getting to hang out with my friends and work on this hackathon project.</p>
        <p>TLDR: Life is Good</p>
        <h5>Reactions:</h5>
        <div className='userReactionImage'></div>
        <div className='userReactionImage'></div>
        <div className='userReactionImage'></div>
      </div>

      <div className='friendActivity'>
        <h4>
          Rosalie Pampolina
        </h4>
        <p>Im feeling excited today, I have worked so hard with our team to build this hackathon project and im excited to demo it!</p>
        <p>TLDR: Excitement is Contagious</p>
        <h5>Reactions:</h5>
        <div className='userReactionImage'></div>
        <div className='userReactionImage'></div>
        <div className='userReactionImage'></div>
      </div>
    </div>
  </div>
);

Friends.propTypes = {};

Friends.defaultProps = {};

export default Friends;
