import { z } from "zod";

// Authentication Schemas (unchanged)
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



// Base Order Schema (common fields for all order types)
const BaseOrderSchema = z.object({
  id: z.string().cuid({ message: "Invalid order ID format" }),
  amount: z.number().positive({ message: "Amount must be a positive number" }),
  mobile: z.string().regex(/^\d{10}$/, { message: "Mobile number must be 10 digits" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  pincode: z.string().regex(/^\d{6}$/, { message: "Pincode must be 6 digits" }),
  status: z.string().default("processing"),
  userId: z.string().cuid({ message: "Invalid user ID format" }),
});

// Contribution Schema
export const UploadContributionSchema = z.object({
  mobile: z.string().regex(/^\d{10}$/, { message: "Mobile number must be 10 digits" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  pincode: z.string().regex(/^\d{6}$/, { message: "Pincode must be 6 digits" }),
  quantity: z.number().int().positive({ message: "Quantity must be a positive integer" }),
  wasteRequestId: z.string().cuid({ message: "Invalid waste request ID format" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }),
});

export const ContributionSchema = UploadContributionSchema.extend({
  id: z.string().cuid({ message: "Invalid contribution ID format" }),
});

// WasteRequest Schema
export const UploadWasteRequestSchema = z.object({
  image: z.string({message :"Image is required"}).url({ message: "Invalid image URL" }),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  requiredQuantity: z.number().int().positive({ message: "Quantity must be a positive integer" }),
  quantityUnit: z.string().min(1, { message: "Quantity unit is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }).optional(),
});

export const WasteRequestSchema = UploadWasteRequestSchema.extend({
  id: z.string().cuid({ message: "Invalid waste request ID format" }),
  contributions: z.array(ContributionSchema, { message: "Contributions Array is Required" }),
});

// Satisfied Waste Request Order Schema
export const SatisfiedWasteReqOrderSchema = BaseOrderSchema.extend({
  satisfiedWasteReqId: z.string().cuid({ message: "Invalid satisfied waste request ID format" }),
});

export const CreateSatisfiedWasteReqOrderSchema = z.object({
  amount: z.number().positive({ message: "Amount must be a positive number" }),
  mobile: z.string().regex(/^\d{10}$/, { message: "Mobile number must be 10 digits" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  pincode: z.string().regex(/^\d{6}$/, { message: "Pincode must be 6 digits" }),
  satisfiedWasteReqId: z.string().cuid({ message: "Invalid satisfied waste request ID format" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }),
});

// Innovative Product Order Schema
export const InnovativeProdOrderSchema = BaseOrderSchema.extend({
  innovativeProductId: z.string().cuid({ message: "Invalid innovative product ID format" }),
});

export const CreateInnovativeProdOrderSchema = z.object({
  amount: z.number().positive({ message: "Amount must be a positive number" }),
  mobile: z.string().regex(/^\d{10}$/, { message: "Mobile number must be 10 digits" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  pincode: z.string().regex(/^\d{6}$/, { message: "Pincode must be 6 digits" }),
  innovativeProductId: z.string().cuid({ message: "Invalid product ID format" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }),
});

// Innovative Product Schema
export const UploadInnovativeProductSchema = z.object({
  image: z.string({ message: "Image is required" }).url({ message: "Invalid image URL" }),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  quantity: z.number().int().nonnegative({ message: "Quantity must be a non-negative integer" }),
  materialsUsed: z.string().min(1, { message: "Materials used is required" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }).optional(),
});

export const InnovativeProductSchema = UploadInnovativeProductSchema.extend({
  id: z.string().cuid({ message: "Invalid product ID format" }),
  orders: z.array(InnovativeProdOrderSchema, { message: "Orders Array is Required" }),
});



// Bulk Waste Schema
export const BulkWasteSchema = z.object({
  id: z.string().cuid({ message: "Invalid bulk waste ID format" }),
  image: z.string().url({ message: "Invalid image URL" }),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  quantityAvailable: z.number().int().positive({ message: "Quantity must be a positive integer" }),
  quantityUnit: z.string().min(1, { message: "Quantity unit is required" }),
});

export const UploadBulkWasteSchema = z.object({
  image: z.string().url({ message: "Invalid image URL" }),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  quantityAvailable: z.number().int().positive({ message: "Quantity must be a positive integer" }),
  quantityUnit: z.string().min(1, { message: "Quantity unit is required" }),
});

// Bulk Waste Order Schema
export const BulkWasteOrderSchema = BaseOrderSchema.extend({
  bulkWasteId: z.string().cuid({ message: "Invalid bulk waste ID format" }),
});

export const CreateBulkWasteOrderSchema = z.object({
  amount: z.number().positive({ message: "Amount must be a positive number" }),
  mobile: z.string().regex(/^\d{10}$/, { message: "Mobile number must be 10 digits" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  pincode: z.string().regex(/^\d{6}$/, { message: "Pincode must be 6 digits" }),
  bulkWasteId: z.string().cuid({ message: "Invalid bulk waste ID format" }),
  userId: z.string().cuid({ message: "Invalid user ID format" }),
});



// User Schema (updated)
export const UserSchema = z.object({
  id: z.string().cuid({ message: "Invalid user ID format" }),
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  createdAt: z.date({ message: "Invalid creation date" }),
  updatedAt: z.date({ message: "Invalid update date" }),
  wasteRequests: z.array(WasteRequestSchema, { message: "Waste Requests Array is Required" }),
  contributions: z.array(ContributionSchema, { message: "Contributions Array is Required" }),
  innovativeProducts: z.array(InnovativeProductSchema, { message: "Innovative Products Array is Required" }),
  wasteReqOrders: z.array(SatisfiedWasteReqOrderSchema, { message: "Waste Request Orders Array is Required" }),
  innovativeProdOrders: z.array(InnovativeProdOrderSchema, { message: "Innovative Product Orders Array is Required" }),
  bulkWasteOrders: z.array(BulkWasteOrderSchema, { message: "Bulk Waste Orders Array is Required" }),
});