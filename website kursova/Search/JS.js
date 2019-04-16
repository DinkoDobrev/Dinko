$(function() {

let products = [{
			name: "Suzuki GSX-R Sport",
			img: "img1.jpg",
			description: "Super sport motors are awesome."
		},
		{
			name: "Suzuki GSX-S",
			img: "img2.jpg",
			description: "Urban bike"	
		},
		{
			name: "Suzuki Hayabusa",
			img: "img3.jpg",
			description: "Street beast"	
		},
		{
			name: "Suzuki RM",
			img: "img4.jpg",
			description: "Somethin for off road"	
		},
		{
			name: "Suzuki Burgman",
			img: "img5.jpg",
			description: "Cruises style"	
		},
		{
			name: "Suzuki QuadSport",
			img: "img6.jpg",
			description: "4 wheels is better."	
		},
        {
			name: "Suzuki V-Storm",
			img: "img7.jpg",
			description: "Long road will be better."	
		},
        {
			name: "Suzuki Boulevard",
			img: "img8.jpg",
			description: "Combination of the latest high-performance technology and a unique, exciting style."	
		},
        {
			name: "Suzuki Jimny",
			img: "img9.jpeg",
			description: "Off road beast."	
		},
        {
			name: "Suzuki Swift",
			img: "img10.jpeg",
			description: "Little and pretty."	
		},
        {
			name: "Suzuki Ertiga",
			img: "img11.jpeg",
			description: "It's better with family."	
		},
        {
			name: "Suzuki Vitara",
			img: "img12.jpeg",
			description: "Urban style. "	
		},
        {
			name: "Filters",
			img: "img13.jpg",
			description: "Care for your vechile."	
		},
        {
			name: "Oils",
			img: "img14.jpg",
			description: "Care for your vechile."	
		},
        {
			name: "Parts and accesories",
			img: "img15.jpg",
			description: "Care for your vechile."	
		}
	];

	let $products = $("#products");
	appendProducts(products);
	
	function appendProducts(products) {
        $products.html (" ");
		for (let i = 0; i < products.length; i++) {
			let currentElement = products[i];
			let htmlProduct = createProductsHtml(currentElement);
			$products.append(htmlProduct);
            
		}
	}

	function createProductsHtml(product) {
		let result = $("<div class='product-item col-sm-4'>");
		let heading = $("<h3 class='product-name'>").text(product.name);
		let productImg = $("<img id='img' src='" + product.img + "'>");
		let desc = $("<p class='desc'>").text(product.description);
		$(result).append(heading).append(productImg).append(desc);
		return result;
	};
    
    $("#searchForm").submit(function(e) {
        e.preventDefault();
        
        let matches = [ ];
        let searchText = $("#searchText").val().toLowerCase();
        for (let i = 0; i < products.lenght; i++) {
            let currentElement = products[i];
            let nameToLower = currentElement.name.toLowerCase();
            let isMatch = nameToLower.indexOf(searchText) >= 0;
            if(isMatch){
                matches.push(currentElement)
             };
        };
            appendProducts(matches);
            
    });



});