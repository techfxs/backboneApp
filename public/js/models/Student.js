// Model.js
// --------
define(["jquery", "backbone"],

    function($, Backbone) {

        // Creates a new Backbone Model class object
        var StudentModel = Backbone.Model.extend({

            // Model Constructor
            initialize: function() {

            },

            // Default values for all of the Model attributes
            defaults: {

            }

  
        });

        // Returns the Model class
        return StudentModel;

    }

);
