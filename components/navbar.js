const navbar = ()=>{
    return `<div id="navbar">
    <div id="nav_main">
        <div id="nav_logo">
            <img id="nav_logo_img" src="https://i.ibb.co/Kqh1BZB/GA-2.png" alt="logo">
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
                        <div id="nav_basket"><i class="bi bi-basket2-fill"></i></div>
                        <div>
                            <p>My Basket</p>
                            <p id="nav_cart_item_count"></p>
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

const mNavbar = ()=>{
    return `      <div id="top_menu_mobile">
    <div id="top_menu_mobile_first">
      <div id="mobile_menu_lines">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div id="mobile_menu"></div>
    </div>
    <div id="top_menu_mobile_second">
      <i class="bi bi-person"></i>
    </div>
    <div id="top_menu_mobile_third">
      <img src="https://i.ibb.co/Kqh1BZB/GA-2.png" alt="logo">
    </div>
    <div id="top_menu_mobile_fourth">
      <i class="bi bi-geo-alt"></i>
    </div>
    <div id="top_menu_mobile_fifth">
      <i class="bi bi-cart"></i>
      <div id="cart_count_mobile_div">
        <p id="cart_count_mobile_tag"></p>
      </div>
    </div>
  </div>
  <div id="top_search_mobile">
    <div class="mobile_support">
      <input class="search" type="text" name="search" id="search" placeholder="Search for Products">
      <button class="search_button" id="search_button"><i class="bi bi-search" style="color: #fff"></i></button>
  </div>
    <div id="search_results"></div>
  </div>`
}

export {navbar, mNavbar}