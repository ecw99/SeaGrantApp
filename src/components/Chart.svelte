<script>
//import cedar from '@esri/cedar'

import { Chart } from '@esri/cedar'

const datasets = [{
    "url": "https://services1.arcgis.com/0Lw2m57KEotYYFaA/arcgis/rest/services/survey123_b9b1d621d16543378b6d3a6b3e02b424/FeatureServer/0",
    "name": "Reports",
    "query": {
      //trying to concat month and date
      "orderByFields": "EXTRACT(MONTH from please_enter_the_date_and_time_ ) * 100 + EXTRACT(DAY from please_enter_the_date_and_time_ )",
      "groupByFieldsForStatistics": "EXTRACT(MONTH from please_enter_the_date_and_time_ ) * 100 + EXTRACT(DAY from please_enter_the_date_and_time_ )",
      "outStatistics": [{
        "statisticType": "count",
        "onStatisticField": "objectid",
        "outStatisticFieldName": "objectid_COUNT"
      }]
    },
    "sqlFormat": "standard"
  }];

  // designate a one or more series to show the data on the chart
  const series = [{
    "category": {"field": "EXPR_1", "label": "Creation Month"},
    "value": {"field": "objectid_COUNT", "label": "Number of Events"},
    "source": "Reports"
  }];

  // optionally override any of the cart type's default styles
  const overrides = {
    // "categoryAxis": {
    //   "labelRotation": -20
    // }
  }

  //create a cedar chart using the known 'bar' type
  const elementId = 'chart';
  const chart = new Chart(elementId, {"type": "bar"})
    .datasets(datasets)
    .series(series)
    .overrides(overrides);


  // render the chart
  chart.show();
</script>


<div id="chart" style="height: 400px;"></div>





