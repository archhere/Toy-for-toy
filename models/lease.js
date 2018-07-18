const mongoose = require(mongoose);

const Schema = mongoose.Schema;

const LeaseSchema = new Schema({
  start_date: {
    tye: Date
  },
  end_date: {
    type: Date
  },
  rental_status: {
    type: String
  },
  toy_id: {
    type: Schema.Type.ObjectId,
    ref: "users"
  },
  renter_id: {
    type: Schema.Type.ObjectId,
    ref: "users"
  },
  owner_id: {
    type: Schema.Tyoe.ObjectId,
    ref: "users"
  }
});


// module.exports = Lease = mongoose.model(
//   "lease",
//   LeaseSchema
// );

module.exports.schema = LeaseSchema;
module.exports.model = mongoose.model("Lease", LeaseSchema);
