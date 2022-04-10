<!DOCTYPE html>
<html lang="en" >
<!--begin::Head-->
<head>
    @include('user::Layouts._header')
    <!-- Hotjar Tracking Code for https://appv5.socioboard.com/login -->
        <script>
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2537425,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        </script>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-72806503-3"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-72806503-3');
        </script>
        <link href="/plugins/custom/intl-tel-input/build/css/intlTelInput.css" rel="stylesheet" type="text/css" />
</head>
<body  id="Sb_body"  class="header-fixed header-mobile-fixed subheader-enabled page-loading"  >

<!--begin::Main-->
<div class="d-flex flex-column flex-root">
    <!--begin::Login-->
    <div class="login login-2 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid" id="Sb_login">
        <!--begin::Aside-->
        <div class="login-aside order-2 order-lg-1 d-flex flex-row-auto position-relative overflow-hidden">
            <!--begin: Aside Container-->
            <div class="d-flex flex-column justify-content-between py-9 px-7 py-lg-13 px-lg-35">

                <!--begin::Aside body-->
                <div class="d-flex flex-column-fluid flex-column flex-center">

                    <!--begin::Signup-->
                @yield('main-content')
                    <!--end::Signup-->
                </div>
                <!--end::Aside body-->
                <!-- begin:Signin -->
            @yield('footer-content')
                <!-- end:Signin -->
            </div>
            <!--end: Aside Container-->
        </div>
        <!--begin::Aside-->

            <!--begin::Content-->
            <div class="content right-content order-1 order-lg-2 d-flex flex-column w-100 pb-0">
                <!--begin::Title-->
                <div class="d-flex flex-column justify-content-center text-center pt-md-5 pt-sm-5 px-lg-0 pt-2 px-7">
                    <h3 class="display4 font-weight-bolder my-7" style="color: #ffffff !importanr;">Social Media Board</h3>
                    <h3 class="font-weight-bolder my-7" style="color: #ffffff !importanr;">Social Media Publishing Simplified</h3>
                    <p class="font-weight-bolder font-size-h2-md font-size-lg opacity-70">
                        <img src="/media/png/right-img1.png" class="img-fluid pl-5" alt="Meeting">
                    </p>
                </div>
                <!--end::Title-->
            </div>
            <!--end::Content-->    </div>
    <!--end::Login-->
</div>
<!--end::Main-->





<!-- Facebook login script -->
@include('user::Layouts._footer')
<!-- end:Facebook login script-->

<!--begin::Global Theme Bundle(used by all pages)-->
@include('user::Layouts._common_script_links')
<!--end::Global Theme Bundle-->

</body>
