import PropTypes from "prop-types";
import moment from "moment";

const Time = ({ time }) => {
  const timeString = moment(time).toDate().toDateString();
  return <span className="time">{timeString}</span>;
};

Time.propTypes = {
  time: PropTypes.string.isRequired,
};

export default Time;
