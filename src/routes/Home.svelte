<script>
import { itemsStore } from '../stores'
import Card from '../components/Card.svelte'
import Chart from '../components/Chart.svelte'

$: firstFiveItems = $itemsStore.splice(0,5)

$: console.log(firstFiveItems)

let center = [-73.8820, 40.6167]

</script>


<Chart />
<!-- <div class="container ">
{#each firstFiveItems as item}
    <Card basemap="topo-vector" center={center} scale=462232 geojson={item}/>
{/each}
</div> -->

<style>
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
}
</style>