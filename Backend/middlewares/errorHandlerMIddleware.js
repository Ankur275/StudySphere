import { ApiError } from '../utils/apiError.js';

export const errorHandler = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            errors: err.errors,
            data: err.data,
        });
    }

    // Default to 500 server error with stack trace for development
    const isDev = process.env.NODE_ENV === 'production';  // Check if the environment is development

    return res.status(500).json({
        success: false,
        message: 'An unexpected error occurred',
        errors: [],
        data: null,
        // Include the stack trace only in development mode
        stack: isDev ? err.stack : undefined,
    });
};