angular.module("challenge").component("blog", {
  controller: function(dataService) {
    const ctrl = this;
    this.dbPosts = [];
    this.posts = [];
    this.favposts = [];
    this.activetags = [];
    this.getData = function() {
      dataService.getData(data => {
        ctrl.posts = data.data;
        ctrl.dbPosts = data.data;
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
      //add tag to active filters
      if (!ctrl.activetags.includes(tag)) {
        ctrl.activetags.push(tag);
      }
      //filter the already filtered posts
      const filtered = [];
      for (let i = 0; i < ctrl.posts.length; i++) {
        if (ctrl.posts[i].tags.includes(tag)) {
          filtered.push(ctrl.posts[i]);
        }
      }
      ctrl.posts = filtered;
    };

    this.removefilter = tag => {
      //remove tag to active filters
      let index = ctrl.activetags.indexOf(tag);
      ctrl.activetags.splice(index, 1);
      //hack
      ctrl.activetags = [];
      ctrl.posts = ctrl.dbPosts;

      //push only if all the tags are in the object with tags
      //ran out of time to get the unfiliter individually to work
      //   const filter = [];
      //   for (let i = 0; i < ctrl.dbPosts.length; i++) {
      //     let check = ctrl.dbPosts[i].tags.every(tag => {
      //       let result = true;
      //       for (let j = 0; j < ctrl.activetags; j++) {
      //         if (tag !== ctrl.activetags[j]) {
      //             result = false;

      //         }
      //       }
      //       return result;
      //     });

      //     if (check) {
      //       filter.push(ctrl.dbPosts[i]);
      //     }
      //   }
      //   ctrl.posts = filter;
    };

    this.$onInit = () => {
      this.getData();
    };
  },

  template: `
    <div>
      <h1>Blog Posts</h1>
       <h3>Active Tags</h3>
       <activetag ng-repeat="tag in $ctrl.activetags" tag="tag" rmfilter="$ctrl.removefilter" ></activetag>
       <postslist ng-repeat="post in $ctrl.posts" post="post" add='$ctrl.addfav' filter="$ctrl.filter" ></postslist>
    </div>
    <div>
     <h1>Favorites</h1>
        <favlist ng-repeat="post in $ctrl.favposts" post="post" remove="$ctrl.removefav" filter="$ctrl.filter"></favlist>
    </div>
    `
});
