var Header = `
<a href="index.html" class="logo">
    <img src="images/logo.png"  >
</a>
<div class="search-bar-parent">
    <div class=" search-bar p-2 pl-3 d-flex justify-content-between border ">
      <input type="text" onkeyup="filterCheck(this)" value="" class="border-0">
      <img src="images/search.svg" class="search">
    </div>
    <div class="d-flex flex-column suggestions">
    </div>
</div>
<div class="order d-flex flex-column align-items-center">
    <span class="h6">Order Online or Call now </span>
    <span class="badge badge-primary p-2 px-4 border-rounded">000 348 723</span>
</div>

`
var Nav= `
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Brands
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <span class="dropdown-item" onclick="redirectProduct(this)">Deer</span>
              <span class="dropdown-item" onclick="redirectProduct(this)">Dollar</span>
              <span class="dropdown-item" onclick="redirectProduct(this)">Giatto</span>
              <span class="dropdown-item" onclick="redirectProduct(this)">Piano</span>
              <span class="dropdown-item" onclick="redirectProduct(this)">Picasso</span>
              <span class="dropdown-item" onclick="redirectProduct(this)">Nike</span>
              <span class="dropdown-item" onclick="redirectProduct(this)">Puma</span>
            </div>
          </li>
        <li class="nav-item dropdown ">
            <a class="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Products
            </a>
            <div class="dropdown-menu  text-wrap" aria-labelledby="navbarDropdownMenuLink">
                <span class="dropdown-item" onclick="redirectProduct(this)">Staples</span>
                <span class="dropdown-item" onclick="redirectProduct(this)">Bag</span>
                <span class="dropdown-item" onclick="redirectProduct(this)">Pen</span>
                <span class="dropdown-item" onclick="redirectProduct(this)">Pencil</span>
                <span class="dropdown-item" onclick="redirectProduct(this)">Pointer </span>
                <span class="dropdown-item" onclick="redirectProduct(this)">Glitter </span>
                <span class="dropdown-item" onclick="redirectProduct(this)">Marker </span>
            </div>
          </li>

        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact Us</a>
        </li>
        <li class="nav-item">
          <span  class="nav-link text-primary d-flex align-items-start" onclick="redirectProduct(this)">Sale <span class="badge badge-primary ml-1">new<span></span>
        </li>
       
      </ul>
    </div>

`

var Footer = `
<div class="d-flex flex-column pt-5">
  <img src="images/logo.png" >
  <span class="text-muted pl-3 mt-3">Contact Us On </span> 
  <div class="text-muted pl-3 h5">
    <a href=""><i class="fab fa-facebook px-1 text-muted "></i></a>
    <a href=""><i class="fab fa-whatsapp px-1 text-muted "></i></a>
    <a href=""><i class="far fa-envelope px-1 text-muted "></i></a>
   
  </div>
</div>
 <div class="d-flex flex-column text-muted pt-5 ">
   <a href="index.html" class="footer-links">Home</a>
   <a href="contact.html" class="footer-links">Contact Us</a>
   <a href="about.html" class="footer-links">About Us</a>
   <a href="" class="footer-links">Privacy Policy</a>
 </div>
 <div class="text-white d-flex flex-wrap flex-column pt-5">
   <label class="text-muted bg-transparent">Enter Your Email Address</label>
   <span class="footer-span">
     <input type="text" placeholder="News Letter">
     <button class="h6 text-muted  p-2">Send</button>
   </span>
   <span class="text-muted-2 mt-2">Call Now</span>
   <span class="text-muted-2 ">000 348 723</span>
 </div>
`