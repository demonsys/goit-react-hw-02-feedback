import './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};
export default Section;
