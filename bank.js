document.getElementById('deposit-submit').addEventListener('click', function() {
  if (!document.getElementById('deposit-value').value) {
    alert("Ke tumi, Baap er sathe chalaki korte ascho? Taka dhukanor nam bole khali haat Baap er Pocket e dhukano kintu pocket er health er jonno bipodjonok hote pare😉. Akam korle dhora obossoi khaba.....");
  }
  else {
    document.getElementById('deposit-amount').innerText = parseInt(document.getElementById('deposit-value').value) + parseInt(document.getElementById('deposit-amount').innerText);
    document.getElementById('total-amount').innerText = parseInt(document.getElementById('deposit-value').value) + parseInt(document.getElementById('total-amount').innerText);
  }
})

document.getElementById('withdraw-submit').addEventListener('click', function() {
  if (!document.getElementById('withdraw-value').value) {
    alert("Pocket e haat diye khali haat ber korle jeno mone na koro je, keu ter pay nai😉. Ami kintu dekhe felechi😒");
  }
  else {
    document.getElementById('withdraw-amount').innerText = parseInt(document.getElementById('withdraw-value').value) + parseInt(document.getElementById('withdraw-amount').innerText);
    if (parseInt(document.getElementById('total-amount').innerText) - parseInt(document.getElementById('withdraw-value').value) < 0) {
      document.getElementById('total-amount').innerText = parseInt(document.getElementById('total-amount').innerText) - parseInt(document.getElementById('withdraw-value').value);
    }
    else {
      alert('Ekjon manusher Baap er Pocket ek mohurte khali korar ability koyjoner thake🥹!!!');
    }
  }
})