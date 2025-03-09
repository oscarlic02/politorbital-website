import './fonts.css';
import { extendTheme } from "@chakra-ui/react";
/**
 * Custom theme configuration for the application.
 * 
 * This theme extends the default theme with custom fonts.
 * @author Licciardi Oscar
 * @type {Object}
 * @property {Object} fonts - Font settings for the theme.
 * @property {string} fonts.heading - Font used for headings.
 * @property {string} fonts.body - Font used for body text.
 */
const theme = extendTheme({
  fonts: {
    heading: "Nasalization",
    body: "Nasalization",
  },
});

export default theme; 