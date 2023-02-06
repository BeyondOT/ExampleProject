# middlewares
Les middlewares sont des fonctions qui sont appelé par une route avant de faire un appel au controlleurs.

## Exemple
Si on a des appels que l'utilisateur ne peut faire que s'il est connecté, on appelle le middleware authToken qui permettra de check si l'utilisateur est connecté ou pas en vérifiant son token JWT.