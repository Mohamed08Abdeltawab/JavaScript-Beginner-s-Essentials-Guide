async function loadPage() {
  const user = await fetchUser();
  const settings = await fetchSettings();
  render(user, settings);
}

//
async function loadPage2() {
  const [user, settings] = await Promise.all([fetchUser(), fetchSettings()]);
  render(user, settings);
}
