$('.menuToggle').click(function(){
  $('.mobile-menu').toggleClass('new')
})
$('.event-card-wrap').slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.event-card-home').slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// incomparable-slider

$('.incomparable-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// incomparable-slider


// Valued

$('.Valued-wrap').slick({
  dots: true,
  infinite: true,
  speed: 300,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Valued


// Journals-slider

$('.Journals-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Journals-slider

$(document).ready(function(){
  $('.js-gallery').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  $('.js-gallery').slickLightbox({
    src: 'src',
    itemSelector: '.Gallery img',
    background: 'rgba(0, 0, 0, .7)'
  });
  
});


const otpInputs = document.querySelectorAll('.otp-input');
otpInputs.forEach((input, index) => {
  input.addEventListener('input', (event) => {
    if (input.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && index > 0 && input.value === '') {
      otpInputs[index - 1].focus();
    }
  });
});


// top

let countdown = 30;
const timer = document.getElementById('timer');
const resendOtpBtn = document.getElementById('resendOtpBtn');
const resendOtpText = document.getElementById('resendOtpText');
function startCountdown() {
  const interval = setInterval(() => {
    countdown--;
    timer.innerText = countdown;
    if (countdown <= 0) {
      clearInterval(interval);
      resendOtpText.style.display = 'none';
      resendOtpBtn.disabled = false;
    }
  }, 1000);
}
document.getElementById('otpForm').addEventListener('submit', (e) => {
  e.preventDefault();
  countdown = 30;
  resendOtpText.style.display = 'block';
  resendOtpBtn.disabled = true;
  timer.innerText = countdown;
  startCountdown();
});
resendOtpBtn.addEventListener('click', () => {
  alert('OTP resent!');
  countdown = 30;
  resendOtpText.style.display = 'block';
  resendOtpBtn.disabled = true;
  timer.innerText = countdown;
  startCountdown();
});
startCountdown();

// top



