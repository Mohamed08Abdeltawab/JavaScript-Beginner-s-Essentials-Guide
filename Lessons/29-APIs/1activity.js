const url1 = new URL("/student", "https://api.example.com");
url1.searchParams.set("search", "web dev");
url1.searchParams.set("page", "3");
url1.searchParams.set("limit", "20");
console.log(url1.toString());

const params = new URLSearchParams({
  search: "web dev",
  page: "2",
  limit: "20",
});

console.log(params.toString());