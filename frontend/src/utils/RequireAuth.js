import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// function requireAuth(Component) {
function RequireAuth(props) {
    const Component = props.component;
    // const isInitialMount = useRef(true);

    useEffect(() => {
      checkAuth();
      // if (isInitialMount.current) {
      //   isInitialMount.current = false;
      // } else {
      //   checkAuth();
      // }
    });

    const checkAuth = () => {
      if (!props.isAuthenticated) {
        const redirectAfterLogin = props.location.pathname;
        props.dispatch(push(`/login?next=${redirectAfterLogin}`));
      }
    }

    return (
        <div>
            {props.isAuthenticated === true ? (
              <Component {...props} />
            ) : null} 
        </div>
    );
  /*class AuthenticatedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.checkAuth();
    }
  }*/
}

RequireAuth.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
});


export default connect(mapStateToProps)(withRouter(RequireAuth));

/*Signup.propTypes = {
    signupNewUser: PropTypes.func.isRequired,
    createUser: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    createUser: state.createUser
  });
  
  export default connect(mapStateToProps, {
    signupNewUser
  })(withRouter(Signup));*/
