let recipes = ["yes", "Ok then", "Go For it", "No way", "Don't do it", "Never"];

recipes[0] = '<img src="img/waffles1.jpg"> <h2>Classic Waffles<h2/> <a id="link" href="https://www.allrecipes.com/recipe/20513/classic-waffles/">Full Recipe Here<a/>';

recipes[1] = '<img src="img/crepe1.jpg"> <h2>Basic Crepes<h2/> <a id="link" href="https://www.allrecipes.com/recipe/16383/basic-crepes/">Full Recipe Here<a/>';

recipes[2] = '<img src="img/pancakes1.jpg"> <h2>Good Old Fashioned Pancakes<h2/> <a id="link" href="https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/">Full Recipe Here<a/>';

recipes[3] = '<img src="img/toast1.jpg"> <h2>French Toast I<h2/> <a id="link" href="https://www.allrecipes.com/recipe/7016/french-toast-i/">Full Recipe Here<a/>';

recipes[4] = '<img src="img/egg1.jpg"> <h2>Egg In Hole<h2/> <a id="link" href="https://www.allrecipes.com/recipe/187850/egg-in-a-hole/">Full Recipe Here<a/>';

recipes[5] = '<img src="img/oatmeal1.jpg"> <h2>Maple And Brown Sugar Oatmeal<h2/> <a id="link" href="https://www.allrecipes.com/recipe/265505/maple-and-brown-sugar-oatmeal/">Full Recipe Here<a/>';




let checkForm = () => {
    let response = document.getElementById("recipe")

    let n = Math.floor(Math.random() * 6);
    response.innerHTML = recipes[n];
}
