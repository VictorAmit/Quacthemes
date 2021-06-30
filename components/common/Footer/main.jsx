import React from "react";
import Tag from "./tag";
import About from "./about";
import Posts from "./post";
import Social from "./social";

export default function Main(){
return(
<>
<footer class="main-footer cols-gap-lg footer-bold s-dark">

					<div class="upper-footer bold-footer-upper">
			<div class="ts-contain wrap">
				<div class="widgets row cf">
					
		<About />
		
		<div class="widget col-4 ts-block-widget smartmag-widget-posts-small">		
		<Posts />
		</div>
<div class="widget col-4 widget_recent_comments"><div class="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style"><h5 class="heading">New Comments</h5></div><ul id="recentcomments"><li class="recentcomments"><span class="comment-author-link"><a href='https://theme-sphere.com/' rel='external nofollow ugc' class='url'>John Doe</a></span> on <a href="post-format-gallery/index.html#comment-138">Royal Good Announces a New Album, Share New Single, Typhoonsy</a></li><li class="recentcomments"><span class="comment-author-link"><a href='https://theme-sphere.com/' rel='external nofollow ugc' class='url'>Sam Doe</a></span> on <a href="samsung-announces-galaxy-buds-pro-most-premium-earbuds-yet/index.html#comment-128">Samsung Announces Galaxy Buds Pro, Most Premium Earbuds Yet</a></li><li class="recentcomments"><span class="comment-author-link"><a href='https://theme-sphere.com/' rel='external nofollow ugc' class='url'>Jane Doe</a></span> on <a href="welcome-to-the-future-of-wordpress-with-gutenberg/index.html#comment-154">Welcome to the Future of SmartMag Gutenberg Editor</a></li><li class="recentcomments"><span class="comment-author-link"><a href='https://theme-sphere.com/' rel='external nofollow ugc' class='url'>Jane Doe</a></span> on <a href="latest-release-of-video-song-the-great-green-planet/index.html#comment-151">Latest Release of Video Song  &#8216;The Great Green Planet&#8217;</a></li></ul></div>				</div>
			</div>
		</div>
		
	
			<div class="lower-footer bold-footer-lower">
			<div class="ts-contain inner">

				

				
		<Social />
											
						<Tag />
						
				
				<div class="copyright" target="_blank"
          rel="noopener noreferrer">
					&copy; 2021 Pelviclitz. Designed by <a>Victor Amit</a>.				</div>
			</div>
		</div>		
		
	</footer>
	
</>
);
}