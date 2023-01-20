<script>
  import { navigate } from "svelte-routing";
  import { auth } from "../authStore";

  export let location;

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    $auth.signin(() => {
      navigate(from.pathname, { replace: true });
    });
  };
</script>
  
<div>
  <p>You must log in to view the page at {from.pathname}</p>
  <button on:click={login}>Log in</button>
</div>