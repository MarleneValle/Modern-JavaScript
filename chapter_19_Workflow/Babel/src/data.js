const users = [
  { name: "mario", premium: true },
  { name: "richard", premium: false },
  { name: "jesper", premium: true },
  { name: "cris", premium: true },
  { name: "martin", premium: false },
];
const getPremUser = (users) => {
  return users.filter((user) => user.premium);
};

// export default users;

export { getPremUser, users as default };
