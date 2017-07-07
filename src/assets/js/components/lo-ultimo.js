'use strict';
const LastNews = (update) => {
	const container = $('<div class="container"></div>');
	const row = $('<div class="row"></div>');
  const art1 = $('<div class="col-xs-12"><img src="assets/img/news/news-0.png" class="img-responsive"></div>');
	const art2 = $('<div class="col-xs-12"><img src="assets/img/news/news-0.png" class="img-responsive"></div>');
	const art3 = $('<div class="col-xs-12"></div>');
	const art4 = $('<div class="col-xs-12"></div>');
	//const  = $('<img src="assets/img/logoicon.png" class="img-responsive">');

  container.append(row);
	row.append(art1);
	row.append(art2);
	row.append(art3);
	row.append(art4);
  return container;
};
