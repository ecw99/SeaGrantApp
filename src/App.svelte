<!-- App.svelte -->
<script>
  import { onMount } from 'svelte'
  import { itemsStore } from './stores'
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Analysis from "./routes/Analysis.svelte";
  import Nav from "./routes/Nav.svelte";
  import getItems from "./utils/data"

  export let url = "";

    onMount(() => {
      getItems().then(items => itemsStore.set(items))
    })
</script>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="Nav">Nav</Link>
    <Link to="Analysis">Analysis</Link>
  </nav>
  <div>
    <Route path="Nav" component="{Nav}" />
    <Route path="Analysis" component="{Analysis}" />
    <Route path="/"><Home /></Route>
  </div>
</Router>