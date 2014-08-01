// Karma configuration file
// See http://karma-runner.github.io/0.10/config/configuration-file.html

// windows
// setx CHROME_BIN "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" /M
// setx FIREFOX_BIN "C:\Program Files (x86)\Mozilla Firefox\firefox.exe" /M


module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // libraries
      "bower_components/jquery/dist/jquery.js",

      "bower_components/angular/angular.js",
      "bower_components/angular-mocks/angular-mocks.js",

      "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
      "bower_components/angular-animate.js",
      "bower_components/checklist-model/checklist-model.js",

      // our app
      'lib/ng-formalizer.js',
      'lib/ng-blacklist.js',
      'lib/ng-decimal.js',
      'lib/ng-equalto.js',
      'lib/ng-required-if.js',

      // tests
      'tests/*.js',

      // templates
      'lib/*.html'
    ],

    //logLevel: config.LOG_DEBUG,

    // generate js files from html templates
    preprocessors: {
      'tpl/*.html': 'ng-html2js',
      'lib/*.js': ['coverage']
    },

    reporters: ['dots', 'coverage'],

    autoWatch: true,
    browsers: ['PhantomJS']
    //browsers: ['Firefox']
  });
};

// add the coverage plugin
//plugins: [ 'karma-jasmine', 'karma-firefox-launcher', 'karma-chrome-launcher', 'karma-coverage'],