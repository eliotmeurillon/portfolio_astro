<script>
  import Beranda from "./experiences_toggle/exemple.svelte";
  import Profile from "./experiences_toggle/profile.svelte";

  let tabs = [
    { name: "test", id: 1 },
    { name: "Profile", id: 2 },
  ];
  export let menu = 1;
</script>

<div class="flex flex-row">
  <ul id="menu" class="flex flex-col">
    {#each tabs as { id, name }, i}
      <li class="bg-slate-400 my-1">
        <a href="/" on:click|preventDefault={() => (menu = id)}>
          {i + 1}: {name}
        </a>
      </li>
    {/each}
  </ul>

  {#if menu === 1}
    <Beranda />
  {:else if menu === 2}
    <Profile />
  {:else}
    <h1>Page Not Found</h1>
  {/if}
</div>

<style>
  ul#menu li {
    display: inline;
  }
</style>
