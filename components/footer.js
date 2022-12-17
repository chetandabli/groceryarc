//            FOR IMPORTING FOOTER
//           ^^^^^^^^^^^^^^^^^^^^^^
//           ----------------------

// import { footer } from "../components/footer.js";
// let footer_new=document.getElementById("footer");
// footer_new.innerHTML=footer();







const footer = () => {
    return `<div id="footr">
    <div id="one">
        <div>
            <h4>Groceryarc
            </h4>
            <a href=""><p>About Us</p></a>
            <a href=""><p>In News</p></a>
            <a href=""><p>Green Groceryarc</p></a>
            <a href=""><p>Privacy Policy</p></a>
            <a href=""><p>Affiliate</p></a>
            <a href=""><p>Terms and Conditions</p></a>
            <a href=""><p>Careers At Groceryarc</p></a>
            <a href=""><p>bb Instant</p></a>
            <a href=""><p>bb Daily</p></a>
            <a href=""><p>bb Blog</p></a>
            <a href=""><p>bbnow</p></a>
        </div>
        <div>
            <h4>Help</h4>
            <a href=""><p>FAQs</p></a>
            <a href=""><p>Contact Us</p></a>
            <a href=""><p>bb Wallet FAQs</p></a>
            <a href=""><p>bb Wallet T&Cs</p></a>
            <a href=""><p>Vendor Connect</p></a>
            
        </div>
        <div>
            <h2>Groceryarc</h2>
            <h3>A TATA Enterprise</h3>
            <div>
                <div id="play">
                    <img src="data:image/png;base64,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" alt="">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYcAAACBCAMAAAAc7oblAAAAjVBMVEUAAAD///+8vLuoqKcnJyfPz865ubjd3dzn5+dqamqUlJS+vr7s7Oz09PTk5OTLy8syMjJJSUkPDw/w8PBiYmJ9fX1VVVWDg4PX19dvb29EREROTk7Dw8KwsLD5+fkdHR2IiIiSkpI7Ozt5eXmfn59kZGQYGBguLi4iIiILCwtbW1s2NjasrKubm5s+Pj5Hmpf7AAATdklEQVR4nO1di3aquhYFlIci0tYqqIhYH1Wr/f/Pu0nWCgkBJVC77bk6zxhnqxAImVnPLFLDZAg8BvIpHblxmCTWE7+CJAntOHY9b+AVRt7Ab0OP/DcI3MQhoA38J34BdGTpCDuJPeQ8kIEf5jyQbwNKAiEgtMPEsTpP/AJOvhWS8SV8OJYdgAQMiTgMcx4Gw5CQkISL7Lg3nvhN7I/ZIkyIXNhpSS95MWXBWe/u3ckHwefaIkxYAyYPw5yH1HasxJ/eu3cPhSlRT46bMvPgGQEFpSHc3Ltjj4blKbScOGUMGNRce5SGpzD8e0SECJcpJIMaCWIbwt69+/SQoEQMgAciD09puBsIEVYK8jBIrGR17/48LE6+EwIP1GO9d28eF0uimQLGAxGHp3G4H6ahYxMezMDxnXv35aFhWZZL4rjYSdb37spDY5w49sAwEyu8d08eG5+hlQyM1LEW9+7Jg8OxHM8YOH527448OM6+4xquEx7v3ZEHxzRxYiN27Od6w33xbRMewqeZvjd2tmMbT3fp/iCOq+Fb/r278fCgOsl6JpfuDhJAEB5ultWYRaF7uNXFHgkW4+FGYdyYLSw9eWgBxoPfucWlJlgW9eShBahtuA0PCxNxg2u1wcQbNnyMN2+Y/PSux8Z3rcateDjEnAa3STPHGwLs7POHPXg1zaZun2kOfnhTo2eaNzGuN+Lh4HEamg1GaAqcf9aFVjx4Le/lxuhi/jEeYjGcjRb2CA8DClbnGf+oC/+Sh0ne2b/FQ0fQEDQqyyQ8zOm/ux418qef9OHJg/EhaZdmLjDhYYIfE9L4lf8+W/X7H/Dx09iBB7Y3uvDLfrkk/+++EcZf+/0xNpF5kJozvET9vlwW1F2xrxU8fJOWs/w0esdd1l99KWeRe9nwCXj4WuXdoCBN+g0z2DfhQdJKZjNzK/FgDPOptU5BtJiK26Dl+Ca/0PE3Tqa5ZtyHBnjKGWskeMDmoy1e+BXq5XJx20N/ozIPvQBa4ioxLaIAUS8k4Db4qCMDeYDr9fHwF3wNGi0134KHiURDwwpZwkM+cdak7+zDOb9aZuCAE4zJdzanyajuiZiQAeD8s59zHkTziH1/px8ZNWBbP0d4eK3ysFJ8Bs/0+viDTITCw8Lm12NHmXJgt2hSEXYLHhxBQ1M/kPDwnn8xIfbYkn/9+fckREVFBpH+7PMZDbq5S8f2NJlFZNIO6c+chx4dcGzONAyVs1n3K+Pf6YHOfLai1BR4mJEfktnHnGpIJqXUCXR7swkd6Lk4b94jc8I9Trdwt9RcvL6uA+DFMAaEtNnyi3L6rT8Qt+BhkNOQNg0CZL1kkElEFXHMjYxFhsVgNFPbn5JJRmOTLQjdF1dIZPzND0PwEHMF5EPzrh3C5TrQgDZkMvip8hBziVmg+vd4NORy2ULMZftgMtPwgbMmgrsy4WqQPr0BDzMhDtv6s4so8BCzJ9mZeUgOn6ZMwsmozRlPKxjGLooJm+90siIPovnBLMb2ZIToc25yJbMq8rBMzRQ8gV0KM8LjvVspvlzBXxrmvZ/CP2jnByggWrgBDxFnIZjXn6ygwIPLeHgXythmP3SZfJzJ1GQq2IbH6+ZT0i7wIDWPhWbozt57HeDB4YadXkLmYStyATFc0uNuB1KYYyLLA35KIHQamMF2SvHumanss13HDXjgiSW7xQtdqn3YsWfmvm8Cti+mIx+TkfCpyA9gnAUPYYGHTDQP0YL3cn/uDL/O8hvKPEzzK1KXjI4p4eGFfa/gQchDgYcldwIY9CfmDXgAMz1srJMoZHn4Aj2SlXggmqRrUMIi4lDNcTp/XZCHqMRDwmSVBO0wmLYIUy7ysICWGjxsc/FLWJtugBkChldDFzeRh5HrtGKhyIMDj7QV8ZgNpoComuk79WlfCCER6orPCzyshXmE5uSHwfTjwD7Q50y4g0kNiMxDT2RWbBBTPXko8PA2amIVBG7Aw+5TVkjdRm0lHl7R8+iqdto4BGbnzB53aGYOBhmX7EOpuc/dhwz00iknKiryQFgOlvAxAMvSQh7QyDVGcx6+zz65V+outqo9mPPAynPGS72LiThubXLPw+UR0IYbztB0XTMzqOsZxui5XOKBuk/Q/ATNE3Br2YEOnGfCZBkofqvL47cV3vgaD2jSC/JAbUo/F+eO0yBf1pCHQ38orFCaCBtLSBBhBEWoZaMID9maYOEKs0b9r/POWNKwFZK3NARjjuRWOMeX9BI7ud8VzYmb5BJNNrPRTlM+Ruvu4X2oxg80Fth0je6ZxwQXefgkju3q88Wo4IF4v+aJaMHvhAcSWmjGwyo1i/DOIBQr1yzBf6u/oLz+kMoZv2BEb4X5JqIxIFLf0fwPXPaSnYZrpqI5DddSaqRPOJiv7GbkSqeBktew2Km0JVzpIg8s0k6p+JZ4YIId0PuZQYMV4iY8fEmyIDBcnOyq302dpQjRMpAyUzyBkydoAu4Exbli7uafkIf3fP4pzY8wefqvfDCPkM1zDFO1qTw1hX0ZSDwU88gzegnML2E3Qm7/MVnYbDmlAQ/TC6N9Bf26a/bGgPWs8PMyWiSdsZhO23EEOv41io78lHGPXyOi+n4fjbma7CrNs84i+yQtIq4rx5tFRu5I7qv0Zxmd/EXEDd96jB9nUTRRzpxGEW38EkV41/co4unx9SZxspnRBPo8rJvToEHEEwBtHlpIA8W4/spPGPo8fLWjgefinqiBLg+VJroetmYc8fDQ5GHVjobn28C60ONhr8YNerhJpdtjQI+HTf2YV+DHRYsPBD0egjY0tKwNekxo8dDOZ22+OvfA0OLBb0PD8527JtDioZWVVmvg/haO2ca3bWsT6S8h/yp0ePioH/Qy7KuXLOMEzf6JpztJpJkVdP7CjNHhIWvDQ3T1kmXg6sXo998mmsRqX537v8avw0NH7bcOGsp7XgT167sEVvng6Xt9u9+FDg9JCxpGDYto8trM3w46nOr+3ns7Nh0e2uSWmr5TIhT27yqmXBrSodM5haLaKJdfyGgGGouJt4QOD8WF51/hoSdaZq2fRQOveJNBhAnIGfoHIup8gRP+IA+FErXf4QHWqW/wdlYNcB1WVn4f+Hh8ae6RedgzBk4Wa9qgWr0p9tC5ok99gKwNlgv/n/EwvHpFFeAZH1lZzE/fG62/jxpiQqE01nr/YR5arQE1ehMC1AXmE38xPwhWWpXVNxAIdJk+gYd/vCuCDg+luEcHTYoL4dEd7lQWSyOWFHucnvP+eZMVQ5Pdnh5HsztZnc/Z5VuDB17KfEHxFTEQb/vlDrIHg/2O3lc+63BcdTqd/rsiKfT2S5Cl4/m8kupKl9MzabDWChJ1eFhUDHMtmrw3uuHDv61oCjVFtBbpyKvOAkd6WkgG04qjVwuPp86FohU44bLtUhPLUk3VWpRaxYVcAXC755kZHhEuReWjd6rPnOjw0DdboEnVs5c3YE2LL9nB3TMlAhMFOT0+Yif5eHVpKZ5ysbSoZxaR3+VY1M0Dqe4JktG7N9xRAcursuKSTa3N0+Fh3IaHBhHqnJ3PShlhrAtZBs6DYqVy5QJjtyqUaJoX8oxopy86EZd4KOdCRD4SeMiV91H6UUKd/6jDw5vu0Begb24X4gGO7GNhXwDgYVsyUjwGgLGLSk9etd/KAY+NLryucYGHKsWchyBw47zKjj1GRaFpjQOptf5wfcAvQfv1YeYXox4DcZaPAg9AgxsmcZ4ByeSxw+N2EudedtVD5QPkRi8Vhyf0j0iy4yn9S4YJJB25PgjCzXqV8Otz28F4SOHCAcgyT4zG/el0xW95PaOvxcOlOuIaaFZ4gnE+SU9VqAIU1slm5m6XIRPo8Is57LKV2MOYM1UREL5I3fM6lbldiPUkG7XE80/oKG2Kl88FMZ58LruzZZ47HqDf940aVa2QLUCLh1aJb+26c3A40JyAYpK1ac5Dbut2OCWBupwH4Wbhg1etzCoe0WDRU93KUhyH/oGYG9BHboE4D8J0o2yKS4alhypBi4eZ2Q5aye8lm765ewVJRSlE4DxIffzC/TfYF86DNOoHIKryrfpyzYM9LkQEKg9duJnsTGN5PnQSeRAeEbgdqfTsB7jENf2gxcOhVd0MHd2rsgiIio8JrqVkW5CHQG6DvzG/ivMgv5iHg11Z5PyiOFZ0zGS3UuUBfKy0wBVMFhg15EEcXCi8GJy4a6OsV7/UZiUIUF94D8YnFwDYNEXyLnDMi1YffmOKCXkomkFw5i+sKX2X60+kCaPyAFqmGFtCn8Aj9NXjnsKLwT3Oa0v2ejy0LLpnna3Z/uZNeiQGkD0hw8hDUcUtxIMhD0XJ26hsKlg7XrGbQr0rPBxg7hcdXVQ9zG8AHjJxkH1XjMGozE0RmnXGbVKuiPS6kYBhlsJfUEwd5QQlGkBXkn4EHkbFrM97FXlFfE+twkt9vOxN4eFF3EkCTBYWKwAPImoFY2qvxxKm7o14aJViAtQsOINvI7mYkPQT700AD4rvM1N5UKNGOF6XYttNhbG4sP4g3UmCJwYfeBApgHy7kTKqQhaEJg+vly9eh+sbpKGEuwIYOOd6BnhQoqAvlQdV98JxncqkPGeBmknhAeyVuq8UzG8Wf6g8iG24SriSg9Z9D6VV7puiJr1xMTTJxQh4UNK3krboFU9HwHGt4p0ZKt1QvnTOw7byKWA4Knm4Uht/Ax627VioXfa/WIOQKyY9eVCDJDiuV6mHqgdNkMIDCKyaPW4nD1cqr7XfU2wpEDXvxx0vt+TOf6V9QD1JP/7EPiBgKDHq1LIPMH0q7QPEG03rQ7V5UFORmsiuX/VKJTnX+MCD4oJicCU6pmwbi71V/KXXCcGxHGWjaYUD7fwlwQMYlKblcPrvT7dK9tXtmwhnTb9nEr4zeViq4wdpgROHvOgOgJJWU98g0+WHBS+4Wh7QoSumBCdSA5UHo2re1EKfh3kbHmqqVSFrX9JduBEDfEEeil2UfkMeinsZg+lVJyWwU/YcVvLQqTyAZ1vUMzLNJR5AZzWsM2iwr0OLGKLuXZSqZzR4hhNnM8/zySegl8X8D64wZZuMikYN5fHUUtoJRg4VocoDzhVZm2G+DSZKiQcYp6KD5yQE12xGk31OGmf70poiIMzslyIMjIbBynIepAmPoglKj/MgKaEXEKi0tCcXPoGS+NwU6AFXTKSKd3AxWbYwEw7UlHiYl28C3ua1WdmEhyvOTTXqdlYGQ1BRKgTNoVf5+kM+w2Y4nDAfcwcif8z9SGmQg0crBXWJxQN5Qhe+ismBekDUbmSF+5V4QDMUiOj5o+KuChrtv9Tw9d3aN+SGF4YLJxyMjFiPGx7pJP3idRn4yopw5EZTWm/0kjvwFVvU8UPxFEuTuhFPnWX8HNwdXOg5XN+zwf2f8eQzSkyZB77PdgZnHFbw9WpE22wfrIrdri5jVFeaiK55xTsgR+kI8AAPP3JdUbaB0wvjOCYjgeuKLlal3EU4Gri249huvtotEiM8UnJtNyo2GoZOkl+fW5kyD/l8DcLNqmNzoq++69JwX7gmbyzW7rwP3Q0qjmCymRk2zGuUXg7jfUYe3tXj1X8M4tI7ZkOhHFfi137pl9Ltq3iofNnl+otqDXlokO/Lai8mr2opAN3DFriBB0t9trwZz2so1W6X/iZHdYKm4OGKXAsXqfL6i3i6Kh6KNW0MNR580/0qtXfDqr9khV+RAxUTNfScByOThHEkfM88vzSV/Ln0ctFOtzxZB8Wat++ciFy1fRcXU2MpU1TJg7EtrjMldWXXjfcNVaeG65/H676jRtsaVwSVfyEBlfLRFTwYyw0+nJtJLpbI8x1WaDyG56vbDX1tCtlFv1RUdlihjZAWmecLrucDq7D2Vyg3kTDNF5OHi/pXOprv3zqX1ua8vrDFkWzEb/jan+CB3X26VZKoxXzrbNrTeY9lud6c/CRZbC5vo7dclvyMyToaN/l7M7veOlrrVXG12c94gWUr6l9xP2KtW6Ec+8co8lBGdd77v4ZW+0p3t5tONqlIKu/mZAJMbrsH2ZOHv4FH4YH+vd2//HfAH4mHv7yP3mPwkBBZSP7032N/FB5C9jfZ/y4ehYfkP8HDZQsGPDT6a8t/EDaRB9tpumnVv8SULmUll+uVJyE5/Kc9Pg3sKQeuYzfbnP2JW2NCeRg6ya/vPvXEVUS+4xJ58H9xT4snNHD2ncDwnD8dyD0CSPhgGgPivP6FPRsfF5PEsU3Di50r/sgTv4+N73iEh6FlJc8/1HA/fIVELREevPApEPfEJnFcwkOaBpYVPkOIe+FoW9ZgNKLFVcR1fbpM90JoObHneazILXT8Bn8N84nbYWf5TjjwhsBD6jvJfzxH89/E0vEtf0hoAB7MEfGZbrq+/4QOupZvOYQELg+mOSBRddLyz3k/0RJj23L8AaNhSPwlAjPwEscKF03qc574GbYWMdFJEAy8AQGJHygC04wdqpyi5x/2+ReYr5zQshybjTwFiaepnWB/yTehTCTJoj+eTub77hO3x34+mY77CzLKluMkw4HMA/0Pvo3IUcuyfD+xQ/uJ30BoJ75PJIFYgSEzDTkPHpcHWrI6jEPfeeK3EcbD1KQjL/EwlL4RgkhQMRh5Q9d1gcAYNiDR/BI3+WL/yS9uxZG4fKTV8MCnEZ/0lAgc+f8BR5VKTifTxjEAAAAASUVORK5CYII=" alt="">
                </div>
              
            </div>
            <div id="social">
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-square-twitter"></i></a>
                <a href=""><i class="fa-brands fa-pinterest-p"></i></a><br>
                
               

            </div>
            <div class="vendor">
                <p>Vendor Connect</p>
                <button><i class="fa-solid fa-g"></i>&nbsp;&nbsp;Become a Seller</button>
            </div>
        </div>
        

    </div>
    <div id="dot">
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    </div>
    <div id="cities">
        <h4>Cities We Serve</h4>
        <p>Dhamnod &nbsp;&nbsp;| &nbsp;&nbsp;Medinipur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Modasa&nbsp;&nbsp;&nbsp
            |&nbsp;&nbsp;
            Gopalganj&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nainital&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Pakyong&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Shilong&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Tawang&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Paschim Bardhaman&nbsp;&nbsp;
            |&nbsp;&nbsp;
            PEDDAPALLI&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Amreli&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Narsinghpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Howrah&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Badnagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Deesa&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kozhikode&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Warangal&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Hanamkonda&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Pratapgarh District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Prakasam District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kannauj&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Farrukhabad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ludhiana District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Chhibramau&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Gonda District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Khargone&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Baghpat District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Amroha District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Mahabubnagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Korba&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Varanasi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kanakapura&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Khurai&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Raisen&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Gondia&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Rahatgarh&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bhiwadi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Goa&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bahadurgarh&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Raichur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sindudurg&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sangareddy&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kurnool&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jadcherla&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Rupnagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Faridkot&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Shamli&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Pench&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Visakhapatnam District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ujjain&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sikar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nadia&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bardoli&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Saran&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Thrissur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Chittor District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Shambhu&nbsp;&nbsp;
            |&nbsp;&nbsp;
            North 24 Parganas&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Khambhat&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Hubli&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Prakasam&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nalgonda&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Karnal&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Panipat&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Rohtak&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Renigunta&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Patiala&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Trichy&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ramnagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bulandshahr&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nagarkurnool&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Gadwal&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jahangirabad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Anupshahar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Gudur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Khatauli&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Shahabad Markanda&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bhagpat&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Srinagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Shimla&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Lakhisarai&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Berachampa&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Andaman and Nicobar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bilimora&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Hasnabad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Surat&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Muzaffarnagar District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Mysore&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bihta&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bhubaneswar Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Hyderabad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kolkata&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Chennai&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Mumbai&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nashik&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bidhuna&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Warud&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Chandur Bazar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kapurthala&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Hooghly District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kalluru&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kalmeshwar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Morshi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Puttur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Khandwa&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bhandara&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ganj Basoda&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bhavnagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Dhenkanal&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Srikalahasti&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Fatehgarh Sahib District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Lakhimpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bangarmau&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Palani&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Songadh&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Pehowa&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Vyara&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Dholka&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kheda&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ukhra&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Udaipura&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Gadarwara&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jaora&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nagda&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ratlam&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nadiad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Palanpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bhopal&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jaipur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ahmedabad-Gandhinagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Noida-Ghaziabad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Meerut&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Vizianagaram&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Medak District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            East Godavari District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nizamabad District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kamareddy District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Lucknow Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Noida Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Chennai Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Vizag Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nagpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bangalore Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ladakh&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sonipat&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kundli&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bagepalli&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Chintamani&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ambur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Channapatna&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Maddur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nabadwip&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Katwa&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kharagpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Tarakeswar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kothagudem&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ramanagara&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Rampur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Valsad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Samastipur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jabalpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Wanaparthy&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bolpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Balasore&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kendrapara&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sausar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Haridwar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Suryapet District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bhadrak District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Konaseema District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Raebareli District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            West Godavari District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Vikarabad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Haldia&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kanthi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Dahegam&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Cuttack&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jangaon&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Dindigul&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sihor&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Dudu&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jagatsinghpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Udumalaipettai&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Pollachi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Vijapur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Dharapuram&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Canning&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Tiptur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Mehmedabad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Fatehpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Krishnarajpet&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Punganur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Srirangapatna&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Arsikere&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Tripura&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Amritsar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Chaklasi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Tirwanganj&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Barabanki District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jalandhar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Indore&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Mhow&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Pithampur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ludhiana&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Hapur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Chandigarh Tricity&nbsp;&nbsp;
            |&nbsp;&nbsp;
            East-Godavari-2&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Chittoor District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Tiruvallur District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bidar District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sangareddy District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ayodhya District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Guwahati Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Channarayapattana&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Saoner&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Madanapalli&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Tirupati&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Memari&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Miryalaguda&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kalwakurthy&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Coimbatore Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Hajipur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kadapa&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bangaon&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Habra&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Tamluk&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Basirhat&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Barakar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Chittaranjan&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Gohana&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bhadrak&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Pardi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Hyderabad Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kochi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Puri&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sathupally&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Haryana&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sanawad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Akola&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Katol&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Lunawada&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Godhra&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Purba Bardhaman&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Karimnagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Mathura&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Hathras&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nagpur Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Patna Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Mumbai Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Mysore Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Vadodara Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jaipur Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Khergam&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Masrakh&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bakhtiarpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Hassan&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Arambag&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Baripada&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Soro&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Shadnagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bhongir&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kazipet&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kishangarh&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nasirabad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jammu Kashmir&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Katihar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ramtek&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Moradabad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Shahjahanpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ajmer&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kottayam&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Rajamahendravaram&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kakinada&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nabha&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sahibganj&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Gudiyatham&nbsp;&nbsp;
            |&nbsp;&nbsp;
            DehraDun&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Saharanpur District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Aligarh&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Pune Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sircilla District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            South 24 Parganas District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Mulbagal&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Pipariya&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sultanpur District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            kolar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Amravati&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jamshedpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kolhapur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kalaburagi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Guwahati&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bhubaneshwar-Cuttack&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Surat Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Mandsaur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Khammam&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Raipur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sambhal District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Warora&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Siddipet District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Tiruppur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Dhandhuka&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Umreth&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bareja&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Dhanbad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nayagarh&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ladwa&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Garkha&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Venkatgiri&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Naidupeta&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Malmaliya&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Puducherry&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sitamarhi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Udham-Singh-Nagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nellore&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ambala&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Agra&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Madurai&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kekri&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Gulbaraga&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sambalpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jharsuguda&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Faridabad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Dumraon&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Rourkela&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Amethi District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Malur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Hardoi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Darbhanga&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Gaya&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Motihari&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Angul&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Chhindwara&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ganjam&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bassi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Hindaun&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jagraon&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Karauli&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Dausa&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Himachal Pradesh&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Gangapur City&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Thiruttani&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Vidisha&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Aligarh District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Chandrapur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Lalsot&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Navsari&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Hoshangabad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Patan&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Siddhpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Unjha&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Robertsonpet&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kalol&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kadi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Himatnagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Mehsana&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Amaravathi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Gwalior&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Rajkot&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Allahabad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bareilly&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jodhpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Palakkad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Palwal&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kalinga Nagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Wyra&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nagari&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Vellakovil&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Mansa&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Begusarai&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Haripal&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Udgir&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Narketpalle&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Buxar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Multai&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Alleppey&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Naini&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Munger&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Panchkula&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Arakkonam&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bhangar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Butibori&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Pilakhua District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kanpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Balaghat&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Pandhurna&nbsp;&nbsp;
            |&nbsp;&nbsp;&nbsp;&nbsp;
            Asansol&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bihar Sharif&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ankleshwar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Palitana&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bharuch&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Madhubani&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bettiah&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Visnagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Itarsi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Khordha&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Dewas&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bagru&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kurukshetra&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Madanapalle&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Patna&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Yamuna Nagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kaithal&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ranihati&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Mangalore&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Mandideep&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Madanpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Taherpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bulandshahr District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Hanskhali&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Guskhara&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Thakurnagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kangeyam&nbsp;&nbsp;
            |&nbsp;&nbsp;&nbsp;
            Erode&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Botad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Hosur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Eluru&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ghaziabad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Muzzafarpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Delhi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Gurgaon&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bangalore&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Chikkaballapura District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Srikakulam Disctrict&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Vizianagaram Disctrict&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Yanam District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Modinagar District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Coimbatore&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Gautam Buddha Nagar District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Anantapur District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Vijayawada-Guntur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Vijayapura&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sidlaghatta&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Hindupur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kalna&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Gauribidanur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Doddaballapura&nbsp;&nbsp;
            |&nbsp;&nbsp;&nbsp;&nbsp;
            Jewar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Muradnagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Tribeni&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Santipur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Aurangabad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Halflong&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kheri&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Krishnagiri&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Mandya&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jehanabad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Shaheed Bhagat Singh Nagar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Tirupattur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Parwanoo&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jajpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Krishna District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ashta&nbsp;&nbsp;
            |&nbsp;&nbsp;
            West-Godavari&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Guntur-Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kota&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Tumakuru&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Vadodara&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Pune&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Visakhapatnam&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Borsad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Petlad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Phagwara&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Daman&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Silvassa&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bhojpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Siwan&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ranchi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Jhunjhunu&nbsp;&nbsp;
            |&nbsp;&nbsp;&nbsp;&nbsp;
            Vaniyambadi&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Churu&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Salcete&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bangarpet&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Tuni&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Dharampur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bhadradri Kothagudem District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bhopal Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Ghanpur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Athagad&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Krishnarajanagara&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Palamaner&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Barh&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kolkata Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kochi Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Bavla&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sonepur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Mokama&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nawada&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Moga&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nakodar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Nawanshahr&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Lucknow&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Anand&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kamptee&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Kapadvanj&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Rajpipla&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sitapur&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Gurugram Rural&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Beawar&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Dhar&nbsp;&nbsp;
            |&nbsp;&nbsp;&nbsp;&nbsp;
            Bina&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Sri City&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Dhone&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Malerkotla&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Meerut District&nbsp;&nbsp;
            |&nbsp;&nbsp;
            Vapi&nbsp;&nbsp;
            |&nbsp;&nbsp;<br>
            Indore Rural</p>
    </div>
    <div id="dot2">
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    </div>
    <div id="popular">
        <div>
            <h4>Popular Categories</h4>
            <div id="pop">
                
                <div>
                    
                    <a href=""> <p>Sunflower Oils</p></a>
                    <a href=""> <p>Milk</p></a>
                    <a href=""> <p>Organic F&V</p></a>
                    <a href=""> <p>Floor Cleaners</p></a>
                    <a href=""> <p>Frozen Veg Food</p></a>
                  
                </div>
                <div>
                    <a href=""> <p>Wheat Atta</p></a>
                    <a href=""> <p>Health Drinks</p></a>
                    <a href=""> <p>Namkeen</p></a>
                    <a href=""> <p>Other Juices</p></a>
                    <a href=""> <p>Diapers & Wipes</p></a>
                  
                </div>
                <div>
                    <a href=""> <p>Ghee</p></a>
                    <a href=""> <p>Flakes</p></a>
                    <a href=""> <p>Eggs</p></a>
                    <a href=""> <p>Leafy Vegetables</p></a>
                   
                </div>
            </div>
            
        </div>
        <div>
            <h4>Popular Brands</h4>
            <div id="pop">
               
                <div>
                    
                    <a href=""> <p>Amul</p></a>
                    <a href=""> <p>RED BULL</p></a>
                    <a href=""> <p>Yummiez</p></a>
                    <a href=""> <p>Britannia</p></a>
                    <a href=""> <p>Haldirams</p></a>
                    <a href=""> <p>Patanjali</p></a>
                    <a href=""> <p>Cadbury Diary Milk</p></a>
                </div>
                <div>
                    <a href=""> <p>Nescafe</p></a>
                    <a href=""> <p>elite cake</p></a>
                    <a href=""> <p>Yera</p></a>
                    <a href=""> <p>Wow Momo</p></a>
                    <a href=""> <p>Ferrero</p></a>
                    <a href=""> <p>McCain</p></a>
                    <a href=""> <p>Pedigree</p></a>
                </div>
                <div>
                    <a href=""> <p>MTR</p></a>
                    <a href=""> <p>Pediasure</p></a>
                    <a href=""> <p>Yakult</p></a>
                    <a href=""> <p>Fortune</p></a>
                    <a href=""> <p>Lays</p></a>
                    <a href=""> <p>kwality walls</p></a>
                </div>
            </div>
        </div>
    </div>

</div>
<div id="two">
    <p>Copyright © 2021-2023 Supermarket Grocery Supplies Pvt Ltd</p>
</div>`;
}
export {footer};