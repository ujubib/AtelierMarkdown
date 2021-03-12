---
title: "Atelier BU - Prendre des notes et rédiger en Markdown"
theme: "solarized"
transition: "slide"
highlightTheme: "monokai"
logoImg: "img/LogoUPPAcouleurRVB.png"
slideNumber: true
center: true
previewLinks: true
---

<!-- .slide: data-background="https://64.media.tumblr.com/ae9b5152f55e9d30f64d9e7433840363/tumblr_mwv6cczLEo1six59bo1_500.gif" -->

#### Prendre des notes et rédiger en [Markdown]() {style=color:black;background-color:coral;opacity:0.7;border-radius:9px;padding:3px;font-family:monospace,perpetua,mistral,gadugi,rockwell,papyrus;font-size:.8em;width:75%;text-align:center;margin-left:auto;margin-right:auto;}

Obsidian -- Zettlr -- ♥ Pandoc ♥ -- (*et Zotero*) {style=color:coral;font-size:.6em;font-family:monospace;opacity:0.7;}

<img height=240px src="img/markdownOrange.png" style="border-style:none;opacity:1;" />

UPPA -- *Service Commun de la Documentation*  
\<-- Formation des usagers --> {style=font-size:0.5em;color:deeppink;background-color:lightpink;opacity:.6;border-radius:15px;padding:3px;;width:42%;text-align:center;margin-left:auto;margin-right:auto;border-style:solid;border-color:lightpink;border-width:2px;}

Julien Rabaud (*Service d'appui à la recherche*)  
julien.rabaud@univ-pau.fr | [@ujubib](https://twitter.com/ujubib)  
\-- Mars 2021 -- {style=font-size:0.5em;color:coral;background-color:;border-radius:15px;padding:3px;;width:42%;text-align:center;margin-left:auto;margin-right:auto;border-style:solid;border-color:coral;border-width:2px;opacity:.7;}

--

### Déroulé {style=color:coral}

- *Généralités, histoire, définitions* {.fragment .fade-left}
- [Markdown](), *syntaxes et saveurs* {.fragment .fade-left}
- *Prise de note avec* [Obsidian](https://obsidian.md) {.fragment .fade-left}
- *Rédaction avec* [Zettlr](https://www.zettlr.com) {.fragment .fade-left}
- *Et* [Zotero]() *dans tout ça*... {.fragment .fade-left}
- *La magie* [Pandoc]() {.fragment .fade-left}

---

<!-- .slide: data-background="https://64.media.tumblr.com/tumblr_lyfuwzuR0K1qh3ft3o1_500.gif" -->

## Généralités, histoire, définitions {style=color:coral}

--

#### Généralités

- ma veille zotero

--

#### Histoire

--

#### Définitions

- Structuration
- balisage
- feuille de style

---

<!-- .slide: data-background="https://64.media.tumblr.com/tumblr_ltyg0pGXaZ1qe6mn3o1_500.gif" -->

## Markdown, syntaxes et saveurs {style=color:coral}

--

- saveurs
  - CommonMark (ppdc)
  - Github Flavored Markdown
  - **Pandoc's Markdown**

--

- Tutoriels
  - Standard
  - GFM
  - Pandoc

---

<!-- .slide: data-background="https://64.media.tumblr.com/tumblr_lxf7w0U1Qg1qdezf9o1_500.gif" -->

## Prise de note avec [Obsidian]() {style=color:coral}

--

[Obsidian.md](https://obsidian.md)

---

<!-- .slide: data-background="https://64.media.tumblr.com/tumblr_m09wp6W0Af1qgfmnco1_500.gif" -->

## Rédaction avec [Zettlr]() {style=color:coral}

<img height=250 src="img/logo_zettlr.png" style="border-style:none;"/>

--

#### Ressources officielles

- [Chaîne YouTube](https://youtube.com/c/Zettlr) {.fragment}

- [documentation en français](https://docs.zettlr.com/fr/) {.fragment}

--

#### Interface

<iframe height=450px width=100% src="https://www.zettlr.com"></iframe>

---

<!-- .slide: data-background="https://64.media.tumblr.com/e237e4f2c7476e7a1fc43c0f0df2f1ab/tumblr_oe21sjE4IN1qe6mn3o1_540.gif" -->

## Et Zotero dans tout ça... {style=color:coral}

--

#### Extensions Zotero

- [Better BibteX for Zotero](https://retorque.re/zotero-better-bibtex/) : **Indispensable** {style=font-size:0.6em;} {.fragment}
  
   exporte vos références et garde le fichier synchronisé {style=font-size:0.6em;}
  - [Documentation pour Markdown/Pandoc](https://retorque.re/zotero-better-bibtex/exporting/pandoc/) {style=font-size:0.6em;}

- ([Mdnotes for Zotero](https://github.com/argenos/zotero-mdnotes) :) *bientôt dépréciée) {style=font-size:0.6em;} {.fragment}
  
  exporte en markdown (*vers un dossier obsidian ou zettlr*) {style=font-size:0.6em;}
  - les métadonnées de la référence {style=font-size:0.6em;}
  - vos notes (qui peuvent avoir été extraites des pdf par [ZotFile](http://zotfile.com)) {style=font-size:0.6em;}

<aside class="notes">

</aside>

--

#### Extensions pour éditeurs

- VS Code, Atom, Brackets : gestionnaire de plugin
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

## Contact