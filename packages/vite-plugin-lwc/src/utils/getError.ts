import type { Rollup } from "vite";

export function getError(
  error: unknown,
  id?: string,
  src?: string
): Rollup.RollupError | string {
  if (typeof error === "string") {
    return error;
  }

  if (typeof error !== "object" || error === null) {
    return String(error);
  }

  const rollupError: Rollup.RollupError = {
    message: "An unknown error occurred.",
  };

  addErrorCode(error, rollupError);
  addErrorMessage(error, rollupError);
  addErrorLocation(error, rollupError, src);
  addErrorId(id, rollupError);

  return rollupError;
}

function addErrorCode(error: object, rollupError: Rollup.RollupError) {
  if ("code" in error && typeof error.code === "number") {
    rollupError.pluginCode = error.code;
  }
}

function addErrorMessage(error: object, rollupError: Rollup.RollupError) {
  if ("message" in error && typeof error.message === "string") {
    rollupError.message = error.message;
  }
}

function addErrorLocation(
  error: object,
  rollupError: Rollup.RollupError,
  src?: string
) {
  if ("filename" in error && typeof error.filename === "string") {
    rollupError.loc = {
      file: error.filename,
      line: 1,
      column: 1,
    };
  }

  if ("location" in error &&
    typeof error.location === "object" &&
    error.location !== null) {
    rollupError.loc = {
      ...rollupError.loc,
      line: "line" in error.location && typeof error.location.line === "number"
        ? error.location.line
        : 1,
      column: "column" in error.location && typeof error.location.column === "number"
        ? error.location.column
        : 1,
    };

    if ("start" in error.location &&
      typeof error.location.start === "number" &&
      "length" in error.location &&
      typeof error.location.length === "number") {
      rollupError.frame = src?.substring(
        error.location.start,
        error.location.start + error.location.length
      );
    }
  }
}

function addErrorId(id: string | undefined, rollupError: Rollup.RollupError) {
  if (typeof id === "string") {
    rollupError.id = id;
  }
}
