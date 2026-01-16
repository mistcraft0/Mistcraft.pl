function copyIP() {
    // Twoje IP
    const ipText = "Mistcraft.pl"; 
    
    navigator.clipboard.writeText(ipText).then(() => {
        const confirmation = document.getElementById("copy-confirmation");
        const ipBox = document.querySelector(".server-ip-box");
        
        confirmation.style.display = "block";
        ipBox.style.borderColor = "#00ff00"; // Zielony błysk przy sukcesie
        
        setTimeout(() => {
            confirmation.style.display = "none";
            ipBox.style.borderColor = "#00B4DB"; // Powrót do niebieskiego
        }, 2000);
    }).catch(err => {
        console.error('Błąd kopiowania: ', err);
        alert("Nie udało się skopiować IP automatycznie. Adres to: Mistcraft.pl");
    });
}