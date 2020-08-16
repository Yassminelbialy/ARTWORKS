@extends('userLayout.layout')

@section('content')
	<app-home></app-home>
@endsection

@section('scripts')
<script>
	$('.navbar .navbar-nav .nav-item').on('click', function () {
        
        $(this).addClass('active').siblings().removeClass('active');
    });
	$('#myCollapsible').collapse({
  toggle: true
})
	$('.product-grid-item__image').hover(function(e) {
	}, function() {
		// out
	});

	$('.carousel').carousel({
		interval: false,
	});
	$('div .size_btn').on('click', function () {
        
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
	});
	
</script>
@endsection