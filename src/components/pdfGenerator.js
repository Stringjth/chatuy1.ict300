
export const genererContenuHTML = (preinscriptionData) => {
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Fiche</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  </head>
  <style>
      .entete{
          font-weight: bold;
          border-bottom: 1px solid black;
      }
  </style>
  <body>
      <div class="d-flex justify-content-center align-items-center px-auto">
          <div class="text-center mx-auto">
              République du Cameroun <br>
              Paix-Travail-Patrie <br>
                 -------------- <br>
        Ministère de l'Enseignement Supérieur <br>
                 -------------- <br>
            Université de Yaoundé I (UYI) <br>
                 --------------
          </div>
          <div class="mx-auto">
              <img src="img/ulogo.png" alt="">
          </div>
          <div class="text-center mx-auto">
              Republic of Cameroon <br>
              Peace-Work-Fatherland <br>
                 -------------- <br>
           Ministry of Higher Education <br>
                 -------------- <br>
         The University of Yaounde I (UYI) (UYI) <br>
                 --------------
          </div>
      </div>
      <div class="d-flex justify-content-center align-items-center px-auto">
          <div class="px-auto">
              <img src="img/qr.png" alt="">
          </div>
          <div class="text-center px-auto">
              <h3>
                  FICHE DE PREINSCRIPTION ET QUITUS DE L'UNIVERSITE DE YAOUNDE I <br>
                                ANNEE ACADEMIQUE 2023 / 2024
              </h3>
              <h1>
                  Code : <u>25409140025</u> 
              </h1>
              <h5>
                  Ce code unique permet de voir sa fiche, completer ou corriger ses informations de <br>
                                                     préinscriptions
                   Vous avez actuellement le quitus pour payer vos droits de pré-inscription dans les
                                  agences SGC ou Express Union contre reçu de paiement
              </h5>
          </div>
          <div class="px-auto">
              <img src="img/cadre.png" alt="">
          </div>
      </div>
      <div class="d-flex justify-content-center flex-wrap px-auto">
          <div class="mx-auto">
              <div class="mx-auto px-5 my-2 mb-4">
                  <div class="entete">
                      Etat-Civil
                  </div>
                  <div class="">
                      Code préinscription : 				<b>25409140025</b>  <br>
                      Nom(s) et Prénom(s) : 				${preinscriptionData.Nom} ${preinscriptionData.Prénom}<br>
                      Date de Naissance : 				${preinscriptionData.Datenaissance}<br>
                      Date précise? : 				    ${preinscriptionData.Dateprecise}<br>
                      Lieu de Naissance : 				${preinscriptionData.Lieu}<br>
                      Sexe : ${preinscriptionData.Sexe}<br>
                      Statut matrimonial : 				${preinscriptionData.Statut}<br>
                      Situation professionnelle : 		${preinscriptionData.emploi}<br>
                      Première langue : 					${preinscriptionData.langue1}<br>
                      Email : 							${preinscriptionData.email}<br>
                      Téléphone : 						${preinscriptionData.Tel}<br>
                      N° CNI 								${preinscriptionData.CNI}<br>
                      Adresse 							${preinscriptionData.Adresse}<br>
                      Date de rendez-vous 				${preinscriptionData.Daterdv}<br>
                  </div>
              </div>
              <div class="mx-auto px-5 my-2 mb-4">
                  <div class="entete">
                      Filiation et infos. Urgence
                  </div>
                  <div class="">
                      Nationalité : ${preinscriptionData.Nationalite}<br>
                      Région d'Origine : ${preinscriptionData.RegionNatal}<br>
                      Département d'Origine : ${preinscriptionData.RegionNatal}<br>
                      Nom du Père : ${preinscriptionData.Patername}<br>
                      Profession du Père : ${preinscriptionData.Tafpater}<br>
                      Nom de la Mère : ${preinscriptionData.Mothername}<br>
                      Profession de la Mère : ${preinscriptionData.Workmother}<br>
 <br>
                      <u>Personne à contacter :</u>  <br>
 <br>
                      * Nom : ${preinscriptionData.Emergencyname}<br>
                      * Téléphone : ${preinscriptionData.Emergencall}<br>
                      * Ville : ${preinscriptionData.Adresse}<br>
                  </div>
              </div>
          </div>
          
  
              <div class="mx-auto px-5 my-2 mb-4">
                  <div class="entete">
                      Faculté et filières
                  </div>
                  <div class="">
                      <u><b>Filière :</b></u> <br>
                      Etablissement : ${preinscriptionData.faculte}<br>
                      * 1er Choix : ${preinscriptionData.choix1}<br>
                      * 2ème Choix : ${preinscriptionData.choix2}<br>
                      * 3ème Choix : ${preinscriptionData.choix3}<br>
                      Niveau : ${preinscriptionData.level}<br>
                      Statut CAMEROUNAIS <br>
                  </div>
              </div>
              <div class="mx-auto px-5 my-2 mb-4">
                  <div class="entete">
                      Diplôme
                  </div>
                  <div class="">
                      Type Diplôme : ${preinscriptionData.Diplome}<br>
                      Année d'obtention : ${preinscriptionData.Rate}<br>
                      Moyenne : ${preinscriptionData.Rate}<br>
                      Infos. Jury/Mention : ${preinscriptionData.Mention}<br>
                      Diplôme délivré par : ${preinscriptionData.Namejury}<br>
                      Date de délivrance : ${preinscriptionData.Datemention}<br>
                  </div>              </div>
                  <div class="mx-auto px-5 my-2 mb-4">
                      <div class="entete">
                          Autres Détails
                      </div>
                      <div class="">
                          <u><b>Infos de Paiement :</b></u> <br>
                          * N° Transaction : ${preinscriptionData.Transaction}<br>
                          * Agence de Paiement : EXPRESS UNION <br>
                          * Frais de préinscriiption : ${preinscriptionData.Inscriptionbill}<br>
                          <br>
                          <u><b>Informations Diverses :</b></u> <br>
                          <br>
                          * Pratique Sport : OUI <br>
                          * Pratique Art : NON <br>
                          Numéro du certificat médical : / <br>
                          Lieu du certificat médical : / <br>
                      </div>
                  </div>
              </div>
          </div>
      </body>
      </html>
      `;
    };