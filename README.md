# Application Météo

Une démo de cette application peut être visitée ici:

[]()

## Pré-requis GraphQl Code Generator

- En commençant par le dossier `/back`, exécutez `yarn generate` quand vous modifier des typeDefs dans `handler.ts`.

- Puis sur dans le dossier `/front`, exécutez `yarn generate` quand vous générer des _fichiers_ , la méthode recommandée par GraphQL Code Generator pour éviter les possibilités de duplications de codes générés

Allez sur le site GraphQL Code Generator pour plus d'informations sur `codegen.yml`.

**Important:** `/front/codegen.yml` et `/front/src/index.tsx` dépendent de _l'URL_ sur lequel `/back` opère. Aussi, le fichier `/back/handler.ts` dépend de _l'URL_ sur laquelle `/front` est servie.

## Pour lancer l'application en mode développement

1. Utiliser le fichier _.env.example_ pour créer votre propre fichier de configuration de variables d'environnement _.env.local_

2. Dans le dossier `/back`, lancer:

```bash
yarn install # ou bien npm install
yarn start # ou bien npm run start
```

3. Dans le dossier `/front`, lancer:

```bash
yarn install # ou bien npm install
yarn start # ou bien npm run start
```

## Pour le déploiement

2. Dans le dossier `/back`, utilisez un compte Serverless Framework pour lancer:

```bash
yarn install
sls deploy # ou bien serverless deploy
```

3. Dans le dossier `/front`, référez-vous [à la documentation Netlify](https://cli.netlify.com/commands/deploy/) pour paramétrer vos options de la commande deploy.

```bash
yarn install # ou bien npm install
netlify deploy
```
