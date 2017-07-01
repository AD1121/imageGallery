
FlowRouter.route('/home', {
  name: 'home',
  action() {
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/about', {
  name: 'about',
  action() {
    BlazeLayout.render('about');
  }
});
