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

    // Default to 500 server error
    return res.status(500).json({
        success: false,
        message: 'An unexpected error occurred',
        errors: [],
        data: null,
    });
};