Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images")]
});


// Load all the images from database
 Template.pictures.helpers({
   images: Images.find({}, {
      sort: { uploadedAt: -1 }
    })
 });

/* Inserting a image in the database */
 Template.main.events({
   'change #myFileInput': function(event, template) {
     event.preventDefault();
     FS.Utility.eachFile(event, function(file) {
       //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
       Images.insert(file, function(err, fileObj) {});
     });
   }
 });
