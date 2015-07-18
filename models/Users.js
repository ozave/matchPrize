/**
 * Created by Ozav_Tom on 15/07/2015.
 */

var mongoose = require('mongoose');
//var crypto = require('crypto');
//var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
    username: {type: String, lowercase: true, unique: true},
    hash: String,
    salt: String,
    email: {type: String, lowercase: true, unique: true},
    inviter: {type: String, default: "none"},
    noOfAcceptedFriendInvites: Number,
    noOfAcceptedLeagueInvites: Number
    //challenges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Challenge' }],
    //leagues: [{ type: mongoose.Schema.Types.ObjectId, ref: 'League' }],
    //friendInvites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Invite' }],
    //leagueInvites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LeagueInvite' }],
    //challengeInvites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChallengeInvite' }],
    //myTeams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FFTeam' }]

});

//UserSchema.methods.joinLeague = function(league, cb) {
//    this.leagues.push(league);
//    this.save(cb);
//};
//
//UserSchema.methods.addChallenge = function(challenge, cb) {
//    this.challenges.push(challenge);
//    this.save(cb);
//};
//
//UserSchema.methods.setPassword = function(password){
//    this.salt = crypto.randomBytes(16).toString('hex');
//
//    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
//};
//
//UserSchema.methods.validPassword = function(password) {
//    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
//
//    return this.hash === hash;
//};
//
//UserSchema.methods.generateJWT = function() {// set expiration to 60 days
//    var today = new Date();
//    var exp = new Date(today);
//    exp.setDate(today.getDate() + 60);
//
//    return jwt.sign({
//        _id: this._id,
//        username: this.username,
//        email: this.email,
//        challenges: this.challenges,
//        leagues: this.leagues,
//        myTeams: this.myTeams,
//        exp: parseInt(exp.getTime() / 1000),
//    }, 'SECRET');
//};

mongoose.model('User', UserSchema);
