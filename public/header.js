const headerHTML = `
     <section class="top_txt">
      <div class="head container">
        <div class="head_txt">
          <p>Free shipping, 30-day return of refund guarantee</p>
        </div>
        <div class="sign_in_up">
          <a href="#">Sign In</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="navbar-brand">
        <a href="index.html">
          <img src="images/yAsh.png" class="logo" alt="yash eCom logo" width="80%" height="auto">
        </a>
      </div>
      <nav class="navbar">
        <ul>
          <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
          <li class="nav-item"><a href="products.html" class="nav-link">Products</a></li>
          <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
          <li class="nav-item">
            <a href="addToCart.html" class="nav-link add-to-cart-button" id="cartValue">
              <i class="fa-solid fa-cart-shopping"></i>0
            </a>
          </li>
        </ul>
      </nav>
    </div>`

let headerElem = document.querySelector('.section-navbar')
headerElem.insertAdjacentHTML('afterbegin', headerHTML)