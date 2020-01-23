const Bootcamp = require("../models/bootcampSchema");
const getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

const getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false, msg: "data not found" });
    }
    res.json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

const createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

const updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!bootcamp) {
      return res.status(400).json({ success: false, msg: "No data found" });
    }

    res.json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

const deleteBootcamp = async (req, res, next) => {
  try {
    const deleted = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(400).json({ success: false, msg: "No data found" });
    }

    res.json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

module.exports = {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp
};
