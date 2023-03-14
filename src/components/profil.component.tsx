import Input from "./input.component"
import "./styles/profil.css"
import Valide from "./valide.component"
import image from "./../assets/img/investir.png";
const Profil = () => {
    return (
        <div className="pf_container">
            <img src={image} width="100%" height="150"  />
             <div className="p_container_cmpt" >
             
            <h1>Pour déterminer si votre entreprise est apte à lever des fonds via Includia,
répondez aux questions suivantes :</h1>

            </div>
            <Valide name="Mon entreprise est-elle établie, enregistrée et en activité ?"/>
            <Valide name="Mon entreprise génère-t-elle des revenus ?"/>
            <Valide name="Est-ce que j'amasse 250 000 $ ou plus?"/>
            <Valide name="Ai-je des engagements fermes représentant au moins 25 % de ce cycle ?"/>
            <div className="p_container_cmpt" >
            <h1>Si vous remplissez les conditions ci-dessus, vous devrez nous fournir des
réponses aux questions suivantes :</h1>
            </div>
            <h5>INFORMATIONS</h5>
            <div className="input_container">
                
                <Input name="Quel est le nom de l'entreprise ?" placeholder="NOM(S)" />
                <div className="ecart_inpt">
               
                <Input  name="Quel est le site Web de l'entreprise ?" placeholder="Quel est le site Web de l'entreprise ?" />
                </div>
            </div>
            <div className="input_container">
                <Input name="Nom(s) du (des) fondateur(s)" placeholder="Nom(s) du (des) fondateur(s)" />
                <div className="ecart_inpt">
               
               <Input name="Emplacement de l'entreprise" placeholder="Emplacement de l'entreprise" />
               </div>
            </div>
            <h4>Depuis combien de temps travaillez-vous ?</h4>
            <input className="pf_input_inf" placeholder="Depuis combien de temps travaillez-vous ?" />
            <div className="input_container">
            <Input name="Combien récoltez-vous ? " placeholder="Combien récoltez-vous ? " />
                <div className="ecart_inpt">
               
               <Input name="Et quand avez-vous besoin de l'argent ? " placeholder="Et quand avez-vous besoin de l'argent ? " />
               </div>
            </div>
            <Valide name="Avez-vous des engagements fermes de la part des investisseurs sur ce tour ?"/>
            <Valide name="Avez-vous collecté des fonds dans le passé ?"/>
            <h4>Veuillez me parler de votre expérience de collecte de fonds</h4>
            <textarea  className="pf_input_inf_banc" />
            <Valide name="Avez-vous collecté des fonds dans le passé ?"/>
            <Valide name="Votre entreprise a-t-elle des dettes passées ou actuelles ?"/>
            <Valide name="Avez-vous déjà réussi à le rembourser ?"/>
            <h4>Pourquoi levez-vous des capitaux ? En bref, à quoi servent les fonds ?</h4>
            <textarea  className="pf_input_inf_banc" />
            <h4>Où es-tu inscrit ? Et quelle est la structure juridique de l'entreprise (c'est-à-dire la société à responsabilité limitée) ?</h4>
            <textarea  className="pf_input_inf_banc" />
            <hr />
            <h5>Plate-forme de présentation</h5>
            <div className="input_container">
                <Input name="Telecgarger votre fichier" placeholder="Telecgarger votre fichier" />
                <div className="ecart_inpt">
               
               <Input name="Telecgarger votre fichier" placeholder="Telecgarger votre fichier" />
               </div>
            </div>
            <hr />
            <div className="pf_countainer_btn">
                <button className="btn1">brouillon enregistrer</button>
                <button className="btn2">Appliquer</button>
            </div>
            
        </div>
    )
}
export default Profil