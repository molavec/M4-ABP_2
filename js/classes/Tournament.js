function Tournament(name) {
  this._name = name;
  this._teams = [];
}

Tournament.prototype.getName = function () {
  return this._name;
}

Tournament.prototype.setName = function (name) {
  this._name = name;
}

Tournament.prototype.getTeams = function () {
  return this._teams;
}

Tournament.prototype.setTeams = function (teams) {
  this._teams = teams;
}

Tournament.prototype.addTeam = function (team) {
  this._teams.push(team);
}

export default Tournament;
