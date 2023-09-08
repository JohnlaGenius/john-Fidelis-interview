document.getElementById('file_excel').addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheetData = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheetData, { header: 1 });
      createCharts(jsonData);
    };
    reader.readAsArrayBuffer(file);
  }
}

function createCharts(data) {
  var rows = data.slice(1);

  var categories = rows.map(function (row) {
    return row[1];
  });
  var counts = {};
  categories.forEach(function (category) {
    counts[category] = counts[category] ? counts[category] + 1 : 1;
  });
  var countData = Object.keys(counts).map(function (category) {
    return counts[category];
  });

  const chartOptions = {
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'SEX SEGREGATION'
    },
    xAxis: {
      categories: ['Female', 'Male']
    },
    yAxis: {
      title: {
        text: 'Values'
      }
    },
    series: [{
      name: 'Count',
      data: countData
    }]
  };
  Highcharts.chart('dashboard', chartOptions);

  var categories2 = rows.map(function (row) {
    return row[6];
  });
  var counts2 = {};
  categories2.forEach(function (category) {
    counts2[category] = counts2[category] ? counts2[category] + 1 : 1;
  });
  var countData2 = Object.keys(counts2).map(function (category) {
    return counts2[category];
  });

  const chartOptions2 = {
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Client status breakdown'
    },
    xAxis: {
      categories: ['Died', 'Active', 'IIT', 'Transferred Out']
    },
    yAxis: {
      title: {
        text: 'Values'
      }
    },
    series: [{
      name: 'Count',
      data: countData2
    }]
  };

  Highcharts.chart('chart2', chartOptions2);

  var categories3 = rows.map(function (row) {
    return row[3];
  });
  var counts3 = {};
  categories3.forEach(function (category) {
    counts3[category] = counts3[category] ? counts3[category] + 1 : 1;
  });
  var countData3 = Object.keys(counts3).map(function (category) {
    return counts3[category];
  });

  const chartOptions3 = {
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Excel Data Visualization'
    },
    xAxis: {
      categories: ['YES', 'NO']
    },
    yAxis: {
      title: {
        text: 'Values'
      }
    },
    series: [{
      name: 'Count',
      data: countData3
    }]
  };

  Highcharts.chart('chart3', chartOptions3);

  var categories4 = rows.map(function (row) {
    return row[7];
  });
  var counts4 = {};
  categories4.forEach(function (category) {
    counts4[category] = counts4[category] ? counts4[category] + 1 : 1;
  });
  var countData4 = Object.keys(counts4).map(function (category) {
    return counts4[category];
  });

  const chartOptions4 = {
    chart: {
      type: 'pie'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Distribution of case managers by clients'},
    xAxis: {
      categories: ['Abba Ahmed', 'Abulazeez Lawan Saad', 'Abdulhakeem Garba', 'Ado Isah', 'Abdullahi Ado']
    },
    series: [{
      name: 'Count',
      data: countData4
    }]
  };

  Highcharts.chart('chart4', chartOptions4);
}
