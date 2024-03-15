import CareScale from './CareScale'
import '../styles/ItemItem.css'
import Count from './Count'

function ItemItem({id, cover, name, armor, dammage }) {
	return ( <>
		<li key={id} className='cdg-item-item' onClick={() => handleClick(name)}>
			<img className='cdg-item-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='armor' scaleValue={armor} />
				<CareScale careType='dammage' scaleValue={dammage} />
			</div>
			
		</li>
	 <Count /></>)
}

function handleClick(itemName) {
    alert(`Vous voulez acheter 1 ${itemName} ? Très bon choix `)
}
export default ItemItem