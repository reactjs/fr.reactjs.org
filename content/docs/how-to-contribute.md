---
id: how-to-contribute
title: Comment contribuer
layout: contributing
permalink: docs/how-to-contribute.html
next: codebase-overview.html
redirect_from:
  - "contributing/how-to-contribute.html"
  - "tips/introduction.html"
---


<<<<<<< HEAD
React est l'un des premiers projets open source de Facebook qui est à la fois en développement intensif et utilisé en production sur les pages publiques de [facebook.com](https://www.facebook.com). Nous travaillons encore à faire qu’il soit aussi facile et transparent que possible de contribuer à ce projet, et ce chantier n'est pas terminé. Mais avec un peu de chance, ce document éclaircira le processus de contribution et répondra à certaines des questions que vous pourriez avoir.

### [Code de conduite](https://github.com/facebook/react/blob/master/CODE_OF_CONDUCT.md) {#code-of-conduct}
=======
### [Code of Conduct](https://github.com/facebook/react/blob/main/CODE_OF_CONDUCT.md) {#code-of-conduct}

Facebook has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it. Please read [the full text](https://github.com/facebook/react/blob/main/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28


Facebook a adopté le code de conduite [Contributor Covenant](https://www.contributor-covenant.org/) et nous nous attendons à ce que les participant·e·s au projet y adhèrent. Veuillez lire [le texte complet](https://github.com/facebook/react/blob/master/CODE_OF_CONDUCT.md) afin de comprendre quelles actions seront ou ne seront pas tolérées.

### Développement ouvert {#open-development}

Tout travail sur React se passe directement sur [GitHub](https://github.com/facebook/react). Les membres de l'équipe noyau *(core team, NdT)* tout comme les contributeurs externes y envoient leur _pull requests_, lesquelles passent à travers le même processus de revue.

<<<<<<< HEAD
### Gestion sémantique des versions {#semantic-versioning}
=======
Every significant change is documented in the [changelog file](https://github.com/facebook/react/blob/main/CHANGELOG.md).
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

React utilise une [gestion sémantique de version](https://semver.org/). Nous publions des versions de correctifs pour les corrections de bugs critiques, des versions mineures pour les nouvelles fonctionnalités et les modifications non-essentielles, et des versions majeures s'il y a rupture de la compatibilité ascendante. Quand nous introduisons de telles ruptures, nous ajoutons aussi des avertissements de dépréciation dans une version mineure afin que nos utilisateur·rice·s puissent se familiariser avec les changements à venir et migrer leur code en amont.  Vous pouvez en apprendre davantage sur notre engagement en termes de stabilité et de migration incrémentielle dans notre [politique de gestion des versions](/docs/faq-versioning.html).

<<<<<<< HEAD
Toute modification substancielle est documentée dans le [journal des modifications](https://github.com/facebook/react/blob/master/CHANGELOG.md).

### Organisation des branches {#branch-organization}
=======
Submit all changes directly to the [`main branch`](https://github.com/facebook/react/tree/main). We don't use separate branches for development or for upcoming releases. We do our best to keep `main` in good shape, with all tests passing.

Code that lands in `main` must be compatible with the latest stable release. It may contain additional features, but no breaking changes. We should be able to release a new minor version from the tip of `main` at any time.
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

Déposez toutes vos modifications directement sur la [branche `master`](https://github.com/facebook/react/tree/master).  Nous n’utilisons pas de branches séparées pour le développement et pour les versions à venir.  Nous faisons de notre mieux pour garder la branche `master` en bon état, avec des tests toujours au vert.

<<<<<<< HEAD
Le code qui atterrit dans `master` doit être compatible avec la dernière version stable.  Il peut contenir de nouvelles fonctionnalités, mais pas de rupture de compatibilité ascendante.  Nous devrions pouvoir sortir une version mineure à partir de la pointe de `master` à tout moment.

### Fonctionnalités condtionnelles {#feature-flags}
=======
To keep the `main` branch in a releasable state, breaking changes and experimental features must be gated behind a feature flag.

Feature flags are defined in [`packages/shared/ReactFeatureFlags.js`](https://github.com/facebook/react/blob/main/packages/shared/ReactFeatureFlags.js). Some builds of React may enable different sets of feature flags; for example, the React Native build may be configured differently than React DOM. These flags are found in [`packages/shared/forks`](https://github.com/facebook/react/tree/main/packages/shared/forks). Feature flags are statically typed by Flow, so you can run `yarn flow` to confirm that you've updated all the necessary files.
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

Afin de conserver la branche `master` dans un état sortable, les ruptures de compatibilité ascendante et les fonctionnalités expérimentales doivent être protégées par un drapeau de fonctionnalité conditionnelle.

Ces drapeaux sont définis dans [`packages/shared/ReactFeatureFlags.js`](https://github.com/facebook/react/blob/master/packages/shared/ReactFeatureFlags.js).  D‘une version de React à l’autre, des jeux de fonctionnalités conditionnelles distincts sont susceptibles d’être utilisés ; par exemple, React Native peut être configuré différemment de React DOM.  Ces variations sont signalées dans [`packages/shared/forks`](https://github.com/facebook/react/tree/master/packages/shared/forks). Les drapeaux de fonctionnalités conditionnelles sont généralement typés par Flow, de sorte que vous pouvez exécuter `yarn flow` pour confirmer que vous avez mis à jour tous les fichiers nécessaires.

Le système de construction de React retirera toutes les branches fonctionnelles désactivées avant publication.  Une routine d’intégration continue est exécutée à chaque commit pour auditer les évolutions de la taille du *bundle*.  Vous pouvez utiliser ces changements de taille comme confirmation que votre fonctionnalité a bien été périmétrée.

### Bugs {#bugs}

#### Où trouver les problèmes connus {#where-to-find-known-issues}

Nous utilisons les [GitHub Issues](https://github.com/facebook/react/issues) pour les bugs publics. Nous les surveillons attentivement et essayons d'être transparents sur le développement en cours d’un correctif interne. Avant de créer un nouveau ticket, essayez de vérifier que votre problème n'a pas déjà été signalé.

#### Signaler de nouveaux problèmes {#reporting-new-issues}

Le meilleur moyen d’obtenir un correctif pour votre problème consiste à en fournir une reproduction minimale. Cet [exemple JSFiddle](https://jsfiddle.net/Luktwrdm/) est un excellent point de départ.

#### Problèmes de sécurité {#security-bugs}

Facebook a un [programme de récompenses](https://www.facebook.com/whitehat/) pour la communication sécurisée de problèmes de sécurité. En conséquence, merci de ne pas créer de ticket public pour ça : suivez le processus expliqué sur la page du programme.

### Comment nous contacter {#how-to-get-in-touch}

* IRC : [#reactjs sur freenode](https://webchat.freenode.net/?channels=reactjs)
* [Forums de discussion](/community/support.html#popular-discussion-forums)

Au cas où vous auriez besoin d'aide avec React, il existe aussi [une communauté active d'utilisateurs de React sur la plate-forme de discussion Discord](https://www.reactiflux.com/).

### Proposer un changement {#proposing-a-change}

Si vous comptez proposer un changement de l'API publique ou faire un changement non trivial à l'implémentation, nous recommandons de [créer un ticket](https://github.com/facebook/react/issues/new). Ça nous permettra de nous mettre d'accord sur votre proposition avant que vous n'y investissiez un effort trop important.

Si vous corrigez seulement un bug, il est tout à fait acceptable d’envoyer directement une _pull request_, mais nous conseillons tout de même de créer d’abord un ticket détaillant ce que vous corrigez. C’est utile pour le cas où nous n'accepterions pas ce correctif spécifique mais souhaiterions garder une trace du problème.

### Votre première _pull request_ {#your-first-pull-request}

Vous travaillez sur votre première _pull request_ ? Vous pouvez apprendre comment faire ça au mieux grâce à cette série de vidéos gratuites (en anglais) :

<<<<<<< HEAD
**[Comment contribuer à un projet open source sur GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)**
=======
**[How to Contribute to an Open Source Project on GitHub](https://app.egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)**
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

Pour vous aider à vous jeter à l'eau et vous familiariser avec le processus de contribution, nous avons une liste de **[bons premiers tickets](https://github.com/facebook/react/issues?q=is:open+is:issue+label:"good+first+issue")** qui contient des bugs d’étendue relativement limitée.
C'est un excellent point de départ.

Si vous décidez de corriger un bug, assurez-vous de vérifier le fil de commentaires au cas où quelqu'un serait déjà en train de travailler dessus. Si personne n'est dessus, veuillez laisser un commentaire indiquant que vous comptez vous y attaquer pour éviter que d'autres personnes ne dupliquent votre travail par accident.

Si quelqu'un dit travailler sur un correctif mais ne donne pas de nouvelle pendant deux semaines, vous pouvez prendre la relève, mais vous devriez tout de même laisser un commentaire dans ce sens.

### Envoyer une _pull request_ {#sending-a-pull-request}

L'équipe noyau surveille les _pull requests_. Nous ferons une revue de la vôtre et soit nous la fusionnerons, soit nous vous demanderons des ajustements, soit nous la fermerons en expliquant pourquoi. Pour les changements d'API, nous aurons peut-être besoin d’ajuster notre utilisation interne à facebook.com, ce qui pourrait retarder la fusion. Nous ferons cependant de notre mieux pour vous tenir informé·e tout au long du processus.

**Avant d’envoyer une _pull request_,** suivez attentivement ces instructions :

<<<<<<< HEAD
1. [Forkez le dépôt](https://github.com/facebook/react/fork) et créez votre branche depuis `master`.
2. Lancez `yarn`  à la racine du dépôt.
3. Si vous avez corrigé un bug ou ajouté du code qui devrait être testé, ajoutez les tests !
4. Assurez-vous que tous les tests passent (`yarn test`). Astuce : `yarn test --watch NomDuTest` est très utile en phase de développement.
5. Lancez `yarn test-prod` pour tester dans l'environnement de production. Cette commande accepte les même options que `yarn test`.
6. Si vous avez besoin d'un débogueur, lancez `yarn debug-test --watch NomDuTest`, ouvrez `chrome://inspect`, et appuyez sur « Inspecter ».
7. Formattez votre code avec [prettier](https://github.com/prettier/prettier) (`yarn prettier`).
8. Assurez-vous que votre code passe la vérification du *linter* (`yarn lint`). Astuce : `yarn linc` ne vérifiera que les fichiers qui ont changé.
9. Lancez les vérifications de types [Flow](https://flowtype.org/) (`yarn flow`).
10. Si vous ne l'avez pas encore fait, remplissez le CLA (voir ci-dessous).
=======
1. Fork [the repository](https://github.com/facebook/react) and create your branch from `main`.
2. Run `yarn` in the repository root.
3. If you've fixed a bug or added code that should be tested, add tests!
4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch TestName` is helpful in development.
5. Run `yarn test --prod` to test in the production environment.
6. If you need a debugger, run `yarn debug-test --watch TestName`, open `chrome://inspect`, and press "Inspect".
7. Format your code with [prettier](https://github.com/prettier/prettier) (`yarn prettier`).
8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only check changed files.
9. Run the [Flow](https://flowtype.org/) typechecks (`yarn flow`).
10. If you haven't already, complete the CLA.
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

### Accord de licence de contribution (CLA) {#contributor-license-agreement-cla}

Afin que nous puissions accepter votre _pull request_, nous avons besoin que vous remplissiez un CLA *(Contributor License Agreement, NdT)*. Vous n’avez besoin de faire ça qu'une seule fois, donc si vous l'avez déjà fait pour un autre projet open source de Facebook, tout va bien. Si vous envoyez une _pull request_ pour la première fois, dites-nous simplement que vous avez déjà rempli le CLA et nous pourrons le vérifier sur base de votre identifiant GitHub.

**[Remplissez votre CLA ici.](https://code.facebook.com/cla)**

### Pré-requis pour contribuer {#contribution-prerequisites}

* Vous avez [Node](https://nodejs.org) installé en v8.0.0+ et [Yarn](https://yarnpkg.com/en/) en v1.2.0+.
* Vous avez le [JDK](https://www.oracle.com/technetwork/java/javase/downloads/index.html) installé.
* Vous avez `gcc` installé ou êtes à l'aise avec le fait d'installer un compilateur si besoin. Certaines de nos dépendances peuvent nécessiter une étape de compilation. Sur OS X, les outils de ligne de commande XCode s'en occupent. Sur Ubuntu, `apt-get install build-essential` installera les paquets nécessaires. Des commandes similaires devraient fonctionner pour d'autres distributions Linux. Windows nécessite quelques étapes supplémentaires, consultez les [instructions d'installation de `node-gyp`](https://github.com/nodejs/node-gyp#installation) pour plus de détails.
* Vous êtes à l’aise avec Git

### Workflow de développement  {#development-workflow}

Après avoir cloné votre fork de React, lancez `yarn` afin d’aller chercher les dépendances du projet.
Ensuite, vous pouvez lancer différentes commandes :

<<<<<<< HEAD
* `yarn lint` pour vérifier le style du code.
* `yarn linc` fonctionne comme `yarn lint` mais va plus vite car elle ne vérifie que les fichiers qui ont changé sur votre branche.
* `yarn test` lance la suite de tests complète.
* `yarn test --watch` lance un superviseur interactif de tests.
* `yarn test <motif>` lance les tests des fichiers dont le nom correspond au motif.
* `yarn test-prod` lance les tests dans l’environnement de production. Elle accepte toutes les mêmes options que `yarn test`.
* `yarn debug-test` fonctionne exactement comme `yarn test` mais avec un débogueur. Ouvrez `chrome://inspect` et appuyez sur « Inspecter ».
* `yarn flow` lance les vérifications de types [Flow](https://flowtype.org/).
* `yarn build` crée un dossier `build` avec tous les modules.
* `yarn build react/index,react-dom/index --type=UMD` crée des *builds* UMD seulement des modules indiqués, ici React et ReactDOM.

Nous recommandons d'utiliser `yarn test` (ou ses variations mentionnées ci-dessus) pour vous assurer de ne pas introduire de régressions en travaillant sur votre contribution. Cependant, il peut être pratique d'essayer votre build de React dans un vrai projet.
=======
* `yarn lint` checks the code style.
* `yarn linc` is like `yarn lint` but faster because it only checks files that differ in your branch.
* `yarn test` runs the complete test suite.
* `yarn test --watch` runs an interactive test watcher.
* `yarn test --prod` runs tests in the production environment.
* `yarn test <pattern>` runs tests with matching filenames.
* `yarn debug-test` is just like `yarn test` but with a debugger. Open `chrome://inspect` and press "Inspect".
* `yarn flow` runs the [Flow](https://flowtype.org/) typechecks.
* `yarn build` creates a `build` folder with all the packages.
* `yarn build react/index,react-dom/index --type=UMD` creates UMD builds of just React and ReactDOM.

We recommend running `yarn test` (or its variations above) to make sure you don't introduce any regressions as you work on your change. However, it can be handy to try your build of React in a real project.
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

Tout d’abord, lancez `yarn build`. Ça produira des _bundles_ pré-compilés dans le dossier `build`, et préparera les modules npm dans `build/packages`.

La manière la plus simple d'essayer vos modifications consiste à lancer `yarn build react/index,react-dom/index --type=UMD` et ensuite ouvrir `fixtures/packaging/babel-standalone/dev.html`. Ce fichier utilise déjà `react.development.js` depuis le dossier `build`, donc il utilisera vos évolutions.

<<<<<<< HEAD
Si vous voulez essayer vos évolutions dans votre projet React existant, vous pouvez copier `build/dist/react.development.js`, `build/dist/react-dom.development.js`, ou tout autre produit de la compilation dans votre appli et les utiliser au lieu de la version stable.
=======
If you want to try your changes in your existing React project, you may copy `build/node_modules/react/umd/react.development.js`, `build/node_modules/react-dom/umd/react-dom.development.js`, or any other build products into your app and use them instead of the stable version. 
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

Si votre projet utilise React via npm, vous pouvez supprimer `react` et `react-dom` dans ses dépendances et utiliser `yarn link` pour les faire pointer vers votre dossier local `build`. Remarquez qu’**au lieu de `--type=UMD` vous voudrez plutôt passer `--type=NODE` à la construction**. Vous aurez aussi besoin du module `scheduler` :

```sh
<<<<<<< HEAD
cd ~/chemin_vers_votre_clone_de_react/
yarn build react/index,react-dom/index,scheduler --type=NODE
=======
cd ~/path_to_your_react_clone/
yarn build react/index,react/jsx,react-dom/index,scheduler --type=NODE
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

cd build/node_modules/react
yarn link
cd build/node_modules/react-dom
yarn link

cd ~/chemin/vers/votre/projet
yarn link react react-dom
```

Chaque fois que vous lancez `yarn build` dans le dossier de React, les versions mises à jour apparaîtront dans le dossier `node_modules` de votre projet. Vous pouvez alors recompiler votre projet pour essayer vos modifications.

Si un module reste manquant (par ex. peut-être utilisez-vous `react-dom/server` dans votre projet), vous pouvez toujours faire une construction intégrale avec `yarn build`.  Gardez à l’esprit que l’exécution de `yarn build` sans options prend beaucoup de temps.

Nous exigeons tout de même que votre _pull request_ contienne des tests unitaires pour chaque nouvelle fonctionnalité. Ainsi nous pouvons nous assurer de ne pas casser votre code par la suite.

### Guide de style {#style-guide}

Nous utilisons un outil de formatage automatique appelé [Prettier](https://prettier.io/).
Lancez `yarn prettier` après avoir changé le code.

Ensuite, notre *linter* repèrera la plupart des problèmes qui pourraient exister dans votre code.
Vous pouvez vérifier l’état du style de votre code simplement en lançant `yarn linc`.

Cependant, il y a toujours certains styles que le *linter* ne peut pas remarquer. Si vous n'êtes pas sûr·e de votre coup, laissez-vous guider par le [Guide de style de Airbnb](https://github.com/airbnb/javascript).

### Appels à commentaires (RFC) {#request-for-comments-rfc}

Beaucoup de modifications, y compris les correctifs de bugs et les améliorations de la documentation, peuvent être implémentés et revus via le workflow normal de _pull requests_ sur GitHub.

Certaines évolutions sont cependant plus « substantielles », et nous demandons à ce que celles-ci passent par une petite phase de conception afin d’obtenir un consensus au sein de l’équipe noyau de React.

Le processus de « RFC » *(Request For Comments, NdT)* a pour but de fournir un chemin contrôlé et cohérent pour l'introduction de nouvelles fonctionnalités dans le projet. Vous pouvez apporter votre contribution en consultant le [dépôt des RFC](https://github.com/reactjs/rfcs).

### Licence {#license}

En contribuant à React, vous acceptez que toute contribution que vous apportez soit licenciée sous la licence MIT.

### Et maintenant ? {#what-next}

Lisez la [page suivante](/docs/codebase-overview.html) pour apprendre comment la base de code est organisée.
