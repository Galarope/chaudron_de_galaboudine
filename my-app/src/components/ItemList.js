import epee from "../assets/epeeVerre.png"

const ItemList = [
	{
		name: 'Épée Daedric',
		category: 'épée',
		id: '1ed',
        isBestSale : true,
        isSpecialOffer: true,
		armor: 1,
		dammage: 5,
        cover: epee		
	},
	{
		name: 'Épée de Plates',
		category: 'épée',
		id: '2ab',
        isBestSale : false,
		armor: 1,
		dammage: 3,
        cover: epee		
	},
	{
		name: "Set d'armure Draconique",
		category: 'set',
		id: '3sd',
        isBestSale: true,
        isSpecialOffer: true,
		armor: 5,
		dammage: 4,
        cover: epee		
	},
	{
		name: 'Casque Nordique Antique',
		category: 'casque',
		id: '4kk',
        isBestSale: false,
		armor: 3,
		dammage: 1,
        cover: epee		
	},
	{
		name: 'Wabbajack',
		category: 'baton',
		id: '5pl',
        isBestSale: false,
		armor: 1,
		dammage: 3,
        cover: epee		
	},
	{
		name: 'casque orque',
		category: 'casque',
		id: '6uo',
        isBestSale: false,
		armor: 4,
		dammage: 2,
        cover: epee		
	},
	{
		name: "Set d'armure de verre",
		category: 'set',
		id: '7ie',
        isBestSale: true,
		armor: 4,
		dammage: 3,
        cover: epee		
	},
	{
		name: 'Bâton de prêtre-dragon',
		category: 'baton',
		id: '8fp',
        isBestSale: true,
        isSpecialOffer: true,
		armor: 1,
		dammage: 5,
        cover: epee		
	},
]

export default ItemList