var log = function(m) {
  if ( false ) {
    console.log(m);
  }
};

$('.listings-pickers').append('<button style="background-color: limegreen;line-height:inherit;height:inherit;margin-top:0" id="convert-to-xml">Convert to XML</button>')

var convertToXML = function() {

  var rows = $('.listings-channel-row');
  var xml = "<channels>\n";

  $.each( rows, function(i,row) {

    var channel = $(row).children('.listings-channel').text();
    xml += "<channel>\n";
    xml += "<name>"+ channel +"</name>\n";
    log( channel );

    var programs = $(row).children('.listings-program');

    xml += "<programs>\n";

    $.each( programs, function(i, program) {
      var inner = $(program).children('.listings-program-inner');
      var title = $(inner).children('.listings-program-title').text();
      var time  = $(inner).children('.listings-program-time').text();

      xml += "<program>\n<title>"+ title +"</title><time>"+time+"</time>\n</program>\n";

      log( 'Title: ' + title + ' Time: ' + time );
    });

    xml += "</programs>\n";

    xml += "</channel>\n";

  });

  xml += "</channels>\n";

  return xml;

};

$('#convert-to-xml').click(function() {
  var xml = convertToXML();
  console.log( xml );
});
