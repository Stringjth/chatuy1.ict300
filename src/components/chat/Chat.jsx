import React, { useState } from "react";
import "../../css/chatbot.css";

const Chat = () => {
  const [userMessage, setUserMessage] = useState("");
  const [preinscriptionData, setPreinscriptionData] = useState({
    Nom:"",
    Prénom:"",
    Datenaissance:"",
    Dateprecise:"",
    Lieu:"",
    Sexe:"",
    Statut:"",
    emploi:"",
    langue1:"",
    email:"",
    Tel:"",
    CNI:"",
    Adresse:"",
    Daterdv:"",
    Nationalite:"",
    RegionNatal:"",
    Patername:"",
    Tafpater:"",
    Mothername:"",
    Workmother:"",
    Emergencyname:"",
    Emergencysurname:"",
    Emergencall:"",
    faculte:"",
    choix1:"",
    choix2:"",
    choix3:"",
    level:"",
    Nation:"",
    Diplome:"",
    Rate:"",
    Mention:"",
    Namejury:"",
    Datemention:"",
    Transaction:"",
    Inscriptionbill:"",
  });
  const [isPreinscription, setIsPreinscription] = useState(false);
  const [currentPreinscriptionQuestion, setCurrentPreinscriptionQuestion] = useState(0);

  const preinscriptionQuestions = [
    "Quel est votre nom",
    "Quel est votre prénom?",
    "Quelle est votre date de naissance?",
    "Votre date de naissance est-elle précise (oui ou non)?",
    "Quel est votre lieu de naissance?",
    "Déclinez votre sexe.",
    "Quel est votre statut matrimonial?",
    "Quelle est votre situation professionnelle?",
    "Quelle est votre première langue?",
    "Quel est votre e-mail?",
    "Quel est votre numéro de téléphone?",
    "Quel est votre numéro de carte nationale d'identité?",
    "Quelle est votre adresse?",
    "Quelle est votre date de rendez-vous?",
    "Quelle est votre nationalité?",
    "Quelle est votre région d'origine?",
    "Quel est votre département d'origine?",
    "Quel est le nom de votre père?",
    "Quelle est la profession de votre père?",
    "Quel est le nom de votre mère?",
    "Quelle est la profession de votre mère?",
    "Quel est le nom de la personne à contacter en cas d'urgence?",
    "Quel est le prénom de la personne à contacter en cas d'urgence?",
    "Quel est le numéro de téléphone de la personne à contacter en cas d'urgence?",
    "Veuillez indiquer la faculté.",
    "Entrez votre choix 1.",
    "Entrez votre choix 2.",
    "Entrez votre choix 3.",
    "Quel est votre niveau?",
    "Quel est votre statut?",
    "Quel est votre type de diplôme?",
    "Quelle est votre année d'obtention?",
    "Quelle est votre moyenne?",
    "Quelles sont les informations du jury/mention?",
    "Qui a délivré votre diplôme?",
    "Quelle est la date de délivrance de votre diplôme?",
    "Quel est le numéro de transaction de votre paiement?",
    "Quelle est l'agence de paiement?",
    "Quels sont les frais de préinscription?",
    "Vous êtes inscrit."
  ];

  const actions = {
    hello: "Salut je suis MTBOT votre assistant que puis-je faire pour vous!?",
    salut: "Salut en quoi puis-je vous aider!?",
    bonjour: "Bonjour, Avez vous une préoccupation!?",
    coucou: "Salut je suis MTBOT en quoi puis-je vous aider!?",
    Merci: "Je suis à votre service n'hésitez pas à me recontacter si besoin",
    bye: "N'hésitez pas à me recontacter si besoin",
    default: "Vueillez m'excusez je ne possède pas encore cette information"
  };

  const ChatQueue = () => {
    const [queue, setQueue] = useState([]);

    const enqueue = (message) => {
      setQueue((prevQueue) => [...prevQueue, message]);
    };

    const dequeue = () => {
      return queue.shift();
    };

    const isEmpty = () => {
      return queue.length === 0;
    };

    const print = () => {
      console.log(queue.join("\n"));
    };

    return { queue, enqueue, dequeue, isEmpty, print };
  };

  const { queue, enqueue } = ChatQueue();
  const calculer = (expression) => {
    try {
      return eval(expression);
    } catch (error) {
      return "Erreur de calcul";
    }
  };

 
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      try {
        const message = event.target.value;
        setUserMessage("");
        let response;
        if (isPreinscription) {
          response = mtbot.respond(message);
          setPreinscriptionData((prevState) => ({
            ...prevState,
            [preinscriptionQuestions[currentPreinscriptionQuestion - 1]]: message,
          }));
        } else {
          response = await fetch('http://localhost:5000/webhook', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: message }),
            mode: 'cors', // Ajout du mode cors
          });
          response = await response.json();
        }
        enqueue({ type: "User", message });
        enqueue({ type: "MTBOT", message: response });
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  // Vérifier le format de la date (jj/mm/aaaa)
  const isValidDate = (date) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(date);
  };
  
  // Vérifier le format de l'e-mail
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  // Vérifier si c'est un numéro
  const isNumber = (input) => {
    return !isNaN(input);
  };
  
  return (
  <div className="chatbot-container">
    <div className="mtbot">
      <iframe
        allow="microphone;"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/e0e398fd-bb60-402c-9fa3-7cebf528180c">
      </iframe>
    </div>
  </div>
);

};

export default Chat;
