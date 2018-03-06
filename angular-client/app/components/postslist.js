angular.module("challenge").component("postslist", {
  controller: function() {},
  bindings: {
    post: "<",
    add: "<",
    filter: "<"
  },
  template: `
    <div>
    <div>
      <h3>{{$ctrl.post.title}}</h3>
      <img src={{$ctrl.post.url}}>
      <p>{{$ctrl.post.post}}</p>
      <button ng-click="$ctrl.add($ctrl.post)" >Add</button>
    </div>
    <div>
    <tag ng-repeat="tag in $ctrl.post.tags" tag="tag" filter="$ctrl.filter"></tag>
    </div>
    </div>
    `
});
