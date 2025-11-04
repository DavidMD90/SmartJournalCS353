import { Request, Response, NextFunction } from 'express';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

// Extend Express Request type to include Clerk's auth property
interface AuthenticatedRequest extends Request {
  auth: {
    userId: string;
    sessionId: string;
  };
}

// Middleware to protect routes
export const requireAuth = ClerkExpressRequireAuth();

// Add user ID to request
export const addUserIdToRequest = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.auth?.userId) {
    // Add the user ID from Clerk to your request object
    req.userId = req.auth.userId;
  }
  next();
};