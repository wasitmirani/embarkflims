<?php

namespace App\Helpers;

class HelperComponent {

public static function SideBar(){
    return [
            [
                "g_heading"=>"Dashboard",
                "menu"=>[
                    "title"=>'Dashboards',
                    "icon"=>"icon-rocket",
                    "color_code"=>"",
                    "can"=>"",
                    "v-can"=>"",
                    "sub_menu"=>[
                        setSubMenu(
                            null,
                            "Dashboard",
                            null,
                            null,
                            null,
                            "/",
                        ),
                    ]
                ]
            ],
            [
                "g_heading"=>"DIRECTORIES",
                "menu"=>[
                    "title"=>'Variations',
                    "icon"=>"fab fa-vuejs",
                    "color_code"=>"",
                    "can"=>"",
                    "v-can"=>"",
                    "sub_menu"=>[
                            setSubMenu(
                                null,
                                "Services",
                                null,
                                null,
                                null,
                                "/services",
                            ),

                    ],

                ],

            ],
            [
                "g_heading"=>"",
                "menu"=>[
                    "title"=>'Project',
                    "icon"=>"fas fa-tasks",
                    "color_code"=>"",
                    "can"=>"",
                    "v-can"=>"",
                    "sub_menu"=>[
                            setSubMenu(
                                null,
                                "Projects",
                                null,
                                null,
                                null,
                                "/projects",
                            ),

                    ],

                ],

            ],

            // [
            //     "single_link" => setSingleLink(' My inventory ', "icon-basket", null, null, null, '/inventory'),
            // ],

 ];
}
}
