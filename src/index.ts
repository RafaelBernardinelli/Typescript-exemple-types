type Address = {
  city: string;
  state: string;
  country: string;
};

type User = {
  name: string;
  age: number;
  address: Address;
};

type UserProps = keyof User;
// //keyof returns a union of all the keys of the object

// function pickProperty(user: User, prop: UserProps) {
//   return user[prop];
// }

// const user: User = {
//   name: 'John',
//   age: 30,
//   address: {
//     city: 'New York',
//     state: 'NY',
//     country: 'USA',
//   },
// };

// const video = {
//     title: 'JavaScript',
//     duration: 30,
// }

// type Video = keyof typeof video;
// // Converting the type of video to a type of video

// console.log(pickProperty(user, 'age'));

// //Utility Types / Generics

// //1: - Pick returns a type with only the specified properties from the original type
// type PickPropertyReturnType = ReturnType<typeof pickProperty>

// //2: - Omit removes the specified properties from the type
// type UserWithoutAddress = Omit<User, 'address'>

// //3: - Partial makes all the properties of the type optional
// type AddressPartial = Partial<Address>

// //4: - Required makes all the properties of the type required
// type UserNameAndAge = Pick<User, 'name' | 'age'>

// //5: - Readonly makes all the properties of the type readonly
// type UserReadonly = Readonly<User>

// //6: - Record creates a type with a set of properties K of type K and a value of type T
// type UserRecord = Record<'name' | 'age', User>

// //7: - Exclude removes types from the union
// type UserExclude = Exclude<UserProps, 'name'>

// //9: - NonNullable removes null and undefined from the type
// type UserNonNullable = NonNullable<User | null | undefined>

// //10: - Extract removes types from the union
// type UserExtract = Extract<UserProps, 'name' | 'age'>

// //12: - InstanceType returns the instance type of a constructor function
// type VideoInstanceType = InstanceType<typeof Video>

// // Remove the duplicate identifier 'ThisType'
// type ThisType = ThisType<User>

// type DbConfig = {
//     name: string;
//     url: string;
// }

// // Forçar uma tipagem - somente diz que tem a tipagem
// const conn1 = { name: 'conn1', url: 'url1' } as DbConfig

// // Precisa contemplar todas as informações da tipagem, sempre deve seguir a tipagem.
// // Usa apenas a tipagem como inferencia
// const conn2: DbConfig = { name: 'conn2', url: 'url2' }

// // Usa o que foi passado como inferencia
// // Obrigatoriamente deve seguir a tipagem
// const conn3: DbConfig = { name: 'conn3', url: 'url3' } satisfies DbConfig

type Video = {
  title: string;
  duration: number;
};

function pickProperty<T extends Record<string, unknown>>(
  obj: T,
  prop: keyof T
) {
  return obj[prop];
}

const user: User = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
    country: "USA",
  },
};

pickProperty({ title: "JavaScript", duration: 30 }, "title");
pickProperty({ title: "JavaScript", duration: 30 }, "duration");
pickProperty(user, "name");
