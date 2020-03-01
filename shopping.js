window.onload = function(){

	printList();

	var name = prompt("Name of Product");
    var price = prompt("Price of Product");
    var amount = prompt("Amount of Product");
    if (name != null){
        list.name += name;
    }
    if (price != null){
        list.price += price;
    }
    if (amount != null){
        list.count += amount;
    } 
}

function printList(list){
	let name = prompt("What would you like to buy?");
	let price = prompt("What is the price?");
	let count = prompt("How many do you want?");
	if(price != null && count !=null){
		total += parseInt(price)*parseInt(count);
	}
	list = [{name:name, price:price, count:count}];
	while(true){
		if (name === null || price == null || count == null){
			console.log(total);
			list.pop()
			break;
		}
		else{
			name = prompt("What would you like to buy?");
			price = prompt("What is it's price?");
			count = prompt("How many do you want?");
			if(price != null && count != null){
				total += parseInt(price)*parseInt(count);
			}
			list.push({name:name, price:price, count:count})
			console.log(total);
		}

}
    for(let i = 0; i < list.length; i++){
        document.getElementById("shoppingList").innerHTML += "<tr><td>" + list[i].name  + "</td> <td>" + list[i].price  + "</td> <td>" + list[i].count  +'</td></tr>';
    }
}
