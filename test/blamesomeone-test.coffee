Helper = require('hubot-test-helper')
chai = require 'chai'

expect = chai.expect

helper = new Helper('../src/blamesomeone.coffee')

describe 'blamesomeone', ->
  beforeEach ->
    @room = helper.createRoom()

  afterEach ->
    @room.destroy()

  it 'responds to blame', ->
    @room.user.say('alice', 'blame').then =>
      expect(@room.messages).to.eql [
        ['alice', 'blame']
        ['hubot', 'Blame Robbie']
      ]

  it 'hears orly', ->
    @room.user.say('bob', 'just wanted to say orly').then =>
      expect(@room.messages).to.eql [
        ['bob', 'just wanted to say orly']
        ['hubot', 'yarly']
      ]
