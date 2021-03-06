Meteor.subscribe("images");

/* Inserting a image in the database */
Template.admin.events({
  'change #myFileInput': function(event /*, template */) {
    event.preventDefault();
    FS.Utility.eachFile(event, function(file) {
      //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      Images.insert(file, function(err, fileObj) {});
    });
  }
});

// Load all the images from database
Template.pictures.helpers({
  /*'images': Images.find({}, {
    sort: {
      uploadedAt: -1
    }
      })*/

    images: function() {
      return Images.find();
    }

});

/* Remove a image */
Template.pictures.events({
  'click .halfway-fab': function(e) {
    Images.remove({
      _id: this._id
    });
  }
});
