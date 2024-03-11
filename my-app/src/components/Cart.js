import '../styles/Cart.css'
   
   function Cart() {

        const priceDaedricSword = 20

        const pricePlateSword = 25

        const priceDraconicArmorSet = 90

        return <div className="cdg-cart">

            <h2> Votre panier : </h2>

                <ul>

                    <li> Épée Daedric : {priceDaedricSword}€ </li>

                    <li> Épée de Plates : {pricePlateSword}€ </li>

                    <li> Set d'armure Draconique : {priceDraconicArmorSet}€ </li>

                </ul>
                Total du panier : {priceDaedricSword + pricePlateSword +
                    priceDraconicArmorSet}€

        </div>
};

        export default Cart