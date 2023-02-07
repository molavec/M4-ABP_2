function Team(name, place, captain, players) {
  this._name = name;
  this._place = place;
  this._captain = captain;

  this._players = players || [];
}

Team.prototype.getName = function() {
  return this._name;
};

Team.prototype.setName = function(value) {
  this._name = value;
};

Team.prototype.getPlace = function() {
  return this._place;
};

Team.prototype.setPlace = function(value) {
  this._place = value;
};

Team.prototype.getCaptain = function() {
  return this._captain;
};

Team.prototype.setCaptain = function(value) {
  this._captain = value;
};

Team.prototype.getPlayers = function() {
  return this._players;
};

Team.prototype.setPlayers = function(value) {
  this._players = value;
};

Team.prototype.hasPlayer = function(player) {
  return this._players.some(p => (p.getRut() === player.getRut()));
};

Team.prototype.enroll = function(tournament) {
  
  let lastPlayerChecked = null;
  let lastTeamChecked = null;

  const isOnePlayerEnrolled = this._players.some((player) => {
    return tournament.getTeams().some((team) => {
      lastPlayerChecked = player;
      lastTeamChecked = team;
      return team.hasPlayer(player);
    });
  });

  console.log('isOnePlayerEnrolled', isOnePlayerEnrolled);

  if(!isOnePlayerEnrolled){
    tournament.addTeam(this);
  } else {
    throw new Error(`El jugador ${lastPlayerChecked.getFirstname()} ${lastPlayerChecked.getLastname()} ya está inscrito en el equipo ${lastTeamChecked.getName()}`);
  }
  
};


export default Team;