function htmlEncode(value) {
    return $('<div/>').text(value)
      .html();
  }
function Generate(text) {
    let finalURL ='https://chart.googleapis.com/chart?cht=qr&chl=' + encodeURIComponent(text) + '&chs=250x250';
    $('#qr-code').html('<img src="' + finalURL + '">');
    
    // Generate barcode
    JsBarcode('#barcode', text);
    $('#barcode').show();
}
$(document).ready(function() {
    
    if($('#text').val() == '') {
        Generate('Hello');
    }
    $('#generate').click(function() {
      var text = $('#text').val();
      
      // Generate 
      Generate(text);
    });
  });
  