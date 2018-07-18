const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LeaseSchema = new Schema({
  start_date: {
    type: Date
  },
  end_date: {
    type: Date
  },
  rental_status: {
    type: String
  },
  toy_id: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  renter_id: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  owner_id: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
});



module.exports.schema = LeaseSchema;
module.exports.model = mongoose.model("Lease", LeaseSchema);
