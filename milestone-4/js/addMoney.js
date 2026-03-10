
document.getElementById('btn-add-money').addEventListener('click', () => {
    const addMoneyForm = document.getElementById('add-money-form');
    addMoneyForm.classList.remove('hidden');

    const latestPaymentSection = document.getElementById('latest-payment-section');
    latestPaymentSection.classList.add('hidden');
});