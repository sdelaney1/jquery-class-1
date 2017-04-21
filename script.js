var sandwich = $(".sandwich");
console.log(sandwich);
var ourSandwich = $("#sandwich-cheese");

// console.log(ourSandwich.width());
// console.log(ourSandwich.height());
// console.log(sandwich.legth)
// console.log (sandwich.toggleclass('cheese'));
// //(hey sandwich, toggle the class to 'cheese')
// //(toggle shifts between two states)

//ourSandwich.addClass('food delicious')
//ourSandwich.removeClass('delicious')


var lettuce = $('.lettuce');

function lettuceClicked() {
    var newHeight = $(this).height();
    //console.log(height);
    newHeight = newHeight + 20;

    $(this).height(newHeight);
}

lettuce.click(lettuceClicked);

lettuce.click(function () {
    $(this).animate(
        {
            height: "+=10",
            width: "+=10",
        },
        100
    );
})