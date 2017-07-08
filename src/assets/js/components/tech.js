'use strict';
const TechNews = (update) => {
	const container = $('<section class="container"></section>');
	const row = $('<div class="row"></div>');
	const h4 = $('<h4 class="text-uppercase title col-xs-12">tecnología</h4>');
	const hr = $('<hr>');
  const art1 = $('<div class="col-xs-12 item"><div class="art"></div></div>');
	const art2 = $('<div class="col-xs-12 item small"><div class="art"></div></div>');
	const art3 = $('<div class="col-xs-12 item small"><div class="art"></div></div>');

  container.append(row);
	row.append(h4);
	row.append(hr);
	row.append(art1);
	row.append(art2);
	row.append(art3);
  return container;
};
