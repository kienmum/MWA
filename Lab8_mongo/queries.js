//1. query to display all the documents in the collection restaurants
db.restaurants.find();

// 2. query to display the fields restaurant_id, name, district and cuisine
// for all the documents in the collection restaurant
db.restaurants.find({},{restaurant_id:1,name:1,district:1, cuisine:1});

// 3. query to display the fields restaurant_id, name, district and cuisine,
// but exclude the field _id for all the documents in the collection
db.restaurants.find({},{_id:0,restaurant_id:1,name:1,district:1, cuisine:1});

// 4. query to display the fields restaurant_id, name, district, zipcode
// exclude the field_id for all the documents in the collection res
db.restaurants.find({},{_id:0,restaurant_id:1,name:1,district:1, 'address.zipcode':1});

// 5. query to display all the restaurant which is in the district Bronx
db.restaurants.find({district:'Bronx'});

// 6. query to display the first 5 restaurant which is in the district Bronx
db.restaurants.find({district:'Bronx'}).limit(5);

// 7. query to display the next 5 restaurants after skipping first 5 which are
// in the district Bronx
db.restaurants.find({district:'Bronx'}).skip(5).limit(5);

// 8. query to find the restaurants which locates in coord value
// less than -95.754168
db.restaurants.find({'address.coord':{$lt:-95.754168}});

// 9. query to find the restaurants that does not prepare any cuisine
// of 'American' and their grade score more than 70 and coord value
// less than -65.754168
db.restaurants.find({$and:[{cuisine:{$ne:'American'}}, {'grades.score':{$gt:70}},{'address.coord':{$lt:-65.754168}}]});

// 10. Query to find the restaurant id, name, district and cuisine for those restaurants which
// contains 'Wil' as first three letters for its name.
db.restaurants.find({name:{$regex:'^Wil'}},{_id:0, restaurant_id:1, name:1, district:1, cuisine:1});

// 11. query to find the restaurant id, name, district and cuisine for those restaurants which
// contains 'ces' as last three letters for its name.
db.restaurants.find({name:{$regex: 'ces$'}}, {restaurant_id:1, name:1, district:1, cuisine:1})

// 12. query to find the restaurant Id, name, district and cuisine for those restaurants which 
// contains 'Reg' as three letters somewhere in its name.
db.restaurants.find({name:{$regex: 'Reg'}}, {restaurant_id:1, name:1, district:1, cuisine:1});

// 13. Query to find the restaurants which belongs to the district Bronx and prepared either American or Chinese dish
db.restaurants.find({$and:[{district:'Bronx'},{cuisine:{$in:['Chinese', 'American']}}]});

// 14. Query to find the restaurant Id, name, district and cuisine for those restaurants which
// belongs to the district Staten Island or Queens or Bronx or Brooklyn
db.restaurants.find({district:{$in:['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}},{_id:0, restaurant_id:1, name:1,district:1, cuisine:1});

// 15. query to find the restaurant Id, name, district and cuisine for those restaurants which are
// not belonging to the district Staten Island or Queens or Bronx or Brooklyn
db.restaurants.find({district:{$nin:['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}},{_id:0, restaurant_id:1, name:1,district:1, cuisine:1});

// 16. query to find the restaurant id, name, district and cuisine for those restaurants which 
// achieved a score which is not more than 10
db.restaurants.find({"grades.score":{$lt:10}},{_id:0, restaurant_id:1, name:1,district:1, cuisine:1});

// 17. query to find the restaurant id, name, address, and geographical location for those restaurants
// where 2nd element of coord array contains a value which is more than 42, and up to 52
db.restaurants.find({"address.coord.1":{$gt:42, $lt: 52}},{_id:0, restaurant_id:1, name:1,address:1});

// 18. Query to arrange the name of the restaurants in ascending order along with all the columns
db.restaurants.find().sort({name:1});

// 19. Query to arrange the name of the restaurants in descending order along with all the columns
db.restaurants.find().sort({name:-1});

// 20 query to arrange the name of the cuisine in ascending order and for those same cuisine district
// should be in descending order
db.restaurants.find().sort({name:1, cuisine:-1, district:-1});

// 21. Query to know whether all the addresses contains the street or not
db.restaurants.find({'address.street':{$exists:true}});

// 22. Query which will select all documents in the restaurants collection where
// the coord field value is Double.
db.restaurants.find({'address.coord':{$type: "double"}});

// 23. query to find the restaurant name, district, longitude and latitude and cuisine for those
// restaurants which contains 'Mad' as first three letters of its name
db.restaurants.find({name: {$regex:'^Mad'}},{name:1, district:1, 'address.coord':1});