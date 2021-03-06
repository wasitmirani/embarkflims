@extends('layouts.frontend.master')

@section('content')

<section class="banner" style="background: url(assets/images/banner.jpg)no-repeat;" data-aos="flip-up" data-aos-duration="2000">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h2 class="heading-one">We Have  The <br>Team You Need</h2>
                <ul class="list-unstyled m-0">
                    <li class="list-inline-item"><a href="#" class="btn btn-business">Book Your Date</a></li>
                    <li class="list-inline-item"><a href="#" class="btn btn-business">View Our Work</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- Banner -->
<!-- Steps -->
<section class="step" style="background: url(assets/images/bg-before2.jpg)no-repeat;">
    <div class="container">
        <div class="row">
            <div class="col-lg-12" data-aos="flip-down" data-aos-duration="2000">
                <h2 class="heading-two">Videography made easy</h2>
            </div>
            <div class="col-lg-4" data-aos="flip-right" data-aos-duration="2000">
                <div class="box">
                    <h4>Step one</h4>
                    <div class="img-box"><img src="assets/images/icon1.png" class="img-fluid" alt=""></div>
                    <h3>Create An Account</h3>
                </div>
            </div>
            <div class="col-lg-4" data-aos="flip-up" data-aos-duration="2000">
                <div class="box">
                    <h4>Step two</h4>
                    <div class="img-box"><img src="assets/images/icon2.png" class="img-fluid" alt=""></div>
                    <h3>Choose Your Package</h3>
                </div>
            </div>
            <div class="col-lg-4" data-aos="flip-left" data-aos-duration="2000">
                <div class="box">
                    <h4>Step three</h4>
                    <div class="img-box"><img src="assets/images/icon3.png" class="img-fluid" alt=""></div>
                    <h3> Sit Back & Relax</h3>
                </div>
            </div>
            <div class="col-lg-12">
                <h2 class="heading-two">NEW ENGLAND'S FINEST</h2>
            </div>
        </div>
    </div>
</section>
<!-- Steps -->
<!-- Video -->
<section class="video" data-aos="flip-up" data-aos-duration="2000">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 text-center">
                <button id = "button"><i class = "fas fa-play" aria-hidden = "true"></i></button>
                <div id = "lightbox">
                    <i id = "close-btn" class="fa fa-times"></i>
                    <div id = "video-wrapper">
                        <iframe id = "video" width="960" height="540" src = "https://www.youtube.com/embed/yAoLSRbwxL8" frameborder = "0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Video -->
<!-- About -->
<section class="about" style="background: url(assets/images/bg-before.jpg)no-repeat;">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 dis-flex flex-column" data-aos="fade-right" data-aos-duration="2000">
                <h2 class="heading-two">About Embark weddingfilms</h2>
                <p class="para-one">Embark Films is a video production studio located in the flourishing town of Easthampton, MA. With a focus on growth, we aim to excel in what we do. Our studio is a place of constant creativity. We believe in providing an honest service.Specializing in wedding films, we pride ourselves on working with some of the best couples and capturing one of the most joyous days of their lives.</p>
                <p class="para-one">We will be there every step of the way: from the moment you book, to your wedding day, and beyond.
                We???ve got your back.</p>
                <ul class="list-unstyled">
                    <li class="list-inline-item"><a href="#" class="btn btn-smart">Read more</a></li>
                    <li class="list-inline-item"><a href="#" class="btn btn-smart">Book now</a></li>
                </ul>
            </div>
            <div class="col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                <div class="img-box"><img src="assets/images/side-img.jpg" class="img-fluid" alt=""></div>
            </div>
        </div>
    </div>
</section>
<!-- About -->
<!-- FAQS -->
<section class="faqs" style="background: url(assets/images/faqs-bg.jpg)no-repeat;">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h2 class="heading-two text-center text-white mb-4">FAQ</h2>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000">
                        <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        How do we book you?
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Head on over to our contact page and fill out the form! Share all of the exciting details, and we will be in touch within 24 hours! Once it is confirmed that we are available and that you???d like to go ahead and book your date, we will send over a contract and a half deposit invoice (all done online). </div>
                        </div>
                    </div>
                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="2000">
                        <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        How much does a couple typically spend?
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Head on over to our contact page and fill out the form! Share all of the exciting details, and we will be in touch within 24 hours! Once it is confirmed that we are available and that you???d like to go ahead and book your date, we will send over a contract and a half deposit invoice (all done online). </div>
                        </div>
                    </div>
                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="3000">
                        <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        How do you work with other photographers?
                        </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Head on over to our contact page and fill out the form! Share all of the exciting details, and we will be in touch within 24 hours! Once it is confirmed that we are available and that you???d like to go ahead and book your date, we will send over a contract and a half deposit invoice (all done online). </div>
                        </div>
                    </div>
                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="3000">
                        <h2 class="accordion-header" id="flush-headingfour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                        How safe is our footage?
                        </button>
                        </h2>
                        <div id="flush-collapsefour" class="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Head on over to our contact page and fill out the form! Share all of the exciting details, and we will be in touch within 24 hours! Once it is confirmed that we are available and that you???d like to go ahead and book your date, we will send over a contract and a half deposit invoice (all done online). </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- FAQS -->
<!-- ready -->
<section class="ready" style="background: url(assets/images/bg-before2.jpg)no-repeat;" data-aos="fade-up" data-aos-duration="3000">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="heading-two">Ready to relive your <br> wedding?</h2>
                <a href="#" class="btn btn-smart">Let's Do This</a>
            </div>

        </div>
    </div>
</section>
<!-- ready -->

@endsection
