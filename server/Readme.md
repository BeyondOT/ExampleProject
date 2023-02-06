# Dossier Server
Ceci est le dossier server.

## Naming conventions:
Ceci est encore à décider avec tout le monde mais voici ce que je propose.

### Pour les fichiers
Tout les fichiers d'un dossier seront nommée de cette façon:
`nomDuFichier.nomDuDossier.ts`.

Cela permet de facilement retrouver les fichiers voulu lorsque l'on essaye de le faire via la fonctionnalité "Search files" de vscode, qui permet d'ouvrir un fichier juste avec le nom sans avoir a chercher dans les dossiers etc... 
Cela est spécialement utile lorsque deux fichiers qui concernent le meme sujet on un nom quasiment identique, alors le .nomDuDossier permet de faire la difference.
- Exemple: auth.middleware.ts et auth.controller.ts et auth.database.ts et auth.route.ts

### Pour les fonctions et les variables
Des noms clairs et descriptifs en utilisant le camelCase.
- Exemple: Une fonction qui cherche utilisateur grace a son id sera nommée: findUserById().