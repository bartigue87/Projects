const form = document['form'];
const firstName = form['firstName'];
const lastName = form['lastName'];
const age = form['age'];
const gender = form['gender'];
const locations = form['locations'];
let diets = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();
  for (let i = 0; i < form.diet.length; i++) {
    if (form.diet[i].checked) {
      diets.push(form.diet[i].value);
    }
  }
  alert(`
    Form submitted with details as follows:
    Name: ${firstName.value} ${lastName.value}
    Age: ${age.value}
    Gender: ${gender.value}
    Location: ${locations.value}
    Dietary Restriction: ${diets}`);
});
