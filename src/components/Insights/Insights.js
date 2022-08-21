import React from 'react';
import PropTypes from 'prop-types';
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
    <div className='articleContainer'></div>
  </div>
);

Insights.propTypes = {};

Insights.defaultProps = {};

export default Insights;
