(document.querySelector("#bPXinc .info__text") || document.getElementById("bPXinc")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'bPXinc')" data-id="bPXinc" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">База PX.inc</h2></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="red">193 1842</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">1514 40 14755</span></p></div><p class="dot__description">~РП зона семьи PX, абстрагированная от шума и хаоса внешнего мира~</p>`