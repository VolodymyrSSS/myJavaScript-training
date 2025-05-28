let firstName = "Bogdan";
let lastName = "Lyamzin";
// alert(`${firstName[0]}.${lastName[0]}.`);
// alert(firstName.length);
lastName[0] = "B";
alert(lastName); // нельзя поменять отдельную букву в строке - только перезаписать всю строку
lastName = "B" + lastName[1] + lastName[2]+ lastName[3] + lastName[4] + lastName[5];
alert(lastName);