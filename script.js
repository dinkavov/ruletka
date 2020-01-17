var prices = [
  {
    name: 'Матвееч'
  },
  {
      name: 'Василич'
    },
  {
      name: 'Яна'
    },
  {
      name: 'Дима'
    },
  {
      name: 'Стас'
    },
  {
      name: 'Влад'
    },
  {
      name: 'Филь'
    },
  {
      name: 'Альбертовна'
    }
];

$(function() {

var $r = $('.roulette').fortune(prices);

var clickHandler = function() {
  $('.spinner').off('click');
  $('.spinner span').hide();
  $r.spin().done(function(name) {
    $('.name').text('Сегодня ты: ' + name.name);
    $('.spinner').on('click', clickHandler);
    $('.spinner span').show();
  });
};

$('.spinner').on('click', clickHandler);
});