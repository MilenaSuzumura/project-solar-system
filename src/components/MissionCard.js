import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="infoCard" data-testid="mission-card">
        <p data-testid="mission-name">
          <span>{name}</span>
        </p>
        <p data-testid="mission-year">
          <span>{year}</span>
        </p>
        <p data-testid="mission-country">
          <span>{country}</span>
        </p>
        <p data-testid="mission-destination">
          <span>{destination}</span>
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
