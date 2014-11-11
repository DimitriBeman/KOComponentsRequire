require(["lib/knockout"], function(ko) {

	function Product(name, rating) {
	    this.name = name;
	    this.userRating = ko.observable(rating || null);
	}
	 
	function MyViewModel() {
	    this.products = [
	        new Product('Garlic bread'),
	        new Product('Pain au chocolat'),
	        new Product('Seagull spaghetti', 'like') // This one was already 'liked'
	    ];
	}

	ko.components.register('like-widget', {
		viewModel: { require: 'viewModels/component-like-widget' },
	    template:
	        '<div class="like-or-dislike" data-bind="visible: !chosenValue()">\
	            <button data-bind="click: like">Like it</button>\
	            <button data-bind="click: dislike">Dislike it</button>\
	        </div>\
	        <div class="result" data-bind="visible: chosenValue">\
	            You <strong data-bind="text: chosenValue"></strong> it\
	        </div>'
	});

	ko.applyBindings(new MyViewModel());
});