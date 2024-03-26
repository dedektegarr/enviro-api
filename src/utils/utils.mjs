import bcrypt from "bcrypt";

const validationErrorToObject = (errors) => {
  const errorsObject = {};

  errors.forEach((error) => {
    errorsObject[error.path] = error.msg;
  });
  return errorsObject;
};

const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword) throw new Error("Gagal enkripsi password");

    return hashedPassword;
  } catch (error) {
    console.log(error.message);
  }
};

const comparePassword = async (password, hash) => {
  const correctPassword = await bcrypt.compare(password, hash);
  if (!correctPassword) return false;

  return true;
};

export { validationErrorToObject, hashPassword, comparePassword };
