app.controller('CommentController', function($scope, $stateParams, postFactory) {

  $scope.addComment = function() {
    postFactory.addComment($stateParams.id ,$scope.body)
      .then(function(comment) {
        $scope.comments.push(comment);
      })
      //this is new
      .catch(function(err) {
        alert(err.data.message)
      });
  }    //todo
  

  $scope.upvote = function() {
    //todo
  }

  $scope.downvote = function() {
    //todo
  }

  $scope.deleteComment = function() {
    var self = this;
    postFactory.deleteComment(this.post)
      .then(function(response) {
        $scope.comments.splice(self.$index, 1);
      })
      //this is new
      .catch(function(err) {
        alert(err.data.message)
      });
  }

    postFactory.getComments($stateParams.id).then(function(comments) {
    $scope.comments = comments;
  });


});
