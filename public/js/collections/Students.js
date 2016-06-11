// Collection.js
// -------------
define(["jquery","backbone","models/Student"],

  function($, Backbone, StudentModel) {

    // Creates a new Backbone Collection class object
    var StudentCollection = Backbone.Collection.extend({

      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: StudentModel

    });

    // Returns the Model class
    return StudentCollection;

  }

);