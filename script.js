var userIsLoggedIn = false;

App.controller('splash', function (page) {

});

App.controller('login', function (page) {
  // trigger prompt
  $(page)
    .find('.app-submit')
    .on('click', function() {
      App.dialog({
          title        : 'Save Password',
          text         : 'Would you like to stay logged in?',
          okButton     : 'Sure!',
          cancelButton : 'Nah.'
        }, function (tryAgain) {
          if (tryAgain) {
            // try again
          }
        });
      });
});

App.controller('signup', function (page) {
  // put stuff here
});

App.controller('main', function (page) {
  $(page)
    .find('#tab1')
    .clickable()
  $(page)
    .find('#tab2')
    .clickable()
    .on('click', function() {
      //App.load('add');
    });
  $(page)
    .find('#tab3')
    .clickable()
    .on('click', function() {
      //App.load('feed');
    });
});

try {
  App.restore();
} catch (err) {
  if (userIsLoggedIn == true) {
    App.load('main');
  } else {
    App.load('splash');
  }
}
