async function loadUserAndPosts() {
  const user = await fetchUser();
  const posts = await fetchPosts(user.id);
}

async function loadDashboard() {
  const [users, posts] = await Promise.all([
    fetchUsers(),
    fetchPosts()
  ]);
}