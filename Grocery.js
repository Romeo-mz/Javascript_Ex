document.write("Grocery list : ");
var items = [
    'Oranges',
    'Oregano',
    'Mozzarella cheese',
    'Milk',
    'Detergent powder'
 ];
function toLiItems(item){
    return `<li>${item}</li>`;
}
var liItems = items.map(toLiItems);

document.write('<ol>' + liItems.join(' ') + '</ol>');