document.getElementById('cardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    const reader = new FileReader();
    reader.onload = function(e) {
        sessionStorage.setItem('image', e.target.result);
    };

    reader.readAsDataURL(formData.get('image'));

    sessionStorage.setItem('businessName', formData.get('businessName'));
    sessionStorage.setItem('companyName', formData.get('companyName'));
    sessionStorage.setItem('personalNumber', formData.get('personalNumber'));
    sessionStorage.setItem('whatsappNumber', formData.get('whatsappNumber'));
    sessionStorage.setItem('website', formData.get('website'));
    sessionStorage.setItem('address', formData.get('address'));
    sessionStorage.setItem('services', formData.get('services'));
    sessionStorage.setItem('email', formData.get('email'));
    sessionStorage.setItem('facebook', formData.get('facebook'));
    sessionStorage.setItem('instagram', formData.get('instagram'));
    sessionStorage.setItem('linkedin', formData.get('linkedin'));

    window.location.href = 'card.html';
});
