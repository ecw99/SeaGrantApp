<script>
  // the <Card> component helps to organize:
  // - the basemap title
  // - an <EsriMapView> component instance
  // - and a link to help the user go back up
  import EsriMapView from './EsriMapView.svelte';
  export let basemap;
  export let center;
  export let scale;
  export let geojson = null
</script>

<div class="card">
  <div class="top-link">
      {#if geojson}
        <p><strong>Date</strong> {new Date(geojson.properties.CreationDate).toLocaleString()}</p>

        {#if geojson.properties.please_identify_the_cause_of_th}
          <p>{geojson.properties.please_identify_the_cause_of_th}</p>
        {/if}
    {/if}
  </div>
    <div class="esri-map-view-wrapper">
    <EsriMapView basemap={basemap} center={center} scale={scale} geojson={geojson}></EsriMapView>
  </div>
</div>

<style>
  .card {
    margin: 15px auto;
    width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    border: 1pt;
    background-color:#dae4f5
  }
  .basemap-title {
		margin: 0 0 5px 0;
    font-weight: bold;
	}
	.esri-map-view-wrapper {
    height: 250px;
    width: 250px;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
	}
	.top-link {
		font-style: italic;
		font-size: 0.9em;
		text-align: center;
		margin: 2px 0 0 0;
	}
</style>