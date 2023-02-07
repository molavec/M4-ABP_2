# M4-ABP_2

El sistema debe ser construido en JavaScript ES5 y cumplir con los siguientes requerimientos:


1. Permitir el registro de los equipos de futbol: 
Estos deben tener los siguientes atributos:
* nombre
* población
* capitan (del equipo)
* jugadores




2. Los jugadores de los equipos deben poseer los siguientes atributos:
* rut
* nombre
* apellido
* año_nacimiento.


3. Se debe crear un módulo para su inscripción al equipo de futbol respectivo.
Para la inscripción de un nuevo jugador a un equipo, se deberá validar que el jugador
no exista en otro equipo de futbol, esta validación se debe encontrar como método en
la clase del equipo de futbol.

4. Los jugadores inscritos no pueden ser menores de edad, por lo tanto, se debe validar
en el Jugador, que este no tenga menos de 18 años.

5. La información de debe almacenar en una variable en formato .json que guarde la
información de todos los equipos de futbol y sus jugadores.

6. La inscripción y modificación de un equipo en esta variable es responsabilidad de la
clase equipo de fútbol.