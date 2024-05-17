
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);
        const data = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }

        sendEmail(data);
    });

    function sendEmail(data) {
        const email = data.email;
        const subject = encodeURIComponent("Your Order Confirmation");
        const body = encodeURIComponent(
            `Hello ${data.fname} ${data.lname},\n\n` +
            `Thank you for your order from Petal & Wick. Here is the information you provided:\n` +
            `Full Name: ${data.fname} ${data.lname}\n` +
            `Email: ${data.email}\n` +
            `Phone: ${data.phone || 'N/A'}\n` +
            `Shipping Address: ${data.streetAddress}, ${data.city}, ${data.state}, ${data.country}\n\n` +
            `We will contact you if we need further information. Thank you for shopping with us!`
        );

        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
});
