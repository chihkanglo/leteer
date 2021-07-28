import { v4 as uuidv4 } from "uuid";

export const makeLetter = (
  title,
  content,
  author,
  createdAt = new Date(),
  id = uuidv4()
) => {
  return {
    title,
    content,
    author,
    createdAt,
    id,
  };
};
