<script>
  import { Router, Route, Link } from "svelte-routing";
  import AuthButton from "./pages/AuthButton.svelte";
  import LoginPage from "./pages/LoginPage.svelte";
  import PrivateRoute from "./pages/PrivateRoute.svelte";
  import ProtectedPage from "./pages/ProtectedPage.svelte";
  import PublicPage from "./pages/PublicPage.svelte";

  let url = "";
</script>

<Router {url}>
  <div>
    <AuthButton />

    <ul>
      <li>
        <Link to="/public">Public Page</Link>
      </li>
      <li>
        <Link to="/protected">Protected Page</Link>
      </li>
    </ul>

    <Route path="/public">
      <PublicPage />
    </Route>
    <Route path="/login" let:location>
      <LoginPage {location} />
    </Route>
    <PrivateRoute path="/protected">
      <ProtectedPage />
    </PrivateRoute>
  
  </div>
</Router>