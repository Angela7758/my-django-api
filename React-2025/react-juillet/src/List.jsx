function List(props) {   

//   const fruits = [{id: 1, name: "apple", calories: 95}, 
//                   {id: 2, name: "banana", calories: 105}, 
//                   {id: 3, name: "orange", calories: 120}, 
//                   {id: 4, name: "grape", calories: 110}];

// fruits.sort((a, b) => a.calories - b.calories);
// fruits.sort((a, b) => a.name.localeCompare(b.name));
// fruits.sort((a, b) => b.name.localeCompare(a.name));
// fruits.sort((a, b) => b.calories - a.calories);

//   const lowCalFruits = fruits.filter(fruit => fruit.calories < 110);

 const category = props.category;
 const itemList = props.items;

  const listItems = itemList.map(item  => <li key={item.id}>
                                              {item.name}: &nbsp;
                                              <b>{item.calories}</b></li>);
  return(       
        <>
        <h2 className="list-category">{category}</h2>
        <ol className="list-items">{listItems}</ol>
        </>);

}
export default List;

// The new version of the code uses the `map` method to create a list of `li` elements, each containing a fruit name. The `map` method takes a callback function that returns a new element for each element in the array. In this case, the callback function simply returns a `li` element with the fruit name as its content. The resulting array of `li` elements is then returned as the JSX code for the `List` component.
