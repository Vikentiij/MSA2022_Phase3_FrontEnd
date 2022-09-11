import PropTypes from "prop-types";
import styles from "./title.module.css";

export const Title = ({ title, subtitle, ...props }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>{props.children}</div>
      <h1 className={styles.title}>{title}</h1>
      <h4 className={styles.subtitle}>{subtitle}</h4>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

Title.defaultProps = {
  title: "",
  subtitle: "",
};
