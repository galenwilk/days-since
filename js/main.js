Parse.initialize("hFEjvb2mQHzEiXL4RL0LkIUzSeqq53RlCXyq0n7L", "PzzhgSD8d9UkcLLixpufLeH2tkqMZyeO9mrqydgi");

$(document).ready(function(){
  var SpillDate = Parse.Object.extend("SpillDate");
  var query = new Parse.Query(SpillDate);
  query.descending("createdAt");
  query.first({
    success: function(object) {
      // Successfully retrieved the object.
      var a = moment(object.createdAt);
      var b = moment();
      var DaysSince = a.diff(b, 'days');
      //console.log(a, b, DaysSince);
      $('#days-since-display').text(DaysSince);
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });

  $(document).on('click', '#update-date', function(){
    var SpillDate = Parse.Object.extend("SpillDate");
    var SpillDate = new SpillDate();
    var Msg = "He Spilled!";
      SpillDate.save({message: Msg}, {
      success: function(object) {
        $(".success").show();
      },
      error: function(model, error) {
        $(".error").show();
      }
    });
  })
});
