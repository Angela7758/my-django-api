function Food() {

    const food01 = "Pasta";
    const food02 = "Salad";


    const food1 = {
        name: "Pizza",
        description: "A delicious cheese and tomato pizza.",
        price: "$12.99"
    };

    const food2 = { 
        name: "Burger",
        description: "A classic American burger.",
        price: "$10.99"
    };




  return (
    <ul>
        <li>{food01}</li>
        <li>{food02}</li>
        <li>{food1.name} - {food1.description} - {food1.price}</li>
        <li>{food2.name} - {food2.description} - {food2.price}</li>
    </ul>
  );
}


export default Food;