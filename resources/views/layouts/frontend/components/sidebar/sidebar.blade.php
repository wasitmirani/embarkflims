<div id="left-sidebar" class="sidebar ">
    <h5 class="brand-name">{{ Auth::user()->name }}({{ Auth::user()->role }}) <a href="javascript:void(0)" class="menu_option float-right"><i class="icon-grid font-16" data-toggle="tooltip" data-placement="left" title="" data-original-title="Grid &amp; List Toggle"></i></a></h5>
    <nav id="left-sidebar-nav" class="sidebar-nav">
    <ul class="metismenu">
    <li class="g_heading">Directories</li>
    <li class="active">
    <a href="javascript:void(0)" class="has-arrow arrow-c"><i class="icon-rocket"></i><span>Dashboard</span></a>
    <ul aria-expanded="true" class="collapse in">
        @can('isCustomer')
    <li class="active"><a href="index.html"><span>Dashboard</span></a></li>
    <li><a href="hr-users.html"><span>Gigs</span></a></li>

    @elsecan('isFreelancer')
    <li class="active"><a href="{{ route('home') }}"><span>Dashboard</span></a></li>
    <li class="active"><a href="{{ route('freelancer.projects') }}"><span>Asigned Profjects</span></a></li>
    <li class="active"><a href="{{ route('recomended.projects') }}"><span>Recomended Profjects</span></a></li>
    <li class="active"><a href="index.html"><span>Clients</span></a></li>
    <li><a href="{{ route('checkout') }}"><span>Wallet</span></a></li>

    @endcan

    </ul>
    </li>

    <li>
    <a href="javascript:void(0)" class="has-arrow arrow-c"><i class="icon-briefcase"></i><span>Profile</span></a>
    <ul aria-expanded="false" class="collapse">
    <li><a href="{{ route('profile.setting.form') }}"><span>Account Settings</span></a></li>
    <li><a href="{{ route('edit.profile') }}"><span>Edit Profile</span></a></li>

    </ul>
    </li>


    </ul>
    </nav>
    </div>
