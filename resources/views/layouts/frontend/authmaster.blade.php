
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register Embark</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('assets/images/favicon.png') }}"/>

    <!-- Themify icons -->
    <link rel="stylesheet" href="{{ asset('dist/icons/themify-icons/themify-icons.css') }}" type="text/css">

    <!-- Main style file -->

    <link rel="stylesheet" href="{{ asset('dist/css/app.min.css') }}" type="text/css">

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="auth" stl>

<!-- begin::preloader-->
<div class="preloader">
    <div class="preloader-icon"></div>
</div>
<!-- end::preloader -->


    <div class="form-wrapper">
      @yield('content')
    </div>


<!-- Bundle scripts -->
<script src="{{ asset('libs/bundle.js') }}"></script>

<!-- Main Javascript file -->
<script src="{{ asset('dist/js/app.min.js') }}"></script>

@yield('scripts')
</body>
</html>
