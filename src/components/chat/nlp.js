// nlp.js
const handleNLPRequest = async (message) => {
    try {
        const response = await fetch('http://localhost:5000/nlp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error('Erreur lors de la requête NLP:', error);
        return 'Erreur de traitement';
    }
};

export { handleNLPRequest };

