import { body } from "express-validator";

export const registerCaptainValidator = [
  body("fullname.firstname")
    .notEmpty().withMessage("First name required")
    .isLength({ min: 3 }),

  body("fullname.lastname")
    .optional()
    .isLength({ min: 3 }),

  body("email")
    .notEmpty()
    .isEmail().withMessage("Invalid email"),

  body("password")
    .notEmpty()
    .isLength({ min: 6 }),

  body("vehicle.color")
    .notEmpty()
    .isLength({ min: 3 }),

  body("vehicle.plate")
    .notEmpty()
    .isLength({ min: 3 }),

  body("vehicle.capacity")
    .notEmpty()
    .isInt({ min: 1 }).withMessage("Capacity must be >= 1"),

  body("vehicle.vehicleType")
    .notEmpty()
    .isIn(["car", "motorcycle", "auto"])
    .withMessage("Invalid vehicle type"),
];

export const loginCaptainValidator = [
  body("email")
    .notEmpty()
    .isEmail(),

  body("password")
    .notEmpty(),
];