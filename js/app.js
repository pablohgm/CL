App = Ember.Application.create();

App.Router.map(function() {
    this.route("application", { path: "/" });
    this.route("dashboardDetail", { path: "/dashboardDetail" });
});

App.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return cases;
    },
    setupController: function(controller, model){
        controller.set('cases', model)
    }
});

App.DashboardDetailRoute = Ember.Route.extend({
    model: function() {
        return cases;
    },
    setupController: function(controller, model){
        controller.set('details', model)
    }
});

var cases = [
    {
        id: 0,
        caseNumber: '234086082309',
        description: 'Boland et al v. Yoccabel Construction Company, Inc.',
        parties: '10',
        documents:'5',
        announcements:'2',
        recentActivities: [
            {id:'0', date:'APR 23', description:'17 people are added to the case'},
            {id:'1', date:'APR 20', description:'3 files were saved to the attorneys'},
            {id:'2', date:'APR 19', description:'Timothy MacArthur requested John VanHousen be added'}],
        notifications: [
            {id:'0', description:'New party member: John Smith has been added'},
            {id:'1', description:'Scoott Justice, Court Clerk posted: The court will be closed monday'},
            {id:'2', description:'New party member: Carrie Carpenter has been added'}],
        summary:{title:'B vs Y', days:'28 Days', description:'til next hearing'}
    },
    {
        id: 1,
        caseNumber: '435436-4745327-24',
        description: 'Tenempaguy v. 160 Water Street, Inc.',
        parties: '23',
        documents:'9',
        announcements:'10',
        recentActivities: [
            {id:'0', date:'APR 23', description:'17 people are added to the case'},
            {id:'1', date:'APR 20', description:'3 files were saved to the attorneys'},
            {id:'2', date:'APR 19', description:'Timothy MacArthur requested John VanHousen be added'}],
        notifications: [
            {id:'0', description:'New party member: John Smith has been added'},
            {id:'1', description:'Scoott Justice, Court Clerk posted: The court will be closed monday'},
            {id:'2', description:'New party member: Carrie Carpenter has been added'}],
        summary:{title:'T vs W', days:'28 Days', description:'til next hearing'}
    },
    {
        id: 2,
        caseNumber: '469346-3466',
        description: 'Jones V. Grey',
        parties: '36',
        documents:'11',
        announcements:'3',
        recentActivities: [
            {id:'0', date:'APR 23', description:'17 people are added to the case'},
            {id:'1', date:'APR 20', description:'3 files were saved to the attorneys'},
            {id:'2', date:'APR 19', description:'Timothy MacArthur requested John VanHousen be added'}],
        notifications: [
            {id:'0', description:'New party member: John Smith has been added'},
            {id:'1', description:'Scoott Justice, Court Clerk posted: The court will be closed monday'},
            {id:'2', description:'New party member: Carrie Carpenter has been added'}],
        summary:{title:'J vs G', days:'28 Days', description:'til next hearing'}
    }

];;