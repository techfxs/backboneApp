// View.js
// -------
define(["jquery", "backbone", 
    "models/Student", 
    'collections/Students', 
    "templates/studentList", 
    "data/studentData",
    "views/StudentListItem"],

    function($, Backbone, StudentModel, StudentCollection, studentListTmpl, studentData, StudentListItemView){

        var StudentListView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#appSection",

            
            template: studentListTmpl,

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
                var self = this;

                this.$el.html(this.template());
                
                this.collection = new StudentCollection(studentData);

                this.collection.each(function(model){
                    var studentListItemView = new StudentListItemView({model : model});
                    self.$el.find('#listContainer').append(studentListItemView.$el);
                });

                // Maintains chainability
                return this;
            }

        });

        // Returns the View class
        return StudentListView;

    }

);