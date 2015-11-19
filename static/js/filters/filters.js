var employeeDashboardApp = angular.module('DemoApp');

employeeDashboardApp.filter('checkEmail', function() {
    return function(value) {
        var reg = new RegExp('[0-9]+@aasaanjobs.com');
        if (reg.test(value))
            return value;
        else
            return 'NA';
    }
});

employeeDashboardApp.filter('capitalize', function() {
    return function(input, scope) {
        if (input != null)
            input = input.toLowerCase();
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    }
});

employeeDashboardApp.filter('proficiencyDict', function() {
    return function(code) {
        var dict = {
            'l10': 'Anyone',
            '10': '10th Pass',
            '12': '12th Pass',
            'G': 'Graduate',
            'PG': 'Others'
        };
        return dict[code];
    }
});

employeeDashboardApp.filter('ageFilter', function() {
    return function(age) {
        var ageDifMs = Date.now() - new Date(age);
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
});
