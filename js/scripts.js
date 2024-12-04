WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	// Why slider
	let whySlider = document.querySelector('.why .swiper')

	if (whySlider) {
		new Swiper('.why .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction'
			},
			lazy: true,
			loopAdditionalSlides: 1,
			breakpoints: {
				0: {
					spaceBetween: 16
				},
				768: {
					spaceBetween: 24
				},
				1280: {
					spaceBetween: 106
				}
			},
			on: {
				init: (swiper) => {
					swiper.slidePrev(0, false)
					swiper.slideNext(0, false)
				}
			}
		})
	}


	// Events slider
	const eventsSliders = [],
		events = document.querySelectorAll('.events .swiper')

	events.forEach((el, i) => {
		el.classList.add('events_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction'
			},
			lazy: true,
			loopAdditionalSlides: 1,
			breakpoints: {
				768: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1440: {
					spaceBetween: 32,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => setTimeout(() => setHeight(swiper.el.querySelectorAll('.event'))),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.event')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		eventsSliders.push(new Swiper('.events_s' + i, options))
	})


	// Charity slider
	const charitySliders = [],
		charity = document.querySelectorAll('.charity .swiper')

	charity.forEach((el, i) => {
		el.classList.add('charity_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction'
			},
			lazy: true,
			loopAdditionalSlides: 1,
			breakpoints: {
				768: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1440: {
					spaceBetween: 32,
					slidesPerView: 2
				}
			},
			on: {
				init: swiper => setTimeout(() => setHeight(swiper.el.querySelectorAll('.item'))),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.item')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		charitySliders.push(new Swiper('.charity_s' + i, options))
	})


	// News slider
	const newsSliders = [],
		news = document.querySelectorAll('.news .swiper')

	news.forEach((el, i) => {
		el.classList.add('news_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction'
			},
			lazy: true,
			loopAdditionalSlides: 1,
			breakpoints: {
				768: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1440: {
					spaceBetween: 32,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => setTimeout(() => setHeight(swiper.el.querySelectorAll('.item'))),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.item')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		newsSliders.push(new Swiper('.news_s' + i, options))
	})


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Key events
	if (WW < 1280) {
		$('.key_events .tab_content').removeClass('active')
		$('.key_events .tabs + .mob_tab_btn').addClass('active')

		$('.key_events .tab_content').removeClass('active')
		$('.key_events .tabs + .mob_tab_btn + .tab_content').addClass('active')
	}


	$('.key_events .mob_tab_btn').click(function(e) {
		e.preventDefault()

		$('.key_events .mob_tab_btn').removeClass('active')
		$(this).addClass('active')

		$('.key_events .tab_content').removeClass('active')
		$(this).next('.tab_content').addClass('active')
	})
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Key events
		if (WW < 1280) {
			$('.key_events .tabs + .mob_tab_btn').addClass('active')

			$('.key_events .tab_content').removeClass('active')
			$('.key_events .tabs + .mob_tab_btn + .tab_content').addClass('active')
		} else {
			$('.key_events .tabs .btn').removeClass('active')
			$('.key_events .tabs .btn:first-child').addClass('active')

			$('.key_events .tab_content').removeClass('active')
			$('.key_events #key_events_tab1').addClass('active')
		}


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 390) document.getElementsByTagName('meta')['viewport'].content = 'width=390, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})