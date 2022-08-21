import React from 'react';
import styles from './Insights.module.css';

const Insights = () => (
  <div className={styles.Insights}>
    <h1 className='pageTitle'>Insights</h1>
    <br/>
    <h4 className='pageSubTitle'>Mood Art</h4>
    <div className='moodArtContainer'>

    </div>
    <h4 className='pageSubTitle'>Predictions</h4>
    <div className='predictionGraphContainer'>
      <div className='graphContainer'></div>
      <div className='graphContainer'></div>
    </div>
    <h4 className='pageSubTitle'>Articles</h4>
    <div className='articleContainer'>
      <h3>Tips for Anxiety</h3>
      <img src='./../../../public/logo192.png' alt='anxiety'/>
      <p>Anxiety can come at any time, it is important to always be prepared with coping strategies. Click to learn more!</p>
    </div>
  </div>
);

Insights.propTypes = {};

Insights.defaultProps = {};

export default Insights;
