---
title: "Atelier BU - Prendre des notes et rédiger en Markdown"
theme: "solarized"
tansition: "convex"
highlightTheme: "monokai"
logoImg: "img/LogoUPPAcouleurRVB.png"
slideNumber: true
center: true
pdfSeparateFragments: false
previewLinks: true
preloadIframes: true

---

<!-- .slide: data-background="https://64.media.tumblr.com/ae9b5152f55e9d30f64d9e7433840363/tumblr_mwv6cczLEo1six59bo1_500.gif" -->

#### Prendre des notes et rédiger en [Markdown](https://wikipedia.fr) {style=color:black;background-color:coral;opacity:0.7;border-radius:9px;padding:3px;font-family:monospace,perpetua,mistral,gadugi,rockwell,papyrus;font-size:.8em;width:75%;text-align:center;margin-left:auto;margin-right:auto;}

Obsidian -- Zettlr -- ♥ Pandoc ♥ -- (*et Zotero*) {style=color:coral;font-size:.6em;font-family:monospace;opacity:0.7;}

<img height=240px src="img/markdownOrange.png" style="border-style:none;opacity:1;" />

UPPA -- *Service Commun de la Documentation*  
\<-- Formation des usagers --> {style=font-size:0.5em;color:deeppink;background-color:lightpink;opacity:.6;border-radius:15px;padding:3px;;width:42%;text-align:center;margin-left:auto;margin-right:auto;border-style:solid;border-color:lightpink;border-width:2px;}

