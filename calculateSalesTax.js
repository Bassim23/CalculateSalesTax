var salesTaxRates = {
 AB: 0.05,
 BC: 0.12,
 SK: 0.10
};

var companySalesData = [
 {
   name: "Telus",
   province: "BC",
   sales: [ 100, 200, 400 ]
 },
 {
   name: "Bombardier",
   province: "AB",
   sales: [ 80, 20, 10, 100, 90, 500 ]
 },
 {
   name: "Telus",
   province: "SK",
   sales: [ 500, 100 ]
 }
];

function calculateSalesTax(salesData, taxRates) {
  var object = {};

  for (var el in salesData){
    var totalSales = 0;
    var companyName = salesData[el].name;
    var provinceName = salesData[el].province;

    for (var i = 0; i < salesData[el].sales.length; i++){
      totalSales += salesData[el].sales[i];
    }

    var totalProvTax = 0
    for (var pr in taxRates) {
      if (pr === provinceName) {
        totalProvTax = totalProvTax + taxRates[pr]*totalSales;
      }
    }

    if (object.hasOwnProperty(companyName)) {
      object[companyName].totalSales += totalSales;
      object[companyName].totalTaxes += totalProvTax;
    } else {
      object[companyName]= {totalSales: totalSales, totalTaxes: totalProvTax};
    }

  }
  console.log(object);
}

  // end of function




calculateSalesTax(companySalesData, salesTaxRates);

// var results = calculateSalesTax(companySalesData, salesTaxRates);

// Expected Results:
// {
//   Telus: {
//     totalSales: 1300
//     totalTaxes: 144
//   },
//   Bombardier: {
//     totalSales: 800,
//     totalTaxes: 40
//   }