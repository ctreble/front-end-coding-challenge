angular.module("challenge").component("blog", {
  controller: function(dataService) {
    const ctrl = this;
    this.posts = [];
    this.favposts = [];
    this.getData = function() {
      dataService.getData(data => {
        ctrl.posts = data.data;
      });
    };
    this.addfav = post => {
      ctrl.favposts.push(post);
      for (let i = 0; i < ctrl.posts.length; i++) {
        if (ctrl.posts[i].title === post.title) {
          ctrl.posts.splice(i, 1);
        }
      }
    };
    this.removefav = post => {
      ctrl.posts.push(post);
      for (let i = 0; i < ctrl.favposts.length; i++) {
        if (ctrl.favposts[i].title === post.title) {
          ctrl.favposts.splice(i, 1);
        }
      }
    };
    this.filter = tag => {
      console.log("filter", tag);
    };
    this.$onInit = () => {
      this.getData();
    };
  },

  template: `
    <div>
      <h1>Blog Posts</h1>
       <h3>Active Tags</h3>
       <postslist ng-repeat="post in $ctrl.posts" post="post" add='$ctrl.addfav' filter="$ctrl.filter" ></postslist>
    </div>
    <div>
     <h1>Favorites</h1>
        <favlist ng-repeat="post in $ctrl.favposts" post="post" remove="$ctrl.removefav" filter="$ctrl.filter"></favlist>
    </div>
    `
});
