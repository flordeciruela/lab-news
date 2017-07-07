'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

	switch(state.viewScreen) {
    case null:
        wrapper.append(Header(_ => render(root)));
				wrapper.append(LastNews(_ => render(root)));
        break;
		case "Detail new":
				//wrapper.append(Detaill(_ => render(root)));
	}
  root.append(wrapper);
}

const state = {
	viewScreen: null,
  news: null
};

$( _ => {


	$.getJSON('/api/news/', (req, res) => {
			state.news = req;
			const root = $('.root');
			console.log(state.news);

			render(root);
	});

});
