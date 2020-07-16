<script>
var datasets = [{
    "url": "https://services1.arcgis.com/0Lw2m57KEotYYFaA/arcgis/rest/services/survey123_b9b1d621d16543378b6d3a6b3e02b424/FeatureServer",
    "name": "Reports",
    "query": {
      "orderByFields": "Number_of_SUM DESC",
      "groupByFieldsForStatistics": "Type",
      "outStatistics": [{
        "statisticType": "sum",
        "onStatisticField": "Number_of",
        "outStatisticFieldName": "Number_of_SUM"
      }]
    }
  }];

  // designate a one or more series to show the data on the chart
  var series = [{
    "category": {"field": "Type", "label": "Type"},
    "value": {"field": "Number_of_SUM", "label": "Number of Students"},
    "source": "schools"
  }];

  // optionally override any of the cart type's default styles
  var overrides = {
    "categoryAxis": {
      "labelRotation": -45
    }
  }

  //create a cedar chart using the known 'bar' type
  var elementId = 'chart';
  var chart = new cedar.Chart(elementId, {"type": "bar"})
    .datasets(datasets)
    .series(series)
    .overrides(overrides);

  // render the chart
  chart.show();
</script>


<div id="chart" style="height: 400px;"></div>