Julien Rabaud (*Service d'appui à la recherche*)  
julien.rabaud@univ-pau.fr | [@ujubib](https://twitter.com/ujubib)  
\-- Mars 2021 -- {style=font-size:0.5em;color:coral;background-color:;border-radius:15px;padding:3px;;width:42%;text-align:center;margin-left:auto;margin-right:auto;border-style:solid;border-color:coral;border-width:2px;opacity:.7;}

<aside class="notes">

- Bonjour
- Je me présente
- Tour de table :
  - Pourquoi êtes-vous là ?
  - Avec quoi prenez-vous des notes ?
  - Avec quoi rédigez-vous ?
  - Utilisez-vous Zotero ?
  - Quel est votre éditeur de texte favori ?
</aside>

--

### Déroulé {style=color:coral}

- **Généralités**, histoire, définitions {.fragment .fade-left}
- *Markdown*, syntaxe et **saveurs** {.fragment .fade-left}
- Principes et outils pour **prendre des notes** en *Markdown* {.fragment .fade-left}
- **Rédiger** en *Markdown* {.fragment .fade-left}
- Et ***Zotero*** dans tout ça... {.fragment .fade-left}
- La magie ***Pandoc*** {.fragment .fade-left}

---

<!-- .slide: data-background="https://64.media.tumblr.com/tumblr_lyfuwzuR0K1qh3ft3o1_500.gif" -->

## Généralités, définitions {style=color:coral}

--

#### Généralités

> **Markdown** est un langage de balisage léger créé en 2004 par John Gruber avec l'aide d'Aaron Swartz. Il a été créé dans le but d'offrir une syntaxe facile à lire et à écrire. Un document balisé par Markdown peut être lu en l'état sans donner l’impression d'avoir été balisé ou formaté par des instructions particulières. {style=background-color:pink;color:darkred;text-align:justify;font-size:0.66em;padding:.5em}

Wikipedia (fr) : [Markdown](https://en.wikipedia.org/wiki/Markdown) {style=font-size:0.5em;text-align:right;margin-right:130px;}

***

\> [Le site de John Gruber](https://daringfireball.net/projects/markdown/) {style=font-size:0.6em;text-align:left;margin-left:150px;}

\> [Le billet du regretté Aaron Swartz](http://www.aaronsw.com/weblog/001189) {style=font-size:0.6em;text-align:left;margin-left:150px;}

***

#CultureNum : documentaire [The Internet's Own Boy: The Story of Aaron Swartz](https://peertube.mxinfo.fr/videos/watch/8b676d61-0be2-46e4-929f-27f482492f8b)  
(sous-titres en plusieurs langues disponibles) {style=font-size:0.4em;text-align:right;margin-right:130px;margin-left:150px;}


<aside class="notes">

Un petit mot sur Aaron Swartz
</aside>

--

#### Définitions

- Structuration
- Balisage
- Feuille de style

--

#### Fichiers binaires, fichiers textes

- **Fichiers binaires** : nécessitent un logiciel spécifique pour être lus et édités : {.fragment .fade-left style=font-size:0.8em;}
  - `.docx`, `.odt`, `.pdf`

- **Fichiers textes** : lisibles et modifiables dans un simple éditeur de texte : {.fragment .fade-left style=font-size:0.8em;}
  - `.md`, `.html`, `.tex`, `.rst`...

<aside class="notes">

dézipper un document word

</aside>

---

<!-- .slide: data-background="https://64.media.tumblr.com/tumblr_ltyg0pGXaZ1qe6mn3o1_500.gif" -->

## Markdown, syntaxes et saveurs {style=color:coral}

--

- Guides et tutoriels
  - les bases : [Markdown Tutorial (multilingue)](https://markdowntutorial.com)
  - GFM
  - Pandoc


--

- saveurs
  - CommonMark (ppdc)
  - Github Flavored Markdown
  - **Pandoc's Markdown**

--

---

<!-- .slide: data-background="https://64.media.tumblr.com/tumblr_lxf7w0U1Qg1qdezf9o1_500.gif" -->

## Principes et outils pour prendre des notes en *Markdown* {style=color:coral}

--

### Principes 

Pas du markdown standard mais adoptés par tous ces outils (+ *Zettlr*)

  - `#tags`
  - `[[wikilinks]]`
  - *Templates* (daily, note de lecture...)

--

### Outils

- [Obsidian.md](https://obsidian.md)
- [Athens](https://github.com/athensresearch/athens/)
- Extensions pour *VS Code*
  - Markdown Memo
  - Markdown Link Updater
  - Markdown Links (Vue en graphe)

---

<!-- .slide: data-background="https://64.media.tumblr.com/tumblr_m09wp6W0Af1qgfmnco1_500.gif" -->

## Rédiger en *Markdown* {style=color:coral}

--

### éditeurs spécialisés Recommandés

- [Zettlr](https://www.zettlr.com/)
  - [Chaîne YouTube](https://youtube.com/c/Zettlr)
  - [documentation en français](https://docs.zettlr.com/fr/)

- [Typora](https://typora.io)

--

### Liste d'éditeurs *Markdown* de Bureau

- [PanWriter](https://panwriter.com/)
- [Abricotine](https://github.com/brrd/abricotine)
- [Apostrophe](https://somas.pages.gitlab.gnome.org/apostrophe/)
- [Joplin](https://joplinapp.org/)
- [KeenWrite](https://github.com/DaveJarvis/keenwrite)
- [Markdown Monster](https://github.com/RickStrahl/MarkdownMonster) 
  - (orienté blogging)

--

#### Liste d'éditeurs *Markdown* En ligne

- [\_Stylo_](https://stylo.huma-num.fr/)
  - (Pour l'écriture d'articles scientifiques, hébergé chez [Huma-Num](https://stylo.huma-num.fr/)) {style=font-size:0.6em}
  - M. Vitali-Rosati, « [Stylo : un éditeur de texte pour les sciences humaines et sociales](http://blog.sens-public.org/marcellovitalirosati/stylo/) », *Culture numérique*, 2018. {style=font-size:0.6em}

- [Dillinger](https://dillinger.io/)
- [HackMD](https://hackmd.io/pricing) 
  - (Collaboratif) {style=font-size:0.6em}

--

##### éditeurs généralistes

- Rstudio (avec Rmarkdown)
  - [Tutoriel officiel (en)](https://rmarkdown.rstudio.com/lesson-1.html)
  - [Tutoriel de *Coding Club* (en)](https://ourcodingclub.github.io/tutorials/rmarkdown/)
  - 

--

- **VS Code** avec quelques extensions : {style=font-size:0.6em}
  - Markdown Extension Pack : {.fragment .fade-left}
    - Markdown All in One
    - Markdown PDF
    - Mardown Image
    - markdownlint
    - Markdown Preview Github Style (*désinstallée*)
    - Grammarly (unofficial) (english only)
  - Pandoc Markdown Preview {.fragment .fade-left}
  - Markdown Footnote {.fragment .fade-left}
  - (Markdown Fiction Writer) {.fragment .fade-left}

---

<!-- .slide: data-background="https://64.media.tumblr.com/e237e4f2c7476e7a1fc43c0f0df2f1ab/tumblr_oe21sjE4IN1qe6mn3o1_540.gif" -->

## Et Zotero dans tout ça... {style=color:coral}

--

#### Extensions Zotero

- [Better BibteX for Zotero](https://retorque.re/zotero-better-bibtex/) : **Indispensable** {style=font-size:0.6em;} {.fragment}
  
   exporte vos références dans un fichier (`.json` ou `.bib`) et garde le fichier synchronisé {style=font-size:0.6em;}
  - [Documentation pour Markdown/Pandoc](https://retorque.re/zotero-better-bibtex/exporting/pandoc/) {style=font-size:0.6em;}

- [Mdnotes for Zotero](https://github.com/argenos/zotero-mdnotes) : *bientôt dépréciée ?* {style=font-size:0.6em;} {.fragment}
  
  exporte en markdown (*vers un dossier obsidian ou zettlr*) {style=font-size:0.6em;}
  - les métadonnées de la référence {style=font-size:0.6em;}
  - vos notes (qui peuvent avoir été extraites des pdf par [ZotFile](http://zotfile.com)) {style=font-size:0.6em;}

<aside class="notes">

</aside>

--

#### Extensions pour éditeurs

- VS Code : gestionnaire de plugin
- Obsidian
  - sur le forum d'Obsidian : [Zotero best practices](https://forum.obsidian.md/t/zotero-best-practices/164)
- Zettlr : voir la section dédiée dans la doc

--

C'est [Pandoc](https://pandoc.org/) qui assemble tout !

---

<!-- .slide: data-background="https://64.media.tumblr.com/tumblr_m77qqjH88d1rrj5i2o1_400.gif" -->

## La magie Pandoc {style=color:coral}

--

Ressource indispensable : [Pandoc User’s Guide](https://pandoc.org/MANUAL.html) {style=font-size:0.6em;text-align:left;}

- [Listes des formats lus et écrits](https://pandoc.org/MANUAL.html#options) : `pandoc -f format|pandoc -t format` (**f**rom, **t**o) {style=font-size:0.6em;text-align:left;}
- [Guide du markdown saveur Pandoc](https://pandoc.org/MANUAL.html#pandocs-markdown) {style=font-size:0.6em;text-align:left;}

Pour se familiariser avec les commandes : [Page d'exemples](https://pandoc.org/demos.html) {style=font-size:0.6em;text-align:left;}

--

Convertir une page web en fichier word (ou markdown) {style=font-size:0.6em;}

```bash {style=font-size:0.9em;}
pandoc -r html https://fr.wikipedia.org/wiki/Aaron_Swartz -o AaronSwartz.docx

pandoc -r html https://fr.wikipedia.org/wiki/Aaron_Swartz -o AaronSwartz.md
```

--

### Usages

- markdown vers word, avec modèle et bibliographie {style=font-size:0.6em;}

  ```bash
  pandoc 
    --reference-doc styleBraud.docx
    -C
    --bibliography=data/BiblioInventaire.json 
    --csl=data/gallia-prehistoire.csl
    -o mémoire.docx 
    mémoire.md
  ```

--

- markdown vers html, avec bibliographie et sommaire (cliquables), template, css et javascript (ex: [Inventaire Blot](https://inventaire-blot.netlify.app/final2.html#ref-blotArcheologieMontagneBasque1993)) {style=font-size:0.6em;}
  ```
  pandoc 
    -s 
    --toc 
    --template=data/templateHtml.html 
    --include-in-header=data/css_mémoire.css 
    --include-in-header=data/js_mémoire.js 
    -C 
    --bibliography=data/BiblioInventaire.json 
    --csl=data/gallia-prehistoire.csl 
    --metadata link-citations=true 
    -o mémoire.html 
    mémoire.md
  ```

--

Une bonne porte d'entrée vers

<img height=250 src="img/latexColor.png" style="border-style:none;"/>

```bash
pandoc -f markdown -t latex -o mémoire.tex mémoire.md
```

puis ouvrir avec un éditeur TeX ([Overleaf](https://www.overleaf.com) par exemple). {style=font-size:0.7em;}

---

<!-- .slide: data-background="https://64.media.tumblr.com/ad127a0f2b60979c5b370d4e3349805b/tumblr_miyqamrPc71rnimpto1_500.gif" -->

## Merci de votre attention {style=color:coral}

--

## liens

- ma veille Zotero : [Prendre des notes, écrire](https://www.zotero.org/ujubib/collections/KH8SQ49L)
- 
