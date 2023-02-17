/* html à ajouter entre <body> et <svg id="mindmap">

<link rel="stylesheet" href="overlay.css">
<a class="showmd" href="MindMapObsidian.md">afficher le <em>markdown</em> source</a>
<div class="preview-info">Afficher l'aperçu</div>
<div class="overlay">
    <iframe src=""></iframe>
    <button class="close">Fermer l'aperçu</button>
    <a class="goto" target="_blank">ouvrir le lien dans un nouvel onglet</a>
</div>
*/

/* html à ajouter avant </body>

<script src="overlay.js"></script>
*/

const forbiddenDomains = ["obsidian.md", "github.com", "youtube.com", "mate-shs.cnrs.fr", "stretchingnumerique.fr", "zenodo.org", "substack.com", "chrome.google.com", "twitter.com", "marianamontes.me", "blog.cyberethical.me", "discord.com", "medium.com"];

let observer = new MutationObserver(function () {
    document.querySelectorAll('a:not(.goto)').forEach(function (link) {
        link.addEventListener('mouseover', function (event) {
            const href = link.getAttribute("href");
            if (!forbiddenDomains.some((domain) => href.includes(domain))) {
            let previewInfo = document.querySelector('.preview-info');
            previewInfo.style.display = 'block';
            previewInfo.style.left = event.clientX + 'px';
            previewInfo.style.top = event.clientY + 'px';
            previewInfo.dataset.src = this.href;
            clearTimeout(previewInfo.timeoutId);
            previewInfo.timeoutId = setTimeout(function () {
                previewInfo.style.display = 'none';
            }, 2000);}
        });
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

document.querySelector('.preview-info').addEventListener('mouseover', function () {
    clearTimeout(this.timeoutId);
});

document.querySelector('.preview-info').addEventListener('mouseout', function () {
    this.timeoutId = setTimeout(function () {
        this.style.display = 'none';
    }.bind(this), 2000);
});

document.querySelector('.preview-info').addEventListener('click', function () {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.overlay iframe').src = this.dataset.src;
    document.querySelector('.overlay .goto').href = this.dataset.src;
});

document.querySelector('.overlay .close').addEventListener('click', function () {
    document.querySelector('.overlay').style.display = 'none';
});

/*
document.addEventListener("DOMContentLoaded", function() {
    const mm = window.markmap;
    mm.transform({ k: 0.8, x: 0, y: -mm.height / 4 });
  });
*/

/*
document.addEventListener("DOMContentLoaded", function() {
    const markmap = new Markmap(document.querySelector(".markmap"), {
        markmap.setScale(0.8);
        markmap.moveTo({ x: -100, y: 0 });
    });
});
*/

/*
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('g').setAttribute ("transform", "translate(75,520) scale(0.8)");
});
*/

/*
.transform.baseVal.getItem(0).setScale(0.8,0.8);
.transform.baseVal.getItem(0).setScale(0.8,0.8);
.style.transform = "translateY(65%)";
*/

/*
document.querySelector('#mindmap>g').addEventListener('DOMContentLoaded', function() {
    this.rescale(.8);
});
*/

/*
const clickZ = document.createEvent('MouseEvent');

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('[title="Zoom out"] > svg').fire('click');
});
*/

/* bouton ZoomOut
this.getHandler((mm) => mm.rescale(0.8));

this.getHandler((t => t.rescale(.8)));

const mm = document.getElementById('mindmap');
mm>g.rescale(0.8);
*/