FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('home');
  }
});

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

FlowRouter.route('/admin', {
  name: 'admin',
  action() {
    BlazeLayout.render('admin');
  }
});
