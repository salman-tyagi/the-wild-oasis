import Settings from '../models/settingsModel.js';

export const createSettings = async (req, res) => {
  try {
    const newSetting = await Settings.create(req.body);
    res.status(201).json({
      status: 'success',
      data: newSetting,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

export const getSettings = async (req, res) => {
  try {
    const settings = await Settings.find();
    res.status(200).json({
      status: 'success',
      data: settings,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
