import { useState } from 'react'
import '../styles/footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert('Le signe "@" est manquant, adresse mail non valide')
		}
	}

	return (
		<footer className='cdg-footer'>
			<div className='cdg-footer-elem'>
				Vous êtes passionné par skyrim et vous aimez ce que nous faisons? Laissez nous votre e-mail!
			</div>
			<div className='cdg-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Email'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer