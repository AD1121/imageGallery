Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images")],
    filter: {
      allow: {
        contentType: ['image/*']
      },
      onInvalid: function(message) {

      }
    }
});

Images.allow({
  insert: function() {return true;},
  update: function() {return true;},
  download: function() {return true;},
});
