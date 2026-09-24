let menuArray = [
    {
        title: "Burger & Sandwiches",
        icon: "assets/icons/Chanese 1.svg",
        products: [
            {
                subtitle: "Veggie mushroom black burger",
                Substnas: "Mixed green salad, Tomatoes, Edamame, Mushrooms",
                price: 16.90,
                image: "assets/image/Rectangle 10.png",
                alt: "Veggie mushroom black burger",
                ariaLabel: "Veggie mushroom black burger"
            },
            {
                subtitle: "All meat burger",
                Substnas: "Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ sauce",
                price: 15.90,
                image: "assets/image/Rectangle 10 (1).png",
                alt: "All meat burger",
                ariaLabel: "All meat burger"
            },
            {
                subtitle: "Beef red burger",
                Substnas: "Beef, Cheese, Tomatoes, Lettuce, Onion",
                price: 14.90,
                image: "assets/image/Rectangle 10 (2).png",
                alt: "Beef red burger",
                ariaLabel: "Beef red burger"
            },
            {
                subtitle: "Big chicken burger",
                Substnas: "Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper",
                price: 15.90,
                image: "assets/image/Rectangle 10 (3).png",
                alt: "Big chicken burger",
                ariaLabel: "Big chicken burger"
            }
        ]
    },

    {
        title: "Pizza (30cm)",
        icon: "assets/icons/Pizza 1.svg",
        products: [
            {
                subtitle: "Pizza Margherita",
                Substnas: "Tomato Sauce, Mozzarella",
                price: 11.90,
                image: "assets/image/Rectangle 10 (4).png",
                alt: "Pizza Margherita",
                ariaLabel: "Pizza Margherita"
            },
            {
                subtitle: "Pizza Chorizo",
                Substnas: "Tomato slices, Mozzarella, Chorizo",
                price: 13.90,
                image: "assets/image/Rectangle 10 (5).png",
                alt: "Pizza Chorizo",
                ariaLabel: "Pizza Chorizo"
            },
            {
                subtitle: "Funghi",
                Substnas: "Red onion, Olives, Button Mushrooms, Mozzarella",
                price: 12.90,
                image: "assets/image/Rectangle 10 (6).png",
                alt: "Pizza Funghi",
                ariaLabel: "Funghi"
            },
            {
                subtitle: "Quattro Formaggi with Chicken",
                Substnas: "Chicken, Mozzarella, Gorgonzola, Fontina, Parmigiano Reggiano",
                price: 15.90,
                image: "assets/image/Rectangle 10 (7).png",
                alt: "Quattro Formaggi pizza with chicken",
                ariaLabel: "Quattro Formaggi with Chicken"
            }
        ]
    },

    {
        title: "Salad",
        icon: "assets/icons/Salad 1.svg",
        products: [
            {
                subtitle: "Warm beef arugula salad",
                Substnas: "Beef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sliced red Tomatoes, Balsamic vinegar dressing",
                price: 16.90,
                image: "assets/image/Rectangle 10 (8).png",
                alt: "Warm beef arugula salad",
                ariaLabel: "Warm beef arugula salad"
            },
            {
                subtitle: "Mini green Salad",
                Substnas: "Green salad, Cucumber, Carrots, Parsley, Radishes",
                price: 7.90,
                image: "assets/image/Rectangle 10 (9).png",
                alt: "Mini green salad",
                ariaLabel: "Mini green Salad"
            },
            {
                subtitle: "Green Salad with sea food",
                Substnas: "Mixed greens, Cherry tomatoes, Red onion, Mussels, Squid rings, Shrimp, Dijon mustard-lemon dressing with dill",
                price: 16.90,
                image: "assets/image/Rectangle 10 (10).png",
                alt: "Green salad with seafood",
                ariaLabel: "Green Salad with sea food"
            },
            {
                subtitle: "Vegan green salad with tofu",
                Substnas: "Green salad, Cherry tomatoes, Cucumber, Baby spinach, Edamame, Raspberries, Blueberries, Peanuts",
                price: 14.90,
                image: "assets/image/Rectangle 10 (11).png",
                alt: "Vegan green salad with tofu",
                ariaLabel: "Vegan green salad with tofu"
            }
        ]
    }
];

