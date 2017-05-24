var app= new Vue ({
	el: '#app',
	data:{

		view: "menu",

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

		totalCostX: 0,
		totalCostY: 0,
		totalCostZ: 0,
		totalCost: 0,
		totalCostExtras: 0,
		totalPrice: 0,

		original: true,
		originalPrice: 0,
		aumento: 0,

		furnitures: [
			{
				code: 1,
				name: "Mesa Flotante Plegable",
				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 80,
					lastTotalWidth: 55,
					lastTotalDepth: 20,

					totalHeight: 80,
					totalWidth: 55,
					totalDepth: 20,

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

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'}
							],
							y: [
								{id: 0, prop: 1, type: 'normal'}
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'}
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'}
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'}
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'}
							]
						}
					}

				}

			},
			{
				code: 2,
				name: "Mueble Despensero Multiusos",
				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 140,
					lastTotalWidth: 30,
					lastTotalDepth: 30,

					totalHeight: 140,
					totalWidth: 30,
					totalDepth: 30,

					X:[
						{
							cost:0,
							name:'Puerta',
							height:136.4,
							width:26.4,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							type: 'nordex',
							cost:0,
							name:'Nordex',
							height:140,
							width:30,
							cantidad:1,
							color:'nordex',
							area:0,
						},

					],

					Y:[
						{
							name:'Laterales de Puerta',
							height:140,
							width:12,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Laterales de Contenido',
							height:140,
							width:18,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Separador Vertical de Contenido',
							height:20,
							width:18,
							cantidad:2,
							color:'white',
							area:0,
						},
					],

					Z:[
						{
							name:'Superior e Inferior de la Puerta',
							height:12,
							width:26.4,
							cantidad:2,
							color:'white',
							area:0,
						},

						{
							name:'Separador Horizontal de Puerta',
							height:10,
							width:26.4,
							cantidad:4,
							color:'white',
							area:0,
						},
						{
							name:'Separador Horizontal de Contenido',
							height:18,
							width:26.4,
							cantidad:6,
							color:'white',
							area:0,
						},

					],

					Extras:[
						{
							name:'Bisagra Grandes',
							costo:0.48,
							cantidad:5,
						},

						{
							name:'Patines',
							costo:0.04,
							cantidad:4,
						},
						{
							name:'Sujetadores',
							costo:0.15,
							cantidad:2,
						},
						{
							name:'Alcallatas',
							costo:0.06,
							cantidad:2,
						},
						{
							name:'Tarugos de Madera',
							costo:0.08,
							cantidad:2,
						},
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:52,
						},
						{
							name:'Varillas',
							costo:2.50,
							label: "Metro",
							cantidad:1.5,
						},
					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'}
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'}
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},

							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'}
							]
						},
						depth: {
							y: [
								{id: 0, prop: 0.5, type: 'normal'},
								{id: 1, prop: 0.5, type: 'normal'},
								{id: 2, prop: 0.5, type: 'normal'}
							],
							z: [
								{id: 0, prop: 0.5, type: 'normal'},
								{id: 1, prop: 0.5, type: 'normal'},
								{id: 2, prop: 0.5, type: 'normal'}
							]
						}
					}

				}
			},
			{
				code: 3,
				name: "Mesa Plegable",
				fixedCosts: 50,
				gain: 120,
				salePrice: 200,
			},
			{
				code: 4,
				name: "Mueble para Laptop",
				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 60,
					lastTotalWidth: 45,
					lastTotalDepth: 15,


					totalHeight: 60,
					totalWidth: 45,
					totalDepth: 15,

					X:[
						{
							id: 1,
							cost:0,
							name:'Puerta',
							height:35,
							width:45,
							cantidad:1,
							color:'black',
							area:0,
						},
						{
							id: 2,
							cost:0,
							name:'Sujetadores',
							height:7,
							width:41.4,
							cantidad:2,
							color:'white',
							area:0,
						},

					],

					Y:[
						{
							name:'Laterales',
							height:60,
							width:15,
							cantidad:2,
							color:'white',
							area:0,
						},
					],





					Z:[
						{
							name:'Superior e Inferior Horizontales',
							height:15,
							width:41.4,
							cantidad:2,
							color:'white',
							area:0,
						},

						{
							name:'Separadores Horizontales',
							height:15,
							width:41.4,
							cantidad:1,
							color:'white',
							area:0,
						},

					],

					Extras:[
						{
							name:'Bisagras Grandes',
							costo:0.48,
							cantidad:2,
						},

						{
							name:'Tornillos Fijadores',
							costo:0.18,
							cantidad:2,
						},
						{
							name:'Tarugos Naranja',
							costo:0.08,
							cantidad:2,
						},
						{
							name:'Tiradores-Manijas',
							costo:3,
							cantidad:1,
						},
						{
							name:'Pistones o Bombas Hidraulicas o Brasos',
							costo:4.50,
							cantidad:2,
						},

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'}
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'}
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						}
					}

				}

			},
			{
				code: 5,
				name: "Repisa de Biocuero",
				fixedCosts: 50,
				gain: 120,
				salePrice: 200,
			},
			{
				code: 6,
				name: "Estante Despensero",
				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 180,
					lastTotalWidth: 30,
					lastTotalDepth: 30,

					totalHeight: 180,
					totalWidth: 30,
					totalDepth: 30,

					X:[
						{
							id: 1,
							cost:0,
							name:'Soporte',
							height:6,
							width:26.4,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							type: 'nordex',
							id: 2,
							cost:0,
							name:'Nordex',
							height:180,
							width:30,
							cantidad:1,
							color:'nordex',
							area:0,
						},

					],

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





					Z:[
						{
							name:'Superior e Inferior Horizontal',
							height:30,
							width:26.4,
							cantidad:2,
							color:'white',
							area:0,
						},

						{
							name:'Separador Horizontal',
							height:30,
							width:26.4,
							cantidad:4,
							color:'white',
							area:0,
						},

					],



					Extras:[
						{
							id: 1,
							name:'Patines',
							costo:0.04,
							cantidad:4,
						},
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},
					],

					relations: {
						height: {
							x: [
								{id: 1, prop: 1, type: 'normal'}
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},

							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				code: 7,
				name: "Centro de Entretenimiento en L",
				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 60,
					lastTotalWidth: 120,
					lastTotalDepth: 30,

					totalHeight: 60,
					totalWidth: 120,
					totalDepth: 30,


					X:[
						{
							name: 'no existe X',
							height:0,
							width:0,
							cantidad:0,
							color:'white',
							area:0,
						}
					],
					Y:[
						{
							name:'Lateral 1',
							height:56.4,
							width:30,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Lateral 2',
							height:28.2,
							width:30,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Lateral 3',
							height:26.4,
							width:30,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Lateral 4',
							height:26.4,
							width:30,
							cantidad:1,
							color:'white',
							area:0,
						},
					],





					Z:[
						{
							name:'Superior peque'+String.fromCharCode(241)+'o',
							height:30,
							width:30,
							cantidad:1,
							color:'white',
							area:0,
						},

						{
							name:'Superior Largo',
							height:30,
							width:91.8,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Inferior',
							height:30,
							width:120,
							cantidad:1,
							color:'white',
							area:0,
						},

					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:16,
						},
					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							y: [

								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 0.5, type: 'normal'},
								{id: 2, prop: 0.5, type: 'normal'},
								{id: 3, prop: 0.5, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 0.5, type: 'normal'},
								{id: 1, prop: 0.5, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				code: 8,
				name: "Estante Cubo Doble",
				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 70,
					lastTotalWidth: 35,
					lastTotalDepth: 35,

					totalHeight: 70,
					totalWidth: 35,
					totalDepth: 35,


					X:[
						{
							id: 1,
							cost:0,
							name:'nothing',
							height:0,
							width:0,
							cantidad:1,
							color:'white',
							area:0,
						},

					],


					Y:[
						{
							name:'Laterales',
							height:70,
							width:35,
							cantidad:2,
							color:'white',
							area:0,
						},

					],


					Z:[
						{
							name:'Superior e Inferior Horizontal',
							height:35,
							width:31.4,
							cantidad:2,
							color:'white',
							area:0,
						},

						{
							name:'Separador Horizontal',
							height:35,
							width:31.4,
							cantidad:1,
							color:'white',
							area:0,
						},


					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},
					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							y: [

								{id: 0, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},

							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				code: 9,
				name: "Despensero De Cocina Puertas Bajas",
				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 150,
					lastTotalWidth: 40,
					lastTotalDepth: 32,

					totalHeight: 150,
					totalWidth: 40,
					totalDepth: 32,


					X:[
						{
							cost:0,
							name:'Puerta',
							height:53,
							width:40,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							type: 'nordex',
							cost:0,
							name:'Nordex',
							height:150,
							width:30,
							cantidad:1,
							color:'nordex',
							area:0,
						},
						{
							cost:0,
							name:'Tabla peque'+String.fromCharCode(241)+'a vertical',
							height:6,
							width:36.4,
							cantidad:1,
							color:'white',
							area:0,
						},

					],


					Y:[
						{
							name:'Laterales ',
							height:150,
							width:30,
							cantidad:2,
							color:'white',
							area:0,
						},

					],


					Z:[
						{
							name:'Superior e Inferior de la Puerta',
							height:30,
							width:36.4,
							cantidad:2,
							color:'white',
							area:0,
						},

						{
							name:'Superior del Estante ',
							height:30,
							width:36.4,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Separadores Horizontales ',
							height:37,
							width:36.4,
							cantidad:2,
							color:'white',
							area:0,
						},

					],



					Extras:[
						{
							name:'Bisagras Cangrejo',
							costo:1.15,
							cantidad:2,
						},

						{
							name:'Tiradores-Manijas',
							costo:3,
							cantidad:1,
						},
						{
							name:'Patines',
							costo:0.04,
							cantidad:4,
						},
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},
					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'x0.36'},
								{id: 1, prop: 1, type: 'normal'},
							],
							y: [

								{id: 0, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},

							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				code: 10,
				name: "Alacena Cocina de 4 Puertas",
				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 50,
					lastTotalWidth: 140,
					lastTotalDepth: 31,

					totalHeight: 50,
					totalWidth: 140,
					totalDepth: 31,


					X:[
						{
							cost:0,
							name:'Puertas',
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
							type: 'nordex',
							cost:0,
							name:'Nordex',
							height:50,
							width:140,
							cantidad:1,
							color:'nordex',
							area:0,
						},
					],

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
					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							],
							y: [

								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'x0.1/cantidad'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'x1.8/cantidad'},

							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},

							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				code: 11,

				name: "Biblioteca Estante 2 Puertas",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 180,
					lastTotalWidth: 75,
					lastTotalDepth: 30,

					totalHeight: 180,
					totalWidth: 75,
					totalDepth: 30,


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
					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'x0.29'},
								{id: 1, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 0.5, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},						
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				code: 12,
				name: "Velador Flotante",			
			},
			{
				code: 13,
				name: "Centro De Entretenimiento Led",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 40,
					lastTotalWidth: 130,
					lastTotalDepth: 37,

					totalHeight: 40,
					totalWidth: 130,
					totalDepth: 37,

					X:[
						{
							cost:0,
							name:'Puertas Superiores',
							height:15,
							width:64.8,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Puertas Inferiores',
							height:10,
							width:64.8,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Sujetadores',
							height:7,
							width:126.4,
							cantidad:2,
							color:'black',
							area:0,
						},

					],
			

					Y:[
						{
							name:'Laterales',
							height:36.4,
							width:37,
							cantidad:2,
							color:'black',
							area:0,
						},
						{
							name:'Separacion vertical',
							height:36.4,
							width:32.2,
							cantidad:1,
							color:'black',
							area:0,
						},
					],

			
					Z:[
						{
							name:'Superior e Inferior',
							height:37,
							width:130,
							cantidad:2,
							color:'black',
							area:0,
						},

					],



					Extras:[
						{
							name:'Par de Bisagras Cangrejo',
							costo:1.15,
							cantidad:8,
						},

						{
							name:'Fluorescente LED',
							costo:9,
							cantidad:1,
						},
						{
							name:'Cable',
							costo:1.20,
							cantidad:3,
							label: "Metro",

						},
						{
							name:'Enchufe',
							costo:0.50,
							cantidad:1,
						},
						{
							name:'Pistones o Bombas Hidraulicas o Brasos',
							costo:4.50,
							cantidad:2,
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
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},
					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 0.5, type: 'normal'},
								{id: 1, prop: 0.5, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 0.5, type: 'normal'},
								{id: 1, prop: 0.5, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},

							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				code: 14,
				name: "Estante Repisa Flotante Decoracion Sala",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 75,
					lastTotalWidth: 75,
					lastTotalDepth: 17,

					totalHeight: 75,
					totalWidth: 75,
					totalDepth: 17,

					X:[
						{
							cost:0,
							name:'Melaminas X',
							height:22.6,
							width:17,
							cantidad:3,
							color:'white',
							area:0,
						},
						
					],
			

					Y:[
						{
							name:'Melaminas Y',
							height:22.6,
							width:17,
							cantidad:3,
							color:'white',
							area:0,
						},
					],

			
					Z:[
						{
							name:'Melaminas Z',
							height:17,
							width:60,
							cantidad:4,
							color:'white',
							area:0,
						},
						

					],



					Extras:[
						
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},
					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: '/cantidad'},
							],
							y: [
								{id: 0, prop: 1, type: '/cantidad'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				code: 15,
				name: "Mueble Flotante Para Microondas",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 42,
					lastTotalWidth: 64,
					lastTotalDepth: 41,

					totalHeight: 42,
					totalWidth: 64,
					totalDepth: 41,

					X:[
						{
							type:'nordex',
							cost:0,
							name:'Fondo',
							height:38.4,
							width:60.4,
							cantidad:3,
							color:'nordex',
							area:0,
						},
						{
							cost:0,
							name:'Sujetadores',
							height:8,
							width:60.4,
							cantidad:3,
							color:'white',
							area:0,
						},
					],
			

					Y:[
						{
							name:'Laterales',
							height:42,
							width:30,
							cantidad:2,
							color:'white',
							area:0,
						},
					],

			
					Z:[
						{
							name:'Superior Horizontal',
							height:30,
							width:60.4,
							cantidad:4,
							color:'white',
							area:0,
						},
						{
							name:'Inferior Horizontal',
							height:41,
							width:60.4,
							cantidad:4,
							color:'white',
							area:0,
						},
						

					],



					Extras:[
						
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'}
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'}
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				code: 16,
				name: "Biblioteca Librero 4 Estantes",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 150,
					lastTotalWidth: 50,
					lastTotalDepth: 25,

					totalHeight: 150,
					totalWidth: 50,
					totalDepth: 25,

					X:[
						{
							type: 'nordex',
							cost:0,
							name:'Nordex',
							height:145,
							width:30,
							cantidad:3,
							color:'nordex',
							area:0,
						},
						
					],
			

					Y:[
						{
							name:'Laterales',
							height:150,
							width:25,
							cantidad:2,
							color:'white',
							area:0,
						},
					],

			

					Z:[
						{
							name:'Superior e Inferior Horizontal',
							height:25,
							width:46.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Separadores Horizontales',
							height:25,
							width:46.4,
							cantidad:3,
							color:'white',
							area:0,
						},
						

					],



					Extras:[
						
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'}
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				code: 17,
				name: "Comoda 4 Cajones Cerezo",
			},
			{
				code: 18,
				name: "Velador Mesa de Noche",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 70,
					lastTotalWidth: 44,
					lastTotalDepth: 30,

					totalHeight: 70,
					totalWidth: 44,
					totalDepth: 30,

					X:[
						{
							cost:0,
							name:'nada',
							height:0,
							width:0,
							cantidad:0,
							color:'nordex',
							area:0,
						},
						
					],
			

					Y:[
						{
							name:'Laterales',
							height:66.4,
							width:30,
							cantidad:2,
							color:'white',
							area:0,
						},
					],

			

					Z:[
						{
							name:'Superior e Inferior Horizontal',
							height:30,
							width:44,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Separadores Horizontales',
							height:22,
							width:22,
							cantidad:1,
							color:'white',
							area:0,
						},
						

					],



					Extras:[
						{
							name:'Ruedas',
							costo:3.50,
							cantidad:4,
						},
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'width/2'}
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				code: 19,
				name: "Escritorio Flotante Repisa Biblioteca Organizador",
			},
			{
				code: 20,
				name: "Estante Cubo Flotante",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 25,
					lastTotalWidth: 120,
					lastTotalDepth: 25,

					totalHeight: 25,
					totalWidth: 120,
					totalDepth: 25,

					X:[
						{
							cost:0,
							name:'Sujetador',
							height:25,
							width:120,
							cantidad:1,
							color:'white',
							area:0,
						},
						
					],
			

					Y:[
						{
							name:'Laterales',
							height:25,
							width:23.2,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Divisores',
							height:25,
							width:23.2,
							cantidad:3,
							color:'white',
							area:0,
						},
					],

			

					Z:[
						{
							name:'Inferior Horizontal',
							height:25,
							width:120,
							cantidad:2,
							color:'white',
							area:0,
						},
						
						

					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				code: 21,
				name: "Librero Separador Ambiente Estante",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 137,
					lastTotalWidth: 125,
					lastTotalDepth: 22,

					totalHeight: 137,
					totalWidth: 125,
					totalDepth: 22,

					X:[
						{
							cost:0,
							name:'nada',
							height:0,
							width:0,
							cantidad:0,
							color:'white',
							area:0,
						},
						
					],
			

					Y:[
						{
							name:'Laterales',
							height:137,
							width:22,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Laterales Medios Largos',
							height:103.4,
							width:22,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Laterales Medios Peque'+String.fromCharCode(241)+'os',
							height:15,
							width:22,
							cantidad:2,
							color:'white',
							area:0,
						},
					],

			

					Z:[
						{
							name:'Superior e Inferior Horizontal',
							height:22,
							width:121.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Alrededor Horizontal',
							height:22,
							width:43.2,
							cantidad:8,
							color:'white',
							area:0,
						},
						{
							name:'Medios Horizontales',
							height:22,
							width:31.4,
							cantidad:5,
							color:'white',
							area:0,
						},
						
						

					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 0.334, type: 'normal'},
								{id: 2, prop: 0.334, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 0.334, type: 'normal'},
								{id: 2, prop: 0.334, type: 'normal'},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				code: 22,
				name: "Mesa De Noche Velador",
			},
			{
				code: 23,
				name: "Biblioteca Moderna Librero 10 Espacios",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 170,
					lastTotalWidth: 70,
					lastTotalDepth: 26,

					totalHeight: 170,
					totalWidth: 70,
					totalDepth: 26,

					X:[
						{
							type:'nordex',
							cost:0,
							name:'Nordex',
							height:170,
							width:70,
							cantidad:1,
							color:'nordex',
							area:0,
						},
						
					],
			

					Y:[
						{
							name:'Laterales',
							height:170,
							width:26,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Lateral Medio',
							height:161.4,
							width:26,
							cantidad:1,
							color:'white',
							area:0,
						},
					],

			

					Z:[
						{
							name:'Superior e Inferior Horizontal',
							height:26,
							width:66.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Separadores Horizontales',
							height:26,
							width:32.3,
							cantidad:8,
							color:'white',
							area:0,
						},
						
					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 0.5, type: 'normal'},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},

							]
						}
					}

				}
			},
			{
				code: 24,
				name: "Mueble Para Ba"+ String.fromCharCode(241)+"o Inodoro",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 180,
					lastTotalWidth: 63,
					lastTotalDepth: 22,

					totalHeight: 180,
					totalWidth: 63,
					totalDepth: 22,

					X:[
						{
							cost:0,
							name:'Puertas',
							height:45,
							width:31.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Tablas peque'+ String.fromCharCode(241)+'as',
							height:7,
							width:59.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						
						
					],
			

					Y:[
						{
							name:'Laterales',
							height:180,
							width:22,
							cantidad:2,
							color:'white',
							area:0,
						},
					],

			

					Z:[
						{
							name:'Superior e Inferior Puertas',
							height:22,
							width:59.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Separadores Horizontales',
							height:22,
							width:59.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						
					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},
						{
							name:'Tiradores-Manijas',
							costo:3,
							cantidad:2,
						},
						{
							name:'Bisagras Cangrejo',
							costo:1.15,
							cantidad:4,
						},

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 0.5, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},

							]
						}
					}

				}
			},
			{
				code: 25,
				name: "SIN TERMINAR - Mueble Centro De Entretenimiento",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 62,
					lastTotalWidth: 160,
					lastTotalDepth: 42,

					totalHeight: 62,
					totalWidth: 160,
					totalDepth: 42,

					X:[
						{
							type:'nordex',
							cost:0,
							name:'Nordex',
							height:53.2,
							width:160,
							cantidad:1,
							color:'nordex',
							area:0,
						},
						{
							cost:0,
							name:'Cajon - Puertas',
							height:18.6,
							width:54.6,
							cantidad:2,
							color:'black',
							area:0,
						},
			
					],
			

					Y:[
						{
							name:'Laterales',
							height:49.6,
							width:42,
							cantidad:4,
							color:'black',
							area:0,
						},
						{
							name:'Cajon - Laterales',
							height:15,
							width:35,
							cantidad:4,
							color:'black',
							area:0,
						},
					],

			

					Z:[
						{
							name:'Superior para Tv',
							height:42,
							width:110,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Superior para modem',
							height:42,
							width:55,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							type: 'nordex',
							name:'Cajon - Nordex',
							height:35,
							width:52.4,
							cantidad:2,
							color:'nordex',
							area:0,
						},
						{
							name:'Superior e Inferior',
							height:42,
							width:160,
							cantidad:2,
							color:'black',
							area:0,
						},
						

						
					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},
						{
							name:'Tiradores-Manijas',
							costo:3,
							cantidad:2,
						},

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 0.5, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},

							]
						}
					}

				}
			},
			{
				code: 26,
				name: "Mueble De Cocina Alacena",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 150,
					lastTotalWidth: 40,
					lastTotalDepth: 32,

					totalHeight: 150,
					totalWidth: 40,
					totalDepth: 32,

					X:[
						{
							cost:0,
							name:'Puerta',
							height:143,
							width:40,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							type:'nordex',
							cost:0,
							name:'Nordex',
							height:150,
							width:40,
							cantidad:1,
							color:'nordex',
							area:0,
						},
						{
							cost:0,
							name:'Soporte Vertical',
							height:7,
							width:36.4,
							cantidad:1,
							color:'white',
							area:0,
						},
						
						
					],
			

					Y:[
						{
							name:'Laterales',
							height:150,
							width:32,
							cantidad:2,
							color:'white',
							area:0,
						},
					],

			

					Z:[
						{
							name:'Superior e Inferior',
							height:32,
							width:36.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Separadores Horizontales',
							height:32,
							width:36.4,
							cantidad:3,
							color:'white',
							area:0,
						},
						
					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 0.5, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},

							]
						}
					}

				}
			},
			{
				code: 27,
				name: "Mueble Microondas Organizador Cocina",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 89,
					lastTotalWidth: 62,
					lastTotalDepth: 45,

					totalHeight: 89,
					totalWidth: 62,
					totalDepth: 45,

					X:[
						{
							cost:0,
							name:'Puertas',
							height:69,
							width:30.8,
							cantidad:2,
							color:'white',
							area:0,
						},
						
					],
			

					Y:[
						{
							name:'Laterales',
							height:89,
							width:43,
							cantidad:2,
							color:'white',
							area:0,
						},
					],

			

					Z:[
						{
							name:'Superior e Inferior Horizontales',
							height:43,
							width:58.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Superior Puerta Horizontal',
							height:43,
							width:58.4,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Divisiones Horizontales',
							height:43,
							width:58.4,
							cantidad:1,
							color:'white',
							area:0,
						},
						
					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},
						{
							name:'Rueda',
							costo:3.50,
							cantidad:4,
						},
						{
							name:'Tiradores-Manijas',
							costo:3,
							cantidad:2,
						},
						{
							name:'Bisagras Cangrejo',
							costo:1.15,
							cantidad:4,
						},

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 0.5, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				code: 28,
				name: "FATAL ERROR - Mueble Para Tv",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					fixedHeight: 55,
					fixedWidth: 120,
					fixedDepth: 30,

					lastTotalHeight: 55,
					lastTotalWidth: 120,
					lastTotalDepth: 30,

					totalHeight: 55,
					totalWidth: 120,
					totalDepth: 30,

					X:[
						{
							cost:0,
							name:'Nordex',
							height:55,
							width:120,
							cantidad:1,
							color:'nordex',
							area:0,
						},
						
					],
			

					Y:[
						{
							name:'Laterales',
							height:51.4,
							width:30,
							cantidad:4,
							color:'white',
							area:0,
						},
					],

			

					Z:[
						{
							name:'Superior e Inferior Horizontales',
							height:30,
							width:120,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Separador Horizontal',
							height:30,
							width:37.6,
							cantidad:1,
							color:'white',
							area:0,
						},
					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},
					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'aumento' , minWidth: 37.6},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				code: 29,
				name: "Escritorio Moderno Mueble Pc Oficina",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 75,
					lastTotalWidth: 120,
					lastTotalDepth: 55,

					totalHeight: 75,
					totalWidth: 120,
					totalDepth: 55,

					X:[
						{
							cost:0,
							name:'Soporte Librero',
							height:83,
							width:20,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Soporte Escritorio',
							height:73.2,
							width:20,
							cantidad:1,
							color:'white',
							area:0,
						},
						
					],
			

					Y:[
						{
							name:'Lateral Largo Librero',
							height:83,
							width:20,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Lateral Peque'+String.fromCharCode(241)+'o Librero',
							height:73.2,
							width:20,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Lateral Escritorio',
							height:73.2,
							width:55,
							cantidad:1,
							color:'white',
							area:0,
						},

					],

			

					Z:[
						{
							name:'Inferior Librero',
							height:55,
							width:20,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Separador Librero',
							height:55,
							width:20,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Superficie Escritorio',
							height:55,
							width:120,
							cantidad:1,
							color:'white',
							area:0,
						},
						
					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:32,
						},
						{
							name:'Rueda',
							costo:3.50,
							cantidad:4,
						},
						{
							name:'Tiradores-Manijas',
							costo:3,
							cantidad:2,
						},
						{
							name:'Bisagras Cangrejo',
							costo:1.15,
							cantidad:4,
						},

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							],
							z:[
								
								{id: 2, prop: 1, type: 'normal'},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							],
							z: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},





		],

		furniture: null,

	},

	mounted: function () {
		this.furniture = this.furnitures[0]
		this.reCalculate()
	},
	methods: {

		selectFurniture: function (index) {
			this.view = "furniture"
			this.furniture = this.furnitures[index]

			this.original = true
			this.aumento = 0
			this.reCalculate()
		},

		back: function () {
			this.view = "menu"
		},

		changeTotalHeight: function () {

			var dh = this.furniture.data.totalHeight - this.furniture.data.lastTotalHeight

			var relationsx = this.furniture.data.relations.height.x
			var relationsy = this.furniture.data.relations.height.y

			for (var i = 0; i < relationsx.length; i++) {
				var relation = relationsx[i]
				if(relation.type == 'normal'){
					this.furniture.data.X[relation.id].height += dh * relation.prop
				}
				

				if(relation.type == 'x0.36'){
					this.furniture.data.X[relation.id].height = this.furniture.data.totalHeight * 0.36
				}
				if(relation.type == 'x0.29'){
					this.furniture.data.X[relation.id].height = this.furniture.data.totalHeight * 0.29
				}
				if(relation.type == '/cantidad'){
					this.furniture.data.X[relation.id].height += dh / this.furniture.data.X[relation.id].cantidad
				}

			}

			for (var i = 0; i < relationsy.length; i++) {
				var relation = relationsy[i]
				if(relation.type == 'normal'){
					this.furniture.data.Y[relation.id].height += dh * relation.prop
				}
				if(relation.type == '/cantidad'){
					this.furniture.data.Y[relation.id].height += dh / this.furniture.data.Y[relation.id].cantidad
				}

			}

			this.furniture.data.lastTotalHeight = this.furniture.data.totalHeight
		},

		changeTotalWidth: function() {

			var dh = this.furniture.data.totalWidth - this.furniture.data.lastTotalWidth

			var relationsx = this.furniture.data.relations.width.x
			var relationsz = this.furniture.data.relations.width.z

			for (var i = 0; i < relationsx.length; i++) {
				var relation = relationsx[i]
				if(relation.type == 'normal'){
					this.furniture.data.X[relation.id].width += dh * relation.prop
				}
				if(relation.type == 'x0.1/cantidad'){
					this.furniture.data.X[relation.id].width = (this.furniture.data.totalWidth -(0.1 * this.furniture.data.X[relation.id].cantidad))/ this.furniture.data.X[relation.id].cantidad
				}
			}

			for (var i = 0; i < relationsz.length; i++) {
				var relation = relationsz[i]
				if(relation.type == 'normal'){
					this.furniture.data.Z[relation.id].width += dh * relation.prop
				}

				if(relation.type == 'aumento'){

					if (this.furniture.data.totalWidth  < this.furniture.data.fixedWidth ) {
						this.furniture.data.Z[relation.id].width = minWidth
					}
					
					this.furniture.data.Z[relation.id].width += dh * relation.prop

					// if (this.furniture.data.Z[relation.id].width < relation.minWidth || dh < 0) {
					// 	this.furniture.data.Z[relation.id].width = relation.minWidth
					// }

										
				}

				
				if(relation.type == 'x1.8/cantidad'){
					this.furniture.data.Z[relation.id].width = (this.furniture.data.totalWidth -(1.8 * (this.furniture.data.Z[relation.id].cantidad + 1)))/ this.furniture.data.Z[relation.id].cantidad
				}
				if(relation.type == 'width/2'){
					this.furniture.data.Z[relation.id].width = this.furniture.data.totalWidth/2
				}
			}

			this.furniture.data.lastTotalWidth = this.furniture.data.totalWidth
		},

		changeTotalDepth: function () {

			var dh = this.furniture.data.totalDepth - this.furniture.data.lastTotalDepth

			var relationsy = this.furniture.data.relations.depth.y
			var relationsz = this.furniture.data.relations.depth.z

			for (var i = 0; i < relationsy.length; i++) {
				var relation = relationsy[i]
				if(relation.type == 'normal'){
					this.furniture.data.Y[relation.id].width += dh * relation.prop
				}
			}

			for (var i = 0; i < relationsz.length; i++) {
				var relation = relationsz[i]
				if(relation.type == 'normal'){
					this.furniture.data.Z[relation.id].height += dh * relation.prop
				}
			}

			this.furniture.data.lastTotalDepth = this.furniture.data.totalDepth
		},

		reCalculate: function() {
			this.calculateArea()
			this.calculateCost()
			this.calculateExtras()
			this.calculateTotals()
		},

		calculateArea: function () {
      for (var i = 0; i < this.furniture.data.X.length; i++) {
        var piece = this.furniture.data.X[i]
        piece.area = piece.height * piece.width
      }
      for (var i = 0; i < this.furniture.data.Y.length; i++) {
        var piece = this.furniture.data.Y[i]
        piece.area = piece.height * piece.width
      }
      for (var i = 0; i < this.furniture.data.Z.length; i++) {
        var piece = this.furniture.data.Z[i]
        piece.area = piece.height * piece.width
      }
    },

		calculateCost: function () {

			for (var i = 0; i < this.furniture.data.X.length; i++) {
				var med = this.furniture.data.X[i]
				if(med.color == 'white') {
					med.cost = med.cantidad * med.area * this.table.white.centimeterPrice
				}
				if(med.color == 'black'){
					med.cost = med.cantidad * med.area * this.table.black.centimeterPrice
				}
				if(med.color == 'other'){
					med.cost = med.cantidad * med.area * this.table.other.centimeterPrice
				}
				if(med.color == 'nordex'){
					med.cost = med.cantidad * med.area * this.table.nordex.centimeterPrice
				}
			}

			for (var i = 0; i < this.furniture.data.Y.length; i++) {
				var med = this.furniture.data.Y[i]
				if(med.color == 'white') {
					med.cost = med.cantidad * med.area * this.table.white.centimeterPrice
				}
				if(med.color == 'black'){
					med.cost = med.cantidad * med.area * this.table.black.centimeterPrice
				}
				if(med.color == 'other'){
					med.cost = med.cantidad * med.area * this.table.other.centimeterPrice
				}
				if(med.color == 'nordex'){
					med.cost = med.cantidad * med.area * this.table.nordex.centimeterPrice
				}
			}

			for (var i = 0; i < this.furniture.data.Z.length; i++) {
				var med = this.furniture.data.Z[i]
				if(med.color == 'white') {
					med.cost = med.cantidad * med.area * this.table.white.centimeterPrice
				}
				if(med.color == 'black'){
					med.cost = med.cantidad * med.area * this.table.black.centimeterPrice
				}
				if(med.color == 'other'){
					med.cost = med.cantidad * med.area * this.table.other.centimeterPrice
				}
				if(med.color == 'nordex'){
					med.cost = med.cantidad * med.area * this.table.nordex.centimeterPrice
				}
			}
		},

    calculateExtras: function (){
    	for (var i = 0; i < this.furniture.data.Extras.length; i++) {
				var med = this.furniture.data.Extras[i]
				med.cost = med.costo * med.cantidad
			}
    },

		calculateTotals: function () {
      this.calculateTotalCost()
      this.calculateTotalExtras()
    },

		calculateTotalCost: function () {
      this.totalCostX = 0
      this.totalCostY = 0
      this.totalCostZ = 0
      for (var i = 0; i < this.furniture.data.X.length; i++) {
        var piece = this.furniture.data.X[i]
        this.totalCostX += piece.cost
      }
      for (var i = 0; i < this.furniture.data.Y.length; i++) {
        var piece = this.furniture.data.Y[i]
        this.totalCostY += piece.cost
      }
      for (var i = 0; i < this.furniture.data.Z.length; i++) {
        var piece = this.furniture.data.Z[i]
        this.totalCostZ += piece.cost
      }

      this.totalCost = this.totalCostX + this.totalCostY + this.totalCostZ
      console.log('totalCost: ', this.totalCost)
    },

    calculateTotalExtras: function (){
    	this.totalCostExtras = 0

      for (var i = 0; i < this.furniture.data.Extras.length; i++) {
        var piece = this.furniture.data.Extras[i]
        this.totalCostExtras += piece.cost
      }

      this.totalPrice = this.totalCost + this.totalCostExtras

      if (this.original) {
      	console.log('original!')
      	this.originalPrice = this.totalPrice
      	this.original = false
      } else {
      	this.aumento = this.totalPrice - this.originalPrice
      }
    }

	},

	filters: {
    decimal: function (number) {
			return number.toFixed(2)
		}
	}

})



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
