import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
const Heading = ({heading}) => {
    return (
        <Helmet>
        <title> {heading} - Learn UP </title>
      </Helmet>
    );
};
Heading.propTypes ={
    heading : PropTypes.string,
}
export default Heading;