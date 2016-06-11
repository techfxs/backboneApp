// View.js
// -------
define(["jquery", "backbone", "models/Student", 'templates/studentListItem'],

    function($, Backbone, StudentModel, studentListItemTmpl){

        var StudentListItemView = Backbone.View.extend({

            // The DOM Element associated with this view
            tagName: "tr",

            template: studentListItemTmpl,

            // View constructor
            initialize: function() {
                // Calls the view's render method
                this.render();
            },

            // View Event Handlers
            events: {
            },

            // Renders the view's template to the UI
            render: function() {
                // Dynamically updates the UI with the view's template
                this.$el.html(this.template(this.model.toJSON()));
                // Maintains chainability
                return this;
            }

        });

        // Returns the View class
        return StudentListItemView;

    }

);