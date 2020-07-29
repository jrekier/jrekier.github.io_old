module.exports = function(collection) {
  let categorySet = new Set();
  collection.getAll().forEach(function(item) {
    if( "category" in item.data ) {
      let category = item.data.category;
      categorySet.add(category);
    }
  });
  return [...categorySet];
};