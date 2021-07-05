---
id: release-channels
title: Canaux de sortie
permalink: docs/release-channels.html
layout: docs
category: installation
prev: cdn-links.html
next: hello-world.html
---

React dépend d’une communauté open source florissante pour signaler des bugs, ouvrir des *pull requests* et [soumettre des RFC](https://github.com/reactjs/rfcs). Afin d’encourager des retours efficaces nous partageons parfois des builds spéciaux de React qui comportent des fonctionnalités encore officieuses.

> Ce document sera surtout pertinent pour les développeur·se·s qui travaillent sur des frameworks, des bibliothèques ou de l’outillage de développement.  Les personnes qui utilisent React principalement pour construire des applications destinées à des utilisateurs finaux ne devraient pas avoir à se préoccuper de nos canaux de sortie.

Chaque canal de sortie React est conçu pour des cas d’usages bien spécifiques :

<<<<<<< HEAD
- [**Latest**](#latest-channel) fournit les versions stables de React, conformes à semver.  C’est ce que vous obtenez en installant React depuis npm.  C’est le canal que vous utilisez déjà aujourd’hui. **Utilisez ce canal pour toute application React visant des utilisateurs finaux.**
- [**Next**](#next-channel) est basée sur la branche `master` du dépôt de code source de React.  Considérez-le comme des versions candidates de la prochaine version semver mineure.  Utilisez-le pour faire des tests d’intégration entre React et des projets tiers.
- [**Experimental**](#experimental-channel) comprend les API et fonctionnalités expérimentales qu’on ne trouve pas dans les versions stables.  C’est là aussi basé sur la branche `master`, mais des drapeaux de fonctionnalités supplémentaires ont été activés.  Utilisez ce canal pour essayer des fonctionnalités à venir en amont de leur sortie officielle.

Toutes ces versions sont publiées sur npm, mais seul *Latest* utilise [une gestion sémantique des versions](/docs/faq-versioning.html). Les pré-versions (celles des canaux *Next* et *Experimental*) ont des versions dont l’identifiant est un hash basé sur leur contenu, par exemple `0.0.0-1022ee0ec` pour *Next* et `0.0.0-experimental-1022ee0ec` pour *Experimental*.
=======
- [**Latest**](#latest-channel) is for stable, semver React releases. It's what you get when you install React from npm. This is the channel you're already using today. **Use this for all user-facing React applications.**
- [**Next**](#next-channel) tracks the main branch of the React source code repository. Think of these as release candidates for the next minor semver release. Use this for integration testing between React and third party projects.
- [**Experimental**](#experimental-channel) includes experimental APIs and features that aren't available in the stable releases. These also track the main branch, but with additional feature flags turned on. Use this to try out upcoming features before they are released.

All releases are published to npm, but only Latest uses [semantic versioning](/docs/faq-versioning.html). Prereleases (those in the Next and Experimental channels) have versions generated from a hash of their contents and the commit date, e.g. `0.0.0-68053d940-20210623` for Next and `0.0.0-experimental-68053d940-20210623` for Experimental.
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

**Latest est le seul canal de sortie officiellement autorisé pour des applications visant les utilisateurs finaux.**  Les sorties des canaux *Next* et *Experimental* sont fournies dans une optique de tests uniquement, et leur comportement est susceptible de varier d’une sortie à l’autre.  Elles ne respectent pas le protocole semver que nous utilisons pour les sorties du canal *Latest*.

En publiant les pré-versions sur le même référentiel que pour les versions stables, nous pouvons tirer parti des nombreux outils qui se basent sur npm pour fonctionner, tels que [unpkg](https://unpkg.com) et [CodeSandbox](https://codesandbox.io).

### Canal *Latest* {#latest-channel}

Le canal *Latest* est utilisé pour les versions stables de React.  Il correspond à l’étiquette `latest` sur npm.  C’est le canal recommandé pour toute appli React proposée à de véritables utilisateurs.

**Si vous n’êtes pas sûr·e du canal que vous devriez utiliser, alors c’est *Latest*.**  Si vous développez avec React, c’est ce que vous utilisez déjà.

Vous pouvez vous attendre à ce que les mises à jour sur *Latest* soient extrêmement stables.  On y suit un protocole sémantique de gestion des versions.  Vous pouvez en apprendre davantage sur nos engagements en termes de stabilité et de migration incrémentielle en consultant notre [politique de gestion des versions](/docs/faq-versioning.html).

### Canal *Next* {#next-channel}

<<<<<<< HEAD
Le canal *Next* est un canal de pré-version qui piste la branche `master` du dépôt React.  Nous utilisons les pré-versions du canal *Next* comme des versions candidates pour le canal *Latest*.  Vous pouvez imaginer *Next* comme un sur-ensemble de *Latest*, mis à jour plus fréquemment.
=======
The Next channel is a prerelease channel that tracks the main branch of the React repository. We use prereleases in the Next channel as release candidates for the Latest channel. You can think of Next as a superset of Latest that is updated more frequently.
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

L’ampleur des changements entre la version *Next* la plus récente et la dernière version *Latest* est à peu près du même ordre que ce que vous trouveriez entre deux versions semver mineures.  En revanche, **le canal *Next* ne respecte pas la gestion sémantique des versions.**  Vous êtes susceptible d’y rencontrer des ruptures de compatibilité ascendante d’une version à la suivante.

**N’utilisez pas les pré-versions dans des applications pour utilisateurs finaux.**

<<<<<<< HEAD
Les sorties de *Next* sont publiées avec l’étiquette `next` sur npm.  Les numéros de versions sont générés sur la base d’un hash de leur contenu, par exemple `0.0.0-1022ee0ec`.
=======
Releases in Next are published with the `next` tag on npm. Versions are generated from a hash of the build's contents and the commit date, e.g. `0.0.0-68053d940-20210623`.
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

#### Utiliser le canal *Next* pour des tests d’intégration {#using-the-next-channel-for-integration-testing}

Le canal *Next* est conçu pour permettre des tests d’intégration entre React et d’autres projets qui se basent dessus.

Toutes les modifications apportées à React passent par une phase poussée de tests internes avant d’être publiées.  Cependant, l’écosystème React recèle une myriade d’environnements et de configurations, et il nous est parfaitement impossible de tester chaque combinaison.

Si vous êtes l’auteur·e d’une solution tierce pour React (framework, bibliothèque, outil de développement ou d’autres projets de type infrastructurel), vous pouvez nous aider à préserver la stabilité de React pour vos utilisateurs et la communauté React toute entière en exécutant régulièrement votre suite de tests avec les dernières modifications en date.  Si cela vous intéresse, suivez ces étapes :

- Mettez en place une tâche périodique au sein de votre plate-forme préférée d’intégration continue.  On trouve ce type d’exécutions périodiques tant dans [CircleCI](https://circleci.com/docs/2.0/triggers/#scheduled-builds) que dans [Travis CI](https://docs.travis-ci.com/user/cron-jobs/).
- Dans la tâche, mettez à jour les modules React à partir de la version la plus récente du canal *Next*, grâce à l’étiquette `next` sur npm.  Avec la CLI de npm :

  ```
  npm update react@next react-dom@next
  ```

  Ou avec Yarn :

  ```
  yarn upgrade react@next react-dom@next
  ```

- Exécutez votre suite de tests avec les modules ainsi mis à jour.
- Si tout fonctione, super !  Vous pouvez vous attendre à ce que votre projet continue à fonctionner avec la prochaine version mineure de React.
- Si quelque chose casse de façon inattendue, merci de nous le signaler en [créant un ticket](https://github.com/facebook/react/issues).

Le projet Next.js (promis, on n’a pas fait exprès !) utilise cette approche.  Vous pouvez consulter leur [configuration CircleCI](https://github.com/zeit/next.js/blob/c0a1c0f93966fe33edd93fb53e5fafb0dcd80a9e/.circleci/config.yml) à titre d’exemple.

<<<<<<< HEAD
### Canal *Experimental* {#experimental-channel}
=======
Like Next, the Experimental channel is a prerelease channel that tracks the main branch of the React repository. Unlike Next, Experimental releases include additional features and APIs that are not ready for wider release.
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

Tout comme *Next*, le canal *Experimental* est un canal de pré-versions qui piste la branche `master` du dépôt React.  Mais contrairement à *Next*, les sorties sur *Experimental* comportent des fonctionnalités et API qui ne sont pas encore prêtes à être diffusées plus largement.

En général, une mise à jour sur *Next* est accompagnée par une mise à jour correspondante sur *Experimental*.  Elles sont basées sur la même révision de source, mais sont construites avec des jeux distincts de drapeaux de fonctionnalités.

<<<<<<< HEAD
Les versions sur *Experimental* peuvent différer considérablement de celles sur *Next* et *Latest*. **N’utilisez pas les pré-versions *Experimental* dans les applications pour utilisateurs finaux.**  Vous pouvez vous attendre à des ruptures fréquentes de compatibilité ascendante dans les sorties du canal *Experimental*.
=======
Releases in Experimental are published with the `experimental` tag on npm. Versions are generated from a hash of the build's contents and the commit date, e.g. `0.0.0-experimental-68053d940-20210623`.
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

Les sorties de *Experimental* sont publiées avec l’étiquette `experimental` sur npm.  Les numéros de versions sont générés sur la base d’un hash de leur contenu, par exemple `0.0.0-experimental-1022ee0ec`.

#### Que trouve-t-on dans une sortie *Experimental* ? {#what-goes-into-an-experimental-release}

Les fonctionnalités expérimentales ne sont pas encore prêtes à être livrées à un large public, et sont susceptibles de changer radicalement d’ici leur finalisation.  Certaines expériences n’aboutiront peut-être même jamais—c’est justement pour tester la viabilité de changements proposés que nous avons ces expériences.

Par exemple, si le canal *Experimental* avait existé quand nous avons annoncé les Hooks, nous aurions sorti les Hooks sur le canal *Experimental* plusieurs semaines avant qu’ils deviennent disponibles dans *Latest*.

Vous trouverez peut-être utile de lancer des tests d‘intégration avec *Experimental*.  Libre à vous.  Ceci dit, gardez bien à l’esprit que *Experimental* est encore moins stable que *Next*. **Nous ne garantissons aucune stabilité d’une version de *Experimental* à une autre.**

#### Comment en apprendre davantage sur les fonctionnalités expérimentales ? {#how-can-i-learn-more-about-experimental-features}

Les fonctionnalités expérimentales ne sont pas nécessairement documentées.  Le plus souvent, les expériences ne sont documentées qu’une fois qu’elles sont sur le point d’être livrées dans *Next* ou *Latest*.

Si une fonctionnalité n’est pas documentée, elle peut toutefois être accompagnée d’une [RFC](https://github.com/reactjs/rfcs).

<<<<<<< HEAD
Lorsque nous sommes prêts à annoncer de nouvelles expériences, nous en parlons sur le [blog React](/blog), mais ça ne veut pas dire que nous annonçons chaque expérience.

Vous pouvez toujours vous référer à l’[historique](https://github.com/facebook/react/commits/master) de notre dépôt public sur GitHub pour une liste exhaustive des modifications.
=======
You can always refer to our public GitHub repository's [history](https://github.com/facebook/react/commits/main) for a comprehensive list of changes.
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28
