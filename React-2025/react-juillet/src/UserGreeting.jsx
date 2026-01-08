import PropTypes from 'prop-types';

function UserGreeting(props) {

    const welcomMessage = <h2 className="welcome-message">
                           Welcome {props.username}!
                          </h2>

    const loginPrompt = <h2 className="login-prompt">
                         Please log in to access this page.
                        </h2>

    return (props.isLoggedIn ? welcomMessage : loginPrompt);

}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}

export default UserGreeting;