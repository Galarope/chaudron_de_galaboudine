const itemList = [
	{
		name: 'Épée Daedric',
		category: 'épée',
		id: '1ed',
        isBestSale : true,
        isSpecialOffer: true
	},
	{
		name: 'Épée de Plates',
		category: 'épée',
		id: '2ab',
        isBestSale : false,
	},
	{
		name: "Set d'armure Draconique",
		category: 'set',
		id: '3sd',
        isBestSale: true,
        isSpecialOffer: true
	},
	{
		name: 'Casque Nordique Antique',
		category: 'casque',
		id: '4kk',
        isBestSale: false
	},
	{
		name: 'Wabbajack',
		category: 'baton',
		id: '5pl',
        isBestSale: false
	},
	{
		name: 'casque orque',
		category: 'casque',
		id: '6uo',
        isBestSale: false
	},
	{
		name: "Set d'armure de verre",
		category: 'set',
		id: '7ie',
        isBestSale: true
	},
	{
		name: 'Bâton de prêtre-dragon',
		category: 'baton',
		id: '8fp',
        isBestSale: true,
        isSpecialOffer: true
	},
]


function ShoppingList() {
    const categories = itemList.reduce(
        (list, item) => list.includes(item.category) ? list : list.concat(item.category), []

    )

    return (

        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>



        <ul className="cdg-listItem">
            {itemList.map((item) => (
                <li key={item.id}>
                    {item.name}
                    {item.isBestSale ? <span>🔥</span> : null}
                    {item.isSpecialOffer ? <span className="sales">Soldé !</span> : null}
                </li>
                
            ))}
        </ul>

        </div>
    )
}

export default ShoppingList 