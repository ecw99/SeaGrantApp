<!-- App.svelte -->
<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Analysis from "./routes/Analysis.svelte";
  import Nav from "./routes/Nav.svelte";

  export let url = "";
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