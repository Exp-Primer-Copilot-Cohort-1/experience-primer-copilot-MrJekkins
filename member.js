function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMembersController',
        controllAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    }
}