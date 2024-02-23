var douleur=prompt("Quelle genre de douleur avez-vous abdomen, gorge ou aucune ?");
// en cas d'execution nous attendons des reponses de types String comme l'impose le questionnaire
if( douleur==="abdomen" || douleur==="gorge" || douleur==="aucune"){
    if(douleur==="abdomen"){
        alert("il d'agit d'une appendicite");
    }
    else if(douleur==="gorge"){
        var gorge= prompt("Vous avez de la fievre oui ou non ");
        
        if(gorge==="oui"){
            alert("vous avez de la rhume");
        }
        else if (gorge==="non")
        alert("vous avez une mal de gorge");
    }
    else if(douleur==="aucune"){
        var toux=prompt("il s'agit d'une Toux oui ou non ");
        
        if(toux==="oui"){
            var vef=prompt("il s'agit d'une fievre oui ou non");
           
            if(vef==="oui"){
                alert("il s'agit de la rhume");
            }
            else if(vef==="non"){

                alert("c'est du refroidissement");
            }
        }
        else if(toux==="non"){
           alert("c'est rien");

        }

    }



}