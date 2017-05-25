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

		canteado: {
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
				image: "./img/mesa-flotante-plegable.jpg",
				name: "Mesa Flotante Plegable",

				// Costo de Materiales
				materialsCost: null,
				// Costo de Faricacion
				manufacturingCost: 10,
				// Costo de Instalacion
				installationCost: 10,

				// Costo de produccion
				productionCost: null,

				// Costo de Entrega
				deliveryCost: 0,

				// Publicacion de Mercado Libre
				publicationURL: "",

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
							color:'black',
							area:0,
							canteado: {
								height: 2,
								width: 2
							},
							canteadoCost: 0
						},
						{
							cost:0,
							name:'Sujetador de Puerta',
							height:76.1,
							width:51,
							cantidad:1,
							color:'white',
							area:0,
							canteado: {
								height: 2,
								width: 2
							},
							canteadoCost: 0
						},
						{
							cost:0,
							name:'Sujetadores',
							height:8,
							width:51.4,
							cantidad:2,
							color:'white',
							area:0,
							canteado: {
								height: 2,
								width: 2
							},
							canteadoCost: 0
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
							canteado: {
								height: 2,
								width: 2
							},
							canteadoCost: 0
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
							canteado: {
								height: 2,
								width: 2
							},
							canteadoCost: 0
						},
						{
							name:'Parte de Inferior',
							height:20,
							width:51.4,
							cantidad:1,
							color:'white',
							area:0,
							canteado: {
								height: 2,
								width: 2
							},
							canteadoCost: 0
						},
						{
							name:'Medios Horizontales',
							height:18,
							width:51.4,
							cantidad:2,
							color:'white',
							area:0,
							canteado: {
								height: 2,
								width: 2
							},
							canteadoCost: 0
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
				image: "./img/mueble-despensero-multiusos.jpg",
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
							cantidad:1,
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
				image: "./img/mesa-plegable.jpg",
				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 79,
					lastTotalWidth: 136,
					lastTotalDepth: 60,

					totalHeight: 79,
					totalWidth: 136,
					totalDepth: 60,

					X:[
						{
							cost:0,
							name:'Sujetador de Puerta',
							height:77,
							width:33,
							cantidad:2,
							color:'white',
							area:0,
						},


					],

					Y:[
						{
							name:'Laterales de Mesa',
							height:77,
							width:60,
							cantidad:2,
							color:'white',
							area:0,
						},

					],

					Z:[
						{
							name:'Negro - Mesa',
							height:60,
							width:50,
							cantidad:2,
							color:'black',
							area:0,
						},

						{
							name:'Centro de Mesa',
							height:60,
							width:34,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Separador Horizontal de Contenido',
							height:60,
							width:25,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Parte Inferior de Mesa',
							height:60,
							width:25,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Pequeña melamina',
							height:7,
							width:25,
							cantidad:4,
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
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
								{id: 4, prop: 1, type: 'normal'},
							]
						},
						depth: {
							y: [
								{id: 0, prop: 0.5, type: 'normal'},

							],
							z: [
								{id: 0, prop: 0.5, type: 'normal'},
								{id: 1, prop: 0.5, type: 'normal'},
								{id: 2, prop: 0.5, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
								{id: 4, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				code: 4,
				name: "Mueble para Laptop",
				image: "./img/mueble-para-laptop.jpg",
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
			// {
			// 	code: 5,
			// 	name: "NO DISPONIBLE - Repisa BioCuero",
			// 	fixedCosts: 50,
			// 	gain: 120,
			// 	salePrice: 200,
			// },
			{
				code: 6,
				name: "Estante Despensero",
				image: "./img/estante-despensero.jpg",
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
							cantidad:5,
							color:'white',
							area:0,
						},

					],



					Extras:[
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
				image: "./img/centro-de-entretenimiento-en-l.jpg",
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
				image: "./img/estante-cubo-doble.jpg",
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
							cost:0,
							name:'nothing',
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
				image: "./img/despensero-de-cocina-puertas-bajas.jpg",
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
				image: "./img/alacena-cocina-de-4-puertas.jpg",
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
				image: "./img/biblioteca-estante-2-puertas.jpg",

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
							cost:0,
							name:'Puertas Bajas',
							height:52,
							width:37.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Nordex',
							height:180,
							width:75,
							cantidad:1,
							color:'nordex',
							area:0,
						},
						{
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
				image: "./img/velador-flotante.jpg",
				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 16,
					lastTotalWidth: 40,
					lastTotalDepth: 35,

					totalHeight: 16,
					totalWidth: 40,
					totalDepth: 35,


					X:[
						{
							cost:0,
							name:'Cajon Puerta',
							height:16,
							width:40,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Cajon Parte trasera',
							height:12.4,
							width:36.4,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Tapa delantera y trasera',
							height:9,
							width:30.2,
							cantidad:2,
							color:'white',
							area:0,
						},

					],


					Y:[
						{
							name:'Cajon Laterales',
							height:12.4,
							width:35,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Tapas laterales',
							height:9,
							width:30,
							cantidad:2,
							color:'white',
							area:0,
						},

					],


					Z:[
						{
							name:'Superior e Inferior',
							height:35,
							width:40,
							cantidad:2,
							color:'white',
							area:0,
						},

						{
							type: 'nordex',
							name:'Superficie interior - Nordex',
							height:30,
							width:33.8,
							cantidad:1,
							color:'nordex',
							area:0,
						},

					],



					Extras:[
						{
							name:'Correderas de 30cm',
							costo:2.45,
							cantidad:2,
						},
						{
							name:'Tornillos Fijadores',
							costo:0.18,
							cantidad:3,
						},
						{
							name:'Tarugos Naranja',
							costo:0.08,
							cantidad:3,
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
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
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
				code: 13,
				name: "Centro De Entretenimiento Led",
				image: "./img/centro-de-entretenimiento-led.jpg",

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
							name:'Bisagras Cangrejo',
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
				image: "./img/estante-repisa-flotante-decoracion-sala.jpg",

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
							name:'Melamina Superior',
							height:17,
							width:60,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Melaminas Z',
							height:17,
							width:60,
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
				code: 15,
				name: "Mueble Flotante Para Microondas",
				image: "./img/mueble-flotante-para-microondas.jpg",

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
							cantidad:1,
							color:'nordex',
							area:0,
						},
						{
							cost:0,
							name:'Sujetadores',
							height:8,
							width:60.4,
							cantidad:2,
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
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Inferior Horizontal',
							height:41,
							width:60.4,
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
				image: "./img/biblioteca-librero-4-estantes.jpg",

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
							cantidad:1,
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
				// NUMERO 18
				code: 17,
				name: "Comoda 4 Cajones Cerezo",
				image: "./img/comoda-4-cajones-cerezo.jpg",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 80,
					lastTotalWidth: 80,
					lastTotalDepth: 40,

					totalHeight: 80,
					totalWidth: 80,
					totalDepth: 40,

					X:[
						{
							type: 'nordex',
							cost:0,
							name:'Mueble - NORDEX',
							height:80,
							width:80,
							cantidad:1,
							color:'nordex',
							area:0,
						},
						{
							cost:0,
							name:'Mueble - Soporte Inferior ',
							height:10,
							width:76.4,
							cantidad:1,
							color:'other',
							area:0,
						},
						{
							cost:0,
							name:'Mueble - Soporte Inferior peque'+String.fromCharCode(241)+'o',
							height:8,
							width:76.4,
							cantidad:1,
							color:'other',
							area:0,
						},
						{
							cost:0,
							name:'Cajon - Puertas',
							height:14.9,
							width:80,
							cantidad:4,
							color:'other',
							area:0,
						},
						{
							cost:0,
							name:'Cajon - Tapas delanteras + traseras',
							height:12,
							width:70.2,
							cantidad:8,
							color:'other',
							area:0,
						},

					],


					Y:[
						{
							name:'Mueble - Laterales',
							height:78.2,
							width:40,
							cantidad:2,
							color:'other',
							area:0,
						},
						{
							name:'Cajon - Tapas Laterales',
							height:12,
							width:35,
							cantidad:8,
							color:'other',
							area:0,
						},
					],



					Z:[
						{
							name:'Mueble - Superior',
							height:40,
							width:80,
							cantidad:1,
							color:'other',
							area:0,
						},
						{
							name:'Mueble - Soporte',
							height:8,
							width:76.4,
							cantidad:2,
							color:'other',
							area:0,
						},
						{
							name:'Cajon - Superficie NORDEX',
							height:34,
							width:72.8,
							cantidad:4,
							color:'other',
							area:0,
						},
						{
							name:'Cajon - Soportes',
							height:8,
							width:31.4,
							cantidad:4,
							color:'other',
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
							cantidad:4,
						},
						{
							name:'Correderas',
							costo:2.45,
							cantidad:8,
						},

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
								{id: 4, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
								{id: 4, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
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
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				// NUMERO 19
				code: 18,
				name: "Velador Mesa de Noche",
				image: "./img/velador-mesa-de-noche.jpg",

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
							name:'Lateral Largo',
							height:66.4,
							width:30,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Lateral Medio',
							height:66.4,
							width:22,
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
								{id: 1, prop: 1, type: 'normal'},
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
				// NUMERO 20
				code: 19,
				name: "PENDIENTE - Escritorio Flotante Repisa Biblioteca Organizador",
				image: "./img/escritorio-flotante-repisa-biblioteca-organizador.jpg",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 155,
					lastTotalWidth: 150,
					lastTotalDepth: 50,

					totalHeight: 155,
					totalWidth: 150,
					totalDepth: 50,

					X:[
						{
							cost:0,
							name:'Repisa - Fondo de un cuadro',
							height:21.4,
							width:21.4,
							cantidad:1,
							color:'white',
							area:0,
						},

					],


					Y:[
						{
							name:'Escritorio - Lateral',
							height:78.2,
							width:50,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Repisa - Laterales largos',
							height:98.2,
							width:25,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Repisa - Lateral pequeño',
							height:10,
							width:23.2,
							cantidad:1,
							color:'white',
							area:0,
						},

					],



					Z:[
						{
							name:'Escritorio - Superficie',
							height:50,
							width:130,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Repisa - Superior',
							height:25,
							width:21.4,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Repisa - Divisiones',
							height:25,
							width:21.4,
							cantidad:3,
							color:'white',
							area:0,
						},
						{
							name:'Repisa - Inferior',
							height:25,
							width:50,
							cantidad:1,
							color:'white',
							area:0,
						},

					],



					Extras:[
						{
							name:'Angulos de Fierro',
							costo:1.50,
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
								{id: 0, prop: 1, type: 'normal'},
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
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
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
								{id: 3, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				// NUMERO 21
				code: 20,
				name: "Estante Cubo Flotante",
				image: "./img/estante-cubo-flotante.jpg",

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
				// NUMERO 22
				code: 21,
				name: "Librero Separador Ambiente Estante",
				image: "./img/librero-separador-ambiente-estante.jpg",

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
							cantidad:70,
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
				// NUMERO 23
				code: 22,
				name: "PENDIENTE - Mesa De Noche Velador",
				image: "./img/mesa-de-noche-velador.jpg",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 50,
					lastTotalWidth: 44,
					lastTotalDepth: 36,

					totalHeight: 50,
					totalWidth: 44,
					totalDepth: 36,

					X:[
						{
							type: 'nordex',
							cost:0,
							name:'Nordex',
							height:50,
							width:44,
							cantidad:1,
							color:'nordex',
							area:0,
						},
						{
							cost:0,
							name:'Soporte Inferior Mueble',
							height:10,
							width:40.4,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Cajon - Puerta',
							height:17,
							width:44,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Cajon - Tapas Horizontales',
							height:13,
							width:34.2,
							cantidad:2,
							color:'white',
							area:0,
						},
						
					],
			

					Y:[
						{
							name:'Laterales',
							height:50,
							width:34,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Cajon - Tapas Laterales ',
							height:13,
							width:32,
							cantidad:2,
							color:'white',
							area:0,
						},
						
					],

			

					Z:[
						{
							name:'Superior',
							height:36,
							width:44,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Inferior',
							height:34,
							width:40.4,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							type: 'nordex',
							name:'Cajon - Nordex',
							height:22,
							width:37.8,
							cantidad:1,
							color:'nordex',
							area:0,
						},
					],



					Extras:[
						{
							name:'Tiradores-Manijas',
							costo:3,
							cantidad:1,
						},
						{
							name:'Correderas',
							costo:2.45,
							cantidad:2,
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
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
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
								{id: 1, prop: 1, type: 'normal'},
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
				//NUMERO 24
				code: 23,
				name: "Biblioteca Moderna Librero 10 Espacios",
				image: "./img/biblioteca-moderna-librero-10-espacios.jpg",
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
				//NUMERO 25
				code: 24,
				name: "Mueble Para Ba"+ String.fromCharCode(241)+"o Inodoro",
				image: "./img/mueble-para-bano-inodoro.jpg",
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
				//NUMERO 26
				code: 25,
				name: "Mueble Centro De Entretenimiento",
				image: "./img/mueble-centro-de-entretenimiento.jpg",

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
							name:'Negro - Cajon - Puertas',
							height:18.6,
							width:54.6,
							cantidad:2,
							color:'black',
							area:0,
						},
						{
							cost:0,
							name:'Negro - Cajon - Tapas Parte delantera y trasera ',
							height:15,
							width:54.6,
							cantidad:4,
							color:'black',
							area:0,
						},
						{
							cost:0,
							name:'Blanco - Inferior ',
							height:7,
							width:110,
							cantidad:2,
							color:'white',
							area:0,
						},


					],


					Y:[
						{
							name:'Negro -Laterales',
							height:49.6,
							width:42,
							cantidad:4,
							color:'black',
							area:0,
						},
						{
							name:'Negro - Cajon - Tapas Laterales',
							height:15,
							width:35,
							cantidad:4,
							color:'black',
							area:0,
						},
						{
							name:'Blanco - Laterales',
							height:7,
							width:38.4,
							cantidad:2,
							color:'white',
							area:0,
						},
					],



					Z:[
						{
							name:'Blanco - Superior para Tv',
							height:42,
							width:110,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Blanco - Superior para modem',
							height:42,
							width:55,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							type: 'nordex',
							name:'Nordex - Cajon ',
							height:35,
							width:52.4,
							cantidad:2,
							color:'nordex',
							area:0,
						},
						{
							name:'Negro - Superior e Inferior',
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
						{
							name:'Correderass',
							costo:2.45,
							cantidad:4,
						},

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
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
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
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
								{id: 3, prop: 1, type: 'normal'},

							]
						}
					}

				}
			},
			{
				//NUMERO 27
				code: 26,
				name: "Mueble De Cocina Alacena",
				image: "./img/mueble-de-cocina-alacena.jpg",

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
				//NUMERO 28
				code: 27,
				name: "Mueble Microondas Organizador Cocina",
				image: "./img/mueble-microondas-organizador-cocina.jpg",

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
				//NUMERO 29
				code: 28,
				name: "FATAL ERROR - Mueble Para Tv",
				image: "./img/mueble-para-tv.jpg",

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
				//NUMERO 30
				code: 29,
				name: "Escritorio Moderno Mueble Pc Oficina",
				image: "./img/escritorio-moderno-mueble-pc-oficina.jpg",

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
								{id: 1, prop: 1, type: 'normal'},
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
			{
				//NUMERO 32
				code: 30,
				name: "Despensero Estante Con 2 Puertas",
				image: "./img/despensero-estante-con-2-puertas.jpg",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 180,
					lastTotalWidth: 70,
					lastTotalDepth: 30,

					totalHeight: 180,
					totalWidth: 70,
					totalDepth: 30,

					X:[
						{
							type:'nordex',
							cost:0,
							name:'Nordex',
							height:180,
							width:70,
							cantidad:1,
							color:'nordex',
							area:0,
						},
						{
							cost:0,
							name:'Puertas',
							height:65,
							width:34.8,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Soporte Vertical',
							height:7,
							width:66.4,
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
							name:'Superior e Inferior Estante',
							height:30,
							width:66.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Superior Puerta',
							height:30,
							width:66.4,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Divisiones Arriba',
							height:30,
							width:66.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Divisiones Abajo',
							height:30,
							width:66.4,
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
								{id: 1, prop: 0.37, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},

							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: .5, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
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
								{id: 3, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				//NUMERO 33
				code: 31,
				name: "Estante Librero Con 4 Estantes",
				image: "./img/estante-librero-con-4-estantes.jpg",

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
							type:'nordex',
							cost:0,
							name:'Nordex',
							height:150,
							width:50,
							cantidad:1,
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
							name:'Superior e Inferior Estante',
							height:25,
							width:46.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Divisores Estante',
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
				//NUMERO 39
				code: 32,
				name: "Mueble De Cocina",
				image: "./img/mueble-de-cocina.jpg",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 180,
					lastTotalWidth: 70,
					lastTotalDepth: 30,

					totalHeight: 180,
					totalWidth: 70,
					totalDepth: 30,

					X:[
						{
							type:'nordex',
							cost:0,
							name:'Nordex',
							height:180,
							width:70,
							cantidad:1,
							color:'nordex',
							area:0,
						},
						{
							cost:0,
							name:'Puertas Grandes',
							height:45,
							width:34.8,
							cantidad:4,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Cajon - Puerta ',
							height:20,
							width:70,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Peque'+String.fromCharCode(241)+'as Melaminas',
							height:7,
							width:66.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Cajon - Tapas Parte delantera y trasera',
							height:15,
							width:60.2,
							cantidad:2,
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
						{
							name:'Cajon - Tapas laterales',
							height:15,
							width:25,
							cantidad:2,
							color:'white',
							area:0,
						},


					],



					Z:[
						{
							type: 'nordex',
							name:'Cajon - Nordex',
							height:25,
							width:63.8,
							cantidad:1,
							color:'nordex',
							area:0,
						},
						{
							name:'Superior e Inferior de Puertas',
							height:30,
							width:66.4,
							cantidad:4,
							color:'white',
							area:0,
						},
						{
							name:'Divisiones Horizontales',
							height:30,
							width:66.4,
							cantidad:4,
							color:'white',
							area:0,
						},

					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:47,
						},
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
							name:'Patines',
							costo:0.04,
							cantidad:4,
						},
						{
							name:'Correderas',
							costo:2.45,
							cantidad:2,
						},

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
								{id: 4, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},

							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
								{id: 4, prop: 1, type: 'normal'},
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
								{id: 1, prop: 1, type: 'normal'},


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
				//NUMERO 40
				code: 33,
				name: "Escritorio con Armario",
				image: "./img/escritorio-con-armario.jpg",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 125,
					lastTotalWidth: 140,
					lastTotalDepth: 40,

					totalHeight: 125,
					totalWidth: 140,
					totalDepth: 40,

					X:[
						{
							cost:0,
							name:'Escritorio - Parte Frontal',
							height:20,
							width:98.2,
							cantidad:1,
							color:'white',
							area:0,
						},

						{
							cost:0,
							name:'Armario-COLOR - Parte trasera',
							height:138.2,
							width:50,
							cantidad:1,
							color:'other',
							area:0,
						},
						{
							cost:0,
							name:'Armario-COLOR - Puerta',
							height:127,
							width:30,
							cantidad:1,
							color:'other',
							area:0,
						},
						{
							cost:0,
							name:'Armario- peque'+String.fromCharCode(241)+'o soporte',
							height:7,
							width:50,
							cantidad:1,
							color:'white',
							area:0,
						},


					],


					Y:[
						{
							name: 'Armario- COLOR -Laterales',
							height:127.6,
							width:38.2,
							cantidad:2,
							color:'other',
							area:0,
						},
						{
							cost:0,
							name:'Escritorio - COLOR - Lateral',
							height:80,
							width:40,
							cantidad:1,
							color:'other',
							area:0,
						},
						{
							name: 'Armario- peque'+String.fromCharCode(241)+'os soportes',
							height:7,
							width:38.2,
							cantidad:2,
							color:'white',
							area:0,
						},



					],



					Z:[
						{
							cost:0,
							name:'Escritorio - Mesa',
							height:40,
							width:100,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Armario - Superior e Inferior',
							height:40,
							width:50,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Armario - Separadores interiores',
							height:30,
							width:20,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Armario - Separadores exteriores',
							height:36,
							width:26.4,
							cantidad:2,
							color:'white',
							area:0,
						},


					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:46,
						},


					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
								{id: 4, prop: 1, type: 'normal'},
							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},

							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
								{id: 4, prop: 1, type: 'normal'},
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
								{id: 1, prop: 1, type: 'normal'},


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
				//NUMERO 41
				code: 34,
				name: "Estante Repisa ",
				image: "./img/estante-repisa.jpg",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 180,
					lastTotalWidth: 65,
					lastTotalDepth: 22,

					totalHeight: 180,
					totalWidth: 65,
					totalDepth: 22,

					X:[
						{

							cost:0,
							name:'Sujetador de Estante',
							height:180,
							width:40,
							cantidad:1,
							color:'other',
							area:0,
						},



					],


					Y:[
						{
							name:'Vertical de L',
							height:27.9,
							width:22,
							cantidad:6,
							color:'white',
							area:0,
						},


					],



					Z:[
						{
							name:'Horizontal arriba',
							height:22,
							width:65,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Horizontal de L',
							height:22,
							width:65,
							cantidad:6,
							color:'white',
							area:0,
						},

					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:42,
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
				//NUMERO 42
				code: 35,
				name: "Centro De Entretenimiento",
				image: "./img/centro-de-entretenimiento.jpg",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 0,
					lastTotalWidth: 0,
					lastTotalDepth: 0,

					totalHeight: 0,
					totalWidth: 0,
					totalDepth: 0,

					X:[
						{
							cost:0,
							name:'Mueble - forma L Vertical',
							height:15,
							width:106.4,
							cantidad:1,
							color:'white',
							area:0,
						},

						{
							cost:0,
							name:'Escritorio - Vertical',
							height:10,
							width:90,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Estante - forma L Vertical',
							height:32,
							width:110,
							cantidad:1,
							color:'white',
							area:0,
						},


					],


					Y:[
						{
							name:'Mueble - Laterales',
							height:56.4,
							width:40,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Escritorio - Lateral',
							height:78.2,
							width:40,
							cantidad:1,
							color:'white',
							area:0,
						},


					],



					Z:[
						{
							name:'Mueble - Superior e Inferior',
							height:40,
							width:110,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Mueble - forma L Horizontal',
							height:15,
							width:106.4,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Escritorio - superficie',
							height:40,
							width:120,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Escritorio - Melaminas Z',
							height:10,
							width:90,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Estante - forma L Horizontal',
							height:14,
							width:110,
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
							name:'Patas 6cm',
							costo:3.20,
							cantidad:4,
						},
						{
							name:'Patas 12cm',
							costo:4.80,
							cantidad:1,
						},
						{
							name:'Perno Grande + Tuercas + Huachas',
							costo:3,
							cantidad:1,
						},

					],

					relations: {
						height: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},

							],
							y: [
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
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
								{id: 3, prop: 1, type: 'normal'},
								{id: 4, prop: 1, type: 'normal'},
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
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
								{id: 4, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				//NUMERO 43
				code: 36,
				name: "Mesa De Centro",
				image: "./img/mesa-de-centro.jpg",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 50,
					lastTotalWidth: 90,
					lastTotalDepth: 50,

					totalHeight: 50,
					totalWidth: 90,
					totalDepth: 50,

					X:[
						{
							cost:0,
							name:'Blanco- X',
							height:39.4,
							width:40,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							cost:0,
							name:'Negro - X',
							height:19.4,
							width:86.4,
							cantidad:1,
							color:'white',
							area:0,
						},

					],


					Y:[
						{
							name:'Negro- Lateral Alto',
							height:39.4,
							width:40,
							cantidad:1,
							color:'black',
							area:0,
						},
						{
							name:'Negro- Lateral Pequeño',
							height:19.4,
							width:40,
							cantidad:1,
							color:'black',
							area:0,
						},


					],



					Z:[
						{
							name:'Negro - Superficie Inferior',
							height:50,
							width:90,
							cantidad:1,
							color:'black',
							area:0,
						},
						{
							name:'Negro - Superficie Superior',
							height:40,
							width:50,
							cantidad:1,
							color:'black',
							area:0,
						},
						{
							name:'Blanco - Superficie ',
							height:50,
							width:48.2,
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
							name:'Ruedas',
							costo:3.50,
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
								{id: 2, prop: 1, type: 'normal'},

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
								{id: 2, prop: 1, type: 'normal'},

							]
						}
					}

				}
			},
			{
				//NUMERO 44
				code: 37,
				name: "Estante Gabinete Para Ba"+String.fromCharCode(241)+"o",
				image: "./img/estante-gabinete-para-bano.jpg",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 140,
					lastTotalWidth: 60,
					lastTotalDepth: 25,

					totalHeight: 140,
					totalWidth: 60,
					totalDepth: 25,

					X:[
						{
							type:'nordex',
							cost:0,
							name:'Nordex',
							height:140,
							width:60,
							cantidad:1,
							color:'nordex',
							area:0,
						},
						{
							cost:0,
							name:'Puerta',
							height:140,
							width:60,
							cantidad:1,
							color:'white',
							area:0,
						},

					],
			

					Y:[
						{
							name:'Laterales',
							height:140,
							width:25,
							cantidad:2,
							color:'white',
							area:0,
						},

					],

			

					Z:[
						{
							name:'Superior e Inferior',
							height:25,
							width:56.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Separadores',
							height:25,
							width:56.4,
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
						{
							name:'Manija grande Baño',
							costo:40,
							cantidad:1,
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
				//NUMERO 45
				code: 38,
				name: "Escritorio Moderno Minimalista",
				image: "./img/escritorio-moderno-minimalista.jpg",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 80,
					lastTotalWidth: 120,
					lastTotalDepth: 45,

					totalHeight: 80,
					totalWidth: 120,
					totalDepth: 45,

					X:[
						{
							cost:0,
							name:'Nada',
							height:0,
							width:0,
							cantidad:0,
							color:'nordex',
							area:0,
						},
					],
			

					Y:[
						{
							name:'Escritorio - Laterales peque'+String.fromCharCode(241)+'os',
							height:12,
							width:45,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Escritorio - Laterales largos',
							height:62.6,
							width:45,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Complementos - Laterales ',
							height:62.6,
							width:26,
							cantidad:2,
							color:'other',
							area:0,
						},
					],

			

					Z:[
						{
							name:'Escritorio - superficie',
							height:45,
							width:120,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Escritorio - peque'+String.fromCharCode(241)+'as melaminas',
							height:45,
							width:20,
							cantidad:4,
							color:'white',
							area:0,
						},
						{
							name:'Complementos - Superior e Inferior ',
							height:26,
							width:30,
							cantidad:4,
							color:'other',
							area:0,
						},
						{
							name:'Complementos - Separadores ',
							height:26,
							width:30,
							cantidad:2,
							color:'other',
							area:0,
						},


					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:40,
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
								{id: 2, prop: 1, type: 'normal'},
							]
						},
						width: {
							x: [
								{id: 0, prop: 1, type: 'normal'},
								
							],
							z:[
								{id: 0, prop: 1, type: 'normal'},
								{id: 1, prop: 1, type: 'normal'},
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
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
								{id: 3, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				//NUMERO 46
				code: 39,
				name: "Estante Librero Repisa Minimalista",
				image: "./img/estante-librero-repisa-minimalista.jpg",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 160,
					lastTotalWidth: 110,
					lastTotalDepth: 30,

					totalHeight: 160,
					totalWidth: 110,
					totalDepth: 30,

					X:[
						{
							cost:0,
							type:'nordex',
							name:'Librero Grande - NORDEX',
							height:160,
							width:50,
							cantidad:1,
							color:'nordex',
							area:0,
						},
						{
							cost:0,
							type:'nordex',
							name:'Libreros Peque'+String.fromCharCode(241)+'os - NORDEX',
							height:115,
							width:30,
							cantidad:2,
							color:'nordex',
							area:0,
						},
					],
			

					Y:[
						{
							name:'Librero Grande - Laterales',
							height:160,
							width:30,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Libreros Peque'+String.fromCharCode(241)+'os - Laterales',
							height:120,
							width:30,
							cantidad:2,
							color:'white',
							area:0,
						},
					],

			

					Z:[
						{
							name:'Librero Grande - Superior',
							height:30,
							width:46.4,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Librero Grande - Divisiones',
							height:30,
							width:46.4,
							cantidad:4,
							color:'other',
							area:0,
						},
						{
							name:'Libreros Peque'+String.fromCharCode(241)+'os - Superficie',
							height:30,
							width:28.2,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Libreros Peque'+String.fromCharCode(241)+'os - Divisiones',
							height:30,
							width:28.2,
							cantidad:6,
							color:'other',
							area:0,
						},


					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:42,
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
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
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
								{id: 2, prop: 1, type: 'normal'},
								{id: 3, prop: 1, type: 'normal'},
							]
						}
					}

				}
			},
			{
				//NUMERO 47
				code: 40,
				name: "Mesita Moderna Y Practica Desayunadora",
				image: "./img/mesita-moderna-y-practica-desayunadora.jpg",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 95,
					lastTotalWidth: 100,
					lastTotalDepth: 40,

					totalHeight: 95,
					totalWidth: 100,
					totalDepth: 40,

					X:[
						{
							cost:0,
							name:'Melamina X',
							height:30,
							width:64.6,
							cantidad:1,
							color:'white',
							area:0,
						},
					],
			

					Y:[
						{
							name:'Laterales',
							height:92.8,
							width:40,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Lateral Medio',
							height:92.8,
							width:30,
							cantidad:1,
							color:'white',
							area:0,
						},
					],

			

					Z:[
						{
							name:'Superficie',
							height:40,
							width:100,
							cantidad:1,
							color:'white',
							area:0,
						},
						{
							name:'Divisiones',
							height:30,
							width:26.4,
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
								{id: 1, prop: 1, type: 'normal'},
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
				//NUMERO 48
				code: 41,
				name: "Estante Separador De Ambientes Minimalista",
				image: "./img/estante-separador-de-ambiente-minimalista.jpg",

				fixedCosts: 50,
				gain: 120,
				salePrice: 200,

				data: {
					lastTotalHeight: 180,
					lastTotalWidth: 180,
					lastTotalDepth: 30,

					totalHeight: 180,
					totalWidth: 180,
					totalDepth: 30,

					X:[
						{
							cost:0,
							name:'Nada',
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
							height:180,
							width:30,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Laterales Pequeño',
							height:28.2,
							width:30,
							cantidad:4,
							color:'white',
							area:0,
						},
						{
							name:'Laterales Alrededor',
							height:60,
							width:30,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Laterales Centro',
							height:58.2,
							width:30,
							cantidad:2,
							color:'white',
							area:0,
						},
					],

			

					Z:[
						{
							name:'Superficie e Inferior',
							height:30,
							width:176.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Horizontales Pequeños',
							height:30,
							width:58.2,
							cantidad:4,
							color:'white',
							area:0,
						},
						{
							name:'Horizontales Alrededor',
							height:30,
							width:56.4,
							cantidad:2,
							color:'white',
							area:0,
						},
						{
							name:'Horizontales Centro',
							height:30,
							width:58.2,
							cantidad:2,
							color:'white',
							area:0,
						},
					],



					Extras:[
						{
							name:'Tornillos',
							costo:0.047,
							cantidad:52,
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
								{id: 1, prop: 1, type: 'normal'},
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

		// this.furniture = this.furnitures[0]
		// this.reCalculate()

		for (var i = 0; i < this.furnitures.length; i++) {
			this.furniture = this.furnitures[i]
			this.furniture.manufacturingCost = 10
			this.furniture.installationCost = 10
			this.reCalculate()
		}
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
						this.furniture.data.Z[relation.id].width = relation.minWidth
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
				var canteado = 0
				if(med.canteado)
					canteado = med.height * med.canteado.height +  med.width * med.canteado.width

				if(med.color == 'white') {
					med.cost = med.cantidad * med.area * this.table.white.centimeterPrice
					med.canteadoCost = canteado * this.canteado.white.centimeterPrice
				}
				if(med.color == 'black'){
					med.cost = med.cantidad * med.area * this.table.black.centimeterPrice
					med.canteadoCost = canteado * this.canteado.black.centimeterPrice
				}
				if(med.color == 'other'){
					med.cost = med.cantidad * med.area * this.table.other.centimeterPrice
					med.canteadoCost = canteado * this.canteado.other.centimeterPrice
				}
				if(med.color == 'nordex'){
					med.cost = med.cantidad * med.area * this.table.nordex.centimeterPrice
				}
			}

			for (var i = 0; i < this.furniture.data.Y.length; i++) {
				var med = this.furniture.data.Y[i]
				var canteado = 0
				if(med.canteado)
					canteado = med.height * med.canteado.height +  med.width * med.canteado.width

				if(med.color == 'white') {
					med.cost = med.cantidad * med.area * this.table.white.centimeterPrice
					med.canteadoCost = canteado * this.canteado.white.centimeterPrice
				}
				if(med.color == 'black'){
					med.cost = med.cantidad * med.area * this.table.black.centimeterPrice
					med.canteadoCost = canteado * this.canteado.black.centimeterPrice
				}
				if(med.color == 'other'){
					med.cost = med.cantidad * med.area * this.table.other.centimeterPrice
					med.canteadoCost = canteado * this.canteado.other.centimeterPrice
				}
				if(med.color == 'nordex'){
					med.cost = med.cantidad * med.area * this.table.nordex.centimeterPrice
				}
			}

			for (var i = 0; i < this.furniture.data.Z.length; i++) {
				var med = this.furniture.data.Z[i]
				var canteado = 0
				if(med.canteado)
					canteado = med.height * med.canteado.height +  med.width * med.canteado.width

				if(med.color == 'white') {
					med.cost = med.cantidad * med.area * this.table.white.centimeterPrice
					med.canteadoCost = canteado * this.canteado.white.centimeterPrice
				}
				if(med.color == 'black'){
					med.cost = med.cantidad * med.area * this.table.black.centimeterPrice
					med.canteadoCost = canteado * this.canteado.black.centimeterPrice
				}
				if(med.color == 'other'){
					med.cost = med.cantidad * med.area * this.table.other.centimeterPrice
					med.canteadoCost = canteado * this.canteado.other.centimeterPrice
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
        this.totalCostX += piece.canteadoCost
      }
      for (var i = 0; i < this.furniture.data.Y.length; i++) {
        var piece = this.furniture.data.Y[i]
        this.totalCostY += piece.cost
        this.totalCostY += piece.canteadoCost
      }
      for (var i = 0; i < this.furniture.data.Z.length; i++) {
        var piece = this.furniture.data.Z[i]
        this.totalCostZ += piece.cost
        this.totalCostZ += piece.canteadoCost
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

      this.furniture.materialsCost = (this.totalCostX + this.totalCostY + this.totalCostZ) + this.totalCostExtras
      this.furniture.productionCost = this.furniture.materialsCost + this.furniture.manufacturingCost + this.furniture.installationCost

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
