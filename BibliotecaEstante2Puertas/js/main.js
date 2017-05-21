var app= new Vue ({
	el: '#app',
	data:{
		newHeight: "",

		lastTotalHeight: 180,
		lastTotalWidth: 75,
		lastTotalDepth: 30,

		totalHeight: 180,
		totalWidth: 75,
		totalDepth: 30,

		totalCostX: 0,
		totalCostY: 0,
		totalCostZ: 0,
		totalCostExtras: 0,

		totalAreaX: 0,
		totalAreaY: 0,
		totalAreaZ: 0,

		table: {
			white: {
				price: 145,
				centimeterPrice: 0.002776926612532557
			},
			black: {
				price: 189,
				centimeterPrice: 0.0036195802053010573
			},
			other: {
				price: 200,
				centimeterPrice: 0.003830243603493182
			},
			nordex: {
		        price: 36,
		        centimeterPrice: 0.001209352324643913
		    }
		},

		// A: {
		// 	height: 50
		// 	width: 140
		// },
		// B: {
		// 	height: 50
		// 	depth: 31
		// },
		// C: {
		// 	depth: 31
		// 	width: 140
		// },

		X:[
			{
				id: 1,
				cost:0,
				name:'Puertas Bajas',
				height:52,
				width:37.4,
				cantidad:2,
				color:'white',
				area:0,
			},
			{	
				id: 2,
				cost:0,
				name:'Nordex',
				height:180,
				width:75,
				cantidad:1,
				color:'nordex',
				area:0,
			},
			{	
				id: 3,
				cost:0,
				name:'Soporte Vertical',
				height:7,
				width:71.4,
				cantidad:1,
				color:'white',
				area:0,
			},
			
		],
// SEPARACIÓN
// SEPARACIÓN
		Y:[
			{
				name:'Laterales',
				height:180,
				width:30,
				cantidad:2,
				color:'white',
				area:0,
			},
			
		],

// SEPARACIÓN
// SEPARACIÓN



		Z:[
			{
				name:'Superior e Inferior Horizontales',
				height:30,
				width:71.4,
				cantidad:2,
				color:'white',
				area:0,
			},

			{
				name:'Separadores Horizontales',
				height:30,
				width:71.4,
				cantidad:3,
				color:'white',
				area:0,
			},
			
		],



		Extras:[
			{
				id: 1,
				name:'Bisagra Grandes',
				costo:0.48,
				cantidad:4,
			},
			{
				name:'Tiradores-Manijas',
				costo:3,
				cantidad:2,
			},
			{
				name:'Tornillos',
				costo:0.047,
				cantidad:32,
			},
			
		// 	{
		// 		name:'Tiradores-Manijas',
		// 		costo:3,
		// 		cantidad:1,
		// 	},
		// 	{
		// 		name:'Par de Correderas',
		// 		medida:{
		// 			40cm: 4.90,
		// 			45cm: 5.50
		// 		},
		// 		cantidad:2,
		// 	},
		// 	{
		// 		name:'Pistones o Bombas Hidraulicas',
		// 		costo:4.50,
		// 		cantidad:1,
		// 	},
		// 	{
		// 		name:'Fluorescente LED',
		// 		costo:9,
		// 		cantidad:2,
		// 	},
		
		// 	{
		// 		name:'Bisagra Chica',
		// 		costo:0.36,
		// 		cantidad:1,
		// 	},
		
		
		
			
			
		// 
		// 	{
		// 		name:'Enchufe',
		// 		costo:0.50,
		// 		cantidad:1,
		// 	},
		// 	{
		// 		name:'Cable',
		// 		costo:1.20,
		// 		tamañoMetro:1,
		// 	},
		

		]


	},
	mounted: function () {
		// console.log('mounted!')
		this.reCalculate()
	},
	methods: {

		reCalculate: function() {
			this.calculateArea()
			this.calculateCost()
			this.calculateExtras()
			this.calculateTotals()
		},


		changeTotalHeight: function () {

			var dh = this.totalHeight - this.lastTotalHeight

			this.X[0].height =  this.totalHeight * 0.29
			// this.X[1].height += dh
			this.X[1].height += dh
			
			this.Y[0].height += dh
			


			this.lastTotalHeight = this.totalHeight

		},


		changeTotalWidth: function() {

			var dh = this.totalWidth - this.lastTotalWidth

			
			this.X[0].width += (this.totalWidth - this.lastTotalWidth)/2
			this.X[1].width += dh
			this.X[2].height += dh
			this.Z[0].width += dh
			this.Z[1].width += dh

			this.lastTotalWidth = this.totalWidth
		
		},

		changeTotalDepth: function () {

			var dh = this.totalDepth - this.lastTotalDepth

			this.Y[0].width += dh
			this.Z[0].height += dh
			this.Z[1].height += dh

			this.lastTotalDepth = this.totalDepth

		},
		calculateArea: function () {
	      for (var i = 0; i < this.X.length; i++) {
	        var piece = this.X[i]
	        piece.area = piece.height * piece.width
	      }
	      for (var i = 0; i < this.Y.length; i++) {
	        var piece = this.Y[i]
	        piece.area = piece.height * piece.width
	      }
	      for (var i = 0; i < this.Z.length; i++) {
	        var piece = this.Z[i]
	        piece.area = piece.height * piece.width
	      }
	    },

		calculateCost: function () {
			for (var i = 0; i < this.X.length; i++) {
				var med = this.X[i]

				if(med.color == 'white') {
					med.cost = med.cantidad * med.area * this.table.white.centimeterPrice
				}

				if(med.color == 'black')

					med.cost = med.cantidad * med.area * this.table.black.centimeterPrice
				
				if(med.color == 'other')
				
					med.cost = med.cantidad * med.area * this.table.other.centimeterPrice

				if(med.color == 'nordex')
				
					med.cost = med.cantidad * med.area * this.table.nordex.centimeterPrice

			}
			for (var i = 0; i < this.Y.length; i++) {
				var med = this.Y[i]

				if(med.color == 'white') {
					med.cost = med.cantidad * med.area * this.table.white.centimeterPrice
				}

				if(med.color == 'black')

					med.cost = med.cantidad * med.area * this.table.black.centimeterPrice
				
				if(med.color == 'other')
				
					med.cost = med.cantidad * med.area * this.table.other.centimeterPrice

				if(med.color == 'nordex')
				
					med.cost = med.cantidad * med.area * this.table.nordex.centimeterPrice

			}
			for (var i = 0; i < this.Z.length; i++) {
				var med = this.Z[i]

				if(med.color == 'white') {
					med.cost = med.cantidad * med.area * this.table.white.centimeterPrice
				}

				if(med.color == 'black')

					med.cost = med.cantidad * med.area * this.table.black.centimeterPrice
				
				if(med.color == 'other')
				
					med.cost = med.cantidad * med.area * this.table.other.centimeterPrice

				if(med.color == 'nordex')
				
					med.cost = med.cantidad * med.area * this.table.nordex.centimeterPrice

			}
		},

		calculateTotals: function () {
	      // this.calculateTotalPieces()
	      // this.calculateTotalArea()
	      this.calculateTotalCost()
	      this.calculateTotalExtras()
	      // this.calculateTotalScrew()
	    },

		calculateTotalCost: function () {
	      this.totalCostX = 0
	      this.totalCostY = 0
	      this.totalCostZ = 0
	      for (var i = 0; i < this.X.length; i++) {
	        var piece = this.X[i]
	        this.totalCostX += piece.cost
	      }
	      for (var i = 0; i < this.Y.length; i++) {
	        var piece = this.Y[i]
	        this.totalCostY += piece.cost
	      }
	      for (var i = 0; i < this.Z.length; i++) {
	        var piece = this.Z[i]
	        this.totalCostZ += piece.cost
	      }
	    },


	    calculateExtras: function (){
	    	for (var i = 0; i < this.Extras.length; i++) {
				var med = this.Extras[i]
				
				med.cost = med.costo * med.cantidad

			}
	    },


	    calculateTotalExtras: function (){
	    	this.totalCostExtras = 0
			
	      for (var i = 0; i < this.Extras.length; i++) {
	        var piece = this.Extras[i]
	        this.totalCostExtras += piece.cost
	      }
	    },
	//     calculateTotalArea: function () {
	//       this.totalAreaX = 0
	//       this.totalAreaY = 0
	//       this.totalAreaZ = 0
	//       for (var i = 0; i < this.X.length; i++) {
	//         var piece = this.X[i]
	//         this.totalAreaX += piece.area
	//       }
	//       for (var i = 0; i < this.Y.length; i++) {
	//         var piece = this.Y[i]
	//         this.totalAreaY += piece.area
	//       }
	//       for (var i = 0; i < this.Z.length; i++) {
	//         var piece = this.Z[i]
	//         this.totalAreaZ += piece.area
	//       }
	//     },
	},


})
