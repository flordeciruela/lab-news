'use strict';
const Footer = (update) => {
	const container = $('<footer class="container"></footer>');
	const row = $('<div class="row"></div>');
	const content = $('<div class="col-xs-10 col-xs-push-1 text-center text-white"></div>');
	const logo = $('<img src="assets/img/logo-footer.png">');
	const p = $('<p>© Editado por Laboratoria Av. José Pardo #601 Lima 1 Perú</p>');
	const p2 =$('<p>Copyright © Laboratoria.la Todos los derechos reservados.</p>');
	const hr = $('<hr>');
	const a = $('<a href="#" class="text-capitalize">ver más</a>');

  container.append(row);
	row.append(content);
	content.append(logo);
	content.append(p);
	content.append(p2);
	content.append(hr);
	content.append(a);
  return container;
};