function renderTemplate(params) {

    let idRef = document.getElementById(params);
    let templates = [];
    let productIndex = 0;

    for (let index = 0; index < menuArray.length; index++) {

        let products = "";

        for (
            let subIndex = 0;
            subIndex < menuArray[index].products.length;
            subIndex++
        ) {

            products += divTemplate(
                menuArray[index].products[subIndex],
                productIndex
            );

            productIndex++;
        }

        templates.push(
            sectionTemplate(
                menuArray[index],
                products
            )
        );
    }

    idRef.innerHTML = templates.join("");
}


function sectionTemplate(menu, products) {

    return `
        <section class="main_article_menu">

            <div class="main_article_menu_header">

                <img
                    src="${menu.icon}"
                    class="main_article_menu_header_title_logo"
                    alt="${menu.alt}"
                >

                <div class="main_article_menu_header_title_title">

                    <h2>
                        ${menu.title}
                    </h2>

                </div>

            </div>

            <div class="main_article_menu_content">

                ${products}

            </div>

        </section>
    `;
}


function divTemplate(params, index) {

    return `
        <div class="main_article_menu_content_slection">

            <img
                src="${params.image}"
                class="main_article_menu_content_slection_image"
                alt="${params.alt}"
            >

            <div class="main_article_menu_content_slection_detail">

                <div class="main_article_menu_content_slection_detail_title">

                    <h3 class="main_article_menu_content_slection_detail_title_title">
                        ${params.subtitle}
                    </h3>

                    <p class="main_article_menu_content_slection_detail_title_text">
                        ${params.Substnas}
                    </p>

                </div>

                <div
                    id="price${index}"
                    class="main_article_menu_content_slection_detail_price"
                >

                    <p class="main_article_menu_content_slection_detail_price_text">
                        ${params.price.toFixed(2).replace(".", ",")}€
                    </p>

                    <button
                        onclick="addClass(${index})"
                        id="button${index}"
                        class="main_article_menu_content_slection_detail_price_button" 
                        aria-label="${params.ariaLabel}"
                    >

                        <p
                            id="buttonText${index}"
                            class="main_article_menu_content_slection_detail_price_button_text"
                        >
                            Add to basket
                        </p>

                    </button>

                </div>

            </div>

        </div>
    `;
}


function addClass(index) {

    const buttonRef =
        document.getElementById(`button${index}`);
    const buttonAddedRef =
        document.getElementById(`button${index}`);
    const idRef =
        document.getElementById(`buttonText${index}`);

    const priceContainer =
        document.getElementById(`price${index}`);


    if (!buttonRef || !idRef || !priceContainer) {
        return;
    }


    idRef.classList.add(
        "main_article_menu_content_slection_detail_price_button_text_added"
    );

    idRef.classList.remove(
        "main_article_menu_content_slection_detail_price_button_text"
    );
    setTimeout(() => {
        idRef.innerHTML = "Added 1";
        buttonRef.classList.add("main_article_menu_content_slection_detail_price_button_added");
        buttonRef.classList.remove("main_article_menu_content_slection_detail_price_button");
    }, 300);
    priceContainer.classList.add(
        "main_article_menu_content_slection_detail_price_added"
    );
    priceContainer.classList.remove(
        "main_article_menu_content_slection_detail_price"
    );
};
let dialogRef = document.getElementById("dialog");
let dialogTimer;

function openDialog() {
    dialogRef.showModal();

    dialogTimer = setTimeout(() => {
        dialogRef.close();
    }, 3000);
}

function closeDialog() {
    clearTimeout(dialogTimer);
    dialogRef.close();
}

dialogRef.addEventListener("click", function (event) {
    if (event.target === dialogRef) {
        clearTimeout(dialogTimer);
        dialogRef.close();
    }
});
renderTemplate('id');