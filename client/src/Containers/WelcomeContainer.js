import { connect } from 'react-redux';
import { Welcome } from '../Components';
import { clearError } from '../actions/userActions';

const mapStateToProps = state => {
  return {
    user: state.user,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearError: () => {
      dispatch(clearError());
    }
  };
};

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);

export default WelcomeContainer;
