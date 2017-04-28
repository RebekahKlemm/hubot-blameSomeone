module.exports = function(robot) {

  var blamepeople = [];

  function getUsers(){
    if(robot.brain.data.users){
      for (var user in robot.brain.data.users){
        blamepeople.push(robot.brain.data.users[user].name);
      }
    }
    robot.brain.set('blamepeople', blamepeople);
  }

  robot.hear('blame', function(msg){
    getUsers();
    msg.send('Blame ' + msg.random(robot.brain.data._private.blamepeople));
  });

  robot.hear('sorry', function(msg){
    getUsers();
    msg.send('Blame ' + msg.random(robot.brain.data._private.blamepeople));
  });

  robot.hear('fault', function(msg){
    getUsers();
    msg.send('Blame ' + msg.random(robot.brain.data._private.blamepeople));
  });

};
