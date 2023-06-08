    Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Report Detail'
  },
  // subtitle: {
  //   text: 'Source: WorldClimate.com'
  // },
  xAxis: {
    categories: [
      'client 1',
      'client 2',
      'client 3',
      'client 4',
      'client 5',
      'client 6',
      'client 7',
      'client 8',
      'client 9',
      'client 10',
      'client 11',
      'client 12'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Report Detail'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Low vuln',
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
      194.1, 95.6, 54.4]

  }, {
    name: 'Medium vuln',
    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
      106.6, 92.3]

  }, {
    name: 'High vuln',
    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3,
      51.2]

  }, {
    name: 'Critical vuln',
    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8,
      51.1]

  }]
});

    Highcharts.chart('container1', {

  title: {
    text: 'Threatened Reports',
    align: 'left'
  },

  // subtitle: {
  //   text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
  //   align: 'left'
  // },

  yAxis: {
    title: {
      text: 'Threatened Counts'
    }
  },

  xAxis: {
    accessibility: {
     // rangeDescription: 'Range: 2010 to 2020'
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [{
    name: 'Vulnerability threat',
    data: [43934, 48656, 65165, 81827, 112143, 142383,
      171533, 165174, 155157, 161454, 154610]
  }, {
    name: 'Malicious IP Address threat',
    data: [24916, 37941, 29742, 29851, 32490, 30282,
      38121, 36885, 33726, 34243, 31050]
  }, {
    name: 'Subdomain Threat',
    data: [11744, 30000, 16005, 19771, 20185, 24377,
      32147, 30912, 29243, 29213, 25663]
  }, {
    name: 'SSL Certificate Expired',
    data: [null, null, null, null, null, null, null,
      null, 11164, 11218, 10077]
  }, {
    name: 'Open TCP Port',
    data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
      17300, 13053, 11906, 10073]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});

    // Data retrieved from https://netmarketshare.com
Highcharts.chart('container2', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Email Risks',
    align: 'left'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    name: 'Risk',
    colorByPoint: true,
    data: [{
      name: 'Email at risk low',
      y: 70.67,
      sliced: true,
      selected: true
    }, {
      name: 'Email at risk medium',
      y: 14.77
    },  {
      name: 'Email at risk high',
      y: 4.86
    }, {
      name: 'Hacked email address',
      y: 2.63
    }, {
      name: 'Email risks',
      y: 1.53
    },  {
      name: 'Email risks solution',
      y: 1.40
    }]
  }]
});