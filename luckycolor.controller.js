import { getLuckycolor } from "../services/luckycolor.service.js";

export const getResult = async (req, res, next) => {
  try {
    const result = await getLuckycolor({});
    return res.status(200).json({
      status: 200,
      result: result,
      message: "Successfully get Lucky color!",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};