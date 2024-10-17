document.getElementById('convertBtn').addEventListener('click', function() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;
  
    if (amount === '') {
      alert('يرجى إدخال المبلغ');
      return;
    }
  
    // استخدام API للحصول على سعر الصرف
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const rate = data.rates[toCurrency];
        const result = amount * rate;
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
      })
      .catch(error => {
        alert('حدث خطأ أثناء التحويل. حاول مرة أخرى.');
        console.error(error);
      });
  });
  