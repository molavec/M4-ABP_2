function Player(rut, firstname, lastname, birthYear) {
  this._rut = rut;
  this._firstname = firstname;
  this._lastname = lastname;
  this._birthYear = this.setBirthYear(birthYear);
}

Player.prototype.getRut = function() {
  return this._rut;
};

Player.prototype.setRut = function(value) {
  this._rut = value;
};

Player.prototype.getFirstname = function() {
  return this._firstname;
};

Player.prototype.setFirstname = function(value) {
  this._firstname = value;
};

Player.prototype.getLastname = function() {
  return this._lastname;
};

Player.prototype.setLastname = function(value) {
  this._lastname = value;
};

Player.prototype.getBirthYear = function() {
  return this._birthYear;
};

Player.prototype.setBirthYear = function(value) {
  var currentYear = new Date().getFullYear();
  if (currentYear - value >= 18) {
    this._birthYear = value;
  } else {
    throw new Error(`El jugador ${this.getFirstname()}  ${this.getLastname()}, con RUT ${this.getRut()}, debe tener al menos 18 años.`);
  }
};

export default Player;