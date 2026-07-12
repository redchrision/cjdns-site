# Archived project copy — for reference
NOTE (site v3): the site no longer has an Open Source Lab section or per-project
pages, so the restore instructions below no longer apply literally. This copy is
kept as source material for the project's own launch (announcement text, site,
or a future case-study section).
# Original header: Archived project copy — restore at public launch

This project was removed from the site pending its public announcement.
To restore: paste each block below as the last entry of the EN and FR `projects`
arrays in `src/i18n.jsx`, delete the two `lab.teaser` blocks, and restore
"applied-AI" in the hero leads and meta descriptions (EN + FR + index.html).
Note: `impact` lives inside `facts` and is rendered by the Impact panel.

## EN block
```js
      {
        slug: 'calvad',
        name: 'Calvad',
        tag: 'Applied AI · Documents',
        funding: 'CJDNS OSS Lab',
        text: 'A self-hostable document extraction engine born in our lab. Every extracted value is verified against the source document — verified or dropped, never invented. AGPL-3.0, built in Normandy.',
        repo: '', // TODO: add repository URL — the source button appears once set
        page: {
          summary:
            'Calvad is a self-hostable document extraction engine born in the CJDNS lab. Its founding rule is simple: every extracted value is verified against the source document — verified or dropped, never invented.',
          body: [
            'Document extraction powered by large language models has a known failure mode: confident answers that are not in the document. Calvad is built around a hard gate against that failure. Each extracted value must be traceable to an exact span in the source; anything that cannot be verified is dropped rather than guessed. The output you get is smaller, and true.',
            'Calvad reads documents exhaustively rather than retrieving fragments — every decision is logged, so an extraction can be audited after the fact. It runs entirely on your own infrastructure: for legal, medical and administrative documents, the data never needs to leave your machines.',
            'The engine is released under AGPL-3.0 and developed in Normandy — Calvad, like the region’s better-known export, is a matter of distillation: many pages in, only the verified essence out.',
          ],
          facts: {
            status: 'In development — MVP autumn 2026',
            license: 'AGPL-3.0',
            funding: 'CJDNS OSS Lab',
            role: 'Founded and built at CJDNS',
            impact: 'Gives confidentiality-bound professions — notaries, lawyers, researchers, local administrations — document automation whose every output is verifiable, on infrastructure they control.',
          },
        },
      },
```

## FR block
```js
      {
        slug: 'calvad',
        name: 'Calvad',
        tag: 'IA appliquée · Documents',
        funding: 'Lab OSS CJDNS',
        text: 'Un moteur d’extraction documentaire auto-hébergeable, né dans notre lab. Chaque valeur extraite est vérifiée dans le document source — vérifiée ou écartée, jamais inventée. AGPL-3.0, conçu en Normandie.',
        repo: '', // TODO: add repository URL — the source button appears once set
        page: {
          summary:
            'Calvad est un moteur d’extraction documentaire auto-hébergeable, né dans le lab CJDNS. Sa règle fondatrice est simple : chaque valeur extraite est vérifiée dans le document source — vérifiée ou écartée, jamais inventée.',
          body: [
            'L’extraction documentaire par grands modèles de langage a un défaut connu : des réponses assurées… qui ne figurent pas dans le document. Pour un usage occasionnel, c’est un agacement. Pour des documents juridiques, médicaux ou administratifs, c’est rédhibitoire.',
            'Calvad est construit autour d’un garde-fou strict contre ce défaut. Chaque valeur extraite doit être rattachée à un passage exact du document source ; ce qui ne peut être vérifié est écarté plutôt que deviné. Le moteur lit les documents de manière exhaustive plutôt que par fragments, et chaque décision est journalisée : une extraction peut être auditée après coup. Le tout s’exécute entièrement sur votre propre infrastructure — les données n’ont jamais besoin de quitter vos machines.',
            'Le moteur est publié sous licence AGPL-3.0 et développé en Normandie — Calvad, comme l’illustre produit du terroir voisin, est une affaire de distillation : beaucoup de pages en entrée, seule l’essence vérifiée en sortie.',
          ],
          facts: {
            status: 'En développement — MVP automne 2026',
            license: 'AGPL-3.0',
            funding: 'Lab OSS CJDNS',
            role: 'Fondé et développé chez CJDNS',
            impact: 'Offre aux professions soumises au secret — notaires, avocats, chercheurs, collectivités — une automatisation documentaire dont chaque résultat est vérifiable, sur une infrastructure qu’elles contrôlent.',
          },
        },
      },
```
