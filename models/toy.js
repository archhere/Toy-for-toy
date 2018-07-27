const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const ToySchema = new Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  line1: {
    type: String,
    required: true
  },
  line2: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  // geometry: {
  //   type: {
  //     type: String,
  //     default: "Point"
  //     //unique:true
  //   },
  //   coordinates: {
  //     type: [Number],
  //     index: "2dsphere"
  //   }
  // },
  description: {
    type: String,
    required: true
  },
  ageGroup: {
    type: [String],
    required: true
  },
  toyType: {
    type: String,
    required: true
  },
  rental_rate: {
    type: Number,
    required: true
  },
  rental_type: {
    type: String,
    required: true
  },
  img_url: {
    type: String
  }

});


module.exports.schema = ToySchema;
module.exports.model = mongoose.model("Toy", ToySchema);
