**# Aan de slag met de react-app**

[De Link van de project in de GitHub] [React app gemaakt](https://github.com/nishalamichhane/endproject).

## 1. Beschikbare scripts (NPM Commandos)

In de projectdirectory van de webstorm kunt u het volgende uitvoeren:

### `npm install` 
_als npm nog niet heeft geinstalleerd in het systeem/computer_

of

### `npm start` 
_als npm al heeft geinstalleerd_

**App moet in de browser draaien**
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

U kunt ook fouten in de console zien. Als de applicatie zonder fouten is, dan kan fouten niet zien op console.

## 2. Lijst van Benodigdheden
1. WebStorm
   * Webstorm IDE is webstorm is nodig om frontend-code te schrijven.
   * U moet webstorm downloaden en installeren
   * je moet reactieafhankelijkheden installeren tijdens het maken van het project
2. Rest EndPoints
   * [Fake storeAPI gebruikt om producten op te halen](https://fakestoreapi.com)
   * [SignUP: Database van NOVI gebruikt](https://frontend-educational-backend.herokuapp.com/api/auth/signup)
   * [SignIn: Database van NOVI gebruikt](https://frontend-educational-backend.herokuapp.com/api/auth/signin)
   * [Beveiligd Endpoint - Profiel:Database van NOVI gebruikt](https://frontend-educational-backend.herokuapp.com/api/user)
3. Github Link
   * [Github Link van Project](https://github.com/nishalamichhane/endproject)
## 3. Registratie Validatie
1. Het emailadres moet daadwerkelijk een @ bevatten
2. Het wachtwoord en gebruikersnaam moeten minimaal 6 tekens bevatten
3. Wanneer je een gebruiker probeert te registreren met een username die al bestaat, krijg je een foutcode. De details over deze foutmelding vindt je in e.response
4. Indien de registratie succesvol was, zie login pagina succesmelding.

## 4. Randvoorwaarden

Dit applicatie heeft nu seven paginas:
1. _HomePagina_
2. _Registratie Pagina_
3. _Inloggen Pagina_
4. _Profiel Pagina_
5. _Producten Pagina_
6. _Productdetails Pagina_
7. _ZoekenmetCategorie Pagina_
8. _WinkelWagen Pagina_

### StappenPlan
Deze applicatie is zo simpele applicatie om te draaien. 

** *De startpagina kan worden gezien door aan de linkerkant van de link te klikken dat is WebShopN*

** *Inschrijven kan door het invullen van het aanmeldformulier *

** *U kunt inloggen door op het login-menu te klikken en de juiste gebruikersnaam en wachtwoord in te voeren*

** *De profielpagina wordt omgeleid nadat u met succes bent ingelogd op het systeem*

** *Gebruikersnaam is te zien bovenaan de pagina nadat u bent ingelogd op het systeem*

** *Producten kunnen worden bekeken door op de productlink te klikken in het menu van Navbar*

** *Op de pagina Productenlijst, kunnen we de titel ook zien. We moeten op de titel klikken om naar de detailpagina te gaan*

** *Producten kunnen op categorie worden gezocht. Daarvoor moeten we op de link 'ZoekenmetCategorie' klikken*

** *Ingelogd users kunnen producten op de winkelwagen toevoegen, bewerken en verwijderen*

## 5. Componenten en AuthContext
**Navbar en footer**  hebben gemaakt, die in het systeem kunnen worden hergebruikt. Conext (Authcontext) is ook gebruikt in het systeem voor Authenticatie.





