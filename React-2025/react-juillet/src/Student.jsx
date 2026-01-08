import PropTypes from "prop-types";
function Student(props) {
  return (
    <div>      
        <p> Name : {props.name} </p>
        <p> Age : {props.age} </p>
        <p> Student ID : {props.id} </p>
        <p> Major : {props.major} </p>
        <p> Stuent : {props.isStudent ? "Yes" : "No"}</p>
    </div>
    );
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  major: PropTypes.string.isRequired,
  isStudent: PropTypes.bool.isRequired
};

export default Student;