'use strict';
const LastNews = (update) => {
	const container = $('<section class="container"></section>');
	const row = $('<div class="row"></div>');
	const h4 = $('<h4 class="text-uppercase title col-xs-12">lo último</h4>');
	const hr = $('<hr>');
  const item1 = $('<div class="col-xs-12 item"><div class="art"><h4 class="text-uppercase"></h4></div></div>');
	const item2 = $('<div class="col-xs-12 col-md-6 item"><div class="art col-xs-12"></div><div class="text col-xs-12">'+state.news[1].title+'</div></div>');
	const item3 = $('<div class="col-xs-12 col-md-3 item small"><div class="art col-xs-6"></div><div class="text col-xs-6">'+state.news[2].title+'</div></div>');
	const item4 = $('<div class="col-xs-12 col-md-3 item small"><div class="art col-xs-6"></div><div class="text col-xs-6">'+state.news[3].title+'</div></div>');
	console.log(state.news);

  container.append(row);
	row.append(h4);
	row.append(hr);
	row.append(item1);
	item1.children().children().text(state.news[0].title);
	item1.children().css('background-image', 'url('+state.urlImg+state.news[0].img+')');
	item1.children().css('background-size', '220%');
	item1.children().css('background-position', 'top');
	item1.children().css('height', '100%');
	row.append(item2);
	item2.children().first().css('background-image', 'url('+state.urlImg+state.news[1].img+')');
	item2.children().first().css('background-size', '100%');
	item2.children().css('height', '50%');
	row.append(item3);
	item3.children().first().css('background-image', 'url('+state.urlImg+state.news[2].img+')');
	item3.children().first().css('background-size', '100%');
	item3.children().css('height', '100%');
	row.append(item4);
	item4.children().first().css('background-image', 'url('+state.urlImg+state.news[3].img+')');
	item4.children().first().css('background-size', '100%');
	item4.children().css('height', '100%');

	item1.on("click",(e)=>{
		e.preventDefault();
		state.viewScreen = "Detail new";
		update();
	});

  return container;
};
