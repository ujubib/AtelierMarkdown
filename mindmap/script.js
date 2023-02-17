((getMarkmap, getOptions, root, jsonOptions) => {
    const markmap = getMarkmap();
    window.mm = markmap.Markmap.create('svg#mindmap', (getOptions || markmap.deriveOptions)(jsonOptions), root);
})(() => window.markmap, null, {
    "type": "root",
    "depth": 0,
    "content": "",
    "children": [{
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [1, 2]
        },
        "content": "Généralités <em>Markdown</em>, <em>notes</em>, <em>pkm</em>...",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [3, 4]
            },
            "content": "Définitions <em>Wikipedia</em>",
            "children": [{
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [5, 6]
                },
                "content": "<a href=\"https://fr.wikipedia.org/wiki/Markdown\">Markdown</a>"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [6, 7]
                },
                "content": "<a href=\"https://fr.wikipedia.org/wiki/Zettelkasten\">Zettelkasten</a>"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [7, 8]
                },
                "content": "<a href=\"https://fr.wikipedia.org/wiki/Bullet_Journal\">Bullet Journal</a>"
            }]
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [9, 10]
            },
            "content": "<em>The Programming Historian</em>",
            "children": [{
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [11, 12]
                },
                "content": "<a href=\"https://programminghistorian.org/en/lessons/getting-started-with-markdown\">Getting Started with Markdown</a> - 2015 (màj 2020)",
                "children": [{
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [12, 13]
                    },
                    "content": "fr : <a href=\"https://programminghistorian.org/fr/lecons/debuter-avec-markdown\">Débuter avec Markdown</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [13, 14]
                    },
                    "content": "es : <a href=\"https://programminghistorian.org/es/lecciones/introduccion-a-markdown\">Introducción a Markdown</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [14, 15]
                    },
                    "content": "pt : <a href=\"https://programminghistorian.org/pt/licoes/introducao-ao-markdown\">Introdução ao Markdown</a>"
                }]
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [16, 17]
                },
                "content": "<a href=\"https://programminghistorian.org/en/lessons/sustainable-authorship-in-plain-text-using-pandoc-and-markdown\">Sustainable Authorship in Plain Text using Pandoc and Markdown</a> - 2014 (màj 2022)",
                "children": [{
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [17, 18]
                    },
                    "content": "fr : <a href=\"https://programminghistorian.org/fr/lecons/redaction-durable-avec-pandoc-et-markdown\">Rédaction durable avec Pandoc et Markdown</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [18, 19]
                    },
                    "content": "es : <a href=\"https://programminghistorian.org/es/lecciones/escritura-sostenible-usando-pandoc-y-markdown\">Escritura sostenible en texto plano usando Pandoc y Markdown</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [19, 20]
                    },
                    "content": "pt : <a href=\"https://programminghistorian.org/pt/licoes/autoria-sustentavel-texto-simples-pandoc-markdown\">Autoria Sustentável em Texto Simples usando Pandoc e Markdown</a>"
                }]
            }]
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [21, 22]
            },
            "content": "<a href=\"https://www.arthurperret.fr\">Le blog d'<em>Arthur Perret</em></a>",
            "children": [{
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [23, 24]
                },
                "content": "Des <strong>articles</strong> scientifiques",
                "children": [{
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [25, 26]
                    },
                    "content": "<a href=\"https://archivesic.ccsd.cnrs.fr/sic_02480515\">Surfer dans l’Otletosphère. Des outils pour visualiser et interroger le réseau de Paul Otlet</a> (2019) Avec Olivier Le Deuff, Jean David &amp; Clément Borel"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [26, 27]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/articles/2020-09-09-fonction-documentaire-preuve-donnees-numeriques.html\">Fonction documentaire de preuve et données numériques</a> (2021)"
                }]
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [28, 29]
                },
                "content": "Des <strong>billets</strong> de blog",
                "children": [{
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [30, 31]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/blog/2022-01-21-prise-de-notes-a-la-main-ou-ordinateur.html\">Prise de notes : à la main ou à l’ordinateur ?</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [31, 32]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/blog/2022-02-13-a-quoi-sert-une-vue-graphe.html\">À quoi sert une vue graphe ?</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [32, 33]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/blog/2022-05-20-et-toi-qu-est-ce-que-tu-fiches.html\">Et toi, qu’est-ce que tu fiches ?</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [33, 34]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/blog/2022-10-25-markdown-traitement-de-texte-methode-pour-collaborer.html\">Markdown et traitement de texte : une méthode pour collaborer</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [34, 35]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/blog/2022-04-11-pourquoi-tenir-un-blog-scientifique.html\">Pourquoi tenir un blog scientifique</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [35, 36]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/blog/2021-06-11-du-notebook-au-bloc-code.html\">Du notebook au bloc-code</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [36, 37]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/blog/2020-11-23-fiche-graphe-documentaire.html\">De la fiche au graphe documentaire</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [37, 38]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/blog/2020-05-22-ecrire-et-editer.html\">Écrire et éditer</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [38, 39]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/blog/2018-12-04-semantique-et-mise-en-forme.html\">Sémantique et mise en forme, ouvrir la boîte de Pandoc ?</a>"
                }]
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [40, 41]
                },
                "content": "Des <strong>Supports de cours</strong>",
                "children": [{
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [42, 43]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/cours/bibliographie.html\">Bibliographie</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [43, 44]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/cours/ecriture-scientifique-format-texte.html\">Écriture scientifique au format texte</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [44, 45]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/cours/expressions-regulieres.html\">Expressions régulières</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [45, 46]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/cours/flux-web.html\">Flux web</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [46, 47]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/cours/format-texte.html\">Format texte</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [47, 48]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/cours/markdown.html\">Markdown</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [48, 49]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/cours/pandoc.html\">Pandoc</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [49, 50]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/cours/publication-web.html\">Publication web</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [50, 51]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/cours/recherche-information-veille.html\">Recherche d’information et veille</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [51, 52]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/cours/serialisation.html\">Sérialisation de données</a>"
                }]
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [53, 54]
                },
                "content": "De la <strong>veille</strong>",
                "children": [{
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [55, 56]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/veille/2022-12-26-un-convertisseur-obsidian-cosma.html\">Un convertisseur Obsidian-Cosma</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [56, 57]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/veille/2022-12-04-l-art-de-documenter.html\">L’art de documenter</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [57, 58]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/veille/2022-11-30-fusionner-medias-sociaux-et-flux-web.html\">Fusionner médias sociaux et flux web</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [58, 59]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/veille/2022-11-04-standoff-baliser-a-part.html\">Standoff : baliser à part</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [59, 60]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/veille/2022-11-04-revue-cambouis.html\">La revue Cambouis</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [60, 61]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/veille/2022-11-03-pourrissement-bibliographique.html\">Pourrissement bibliographique</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [61, 62]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/veille/2022-10-22-mise-au-point-salutaire-sur-la-methode-zettelkasten.html\">Une mise au point salutaire sur la “méthode Zettelkasten”</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [62, 63]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/veille/2022-10-19-actualite-de-la-note-de-bas-de-page.html\">Actualité de la note de bas de page</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [63, 64]
                    },
                    "content": "<a href=\"https://www.arthurperret.fr/veille/2022-10-13-critique-du-pkm.html\">Critique de la gestion des connaissances personnelles (PKM)</a>"
                }]
            }]
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [65, 66]
            },
            "content": "Supports de <strong>formations</strong>",
            "children": [{
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [67, 68]
                },
                "content": "Supports du <a href=\"https://www.stretchingnumerique.fr\"><em>Stretching numérique</em></a> 2022",
                "children": [{
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [68, 69]
                    },
                    "content": "<a href=\"https://zenodo.org/record/6344346\">Le markdown comme syntaxe universelle</a> - Damien Belvèze"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [69, 70]
                    },
                    "content": "<a href=\"https://zenodo.org/record/6366116\">Supports de formation Obsidian - Markdown</a> - Jean-Baptiste Monat"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [70, 71]
                    },
                    "content": "<a href=\"https://zenodo.org/record/6077289\">Support de formation HTML- CSS pour débutants</a> - Jean-Baptiste Monat"
                }]
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [72, 73]
                },
                "content": "Slides de l’<em>Atelier BU</em> (UPPA-SCD) <a href=\"https://atelier-markdown-uppa.netlify.app/#/\">Prendre des notes et rédiger en Markdown</a> avec <em>Obsidian</em>, <em>Zettlr</em>, <em>Pandoc</em> et <em>Zotero</em> - Julien Rabaud - 2021"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [74, 75]
                },
                "content": "Tuto@MATE - <a href=\"https://mate-shs.cnrs.fr/actions/tutomate/tuto51-markdown-mathelier/\">Markdown pour les SHS</a> - <em>Daphné Mathelier</em> - 2023-02-03"
            }]
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [76, 77]
            },
            "content": "<a href=\"https://debugue.ecrituresnumeriques.ca\">Débugue tes humanités</a> - <em>Antoine Fauchié</em>",
            "children": [{
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [80, 81]
                },
                "content": "<strong>Saison 1</strong> (2021 - 11 séances)",
                "children": [{
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [82, 84]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-01-introduction/\" title=\"Séance 01 - Introduction\">01 - Introduction</a><br>\nIntroduction à la formation"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [85, 87]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-02-informatique/\" title=\"Séance 02 - L'informatique en 3 points\">02 - L'informatique en 3 points</a><br>\nOrigines de l'informatique, principes du numérique et qu'est-ce qu'un programme."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [88, 90]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-03-formats/\" title=\"Séance 03 - Les formats\">03 - Les formats</a><br>\nDéfinitions, implications techniques et politiques, encodage et ouverture."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [91, 93]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-04-fichiers/\" title=\"Séance 04 - Gérer ses fichiers\">04 - Gérer ses fichiers</a><br>\nOù sont les fichiers sur un ordinateur, usages basiques d'un terminal, les nuages."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [94, 96]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-05-terminal/\" title=\"Séance 05 - Tout savoir sur le terminal\">05 - Tout savoir sur le terminal</a><br>\nCommandes basiques, commandes avancées, grep, bash et oh my zsh."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [97, 99]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-06-structurer/\" title=\"Séance 06 - Structurer du texte\">06 - Structurer du texte</a><br>\nLe problème des traitements de texte, baliser le texte, les langages de balisage."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [100, 102]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-07-bibliographie/\" title=\"Séance 07 - Structurer une bibliographie\">07 - Structurer une bibliographie</a><br>\nDéfinition, les styles bibliographiques, introduction à Zotero."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [103, 105]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-08-produire-des-documents/\" title=\"Séance 08 - Produire des documents\">08 - Produire des documents</a><br>\nStructuration du texte, introduction à Pandoc et manipulations."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [106, 108]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-09-zotero-avance/\" title=\"Séance 09 - Utilisation avancée de Zotero\">09 - Utilisation avancée de Zotero</a><br>\nOrganiser sa bibliographie, les groupes, BetterBibTeX."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [109, 111]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-10-imprimer/\" title=\"Séance 10 - Imprimer des documents\">10 - Imprimer des documents</a><br>\nIntroduction à LaTeX, manipulations, Paged.js."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [112, 114]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-11-versionner/\" title=\"Séance 11 - Versionner les fichiers\">11 - Versionner les fichiers</a><br>\nIntroduction à Git, exemples de projets, manipulations."
                }]
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [115, 116]
                },
                "content": "<strong>Saison 2</strong> (2022 - 9 séances)",
                "children": [{
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [117, 119]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-01-parametrer-son-terminal/\" title=\"Séance 01 - Paramétrer son terminal\">01 - Paramétrer son terminal</a><br>\nInstallation de Zsh et de Oh My Zsh, modification de l'apparence. Découverte des fonctions avancées offertes par Zsh. Navigation dans l'historique."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [120, 122]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-02-editeurs-de-code/\" title=\"Séance 02 - Des éditeurs de code et de texte\">02 - Des éditeurs de code et de texte</a><br>\nNano, Vim, EMACS et VSCodium, exploration des possibilités offertes par des approches différentes."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [123, 125]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-03-bash/\" title=\"Séance 03 - Bash ou comment industrialiser le terminal\">03 - Bash ou comment industrialiser le terminal</a><br>\nDécouverte de Bash, création de quelques scripts, détournements créatifs."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [126, 128]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-04-actions-a-repetitions/\" title=\"Séance 04 - Actions à répétition\">04 - Actions à répétition</a><br>\nRenommage de fichiers en lot et autres introductions à la programmation."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [129, 131]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-05-ssh/\" title=\"Séance 05 - SSH et les connexions à distance\">05 - SSH et les connexions à distance</a><br>\nComment rentrer en contact avec d'autres machines, seul·e ou à plusieurs."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [132, 134]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-06-sauvegarder/\" title=\"Séance 06 - Sauvegarder ses données\">06 - Sauvegarder ses données</a><br>\nPourquoi et comment sauvegarder ses données dans un contexte de recherche académique. Principes, organisation et implémentation technique."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [135, 137]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-07-git-le-retour/\" title=\"Séance 07 - Git le retour\">07 - Git le retour</a><br>\nUsage réel, paramètres et configuration, gestion des conflits, merge requests, etc."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [138, 140]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-08-fabriquer-des-pages-web/\" title=\"Séance 08 - Fabriquer des pages web\">08 - Fabriquer des pages web</a><br>\nIntroduction à HTML et CSS, conversions à partir de Markdown avec Pandoc."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [141, 143]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-09-fabriquer-des-sites-web/\" title=\"Séance 09 - Fabriquer des sites web\">09 - Fabriquer des sites web</a><br>\nIntroduction aux générateurs de site statique, création d'un mini site web depuis un modèle."
                }]
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [144, 145]
                },
                "content": "<strong>Saison 3</strong> - <em>Littératie numérique</em> (2023, en cours)",
                "children": [{
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [146, 148]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-01-gerer-les-fichiers/\" title=\"Séance 01 - Comprendre l'ordinateur avec le terminal\">01 - Comprendre l'ordinateur avec le terminal</a><br>\nOù sont les fichiers sur un ordinateur. Le terminal."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [149, 151]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-02-le-terminal/\" title=\"Séance 02 - Gérer les fichiers avec le terminal\">02 - Gérer les fichiers avec le terminal</a><br>\nLe terminal. Commandes basiques et avancées."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [152, 154]
                    },
                    "content": "03 - Les formats des fichiers - <em>2023-02-14</em><br>\nDéfinitions et usages. Markdown, HTML, PDF."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [155, 157]
                    },
                    "content": "04 - Git - <em>2023-03-28</em><br>\nLe versionnement des documents."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [158, 160]
                    },
                    "content": "05 - Zotero - <em>2023-04-25</em><br>\nUsages avancés de Zotero."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [161, 163]
                    },
                    "content": "06 - Introduction à l'éditeur de texte Stylo - <em>2023-05-16</em><br>\nUn éditeur de texte pour les sciences humaines."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [164, 166]
                    },
                    "content": "07 - Produire des documents - <em>2023-06-13</em><br>\nStylo, Zettlr, Pandoc. Comment convertir des fichiers en différents formats."
                }]
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [167, 168]
                },
                "content": "<strong>Saison 3</strong> - <em>Avancé</em> (2023, en cours)",
                "children": [{
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [169, 171]
                    },
                    "content": "<a href=\"https://debugue.ecrituresnumeriques.ca/seance-01-langages-de-balisage/\" title=\"Séance 01 - Les langages de balisage\">01 - Les langages de balisage</a><br>\nDe Markdown à HTML et XML. Le balisage sémantique."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [172, 174]
                    },
                    "content": "02 - Introduction au CSS - <em>2023-03-14</em><br>\nPour mettre en forme les documents au format HTML."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [175, 177]
                    },
                    "content": "03 - Introduction à Javascript - <em>2023-04-11</em><br>\nPour développer des interactions sur le Web."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [178, 180]
                    },
                    "content": "04 - Générateur de site statique (1/2) - <em>2023-05-09</em><br>\nComment transformer des fichiers textes en page Web HTML."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [181, 183]
                    },
                    "content": "05 - Générateur de site statique (2/2) - <em>2023-05-30</em><br>\nLe déploiement d'un site sur le Web grâce au service GitHub Pages."
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [184, 186]
                    },
                    "content": "06 - paged.js - <em>2023-06-20</em><br>\nFaire du Web to print et transformer des contenus HTML en PDF depuis un navigateur."
                }]
            }]
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [189, 190]
        },
        "content": "Liens officiels <strong>Obsidian</strong>",
        "children": [{
            "type": "list_item",
            "depth": 2,
            "payload": {
                "lines": [191, 192]
            },
            "content": "<a href=\"https://obsidian.md/\">Page d'accueil</a>"
        }, {
            "type": "list_item",
            "depth": 2,
            "payload": {
                "lines": [192, 193]
            },
            "content": "<a href=\"https://help.obsidian.md/Obsidian/Index\">Aide Officielle</a>",
            "children": [{
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [193, 194]
                },
                "content": "Section <em>How to</em>",
                "children": [{
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [194, 195]
                    },
                    "content": "<a href=\"https://help.obsidian.md/How+to/Basic+note+taking\">Basic note taking</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [195, 196]
                    },
                    "content": "<a href=\"https://help.obsidian.md/How+to/Working+with+tags\">Working with tags</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [196, 197]
                    },
                    "content": "<a href=\"https://help.obsidian.md/How+to/Use+callouts\">Use callouts</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [197, 198]
                    },
                    "content": "<a href=\"https://help.obsidian.md/How+to/Multiple+cursors\">Multiple cursors</a>"
                }]
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [198, 199]
                },
                "content": "Section <em>Plugins</em>",
                "children": [{
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [199, 200]
                    },
                    "content": "<a href=\"https://help.obsidian.md/Plugins/Backlinks\">Backlinks</a> / <a href=\"https://help.obsidian.md/Plugins/Outgoing+links\">Outgoing links</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [200, 201]
                    },
                    "content": "<a href=\"https://help.obsidian.md/Plugins/Canvas\">Canvas</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [201, 202]
                    },
                    "content": "<a href=\"https://help.obsidian.md/Plugins/Graph+view\">Graph view</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [202, 203]
                    },
                    "content": "<a href=\"https://help.obsidian.md/Plugins/Templates\">Templates</a>"
                }]
            }]
        }, {
            "type": "list_item",
            "depth": 2,
            "payload": {
                "lines": [203, 204]
            },
            "content": "<a href=\"https://forum.obsidian.md\">Forum web</a>",
            "children": [{
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [204, 205]
                },
                "content": "<a href=\"https://discord.com/invite/obsidianmd\">Discord</a>"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [205, 206]
                },
                "content": "<a href=\"https://twitter.com/obsdmd\">Twitter</a>"
            }]
        }, {
            "type": "list_item",
            "depth": 2,
            "payload": {
                "lines": [206, 207]
            },
            "content": "<a href=\"https://www.youtube.com/channel/UCRP5KXKq8Ytc6IH06VWRmkQ\">YouTube channel</a>"
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [208, 209]
        },
        "content": "Billets de blog",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [210, 211]
            },
            "content": "Sur Obsidian en général",
            "children": [{
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [212, 213]
                },
                "content": "<a href=\"https://sidoine.substack.com/p/second-cerveau\">Second Cerveau</a> - <em>Sidoine’s Newsletter</em> - 2022-11-11"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [213, 214]
                },
                "content": "<a href=\"https://cerveau-numerique.fr/obsidian/comment-parametrer-obsidian-pour-bien-debuter/\">Comment paramétrer Obsidian pour bien débuter ?</a> - <em>Cerveau numérique</em> - 2021-10-24"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [214, 216]
                },
                "content": "<a href=\"https://outilsnum.fr/obsidian-liens-notes/\">Obsidian montre les liens entre vos notes [MàJ Sep 2022]</a> - <em>Outils Numériques</em><br>\n(Une version pour mobiles a été publiée depuis.)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [216, 217]
                },
                "content": "<a href=\"https://blog.cyberethical.me/note-taking-obsidian\">Move Your Notes to Obsidian Right Now Mind-mapping app for Markdown freaks (myself included)</a> - <em>CyberEthical.Me: Hacking for the Security Awareness</em> - 2022-11-08"
            }]
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [218, 219]
            },
            "content": "Obsidian + Zotero",
            "children": [{
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [220, 221]
                },
                "content": "<a href=\"https://medium.com/@alexandraphelan/an-academic-workflow-zotero-obsidian-56bf918d51ab\">An Academic Workflow: Zotero &amp; Obsidian</a> - <em>Alexandra Phelan | Medium</em> - 2022-04-10"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [221, 222]
                },
                "content": "<a href=\"https://www.marianamontes.me/post/obsidian-and-zotero/\">Obsidian and Zotero</a> - <em>Mariana Montes Blog</em> - 2021-11-06"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [222, 223]
                },
                "content": "<a href=\"https://ilyashabanov.substack.com/p/note-taking-system-for-success-in\">Note Taking System For Success in Academia</a> - <em>Ilya Shabanov</em> - 2022-12-14"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [223, 224]
                },
                "content": "<a href=\"https://publish.obsidian.md/history-notes/01+Notetaking+for+Historians\">Doing history with Zotero and Obsidian</a> - <em>Elena Razlogova</em>, History Department, Concordia University, Montreal. [Carnet <em>Obsidian Publish</em>]"
            }]
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [225, 226]
            },
            "content": "Obsidian + Pandoc",
            "children": [{
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [227, 228]
                },
                "content": "<a href=\"https://www.mara-li.fr/outils/tutoriel/Pandoc%2C%20Obsidian%2C%20la%20fac%20%26%20zotero/\">Pandoc, Obsidian, la fac &amp; zotero</a> - <em>Seed</em> - 2023-01-02"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [228, 229]
                },
                "content": "<a href=\"https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/Guides/Using+Pandoc+inside+Obsidian\">Using Pandoc inside Obsidian</a> - <em>SkepticMystic</em> sur <a href=\"https://publish.obsidian.md/hub/00+-+Start+here\"><em>Obsidian Hub</em></a> -"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [229, 230]
                },
                "content": "Version <em>video</em>  avec chapitrage : <a href=\"https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/Community+Talks/YT+-+Pandoc+and+Obsidian+-+Create+slideshows%2C+PDFs+and+Word+documents\">Pandoc and Obsidian - Create slideshows, PDFs and Word documents</a> - <em>SkepticMystic</em> - <em><a href=\"https://publish.obsidian.md/hub/01+-+Community/Events/Obsidian+Community+Talks\">Obsidian Community Talks</a></em>"
            }]
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [231, 232]
        },
        "content": "Plugins",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [233, 234]
            },
            "content": "<strong>Markdown</strong> pour <em>Zotero</em>",
            "children": [{
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [235, 236]
                },
                "content": "<a href=\"https://retorque.re/zotero-better-bibtex/\">Better BibTeX for Zotero</a>"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [236, 237]
                },
                "content": "<a href=\"https://github.com/windingwind/zotero-better-notes/wiki/0-Documentation-Introduction-About.en\">Better Notes</a>"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [237, 238]
                },
                "content": "<a href=\"https://argentinaos.com/zotero-mdnotes/\">MDnotes for Zotero</a>"
            }]
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [239, 240]
            },
            "content": "<strong>Biblio</strong> pour <em>Obsidian</em>",
            "children": [{
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [241, 242]
                },
                "content": "Autour de <em>Zotero</em>",
                "children": [{
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [243, 244]
                    },
                    "content": "<em>obsidian-zotero</em>",
                    "children": [{
                        "type": "list_item",
                        "depth": 5,
                        "payload": {
                            "lines": [244, 245]
                        },
                        "content": "<a href=\"https://obzt.aidenlx.top/getting-started/install/obsidian\">Obsidian Plugin Setup</a> (installer avec <a href=\"https://github.com/TfTHacker/obsidian42-brat/\">BRAT plugin</a>)"
                    }, {
                        "type": "list_item",
                        "depth": 5,
                        "payload": {
                            "lines": [245, 246]
                        },
                        "content": "<a href=\"https://obzt.aidenlx.top/getting-started/install/zotero\">Zotero Plugin Setup</a>"
                    }]
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [246, 247]
                    },
                    "content": "<a href=\"https://github.com/hans/obsidian-citation-plugin\">Citations</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [247, 248]
                    },
                    "content": "<a href=\"https://github.com/stefanopagliari/bibnotes\">BibNotes Formatter</a> (installer avec <a href=\"https://github.com/TfTHacker/obsidian42-brat/\">BRAT plugin</a>)"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [248, 249]
                    },
                    "content": "<em>Zotero Integration</em>",
                    "children": [{
                        "type": "list_item",
                        "depth": 5,
                        "payload": {
                            "lines": [249, 250]
                        },
                        "content": "anciennement <em>Zotero Desktop Connector</em>"
                    }]
                }]
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [251, 252]
                },
                "content": "Autour de <em>Pandoc</em>",
                "children": [{
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [253, 254]
                    },
                    "content": "<a href=\"https://github.com/mgmeyers/obsidian-pandoc-reference-list\">Pandoc Reference List</a>"
                }, {
                    "type": "list_item",
                    "depth": 4,
                    "payload": {
                        "lines": [254, 255]
                    },
                    "content": "<a href=\"https://github.com/mokeyish/obsidian-enhancing-export\">Obsidian Enhancing Export Plugin</a>",
                    "children": [{
                        "type": "list_item",
                        "depth": 5,
                        "payload": {
                            "lines": [255, 256]
                        },
                        "content": "Meilleur que <em>Pandoc Plugin</em>"
                    }]
                }]
            }]
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [257, 258]
            },
            "content": "Autres plugins pour <em>Obsidian</em> (parmi 800+)",
            "children": [{
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [259, 261]
                },
                "content": "<a href=\"https://github.com/tgrosinger/advanced-tables-obsidian\">Advanced Tables</a><br>\n(Outils et boutons pour mieux gérer les tableaux : tri, etc.)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [261, 262]
                },
                "content": "<a href=\"https://github.com/liamcain/obsidian-calendar-plugin\">Calendar</a>"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [262, 264]
                },
                "content": "<a href=\"https://github.com/delashum/obsidian-checklist-plugin\">Checklist</a><br>\n(inventorie les cases à cocher (<code>- [ ]</code>) précédées du tag <code>#todo</code>)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [264, 266]
                },
                "content": "<a href=\"https://github.com/deathau/csv-obsidian\">CSV editor</a><br>\n(interface graphique pour éditer un fichier csv)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [266, 268]
                },
                "content": "<a href=\"https://github.com/coddingtonbear/obsidian-csv-table\">CSV table</a><br>\n(afficher le contenu d'un csv dans une note)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [268, 270]
                },
                "content": "<a href=\"https://github.com/blacksmithgu/obsidian-dataview\">Dataview</a><br>\n(requêter les tags et les métadonnées des notes)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [270, 272]
                },
                "content": "<a href=\"https://github.com/zapthedingbat/drawio-obsidian\">Diagrams</a><br>\n(insérer et éditer des objets <em>Draw.io</em>)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [272, 274]
                },
                "content": "<a href=\"https://github.com/aidurber/obsidian-plugin-dynamic-toc\">Dynamic Table of Content</a><br>\n(codes pour afficher et paramétrer une table des matières dans l'aperçu)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [274, 276]
                },
                "content": "<a href=\"https://github.com/zorazrr/obsidian-link-opener\">External Link Opener</a><br>\n(Ouvre le lien cliqué en overlay, au dessus de la note)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [276, 278]
                },
                "content": "<a href=\"https://github.com/trashhalo/obsidian-extract-url\">Extract url Content</a><br>\n(importe dans la note, en markdown, le contenu de l'url sélectionnée)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [278, 280]
                },
                "content": "<a href=\"https://github.com/visini/obsidian-icons-plugin\">Icons</a><br>\n(permet d'utiliser les codes des bibliothèques d'icones classiques comme <em>Font-Awesome</em>)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [280, 282]
                },
                "content": "<a href=\"https://github.com/kevboh/longform\">LongForm</a><br>\n(Pas encore testé - assistant pour romancier, déjà des usages en thèse)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [282, 284]
                },
                "content": "<a href=\"https://github.com/ganesshkumar/obsidian-table-editor\">Markdown Table editor</a><br>\n(alternative à <em>CSV Editor</em>, interface différente et plus de formats pris en charge)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [284, 286]
                },
                "content": "<a href=\"https://github.com/mdelobelle/metadatamenu\">MetadataMenu</a><br>\n(pour mieux utiliser <em>DataView</em>)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [286, 288]
                },
                "content": "<a href=\"https://github.com/verocloud/obsidian-mindmap-nextgen\">Mind Map NextGen</a><br>\n(la magie de <code>markmap.js</code> pour visualiser vos notes en mindmap)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [288, 289]
                },
                "content": "<a href=\"https://github.com/denolehov/obsidian-git\">Obsidian Git</a>"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [289, 291]
                },
                "content": "<a href=\"https://github.com/valentine195/obsidian-leaflet-plugin\">Obsidian Leafleet</a><br>\n(insérer des cartes <em>Open Street Map</em>)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [291, 293]
                },
                "content": "<a href=\"https://github.com/denolehov/obsidian-url-into-selection\">Paste url into selection</a><br>\n(and you automatically get a well formatted markdown link)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [293, 295]
                },
                "content": "<a href=\"https://github.com/mgmeyers/obsidian-style-settings\">Style Settings</a><br>\n(<em>Méta-Extension</em> : ajoute une interface pour paramétrer certains thèmes (comme celui que j'utilise, <a href=\"https://github.com/faroukx/Obsidian-shiba-inu-theme\">Chiba Inu</a>) et certaines extensions, comme <em>Pandoc Reference List</em>)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [295, 296]
                },
                "content": "<a href=\"https://github.com/metawops/obsidian-table-to-csv-export\">Table to CSV exporter</a>"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [296, 298]
                },
                "content": "<a href=\"https://github.com/Benature/obsidian-text-format\">Text Format</a><br>\n(tri alpha des lignes, LowerCase, UpperCase, TitleCase...)"
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [298, 300]
                },
                "content": "<a href=\"https://github.com/KosmosisDire/obsidian-webpage-export\">Webpage HTML export</a><br>\n(exporter une note ou un dossier de notes en html)"
            }]
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [301, 302]
            },
            "content": "<strong>Markdown</strong> pour le navigateur",
            "children": [{
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [303, 305]
                },
                "content": "<a href=\"https://markdown-here.com/\">Markdown Here</a><br>\nPour Chrome, Firefox, Safari, Thunderbird."
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [306, 308]
                },
                "content": "<a href=\"https://chrome.google.com/webstore/detail/markdown-link-generator/glnecdafikgonniihbdjneaikhcgcbhb\">Markdown Link Generator</a> (Chrome)<br>\nGenerates inline Markdown link from the selected text and current url of the page."
            }, {
                "type": "list_item",
                "depth": 3,
                "payload": {
                    "lines": [309, 311]
                },
                "content": "<a href=\"https://chrome.google.com/webstore/detail/copy-as-markdown/nlaionblcaejecbkcillglodmmfhjhfi\">Copy as Markdown</a> (Chrome)<br>\nCopy hyperlinks, images, and selected text as Markdown."
            }]
        }]
    }],
    "payload": {}
}, {
    "maxWidth": 640,
    "initialExpandLevel": 2,
    "colorFreezeLevel": 2,
    "color": ["#8887e8", "#eba46b", "#4ddb78", "#e678a8", "#2f65bd", "#ad3a08", "#0f9655", "#bf57b0"],
    "extraJs": "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"
})