@php
/*Template Name: Flats*/
query_posts(array(
   'post_type' => 'Flats'
)); @endphp
@while(have_posts()) @php(the_post())
<h2 class="flat-link"><a href="{!! the_permalink() !!}">{!! the_title() !!}</a></h2>
<p>{!! the_excerpt() !!}</p>
<img class="center"><a href="{!! the_permalink() !!}">
{!! the_post_thumbnail() !!}
</a></img>
<a class="Info">
{!! the_field('price') . 'Eu' !!}
</a>
<a>
{!! the_field('m2') !!}
</a>
@endwhile