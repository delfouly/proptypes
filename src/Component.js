import React from "react";
import PropTypes from "prop-types";

const Component = ({ name, age }) => {
  return (
    <div>
      My name is {name} and my age is {age}
    </div>
  );
};

Component.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  canDrive: PropTypes.bool,
  renderable: PropTypes.node,
  employer: PropTypes.any,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gender: PropTypes.oneOf(["male", "female"]).isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
  spouse: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    // + anything else ..
  }),
  friend: PropTypes.exact({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};
export default Component;
