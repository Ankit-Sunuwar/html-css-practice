// Events Listeners
// you can create your own events
// you can use already created events

const converter = () => {
  const firstValue = Number(document.getElementById("kmValue").value) ?? 0; // null coalescing operator
  const secondValue = Number(document.getElementById("mValue").value) ?? 0;

  const firstMeasurement = document.getElementById("firstDropdown").value;
  const secondMeasurement = document.getElementById("secondDropdown").value;

  let result = "";
  if (firstMeasurement === secondMeasurement) {
    result = firstValue;
  }
  if (firstMeasurement === "km" && secondMeasurement === "m") {
    result = firstValue * 1000;
  }
  if (firstMeasurement === "m" && secazondMeasurement === "km") {
    result = firstValue / 1000;
  }

  document.getElementById("mValue").value = result;
};

// document.getElementByClassName("mValue").value = result;  (classs ko lagi ho.)

// html ma id ko satta class lekh nu parxa.
