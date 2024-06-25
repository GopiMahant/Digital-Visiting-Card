document.addEventListener('DOMContentLoaded', function() {
    const imageSrc = sessionStorage.getItem('image');
    if (imageSrc) {
        document.getElementById('cardImage').src = imageSrc;
    }

    document.getElementById('cardBusinessName').textContent = sessionStorage.getItem('businessName');
    document.getElementById('cardCompanyName').textContent = sessionStorage.getItem('companyName');
    document.getElementById('cardPersonalNumber').textContent = "Phone: " + sessionStorage.getItem('personalNumber');
    document.getElementById('cardWhatsappNumber').textContent = "WhatsApp: " + sessionStorage.getItem('whatsappNumber');
    document.getElementById('cardWebsite').textContent = "Website: " + sessionStorage.getItem('website');
    document.getElementById('cardAddress').textContent = "Address: " + sessionStorage.getItem('address');
    document.getElementById('cardServices').textContent = "Services: " + sessionStorage.getItem('services');
    document.getElementById('cardEmail').textContent = "Email: " + sessionStorage.getItem('email');

    const facebookLink = sessionStorage.getItem('facebook');
    const instagramLink = sessionStorage.getItem('instagram');
    const linkedinLink = sessionStorage.getItem('linkedin');

    if (facebookLink) {
        document.getElementById('facebookLink').href = facebookLink;
    } else {
        document.getElementById('facebookLink').style.display = 'none';
    }

    if (instagramLink) {
        document.getElementById('instagramLink').href = instagramLink;
    } else {
        document.getElementById('instagramLink').style.display = 'none';
    }

    if (linkedinLink) {
        document.getElementById('linkedinLink').href = linkedinLink;
    } else {
        document.getElementById('linkedinLink').style.display = 'none';
    }

    const whatsappNumber = sessionStorage.getItem('whatsappNumber');
    if (whatsappNumber) {
        const formattedNumber = whatsappNumber.replace(/[^0-9]/g, ''); // Remove non-numeric characters
        const whatsappUrl = `https://wa.me/${formattedNumber}?text=Hello`;
        QRCode.toCanvas(document.getElementById('qrcode'), whatsappUrl, function(error) {
            if (error) console.error(error);
        });
    }
});
