'use strict';
const Header = (update) => {
	const container = $('<div class="container header"></div>');
	const row = $('<div class="row"></div>');
  const header = $('<nav class="col-xs-12"></nav>');
	const logo = $('<img src="assets/img/logoicon.png" alt="logo" class="header__logo">');
	const iMenu = $('<img src="assets/img/menu.png" alt="menu" class="header__menu">');

  container.append(row);
	row.append(header);
	header.append(logo);
	header.append(iMenu);

  return container;
};
