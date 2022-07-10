const mondayEl = document.querySelector(".monday .graph-column");
const tuesdayEl = document.querySelector(".tuesday .graph-column");
const wednesdayEl = document.querySelector(".wednesday .graph-column");
const thursdayEl = document.querySelector(".thursday .graph-column");
const fridayEl = document.querySelector(".friday .graph-column");
const saturdayEl = document.querySelector(".saturday .graph-column");
const sundayEl = document.querySelector(".sunday .graph-column");

const mondayElHover = document.querySelector(".monday .expense-cost");
const tuesdayElHover = document.querySelector(".tuesday .expense-cost");
const wednesdayElHover = document.querySelector(".wednesday .expense-cost");
const thursdayElHover = document.querySelector(".thursday .expense-cost");
const fridayElHover = document.querySelector(".friday .expense-cost");
const saturdayElHover = document.querySelector(".saturday .expense-cost");
const sundayElHover = document.querySelector(".sunday .expense-cost");

const state = {
  highestExpense: {},
  monday: 0,
  tuesday: 0,
  wednesday: 0,
  thursday: 0,
  friday: 0,
  saturday: 0,
  sunday: 0,
  async main() {
    const res = await fetch("./data.json");
    const data = await res.json();

    // FIND THE HIGHEST EXPENSE

    let lowest = {
      day: "",
      amount: 0,
    };

    let highest = {
      day: "",
      amount: 0,
    };

    for (let i = 0; i < data.length; i++) {
      if (i == 0) {
        lowest.day = data[0].day;
        lowest.amount = data[0].amount;

        highest.day = data[0].day;
        highest.amount = data[0].amount;
      } else {
        if (data[i].amount < lowest.amount) {
          lowest.day = data[i].day;
          lowest.amount = data[i].amount;
        }

        if (data[i].amount > highest.amount) {
          highest.day = data[i].day;
          highest.amount = data[i].amount;
        }
      }
    }

    highestExpense = highest;

    // CHANGE THE COLOR OF THE HIGHEST EXPENSE COLUMN

    document
      .querySelector(`.${highestExpense.day} .graph-column`)
      .classList.add("highest-expense");

    state.monday = data[0].amount;
    state.tuesday = data[1].amount;
    state.wednesday = data[2].amount;
    state.thursday = data[3].amount;
    state.friday = data[4].amount;
    state.saturday = data[5].amount;
    state.sunday = data[6].amount;

    mondayElHover.innerHTML = `$${data[0].amount}`;
    tuesdayElHover.innerHTML = `$${data[1].amount}`;
    wednesdayElHover.innerHTML = `$${data[2].amount}`;
    thursdayElHover.innerHTML = `$${data[3].amount}`;
    fridayElHover.innerHTML = `$${data[4].amount}`;
    saturdayElHover.innerHTML = `$${data[5].amount}`;
    sundayElHover.innerHTML = `$${data[6].amount}`;

    mondayEl.style.height = `${state.monday / 5}rem`;
    tuesdayEl.style.height = `${state.tuesday / 5}rem`;
    wednesdayEl.style.height = `${state.wednesday / 5}rem`;
    thursdayEl.style.height = `${state.thursday / 5}rem`;
    fridayEl.style.height = `${state.friday / 5}rem`;
    saturdayEl.style.height = `${state.saturday / 5}rem`;
    sundayEl.style.height = `${state.sunday / 5}rem`;
  },
};

state.main();
