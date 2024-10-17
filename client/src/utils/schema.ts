import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
  cPassword: z.string().min(8, { message: "Confirmation password must be at least 8 characters long." })
});


export const signinSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long." })
});


export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address." })
});


export const resetPasswordSchema = z.object({
  password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
  cPassword: z.string().min(8, { message: "Confirmation password must be at least 8 characters long." })
});

// User Schema
export const UserSchema = z.object({
  id: z.string().cuid({ message: "Invalid user ID format" }),
  email: z.string().email({ message: "Invalid email address" }),
  name: z.string().nullable().optional(),
  createdAt: z.date({ message: "Invalid creation date" }),
  updatedAt: z.date({ message: "Invalid update date" }),
});

export const CreateUserSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  name: z.string().nullable().optional(),
});

// Contribution Schema
export const UploadContributionSchema = z.object({
  // id: z.string().cuid({ message: "Invalid contribution ID format" }),
  mobile: z.string().regex(/^\d{10}$/, { message: "Mobile number must be 10 digits" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  pincode: z.string().regex(/^\d{6}$/, { message: "Pincode must be 6 digits" }),
  quantity: z.number().int().positive({ message: "Quantity must be a positive integer" }),
  wasteRequestId: z.string().cuid({ message: "Invalid waste request ID format" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }),
});

export const ContributionSchema = z.object({
  id: z.string().cuid({ message: "Invalid contribution ID format" }),
  mobile: z.string().regex(/^\d{10}$/, { message: "Mobile number must be 10 digits" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  pincode: z.string().regex(/^\d{6}$/, { message: "Pincode must be 6 digits" }),
  quantity: z.number().int().positive({ message: "Quantity must be a positive integer" }),
  wasteRequestId: z.string().cuid({ message: "Invalid waste request ID format" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }),
});

// WasteRequest Schema
export const UnsatisfiedWasteRequestSchema = z.object({
  id: z.string().cuid({ message: "Invalid waste request ID format" }),
  image: z.string().url({ message: "Invalid image URL" }),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  requiredQuantity: z.number().int().positive({ message: "Quantity must be a positive integer" }),
  quantityUnit: z.string().min(1, { message: "Quantity unit is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }),
  contributions: z.array(ContributionSchema)
});

export const WasteRequestSchema = z.object({
  id: z.string().cuid({ message: "Invalid waste request ID format" }),
  image: z.string().url({ message: "Invalid image URL" }),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  requiredQuantity: z.number().int({ message: "Quantity must be a positive integer" }),
  quantityUnit: z.string().min(1, { message: "Quantity unit is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }),
  contributions: z.array(ContributionSchema,{message: "Contributions Array is Required"})
});

export const UploadWasteRequestSchema = z.object({
  image: z.string({message :"Image is required"}).url({ message: "Invalid image URL" }),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  requiredQuantity: z.number().int().positive({ message: "Quantity must be a positive integer" }),
  quantityUnit: z.string().min(1, { message: "Quantity unit is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }).optional(),
});



// Order Schema
export const CreateOrderSchema = z.object({
  // id: z.string().cuid({ message: "Invalid order ID format" }),
  mobile: z.string().regex(/^\d{10}$/, { message: "Mobile number must be 10 digits" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  pincode: z.string().regex(/^\d{6}$/, { message: "Pincode must be 6 digits" }),
  innovativeProductId: z.string().cuid({ message: "Invalid product ID format" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }),
});
export const OrderSchema = z.object({
  id: z.string().cuid({ message: "Invalid order ID format" }),
  mobile: z.string().regex(/^\d{10}$/, { message: "Mobile number must be 10 digits" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  pincode: z.string().regex(/^\d{6}$/, { message: "Pincode must be 6 digits" }),
  innovativeProductId: z.string().cuid({ message: "Invalid product ID format" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }),
});

// InnovativeProduct Schema
export const UploadInnovativeProductSchema = z.object({
  image: z.string({message :"Image is required"}).url({ message: "Invalid image URL" }),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  quantity: z.number().int().nonnegative({ message: "Quantity must be a non-negative integer" }),
  materialsUsed: z.string().min(1, { message: "Materials used is required" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }).optional(),
});

export const InnovativeProductSchema = z.object({
  id: z.string().cuid({ message: "Invalid product ID format" }),
  image: z.string().url({ message: "Invalid image URL" }),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  quantity: z.number().int().nonnegative({ message: "Quantity must be a non-negative integer" }),
  materialsUsed: z.string().min(1, { message: "Materials used is required" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }),
  orders: z.array(OrderSchema,{message: "Orders Array is Required"}),
});


// BulkWaste Schema
export const UploadBulkWasteSchema = z.object({
  image: z.string({message :"Image is required"}).url({ message: "Invalid image URL" }),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  quantityAvailable: z.number().int().positive({ message: "Quantity must be a positive integer" }),
  quantityUnit: z.string().min(1, { message: "Quantity unit is required" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }).optional(),
});

export const BulkWasteSchema = z.object({
  id: z.string().cuid({ message: "Invalid bulk waste ID format" }),
  image: z.string().url({ message: "Invalid image URL" }),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  quantityAvailable: z.number().int().positive({ message: "Quantity must be a positive integer" }),
  quantityUnit: z.string().min(1, { message: "Quantity unit is required" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }),
});



export type SignupInput = z.infer<typeof signupSchema>;
export type SigninInput = z.infer<typeof signinSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;



// User Schema Type
export type UserType = z.infer<typeof UserSchema>;

// Create User Schema Type
export type CreateUserType = z.infer<typeof CreateUserSchema>;

// Contribution Schema Type
export type UploadContributionType = z.infer<typeof UploadContributionSchema>;
export type ContributionType = z.infer<typeof ContributionSchema>;

// WasteRequest Schema Type
export type UnsatisfiedWasteRequestType = z.infer<typeof UnsatisfiedWasteRequestSchema>;
export type WasteRequesType = z.infer<typeof WasteRequestSchema>;
export type UploadWasteRequestType = z.infer<typeof UploadWasteRequestSchema>;

// Order Schema Type
export type CreateOrderType = z.infer<typeof CreateOrderSchema>;
export type OrderType = z.infer<typeof OrderSchema>;

// Innovative Product Schema Type
export type UploadInnovativeProductType = z.infer<typeof UploadInnovativeProductSchema>;
export type InnovativeProductType = z.infer<typeof InnovativeProductSchema>;

// Bulk Waste Schema Type
export type UploadBulkWasteType = z.infer<typeof UploadBulkWasteSchema>;
export type BulkWasteType = z.infer<typeof BulkWasteSchema>;