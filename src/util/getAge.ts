//types
import { Birthday } from '../types/type';

export const getAge = (birthday: Birthday) => {
  let today = new Date();

  let thisYearsBirthday = new Date(
    today.getFullYear(),
    birthday.month - 1,
    birthday.date
  );

  let age = today.getFullYear() - birthday.year;

  if (today < thisYearsBirthday) {
    age--;
  }

  return age;
};
