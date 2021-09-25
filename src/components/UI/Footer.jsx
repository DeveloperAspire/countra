import classes from './Footer.module.css'
import { useSelector } from 'react-redux';

const Footer = () => {
      const darkMode = useSelector(state => state.countrySlice.darkMode)

      const footerClass = darkMode ? `${classes.footer} ${classes.dark}` : `${classes.footer}`
  return (
    <footer className={footerClass}>
      <p>
        Made with ❤️ by
        <span>
          <a href="https://www.github.com/DeveloperAspire">Franklin Okolie</a>
        </span>
      </p>
    </footer>
  );
};

export default Footer