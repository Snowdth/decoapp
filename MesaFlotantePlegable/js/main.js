var app= new Vue ({
	el: '#app',
	data:{
		newHeight: "",

		lastTotalHeight: 80,
		lastTotalWidth: 55,
		lastTotalDepth: 20,

		totalHeight: 80,
		totalWidth: 55,
		totalDepth: 20,

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
				cost:0,
				name:'Puerta',
				height:78,
				width:55,
				cantidad:1,
				color:'white',
				area:0,
			},
			{
				cost:0,
				name:'Sujetador de Puerta',
				height:76.1,
				width:51,
				cantidad:1,
				color:'white',
				area:0,
			},
			{
				cost:0,
				name:'Sujetadores',
				height:8,
				width:51.4,
				cantidad:2,
				color:'white',
				area:0,
			},
		],
// SEPARACIÓN
// SEPARACIÓN
		Y:[
			{
				name:'Laterales',
				height:78.1,
				width:20,
				cantidad:2,
				color:'white',
				area:0,
			},
		],

// SEPARACIÓN
// SEPARACIÓN



		Z:[
			{
				name:'Parte de Superior',
				height:21.9,
				width:55,
				cantidad:1,
				color:'white',
				area:0,
			},
			{
				name:'Parte de Inferior',
				height:20,
				width:51.4,
				cantidad:1,
				color:'white',
				area:0,
			},
			{
				name:'Medios Horizontales',
				height:18,
				width:51.4,
				cantidad:2,
				color:'white',
				area:0,
			},

		],



		Extras:[
			{
				name:'Par de Bisagras Cangrejo',
				costo:2.30,
				cantidad:2,
			},
			{
				name:'Bisagra Grandes',
				costo:0.48,
				cantidad:3,
			},
			{
				name:'Perno + Mariposa',
				costo:0.90,
				cantidad:1,
			},	
			{
				name:'Tornillos Fijadores',
				costo:0.18,
				cantidad:4,
			},
			{
				name:'Tarugos Naranja',
				costo:0.08,
				cantidad:4,
			},
			{
				name:'Patines',
				costo:0.04,
				cantidad:1,
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
		
		// 	{
		// 		name:'Tarugos de Madera',
		// 		costo:0.08,
		// 		cantidad:1,
		// 	},
		
		// 	{
		// 		name:'Sujetadores',
		// 		costo:0.15,
		// 		cantidad:1,
		// 	},
		// 	{
		// 		name:'Alcallatas',
		// 		costo:0.06,
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
		//	{
		// 		name:'Varillas',
		// 		costo:2.50,
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

			this.X[0].height += dh
			this.X[1].height += dh
			// this.X[2].height += dh
			this.Y[0].height += dh
			


			this.lastTotalHeight = this.totalHeight

		},


		changeTotalWidth: function() {

			var dh = this.totalWidth - this.lastTotalWidth

			
			this.X[0].width += dh 
			this.X[1].width += dh
			this.X[2].width += dh
			this.Z[0].width += dh
			this.Z[1].width += dh
			this.Z[2].width += dh

			this.lastTotalWidth = this.totalWidth
		
		},

		changeTotalDepth: function () {

			var dh = this.totalDepth - this.lastTotalDepth

			this.Y[0].width += dh
			this.Z[0].height += dh
			this.Z[1].height += dh
			this.Z[2].height += dh

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
