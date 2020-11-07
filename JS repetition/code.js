function colorMixer()
{
    var red = document.getElementById("red").value;
    var blue = document.getElementById("blue").value;
    var green = document.getElementById("green").value;

    document.getElementById("sample").style = "background-color: rgb(" + red + "," + green + "," + blue + ");";
    document.getElementById("color-output").innerHTML = "background-color: rgb(" + red + "," + green + "," + blue + ");";
}