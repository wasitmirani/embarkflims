<!doctype html>
<html lang="en" dir="ltr">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="icon" href="favicon.ico" type="image/x-icon" />
      <title>:: {{config('app.name')}} :: Login</title>
      <link rel="stylesheet" href="{{asset('assets/plugins/bootstrap/css/bootstrap.min.css')}}" />
      <link rel="stylesheet" href="{{asset('assets/css/main.css')}}" />
      <link rel="stylesheet" href="{{asset('assets/css/theme1.css')}}" />
   </head>
   <body class="font-montserrat sidebar_dark">
      <div class="auth">

         @yield('content')

         <div class="auth_right">
            <div class="carousel slide" data-ride="carousel" data-interval="3000">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img src="assets/images/slider1.svg" class="img-fluid" alt="login page" />
                     <div class="px-4 mt-4">
                        <h4>Fully Responsive</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <img src="assets/images/slider2.svg" class="img-fluid" alt="login page" />
                     <div class="px-4 mt-4">
                        <h4>Quality Code and Easy Customizability</h4>
                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <img src="assets/images/slider3.svg" class="img-fluid" alt="login page" />
                     <div class="px-4 mt-4">
                        <h4>Cross Browser Compatibility</h4>
                        <p>Overview We're a group of women who want to learn JavaScript.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <script src="{{asset('assets/bundles/lib.vendor.bundle.js')}}" ></script>
      <script src="{{asset('assets/js/core.js')}}" ></script>

   </body>
</html>
