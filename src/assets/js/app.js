'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

	switch(state.viewScreen) {
    case null:
        wrapper.append(Header(_ => render(root)));
				wrapper.append(LastNews(_ => render(root)));
				wrapper.append(WorldNews(_ => render(root)));
				wrapper.append(TechNews(_ => render(root)));
				wrapper.append(Education(_ => render(root)));
				wrapper.append(Opinion(_ => render(root)));
				wrapper.append(Footer(_ => render(root)));
        break;
		case "Detail new":
				wrapper.append(NewDetail(_ => render(root)));
				wrapper.append(NewHeader(_ => render(root)));
	}
  root.append(wrapper);
}

const state = {
	viewScreen: null,
  news: null,
	urlImg: "assets/img/news/"
};

$( _ => {


	$.getJSON('/api/news/', (req, res) => {
			state.news = req;
			const root = $('.root');

			render(root);
	});

});
