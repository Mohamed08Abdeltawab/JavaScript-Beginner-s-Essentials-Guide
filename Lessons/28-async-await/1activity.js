//1
async function loadData() {
  try {
    const user = await fetchUser(user.id);
    const post = fetchPost(user.id);
    console.log(post);
  } catch (error) {
    console.error(error);
  }
}
