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
			norders: {
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
				data: {
					lastTotalHeight: 140,
					lastTotalWidth: 30,
					lastTotalDepth: 30,

					totalHeight: 140,
					totalWidth: 30,
					totalDepth: 30,

					X:[
						{
							id: 1,
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
							id: 2,
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
							id: 1,
							name:'Bisagra Grandes',
							costo:0.48,
							cantidad:5,
						},

						{
							id: 2,
							name:'Patines',
							costo:0.04,
							cantidad:4,
						},
						{
							id: 3,
							name:'Sujetadores',
							costo:0.15,
							cantidad:2,
						},
						{
							id: 4,
							name:'Alcallatas',
							costo:0.06,
							cantidad:2,
						},
						{
							id: 5,
							name:'Tarugos de Madera',
							costo:0.08,
							cantidad:2,
						},
						{
							id: 6,
							name:'Tornillos',
							costo:0.047,
							cantidad:52,
						},
						{
							id: 7,
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
			},
			{
				code: 4,
				name: "Mueble para Laptop",

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
			},
			{
				code: 6,
				name: "Estante Despensero",
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
				name: "Alacena Cocina de 4 Puertas",
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

			}

			for (var i = 0; i < relationsy.length; i++) {
				var relation = relationsy[i]
				if(relation.type == 'normal'){
					this.furniture.data.Y[relation.id].height += dh * relation.prop
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
				if(relation.type == 'x1.8/cantidad'){
					this.furniture.data.Z[relation.id].width = (this.furniture.data.totalWidth -(1.8 * (this.furniture.data.Z[relation.id].cantidad + 1)))/ this.furniture.data.Z[relation.id].cantidad
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
    },

    calculateTotalExtras: function (){
    	this.totalCostExtras = 0

      for (var i = 0; i < this.furniture.data.Extras.length; i++) {
        var piece = this.furniture.data.Extras[i]
        this.totalCostExtras += piece.cost
      }

      this.totalPrice = this.totalCost + this.totalCostExtras

      if (this.original) {
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
