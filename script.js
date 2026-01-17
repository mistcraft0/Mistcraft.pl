function copyIP() {
    const ipText = "MistCraft.pl"; 
    navigator.clipboard.writeText(ipText).then(() => {
        const confirmation = document.getElementById("copy-confirmation");
        confirmation.style.display = "block";
        setTimeout(() => {
            confirmation.style.display = "none";
        }, 3000);
    });
}
