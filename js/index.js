import { team1, team2, team3, team4 } from './data/teams.js';

import Player from './classes/Player.js';
import Team from './classes/Team.js';
import Tournament from './classes/Tournament.js';


const enrollTeam = (name, place, captain, players, tournament) => {
  try {
    
    //crea jugadores
    const playerObjArray = players.map((player)=> (new Player(player.rut, player.firstname, player.lastname, player.birthYear)));

    // crea capitán
    const captainObj = new Player(captain.rut, captain.firstname, captain.lastname, captain.birthYear);
    
    // Create a new team
    const team = new Team(name, place, captainObj, playerObjArray);
    
    // Inscribe equipo en el torneo
    team.enroll(tournament);

  } catch (error) {
    throw error;
  }
}


const tournament = new Tournament('Los colihues');



document.open()
document.writeln('Equipos:');
document.writeln('<br>');
document.writeln('<hr>');

document.writeln('Equipo 1:<br>');
document.writeln(`${JSON.stringify(team1).replace(/(\}\,\{)/g, '},<br>{').replace(/(\[|\])/g, '')}<br>`);
document.writeln('<hr>');

document.writeln('Equipo 2:<br>');
document.writeln(`${JSON.stringify(team2).replace(/(\}\,\{)/g, '},<br>{').replace(/(\[|\])/g, '')}<br>`);
document.writeln('<hr>');

document.writeln('Equipo 3:<br>');
document.writeln(`${JSON.stringify(team3).replace(/(\}\,\{)/g, '},<br>{').replace(/(\[|\])/g, '')}<br>`);
document.writeln('<hr>');

document.writeln('Equipo 4:<br>');
document.writeln(`${JSON.stringify(team4).replace(/(\}\,\{)/g, '},<br>{').replace(/(\[|\])/g, '')}<br>`);
document.writeln('<hr>');

document.writeln('<br>');
document.writeln('<br>');
document.writeln('Acciones de ejecución y comprobación...');
document.writeln('<br>');

try {
  enrollTeam('Equipo 1', 'Place 1', team1[0], team1, tournament);
  document.writeln(`<span style='color: green'>Equipo 1 inscrito en el torneo  ${tournament.getName()} éxitosamente! </span><br>`);
} catch (error) {
  document.writeln(`<span style='color: red'>${error.toString()} </span> <br>`);
}


try {
  enrollTeam('Equipo 2', 'Place 2', team2[0], team2, tournament);
  document.writeln(`<span style='color: green'>Equipo 2 inscrito en el torneo  ${tournament.getName()} éxitosamente! </span><br>`);
} catch (error) {
  document.writeln(`<span style='color: red'>${error.toString()} </span> <br>`);
}


try {
  enrollTeam('Equipo 3', 'Place 3', team3[0], team3, tournament);
  document.writeln(`<span style='color: green'>Equipo 3 inscrito en el torneo  ${tournament.getName()} éxitosamente! </span><br>`);
} catch (error) {
  document.writeln(`<span style='color: red'>${error.toString()} </span> <br>`);
}


try {
  enrollTeam('Equipo 4', 'Place 4', team4[0], team4, tournament);
  document.writeln(`<span style='color: green'>Equipo 4 inscrito en el torneo  ${tournament.getName()} éxitosamente! </span><br>`);
} catch (error) {
  document.writeln(`<span style='color: red'>${error.toString()} </span> <br>`);
}


const tournamentJSON = JSON.stringify(tournament)

document.writeln('<br>');
document.writeln('<br>');
document.writeln('Torneo...');
document.writeln('<br>');


document.writeln(`${tournamentJSON.replace(/(\}\,\{)/g, '},<br>{').replace(/(\[|\])/g, '')}<br>`);


document.close()

