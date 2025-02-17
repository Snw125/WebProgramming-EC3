function SwapData() { 
    const myButton = document.getElementById("jump");
    if (myButton.textContent === "Jump >") {
        var value_left = document.getElementById("left").value;
        document.getElementById("right").value = value_left;
        document.getElementById("left").value = "";
    } else {
        var value_right = document.getElementById("right").value;
        document.getElementById("left").value = value_right;
        document.getElementById("right").value = "";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById("jump");
    myButton.addEventListener("click", function() {
      if (myButton.textContent === "Jump >") {
        myButton.textContent = "< Jump";
      } else {
        myButton.textContent = "Jump >";
      }
    });
});