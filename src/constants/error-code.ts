export const ErrorCode = {
  VALIDATION_ERROR: "VALIDATION_ERROR",

  INVALID_PARAMS: "INVALID_PARAMS",

  UNAUTHORIZED: "UNAUTHORIZED",

  FORBIDDEN: "FORBIDDEN",

  USER_NOT_FOUND: "USER_NOT_FOUND",

  EMAIL_ALREADY_EXISTS: "EMAIL_ALREADY_EXISTS",

  INVALID_TOKEN: "INVALID_TOKEN",

  EXPIRED_TOKEN: "EXPIRED_TOKEN",

  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",

  DATABASE_ERROR: "DATABASE_ERROR",

  PERMISSION_DENIED: "PERMISSION_DENIED",

  ARREST_NOT_FOUND: "ARREST_NOT_FOUND",

  ARREST_ALREADY_EXISTS: "ARREST_ALREADY_EXISTS",

  PERMISSION_NOT_FOUND: "PERMISSION_NOT_FOUND",

  PERMISSION_ALREADY_EXISTS: "PERMISSION_ALREADY_EXISTS",

  SENTENCE_NOT_FOUND: "SENTENCE_NOT_FOUND",

  SENTENCE_ALREADY_EXISTS: "SENTENCE_ALREADY_EXISTS",
} as const;
