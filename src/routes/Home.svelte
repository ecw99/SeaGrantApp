<script>
import { itemsStore } from '../stores'
import Card from '../components/Card.svelte'

$: console.log($itemsStore)

let center = [-73.8820, 40.6167]

</script>

<Card basemap="topo-vector" center={center} scale=462232 />

{#each $itemsStore as item}
    
{/each}