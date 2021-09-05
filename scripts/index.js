  $(document).ready(function() {
        $('.html').animate({
            width: '98%'
        }, 2000);
        $('.css').animate({
            width: '90%'
        }, 2000);
        $('.js').animate({
            width: '60%'
        }, 2000);
        $('.bootstrap').animate({
            width: '85%'
        }, 2000);
        $('.jquery').animate({
            width: '70%'
        }, 2000);
        $('.wordpress').animate({
            width: '50%'
        }, 2000);
        $('.angularjs').animate({
            width: '20%'
        }, 2000);
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
      
      
      
      
      
    });
