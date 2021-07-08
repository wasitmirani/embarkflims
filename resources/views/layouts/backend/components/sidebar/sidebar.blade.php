@php
    $sidebar=sideBarMenu();
    // dd($sidebar);
@endphp
<nav id="left-sidebar-nav" class="sidebar-nav">


    <ul class="metismenu">
        @foreach ($sidebar as $menu)
         @if(!empty($menu['g_heading']))
            <li class="g_heading">{{$menu['g_heading']}}</li>
         @endif
        @if(!empty($menu['menu']))
         <li >
            <a href="javascript:void(0)" class="has-arrow arrow-c"><i class="{{$menu['menu']['icon']}}"></i><span>{{$menu['menu']['title']}}</span></a>
            <ul>
                @foreach ($menu['menu']['sub_menu'] as $item)
               <li exact-path> <router-link  to="{{$item['v-route']}}" >{{$item['title']}}</router-link></li>
                @endforeach

            </ul>
         </li>
         @endif
         @if(!empty($menu['single_link']))
         <li>

            <router-link  to="{{$menu['single_link']['v-route']}}" ><i class="{{$menu['single_link']['icon']}}"></i><span>{{$menu['single_link']['title']}}</span></router-link>

         @endif
         @endforeach
    </ul>
 </nav>
