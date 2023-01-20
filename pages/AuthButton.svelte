<script>
  import { navigate } from "svelte-routing";
  import { auth } from "../authStore";
</script>

{#if $auth.user}
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          $auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  {:else}
    <p>You are not logged in.</p>
{/if}