<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="{{asset('/plugins/global/plugins.bundle.js')}}"></script>
<script src="{{asset('/plugins/custom/prismjs/prismjs.bundle.js')}}"></script>
<script src="{{asset('/js/main.js')}}"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>


<script>
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    function logoutUser() {
        localStorage.setItem('isLoggedIn', '0');
    }
</script>

@yield('script')
