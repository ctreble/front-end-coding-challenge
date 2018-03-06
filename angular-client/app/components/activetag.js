angular.module("challenge").component("activetag", {
  controller: function() {},
  bindings: {
    tag: "<",
    rmfilter: "<"
  },
  template: `
  <button ng-click="$ctrl.rmfilter($ctrl.tag)">{{$ctrl.tag}}</button>
  `
});
