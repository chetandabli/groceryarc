const navbar = ()=>{
    return `<div id="navbar">
    <div id="nav_main">
        <div id="nav_logo">
            <img src="https://i.ibb.co/Kqh1BZB/GA-2.png" alt="logo">
            <div id="scroll_time_menu_button"></div>
        </div>
        <div id="nav_remain">
            <div id="nav_topmost_section">
                <img src="https://i.ibb.co/98XxQs0/logo-heading.png" alt="">
                <p><i class="bi bi-telephone"></i> 1860 123 1000</p>
                <p><i class="bi bi-geo-alt"></i> Address <span id="nav_address_sign">▽</span></p>
                <p id="login_button_nav"><i class="bi bi-person"></i> Login/Sign Up </p>
            </div>
            <div id="nav_search_cart">
                <div id="nav_search_div">
                    <div id="anotherdiv_for_searchcart">
                        <input type="text" name="search" id="search" placeholder="Search for Products">
                        <button id="search_button"><i class="bi bi-search" style="color: #fff; font-size: 18px;"></i></button>
                    </div>
                    <div id="search_results"></div>
                </div>
                <div id="cart_div_master">
                    <div id="nav_cart">
                        <div id="nav_basket">
                        <a href="./cart.html"><i class="bi bi-basket2-fill"></i></a></div>
                        <div>
                            <p>My Basket</p>
                            <p id="nav_cart_item_count">0 items</p>
                        </div>
                    </div>
                    <div id="cart_pop_up"></div>
                </div>
            </div>
        </div>
    </div>
    <div id="nav_menu">
        <div id="dropdown_menu">
            <p>SHOP BY CATEGORY</p>
            <P>▽</P>
        </div>
        <div id="nav_offers_button">
            <a href="/offers.html"><i class="bi bi-tag-fill" style="color: #DA251D;"></i>OFFERS</a>
        </div>
        <div id="menus_master">
            <div id="firstMenus"></div>
            <div id="secondMenus"></div>
            <div id="thirdMenus"></div>
            <div id="lastMenus"></div>
        </div>
    </div>
</div>`
}

export default navbar