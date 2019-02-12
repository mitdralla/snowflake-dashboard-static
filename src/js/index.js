// CSS Imports *include in entry file only
import '../css/bootstrap.less';
import '../css/fonts.less';
import '../css/components.less';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import '../../node_modules/holderjs/holder.js';
import '../../node_modules/@fortawesome/fontawesome-free/js/all.js';

import '../js/main.js';

/* Boostrap 4 Full Bundles */
import 'bootstrap/dist/js/bootstrap.bundle'; /* Includes popper.js */
// import 'bootstrap'; /* Does not include popper. js */

// Uncomment 'popper.js' in webpack.config.js

/* Boostrap 4 Individual Components (Optional) */
// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/tooltip'; /* requires popper.js */
// import 'bootstrap/js/dist/util';

if (process.env.NODE_ENV === 'development') {
  require('../index.html'); /* Require so webpack watches changes to html file */
}
