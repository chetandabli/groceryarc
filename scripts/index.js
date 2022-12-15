

///////////// footer ///////////////////////
/////////////////////////////////////////////
import { footer } from "../components/footer.js";
let footer_new = document.getElementById("footer");
footer_new.innerHTML = footer();

//home section
{
  let id;
  let slide_div = document.getElementById("slide");
  const images = [
    "https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_121222_Bangalore.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_Dairy_460px-011222.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_GOURMETPL_SnackswithNoLimits_460px-011222.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/Cp_m_GM_EPBanner_460-051222.jpg",
  ];
  let imgElement = document.createElement("img");
  imgElement.src = images[0];
  slide_div.append(imgElement);
  let i = 1;
  function slide() {
    id = setInterval(function () {
      if (i === images.length) {
        i = 0;
      }
      imgElement.src = images[i];
      slide_div.append(imgElement);
      i++;
    }, 2000);
  }
  slide();

  let di;
  let show_div = document.getElementById("show");
  const img = [
    "https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_251122_400.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_251122_400.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_251122_400.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_251122_400.jpg",
  ];

  let imgel = document.createElement("img");
  imgel.src = img[0];
  show_div.append(imgel);
  let j = 1;
  function show() {
    di = setInterval(function () {
      if (j === img.length) {
        j = 0;
      }
      imgel.src = img[j];
      show_div.append(imgel);
      j++;
    }, 2000);
  }
  show();
}
