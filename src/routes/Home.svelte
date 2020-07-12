<script>
import { itemsStore } from '../stores'
import Card from '../components/Card.svelte'

$: firstFiveItems = $itemsStore.splice(0,6)

$: console.log(firstFiveItems)

let center = [-73.8820, 40.6167]

</script>

<div class="cardDisplay">

    <div class="container ">
        {#each firstFiveItems as item}
            <Card basemap="topo-vector" center={center} scale=462232 geojson={item}/>
        {/each}
    </div>

</div>

<style>



.container {
    margin: 50px; 
    display: inline-grid;
    grid-template-columns: repeat(1, 1.3fr);
    justify-self: start;
    grid-auto-rows: auto;
    grid-gap: 1rem;
    background-color: beige; 
    
}
</style>