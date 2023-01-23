function bottomButton() {
    let text = document.createTextNode(document.getElementById("name").value)
    document.getElementById("name").value = ""
    let guest = document.createElement("li")
    guest.appendChild(text)
    let guests = document.getElementById("guests")
    guests.appendChild(guest)
}