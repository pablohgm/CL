App = Ember.Application.create();

App.Router.map(function() {
    this.route("application", { path: "/" });
});

App.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return cases;
    },
    setupController: function(controller, model){
        controller.set('cases', model)
    }
});

var cases = [
    {
        id: 0,
        caseNumber: '234086082309',
        description: 'Boland et al v. Yoccabel Construction Company, Inc.',
        parties: '10',
        documents:'5',
        announcements:'2'
    },
    {
        id: 1,
        caseNumber: '435436-4745327-24',
        description: 'Tenempaguy v. 160 Water Street, Inc.',
        parties: '23',
        documents:'9',
        announcements:'10'
    },
    {
        id: 2,
        caseNumber: '469346-3466',
        description: 'Jones V. Grey',
        parties: '36',
        documents:'11',
        announcements:'3'
    }

];;