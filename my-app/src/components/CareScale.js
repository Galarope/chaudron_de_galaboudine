function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3, 4, 5]
    
    const scaleType = careType === 'armor' ? '🛡️' : '⚔️'

    const quantityLabel = {
        1: '1/5',
        2: '2/5',
        3: '3/5',
        4: '4/5',
        5: '5/5'
    }

    return (

        <div
			onClick={() =>
				alert(
					`Article noté à ${quantityLabel[scaleValue]} ${
						careType === 'armor' ? "d'armure" : "de dégâts"
					}`
				)
			}
		>

        
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale