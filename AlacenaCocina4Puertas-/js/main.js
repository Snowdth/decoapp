var app= new Vue ({
	el: '#app',
	data:{
		newHeight: "",

		lastTotalHeight: 50,
		lastTotalWidth: 140,
		lastTotalDepth: 31,

		totalHeight: 50,
		totalWidth: 140,
		totalDepth: 31,

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
				cost:0,
				name:'Puerta inferior',
				height:50,
				width:34.7,
				cantidad:4,
				color:'white',
				area:0,
			},
			{
				cost:0,
				name:'Sujetador Espalda',
				height:7,
				width:136.4,
				cantidad:2,
				color:'white',
				area:0,
			},
			{
				cost:0,
				name:'Nordex',
				height:50,
				width:140,
				cantidad:1,
				color:'nordex',
				area:0,
			},
		],
// SEPARACIÓN
// SEPARACIÓN
		Y:[
			{
				name:'Laterales',
				height:46.4,
				width:31,
				cantidad:2,
				color:'white',
				area:0,
			},
			{
				name:'Medio',
				height:46.4,
				width:29.2,
				cantidad:1,
				color:'white',
				area:0,
			},
		],

// SEPARACIÓN
// SEPARACIÓN



		Z:[
			{
				name:'Parte de Superior e inferior',
				height:31,
				width:140,
				cantidad:2,
				color:'white',
				area:0,
			},
			{
				name:'Medio',
				height:29,
				width:67.3,
				cantidad:2,
				color:'white',
				area:0,
			},

		],
		Extras:[
			{
				name:'Bisagras Cangrejo',
				costo:1.15,
				cantidad:8,
			},
			
			{
				name:'Tiradores-Manijas',
				costo:3,
				cantidad:4,
			},
			{
				name:'Tarugos Naranjas',
				costo:0.08,
				cantidad:6,
			},
			{
				name:'Tornillos Fijadores',
				costo:0.18,
				cantidad:6,
			},
			{
				name:'Tornillos',
				costo:0.047,
				cantidad:32,
			},
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
			// this.X[1].height += dh
			this.X[2].height+= dh
			this.Y[0].height += dh
			this.Y[1].height += dh


			this.lastTotalHeight = this.totalHeight

		},


		changeTotalWidth: function() {

			var dh = this.totalWidth - this.lastTotalWidth

			
			this.X[0].width = (this.totalWidth- (0.1* this.X[0].cantidad ))/ this.X[0].cantidad 
			this.X[1].width += dh
			this.X[2].width += dh
			this.Z[0].width += dh
			this.Z[1].width = (this.totalWidth- (1.8* (this.Z[1].cantidad +1) ))/ this.Z[1].cantidad 

			this.lastTotalWidth = this.totalWidth
		
		},

		changeTotalDepth: function () {

			var dh = this.totalDepth - this.lastTotalDepth

			this.Y[0].width += dh
			this.Y[1].width += dh
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
