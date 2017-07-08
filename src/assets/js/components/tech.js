'use strict';
const TechNews = (update) => {
	const container = $('<section class="container"></section>');
	const row = $('<div class="row"></div>');
	const h4 = $('<h4 class="text-uppercase title col-xs-12">tecnología</h4>');
	const hr = $('<hr>');
  const art1 = $('<div class="col-xs-12 item"><div class="art col-xs-12"></div><div class="text col-xs-12">'+state.news[14].title+'</div></div>');
	const art2 = $('<div class="col-xs-12 item small"><div class="art col-xs-6"></div><div class="text col-xs-6">'+state.news[17].title+'</div></div>');
	const art3 = $('<div class="col-xs-12 item small"><div class="art col-xs-6"></div><div class="text col-xs-6">'+state.news[18].title+'</div></div>');

  container.append(row);
	row.append(h4);
	row.append(hr);
	row.append(art1);
	art1.children().first().css('background-image', 'url('+state.urlImg+state.news[14].img+')');
	art1.children().first().css('background-size', '100%');
	art1.children().css('height', '50%');
	row.append(art2);
	art2.children().first().css('background-image', 'url('+state.urlImg+state.news[17].img+')');
	art2.children().css('height', '100%');
	row.append(art3);
	art3.children().first().css('background-image', 'url('+state.urlImg+state.news[18].img+')');
	art3.children().css('height', '100%');
  return container;
};
