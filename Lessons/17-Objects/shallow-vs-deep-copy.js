const original = {
  user: "Omar",
  prefs: {
    theme: "dark"
  }
};

// Shallow copy
const shallow = { ...original };
shallow.prefs.theme = "light";

console.log(original.prefs.theme); // "light" ❌

// Deep copy
const deep = structuredClone(original);
deep.prefs.theme = "blue";

console.log(original.prefs.theme); // "light" ✅
