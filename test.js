import cfx from 'cfx-api';

    
(async () => {
// Retrieve a CitizenFX server (could be a FiveM or a RedM server)
const server = await cfx.fetchServer("mpabma") // Replace "qrpm7v" with a server id
console.log(`STALYA: ${server.players.length} joueurs sont actuellement en ligne sur le serveur !!`);


})();