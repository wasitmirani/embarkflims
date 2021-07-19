
<!doctype html>
<html lang="en">
	<head>
		<!-- Required meta tags -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<!-- Bootstrap CSS -->
		<link rel="stylesheet" href="assets/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
		<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.css">
		<!-- <link rel="stylesheet" href="assets/css/all.min.css"> -->
		<link rel="stylesheet" href="assets/css/style.css">
		<link rel="stylesheet" href="assets/css/fancybox.css">
		<link rel="stylesheet" href="assets/css/slick.min.css">
		<link rel="stylesheet" href="assets/css/slick-theme.css">
		<link rel="stylesheet" href="https://unpkg.com/aos@3.0.0-beta.6/dist/aos.css">
		<title>Embark Films</title>
	</head>
	<body>
		<!-- Header -->
		<header data-aos="flip-down" data-aos-duration="2000">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<div class="logo"><img src="assets/images/logo.png" class="img-fluid" alt=""></div>
					</div>
					<div class="col-lg-6 dis-flex-end">
						<ul class="list-unstyled m-0">
                            @guest
                            @if (Route::has('login'))
							<li class="list-inline-item"><a href="{{route('show.login')}}" class="btn btn-business">Client/Freelancer Login</a></li>
                            @endif
                            @else
                            <li class="list-inline-item"><a href="{{ route('freelancer.index') }}" class="btn btn-business">{{ Auth::user()->name }}</a></li>
                            <li class="list-inline-item"><a href="#" class="btn btn-business" href="{{ route('logout') }}" onclick="event.preventDefault();
                                              document.getElementById('logout-form').submit();">{{ __('Logout') }}</a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    @csrf
                                </form>
                            </li>
                            @endguest
						</ul>
					</div>
				</div>
			</div>
		</header>
		<!-- Header -->
		<!-- Banner -->

        @yield('content')

		<!-- Footer -->
		<footer data-aos="fade-up" data-aos-duration="1000">
			<div class="container">
				<div class="row">
					<div class="col-lg-4">
						<div class="logo"><img src="assets/images/footer-logo.png" class="img-fluid" alt=""></div>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .</p>
						<div class="social-icons">
							<ul class="list-unstyled">
								<li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="col-lg-4">
						<h2>QUICK LINKS</h2>
							<ul class="list-unstyled">
								<li><a href="#">Films</a></li>
								<li><a href="#">About Us</a></li>
								<li><a href="#">FAQ </a></li>
								<li><a href="#">Contact Us</a></li>
							</ul>
					</div>
					<div class="col-lg-4">
						<h2>STAY CONNECTED</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry. </p>
						<form action="">
							<input type="email" placeholder="Email Address">
							<button type="submit">SIGN UP</button>
						</form>
					</div>
				</div>
			</div>
			<div class="copyright ">
				<p>Embarkweddingfilms © Copyrights 2021 All Rights Reserved</p>
			</div>
		</footer>
		<!-- Footer -->
		<div class="preloader"></div>
		<!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" ></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js" ></script>
		<!-- <script src="assets/js/slim.min.js" ></script> -->
		<script src="assets/js/custom.js"></script>
		<script src="assets/js/fancybox.js"></script>
		<script src="assets/js/bootstrap.bundle.min.js"></script>
		<!-- Option 2: jQuery, Popper.js, and Bootstrap JS -->
		<script src="assets/js/popper.min.js"></script>
		<script src="assets/js/bootstrap.min.js"></script>
		<script src="assets/js/slick.min.js"></script>
		<script src="https://unpkg.com/aos@3.0.0-beta.6/dist/aos.js" ></script>
		    <script>
  AOS.init();
</script>
	</body>
</html>
