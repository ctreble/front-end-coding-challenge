angular.module("challenge").component("tag", {
  controller: function() {},
  bindings: {
    tag: "<",
    filter: "<"
  },
  template: `
<button ng-click="$ctrl.filter($ctrl.tag)">{{$ctrl.tag}}</button>
`
});
