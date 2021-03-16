pandoc --standalone -t revealjs -V theme=sky -o idNumEn.html IdNum2020en.md
pandoc --standalone -t pptx -o idNumEn.pptx --reference-doc=UPPA.pptx IdNum2020en.md

-V theme=moon

| Name      | Effect                                                |
|-----------|-------------------------------------------------------|
| black     | Black background, white text, blue links (default)    |
| white     | White background, black text, blue links              |
| league    | Gray background, white text, blue links               |
| beige     | Beige background, dark text, brown links              |
| sky       | Blue background, thin dark text, blue links           |
| night     | Black background, thick white text, orange links      |
| serif     | Cappuccino background, gray text, brown links         |
| simple    | White background, black text, blue links              |
| solarized | Cream-colored background, dark green text, blue links |
| blood     | Dark background, thick white text, red links          |
| moon      | Dark blue background, thick grey text, blue links     |

```
pandoc -f markdown -t revealjs -s --slide-level=3 -V revealjs-url=data/reveal.js-4.1.0/js/reveal.js -V theme=solarized -o presMars.html IdNum2020fr.md
```

```
pandoc --self-contained IdNum2020fr.md -o presMars.html -f markdown -t revealjs -s -c data/prez.css --slide-level=3 -V theme=solarized
```
