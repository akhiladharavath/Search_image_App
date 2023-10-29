$(document).ready(function() {
  $('#search-form').on('submit', function(event) {
    event.preventDefault();
    var searchQuery = $('#search-input').val().trim();
    if (searchQuery !== '') {
      searchCars(searchQuery);
    }
  });

  function searchCars(color) {
    $.ajax({
      url: 'index.php',
      method: 'GET',
      dataType: 'json',
      data: {
        color: color
      },
      success: function(response) {
          console.log(response);
        displayCarDetails(response.data);
      },
      error: function() {
        alert('Error occurred while fetching car details.');
      }
    });
  }

  function displayCarDetails(cars) {
    var carDetailsContainer = $('#car-details');
    carDetailsContainer.empty();

    if (!cars ||cars.length === 0) {
      carDetailsContainer.append('<p>No cars found.</p>');
    } else {
      $.each(cars, function(index, car) {
        var carItem = $('<div>')
          .append($('<h3>').text('Make: ' + car.make))
          .append($('<p>').text('Model: ' + car.model))
          .append($('<p>').text('Year: ' + car.year))
          .append($('<p>').text('Color: ' + car.color))
          .append($('<p>').text('Price: ' + car.price));

        carDetailsContainer.append(carItem);
      });
    }
  }
});



