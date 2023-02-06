# controllers
Les controllers sont des fonctions que les "routes" appelent lorsqu'une requete est faite à cette adresse.

## Exemple
Un appel sur l'adresse http://localhost:5000/api/auth/login sera géré par la route auth qui contient /login qui appelera le controller auth qui contient la fonction qui va gerer le login d'un utilisateur. (Voir le code c'est beaucoup plus simple que ça ne le parait).