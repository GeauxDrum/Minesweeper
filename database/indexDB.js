const mongoose = require("mongoose");
const videoGameData = require("./videoGameData");
mongoose.connect("mongodb://localhost/front-end-capstone", { useNewUrlParser: true, useUnifiedTopology: true });

let productSchema = mongoose.Schema({
  uniqueID: Number,
  name: String,
  description: String,
  brand: String,
  department: String,
  color: String,
  subDept: String,
  sku: Number,
  price: Number,
  avgRating: Number,
  colors: Array,
  reviews: Array,
  questions: {
    question: String,
    answer: String,
  },
  images: Array,
  peopleAlsoBought: Array,
  peopleAlsoViewed: Array,
  recentlyViewed: Boolean,
});

let Product = mongoose.model("Product", productSchema);

let saveToDB = (model) => {
  var new_product = new Product({
    uniqueID: model.uniqueID,
    name: model.name,
    description: model.description,
    brand: model.brand,
    department: model.department,
    color: model.color,
    subDept: model.subDept,
    sku: model.sku,
    price: model.price,
    avgRating: model.avgRating,
    colors: model.colors,
    reviews: model.reviews,
    questions: {
      question: model.questions.question,
      answer: model.questions.answer,
    },
    images: model.images,
    peopleAlsoBought: model.peopleAlsoBought,
    peopleAlsoViewed: model.peopleAlsoViewed,
    recentlyViewed: model.recentlyViewed,
  });
  console.log("creating a schema");
  new_product.save();
};

let grabOne = (id, callback) => {
  Product.findOne({ uniqueID: id }).exec(callback);
}

// * Seeds Database

// let promiseData = videoGameData.data.map(async (product) => {
//   return product;
// });
// Promise.all(promiseData).then((products) => {
//   products.map((product) => {
//     saveToDB(product);
//   });
// });

module.exports = {
  grabOne
}