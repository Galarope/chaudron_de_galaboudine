import ItemItem from "./ItemItem"
import ItemList from "./ItemList"
import CareScale from "./CareScale"




function ShoppingList() {
	const categories = ItemList.reduce(
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
				{ItemList.map((item) => (
					/* <li key={item.id}>
						 {item.name}
						 {item.isBestSale ? <span>🔥</span> : null}
						 {item.isSpecialOffer ? <span className="sales">Soldé !</span> : null}
						 <CareScale careType='armor' scaleValue={item.armor} />
						 <CareScale careType='dammage' scaleValue={item.dammage} />
					 </li> */
					
						<ItemItem
							key={item.id}
							id={item.id}
							cover={item.cover}
							name={item.name}
							armor={item.armor}
							dammage={item.dammage}
						/>
					
				))}
			</ul>

		</div>
	)
}



export default ShoppingList 