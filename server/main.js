Meteor.publish("images", function() {
    return Images.find( /* {
        $orderby: {uploadedAt: -1}
      } */ );
  });
