angular.module("challenge").component("favlist", {
  controller: function() {},
  bindings: {
    post: "<",
    remove: "<",
    filter: "<"
  },
  template: `
      <div>
      <div>
        <h3>{{$ctrl.post.title}}</h3>
        <p>{{$ctrl.post.post}}</p>
        <button ng-click="$ctrl.remove($ctrl.post)">Remove</button>
      </div>
      <div>
      <tag ng-repeat="tag in $ctrl.post.tags" tag="tag" filter="$ctrl.filter"></tag>
      </div>
      </div>
      `
});
