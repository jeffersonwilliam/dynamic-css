/* eslint-disable react/prop-types */
import './color.css';

const Color = ({ numberOfPeeps, dynamicNumOfPeeps }) => {
  /**
   *
   * Option 1
   */
  const findColor = (numberOfPeeps) => {
    if (numberOfPeeps % 10 === 0) {
      return 'red';
    } else if (numberOfPeeps % 10 === 1) {
      return { backgroundImage: `linear-gradient(to right, red , yellow)` };
    } else if (numberOfPeeps % 10 === 2) {
      return { backgroundColor: 'aqua' };
    } else if (numberOfPeeps % 10 === 3) {
      return { backgroundColor: 'green' };
    } else if (numberOfPeeps % 10 === 4) {
      return {
        backgroundImage: `linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)`,
      };
    } else if (numberOfPeeps % 10 === 5) {
      return { backgroundColor: 'red' };
    } else if (numberOfPeeps % 10 === 6) {
      return { backgroundColor: 'yellow' };
    } else if (numberOfPeeps % 10 === 7) {
      return { backgroundColor: 'blue' };
    } else if (numberOfPeeps % 10 === 8) {
      return { backgroundColor: 'brown' };
    } else if (numberOfPeeps % 10 === 9) {
      return { backgroundColor: 'pink' };
    }
  };

  /**
   *
   * Option 2
   */

  const dynamicStyle = {
    backgroundImage: `linear-gradient(to right, rgb(${
      242 / dynamicNumOfPeeps
    }, 112, 156), rgb(255, ${148 / dynamicNumOfPeeps}, 114))`,
  };

  return (
    <div className='color-container'>
      <div className='sub-container'>
        <div style={findColor(numberOfPeeps)} className='display-color'></div>
        <div style={dynamicStyle} className='display-color second-div'></div>
      </div>
    </div>
  );
};

export default Color;
