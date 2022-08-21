import React from 'react';
import PropTypes from 'prop-types';
import styles from './DailyCheckUp.module.css';

const DailyCheckUp = () => (
  <div className={styles.DailyCheckUp}>
    <h1 className='pageTitle'>Daily Check Up</h1>
    <br/>
    <div className='dailyCheckupInputContainer'>
      <p>Tell people how you are feeling today:</p>
      <br/>
      <div className='textAreaContainer'>
        <textarea id="checkupInput" name="checkupInput" rows="15" cols="50"></textarea>
      </div>
      <div className='submitContainer'>
        <div className='submitButtonContainer'>
          Submit
        </div>
      </div>
      
    </div>
    
  </div>
);

DailyCheckUp.propTypes = {};

DailyCheckUp.defaultProps = {};

export default DailyCheckUp;
