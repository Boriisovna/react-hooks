const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
  }, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
  }, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
  }, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  }, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
  }, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
  }];

  const state = {};
  state.contacts = contacts;
  state.search = undefined;

for (let i = 0; i < state.contacts.length; i++) {
  if (state.contacts[i].gender == "female") {
    state.contacts[i].gender = "♀";
  }
  if (state.contacts[i].gender == "male") {
    state.contacts[i].gender = "♂";
  }
  if (state.contacts[i].gender == undefined) {
    state.contacts[i].gender = "?";
  }
}

export default state;