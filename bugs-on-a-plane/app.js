const form = document['airline-form'];
const submit = document.getElementById('submit');
const query = document.querySelector;
console.log('form');

function formAlert(e) {
  e.preventDefault();
  const firstName = form['first-name'].value;
  const lastName = form['last-name'].value;
  const age = form['age'].value;
  const gender = form['gender'].value;
  const location = form['travel-location'].value;
  const diet = [];
  if (form.elements['vegan'].checked) {
    diet.push(document.getElementById('vegan').value);
  }
  if (form.elements['gluten'].checked) {
    diet.push(document.getElementById('gluten').value);
  }
  if (form.elements['paleo'].checked) {
    diet.push(document.getElementById('paleo').value);
  }

  alert(
    'First Name: ' +
      firstName +
      '\nLast Name: ' +
      lastName +
      '\nAge: ' +
      age +
      '\nGender: ' +
      gender +
      '\nTravel Location: ' +
      location +
      '\nDiet: ' +
      diet +
      "\nAwesome, now if you die, it won't be an accident.."
  );
}

submit.addEventListener('click', formAlert);
