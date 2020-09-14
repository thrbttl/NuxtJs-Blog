export default function(context) {
  if (!context.store.getters.isAuthenticated) {
    context.redirect("/auth");
  }
}
