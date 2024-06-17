dy(function () {
  $('input[type=checkbox]').click(function () {
    const myListName = [];
    const id = [];
    $('input[type=checkbox]:checked').each(function () {
      myListName.push($(this).attr('data-name'));
      id.push($(this).attr('data-id'));
    });
    if (myListName.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(myListName.join(', '));
    }
  });
});
