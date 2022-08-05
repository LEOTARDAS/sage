<header class="banner">

  <img src='http://localhost:8888/wp-content/uploads/2022/08/mountains.jpg' class="logo"/>

  <a class="brand" href="{{ home_url('/') }}">
    {!! $siteName !!}
  </a>

  @if (has_nav_menu('primary_navigation'))
    <nav class="nav-primary" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
      {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
    </nav>
  @endif
  <button class="SignIn">Sign In</button>
  <button class="SignUp">Sign Up</button>
</header>
