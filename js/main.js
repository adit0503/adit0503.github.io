(function () {
  'use strict';

  // ===== Theme Toggle =====
  // Apply theme immediately to avoid flash
  var root = document.documentElement;
  var storedTheme = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = storedTheme || (prefersDark ? 'dark' : 'dark');
  root.setAttribute('data-theme', theme);

  function setTheme(t) {
    root.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', function () {
        var current = root.getAttribute('data-theme') || 'dark';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    // ===== Mobile Navigation =====
    var hamburger = document.getElementById('hamburger');
    var nav = document.getElementById('main-nav');

    if (hamburger && nav) {
      hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        nav.classList.toggle('open');
      });

      // Close nav on link click
      var navLinks = nav.querySelectorAll('a');
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function () {
          hamburger.classList.remove('active');
          nav.classList.remove('open');
        });
      }
    }

    // ===== Scroll Animations =====
    var animateElements = document.querySelectorAll('.animate-in');

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      for (var i = 0; i < animateElements.length; i++) {
        observer.observe(animateElements[i]);
      }
    } else {
      // Fallback: show everything immediately if IntersectionObserver not supported
      for (var i = 0; i < animateElements.length; i++) {
        animateElements[i].classList.add('visible');
      }
    }

    // ===== Animated Counters =====
    var statNumbers = document.querySelectorAll('.stat-number');

    if ('IntersectionObserver' in window && statNumbers.length > 0) {
      var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var target = parseInt(el.getAttribute('data-target'), 10);
            if (!isNaN(target)) {
              animateCounter(el, target);
            }
            counterObserver.unobserve(el);
          }
        });
      }, { threshold: 0.5 });

      for (var i = 0; i < statNumbers.length; i++) {
        counterObserver.observe(statNumbers[i]);
      }
    } else {
      // Fallback: show final values
      for (var i = 0; i < statNumbers.length; i++) {
        var target = statNumbers[i].getAttribute('data-target');
        if (target) statNumbers[i].textContent = target;
      }
    }

    function animateCounter(el, target) {
      var duration = 1500;
      var start = performance.now();

      function update(now) {
        var elapsed = now - start;
        var progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }
      requestAnimationFrame(update);
    }

    // ===== Skill Bars Animation =====
    var skillBars = document.querySelectorAll('.skill-bar-fill');

    if ('IntersectionObserver' in window && skillBars.length > 0) {
      var skillObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var width = el.getAttribute('data-width');
            if (width) {
              el.style.width = width;
            }
            skillObserver.unobserve(el);
          }
        });
      }, { threshold: 0.3 });

      for (var i = 0; i < skillBars.length; i++) {
        skillObserver.observe(skillBars[i]);
      }
    } else {
      // Fallback
      for (var i = 0; i < skillBars.length; i++) {
        var w = skillBars[i].getAttribute('data-width');
        if (w) skillBars[i].style.width = w;
      }
    }

    // ===== Project Filters =====
    var filterBtns = document.querySelectorAll('.filter-btn');
    var projectCards = document.querySelectorAll('.project-showcase');

    for (var i = 0; i < filterBtns.length; i++) {
      filterBtns[i].addEventListener('click', function () {
        var filter = this.getAttribute('data-filter');

        for (var j = 0; j < filterBtns.length; j++) {
          filterBtns[j].classList.remove('active');
        }
        this.classList.add('active');

        for (var k = 0; k < projectCards.length; k++) {
          var card = projectCards[k];
          var categories = card.getAttribute('data-category') || '';
          if (filter === 'all' || categories.indexOf(filter) !== -1) {
            card.style.display = '';
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            (function (c) {
              requestAnimationFrame(function () {
                c.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                c.style.opacity = '1';
                c.style.transform = 'translateY(0)';
              });
            })(card);
          } else {
            card.style.display = 'none';
          }
        }
      });
    }

    // ===== Active Nav Highlight =====
    var currentPath = window.location.pathname;
    var currentPage = currentPath.split('/').pop() || 'index.html';
    // Handle trailing slash (GitHub Pages serves index.html for /)
    if (currentPage === '' || currentPage === '/') {
      currentPage = 'index.html';
    }
    var navItems = document.querySelectorAll('.top-nav a');
    for (var i = 0; i < navItems.length; i++) {
      var href = navItems[i].getAttribute('href');
      var linkPage = href.split('/').pop();
      navItems[i].classList.remove('active');
      if (linkPage === currentPage) {
        navItems[i].classList.add('active');
      }
    }

    // ===== Header scroll effect =====
    var header = document.querySelector('.site-header');
    if (header) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
          header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
          header.style.boxShadow = 'none';
        }
      }, { passive: true });
    }
  });
})();
