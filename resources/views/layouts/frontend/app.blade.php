<!doctype html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="icon" href="favicon.ico" type="image/x-icon">
      <title>{{config('app.name')}}</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      <link rel="stylesheet" href="{{ asset('assets/plugins/bootstrap/css/bootstrap.min.css') }}">
      <link rel="stylesheet" href="{{asset('/assets/plugins/charts-c3/c3.min.css')}}">
      <link rel="stylesheet" href="{{asset('/assets/css/main.css')}}">
      <link rel="stylesheet" href="{{asset('/assets/css/theme1.css')}}">
      <link rel="stylesheet" href="{{asset('/assets/css/custom.css')}}">
      <link rel="stylesheet" href="{{asset('/assets/plugins/datatable/dataTables.bootstrap4.min.css')}}">
      <link rel="stylesheet" href="{{asset('/assets/plugins/datatable/fixedeader/dataTables.fixedcolumns.bootstrap4.min.css')}}">
      <link rel="stylesheet" href="{{asset('/assets/plugins/datatable/fixedeader/dataTables.fixedheader.bootstrap4.min.css')}}">
      <link rel="stylesheet" href="https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css">
      @yield('style')
</head>
<body class="font-montserrat sidebar_dark">

<div id="main_content">
@include('layouts.frontend.components.header.headertop')
@include('layouts.frontend.components.sidebar.rightsidebar')
<div class="theme_div">
<div class="card">
<div class="card-body">
<ul class="list-group list-unstyled">
<li class="list-group-item mb-2">
<p>Default Theme</p>
<a href="../main/index.html"><img src="../assets/images/themes/default.png" class="img-fluid"></a>
</li>
<li class="list-group-item mb-2">
<p>Night Mode Theme</p>
<a href="../dark/index.html"><img src="../assets/images/themes/dark.png" class="img-fluid"></a>
</li>
<li class="list-group-item mb-2">
<p>RTL Version</p>
<a href="../rtl/index.html"><img src="../assets/images/themes/rtl.png" class="img-fluid"></a>
</li>
<li class="list-group-item mb-2">
<p>Theme Version2</p>
<a href="index.html"><img src="../assets/images/themes/theme2.png" class="img-fluid"></a>
</li>
<li class="list-group-item mb-2">
<p>Theme Version3</p>
<a href="../theme3/index.html"><img src="../assets/images/themes/theme3.png" class="img-fluid"></a>
</li>
<li class="list-group-item mb-2">
<p>Theme Version4</p>
 <a href="../theme4/index.html"><img src="../assets/images/themes/theme4.png" class="img-fluid"></a>
</li>
<li class="list-group-item mb-2">
<p>Horizontal Version</p>
<a href="../horizontal/index.html"><img src="../assets/images/themes/horizontal.png" class="img-fluid"></a>
</li>
</ul>
</div>
</div>
</div>
@include('layouts.frontend.components.sidebar.userinfo')
@include('layouts.frontend.components.sidebar.sidebar')
<div class="page">
@include('layouts.frontend.components.header.topheader')
@yield('content')
</div>
</div>
<script src="{{ asset('js/app.js') }}" defer></script>
<script src="{{ asset('/assets/bundles/lib.vendor.bundle.js')}}"></script>
<script src="{{ asset('/assets/bundles/selectize.bundle.js')}}"></script>
<script src="{{ asset('/assets/js/vendors/selectize.js')}}"></script>
<script src="{{ asset('/assets/bundles/apexcharts.bundle.js')}}"></script>
<script src="{{ asset('/assets/bundles/counterup.bundle.js')}}"></script>
<script src="{{ asset('/assets/bundles/knobjs.bundle.js')}}"></script>
<script src="{{ asset('/assets/bundles/c3.bundle.js')}}"></script>
<script src="{{ asset('/assets/js/core.js')}}" ></script>
<script src="{{ asset('/assets/js/page/project-index.js')}}"></script>
<script src="{{ asset('/assets/bundles/dataTables.bundle.js')}}" ></script>
<script src="{{ asset('/assets/js/table/datatable.js')}}" ></script>
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />

<script type="251808cb6ced47f5db4fe2c3-text/javascript">
    {{-- var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5e0463c727773e0d832ab358/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })(); --}}
    </script>


<script src="../../../cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="251808cb6ced47f5db4fe2c3-|49" defer=""></script><script defer="" src="../../../beacon.min.js" data-cf-beacon='{"rayId":"66479edf0fa80119","version":"2021.5.2","r":1,"token":"f79813393a9345e8a59bb86abc14d67d","si":10}'></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
@yield('scripts')
</body>
</html>
