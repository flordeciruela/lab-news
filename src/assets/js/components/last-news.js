'use strict';
const LastNews = (update) => {
	const container = $('<section class="container"></section>');
	const row = $('<div class="row"></div>');
	const h4 = $('<h4 class="text-uppercase title col-xs-12">lo último</h4>');
	const hr = $('<hr>');
  const art1 = $('<div class="col-xs-12 item"><div class="art"><h4 class="text-uppercase">MIT BUSCA ESTUDIANTES DE TODO EL MUNDO QUE QUIERAN ESTUDIAR GRATIS</h4></div></div>');
	const art2 = $('<div class="col-xs-12 col-md-6 item"><div class="art"><h4 class="text-uppercase">Ya no será necesario ir hasta el campus de MIT para estudiar allá, por medio de su curso gratuito en línea cualquiera podrá hacerlo.</h4></div></div>');
	const art3 = $('<div class="col-xs-12 col-md-3 item small"><div class="art"></div></div>');
	const art4 = $('<div class="col-xs-12 col-md-3 item small"><div class="art"></div></div>');

  container.append(row);
	row.append(h4);
	row.append(hr);
	row.append(art1);
	row.append(art2);
	row.append(art3);
	row.append(art4);
  return container;
};
