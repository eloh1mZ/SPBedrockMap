(document.querySelector("#boatCafe .info__text") || document.getElementById("boatCafe")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'boatCafe')" data-id="boatCafe" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">Boat Cafè</h2><p class="dot__title_paragraph">Владелец <b>Qvickss</b></p></div><ul class="marks dot__marks"><li class="marks__item">кафе</li></ul><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="red">6 100</span></p></div><p class="dot__description">Закусочная на Красной ветке, где по достумным ценам можно поесть вкусных блюд не выходя из лодки!</p>`