<script>
  import Redirect from "./Redirect.svelte";
  import { auth } from "../authStore";

  export let location;
</script>

{#if $auth.user}
  <slot {...$$restProps} />
{:else}
  <Redirect to="/login" state={{from: location}} />
{/if}
