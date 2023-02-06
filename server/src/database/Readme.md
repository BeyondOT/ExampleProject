# database
Dans ce dossier, toutes les interactions direct avec la base de données se trouveront ici. Les controllers n'auront pas le droit d'intéragir avec la base de donnée directement, ces ici que nous allons leur fournir les fonctions qui leur permettront de faire cela.

## Exemple
Si nous devons avoir les informations d'un utilisateur grace à l'email pour une operation dans un controller, nous devons faire appel a la fonction getUserByEmailDb qui fera l'operation sur la base de donnée.

# Attention
Dans ce projet je n'ai pas utilisé cette manière donc ne faites pas attention à ça. J'ai quand meme fait un petit exemple tout court pour que vous ayer une idée.