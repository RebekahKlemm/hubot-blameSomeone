module.exports = function(robot) {

  var blamepeople = [];

  // get current users in the slack room
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
    msg.send('Blame @' + msg.random(robot.brain.get('blamepeople')));
  });

  robot.hear('sorry', function(msg){
    getUsers();
    msg.send('Blame @' + msg.random(robot.brain.get('blamepeople')));

  });

  robot.hear('fault', function(msg){
    getUsers();
    msg.send('Blame @' + msg.random(robot.brain.get('blamepeople')));
  });
};
