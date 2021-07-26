<div id="page_top" class="section-body ">
    <div class="container-fluid">
    <div class="page-header">
    <div class="left">
        @can('isCustomer')
        <h1 class="page-title">Customer Dashboard </h1>
        @elsecan('isFreelancer')
        <h1 class="page-title">Freelancer Dashboard ({{ Auth::user()->post }})</h1>
        @endcan



    </div>
    <div class="right">
    <div class="notification d-flex">

    <div class="dropdown d-flex">
    <a class="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown">
        @if(Auth::user()->image == null)
        <i class="fa fa-user"></i>
        @elseif(Auth::user()->image != null)
        <img src="{{ asset('/freelancer/img/'.Auth::user()->image) }}" style="width:40px;">
        @endif
    </a>
    <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
    <a class="dropdown-item" href="{{ route('edit.profile') }}"><i class="dropdown-icon fe fe-user"></i> Profile</a>
    <a class="dropdown-item" href="{{ route('profile.setting.form') }}"><i class="dropdown-icon fe fe-settings"></i> Settings</a>

    <div class="dropdown-divider"></div>

    <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
    document.getElementById('logout-form').submit();"><i class="dropdown-icon fe fe-log-out" ></i> Sign out</a>
    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
        @csrf
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
