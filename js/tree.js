var toggler = document.getElementsByClassName("root");
var i;

for (let i = 0; i < toggler.length; i++) {
  toggler[i].onclick = function (e) {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("root-down");
    a = this.parentElement.querySelector(".nested");

    document.getElementById("test").value = a;


  };
}




var elements = [];

function drag(element, event) {
  console.log(event)
  var index = elements.indexOf(element);
  if (index == -1) {

    elements.push(element);
    index = elements.length - 1;
  }

  event.dataTransfer.setData('index', index);
}

function drop(target, event) {

  var element = elements[event.dataTransfer.getData('index')];
  target.appendChild(element);

}
$(document).ready(function () {

  $(document).on('click', '.menu .root', function (e) {



    // $('.menu .root').click(function (e) {
    let tem = this;
    let temp = this.classList;

    if (this.classList.contains('hover')) {
      $(this).removeClass('hover');

    } else {
      $('.menu .root').removeClass('hover');

      $('li .liRemove').removeClass('hover');
      $(this).addClass('hover');

    }
    $("#delete").click(function () {

      let a = e.target.parentElement
      let b = a.parentNode;
      if ((temp.contains('hover'))) {

        $(b).remove();

      }

    })
    let a = this.innerText;

    let input = document.querySelector("input");


    $('#rename').click(function () {
      if (temp.contains('hover')) {
        e.target.innerText = input.value;
        input.value = '';
      }
    })
  })
})

$('#add').click(function () {


  let b = document.getElementById("test").value;

  // $(b).show();

  const list = document.createElement('li');
  list.append('New folder');

  list.setAttribute('class', "sourceText fa fa-folder-o");
  $(list.sourceText).append('New folder');
  list.classList.add('liRemove')
  list.setAttribute('draggable', true);
  // list.addEventListener('dragstart', drag);



  b.append(list);

  b.appendChild(document.createElement("br"));



})


$(document).ready(function () {

  // $('li .liRemove').click(function (e) {
  $(document).on('click', 'li .liRemove', function (e) {
    // this.classList.toggle("hover");
    let temp = this.classList;
    // console.log(this.parentNode)
    let test = this.parentNode;





    if (temp.contains('hover')) {

      $(this).removeClass('hover');

    } else {
      $('.menu .root').removeClass('hover');
      $('li .liRemove').removeClass('hover');

      $(this).addClass('hover');
      document.getElementById("test").value = test;


      let a = this.parentElement;
      // console.log(this)
      let b = a.parentNode;

      // $(b.childNodes[1]).addClass('hover');



    }



    $("#delete").click(function () {
      let a = (test.parentNode).childNodes[1];
      if (temp.contains('hover')) {

        if ($(e.target).next().is('br')) {
          $(e.target).next().remove();
          $(e.target).remove();
          // console.log(e.target)

          // console.log(a)
        } else {
          $(e.target).remove();
          // console.log(e.target)

        }
      }

    })

    let a = this.innerText;

    let input = document.querySelector("input");


    $('#rename').click(function () {
      if (temp.contains('hover')) {
        e.target.innerText = input.value;
        input.value = '';
      }
    })


  });

})






