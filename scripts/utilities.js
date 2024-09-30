
function donation(id, donationId) {
    const donationInput = parseFloat(document.getElementById(id).value);
    const balance = parseFloat(document.getElementById(donationId).innerText);
    const yourBalance = parseFloat(document.getElementById('your-balance').innerText);
    document.getElementById(id).value = '';
    if (isNaN(donationInput) || donationInput < -1) {
        alert('Donation is not successful since you wrote an invalid number');
        return;
    };

    if (donationInput > yourBalance) {
        alert('You have insufficient balance')
        return;
    };

    const yourNewBalance = yourBalance - donationInput;
    document.getElementById('your-balance').innerText = yourNewBalance;

    const newBalance = balance + donationInput;
    document.getElementById(donationId).innerText = newBalance;

    return {
        balance: newBalance,
        donationAmount: donationInput,
    };
};

function showSectionByID(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

};

function buttonColor(id) {
    document.getElementById('btn-donation-page').classList.remove('bg-button-color');
    document.getElementById('btn-history-page').classList.remove('bg-button-color');

    document.getElementById(id).classList.add('bg-button-color');
};

document.getElementById('btn-input-noakhali').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = donation('input-noakhali', 'total-noakhali');
    const donationAmount = amount.donationAmount;
    // console.log(donationAmount);
    if (donationAmount == undefined) {
        return;
    };
    const div = document.createElement('div');
    div.classList.add('border-2', 'rounded-md', 'mt-4', 'p-8');
    div.innerHTML = `
    <h4 class="text-xl font-bold">${donationAmount} Taka is Donated for Flood Relief in Noakhali, Bangladesh </h4>
    <p> Date : ${new Date().toString()}</p>
    `
    document.getElementById('history-container').appendChild(div);
    document.getElementById('donation-successful').showModal();

});


document.getElementById('btn-input-Feni').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = donation('input-Feni', 'total-Feni');
    const donationAmount = amount.donationAmount;
    if (donationAmount == undefined) {
        return;
    };
    const div = document.createElement('div');
    div.classList.add('border-2', 'rounded-md', 'mt-4', 'p-8');
    div.innerHTML = `
    <h4 class="text-xl font-bold">${donationAmount} Taka is Donated for Flood Relief in Feni, Bangladesh </h4>
    <p> Date : ${new Date().toString()}</p>
    `
    document.getElementById('history-container').appendChild(div);
    document.getElementById('donation-successful').showModal();

});

document.getElementById('btn-input-Quota').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = donation('input-Quota', 'total-Quota');
    const donationAmount = amount.donationAmount;
    if (donationAmount == undefined) {
        return;
    };
    const div = document.createElement('div');
    div.classList.add('border-2', 'rounded-md', 'mt-4', 'p-8');
    div.innerHTML = `
    <h4 class="text-xl font-bold">${donationAmount} Taka is Donated for Aid Injured in the Quota Movement, Bangladesh </h4>
    <p> Date : ${new Date().toString()}</p>
    `
    document.getElementById('history-container').appendChild(div);
    document.getElementById('donation-successful').showModal();


});

document.getElementById('btn-donation-page').addEventListener('click', function () {
    showSectionByID('donation-section');
    buttonColor('btn-donation-page');


});

document.getElementById('btn-history-page').addEventListener('click', function () {
    showSectionByID('history-section');
    buttonColor('btn-history-page');




});

