<script>
import { itemsStore } from '../stores'
import Card from '../components/Card.svelte'

$: firstFiveItems = $itemsStore.splice(0,5)

$: console.log(firstFiveItems)

let center = [-73.8820, 40.6167]

</script>

{#each firstFiveItems as item}
    <Card basemap="topo-vector" center={center} scale=462232 geojson={item}/>
{/each}