import mongoose from 'mongoose';


const ComplaintSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 500,
  },
  category: {
    type: String,
    required: true,
    enum: ['Roads', 'Lighting', 'Waste Management', 'Water Supply', 'Others'], 
  },
  authority: {
    type: String,
    required: true,
  },
  location: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Resolved', 'Rejected'],
    default: 'Pending',
  },
  updates: [
    {
      status: {
        type: String,
        required: true,
        enum: ['Pending', 'In Progress', 'Resolved', 'Rejected'],
      },
      message: {
        type: String,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Complaint = mongoose.model('Complaint', ComplaintSchema);
export default Complaint
