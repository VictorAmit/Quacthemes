import React from 'react';

export default function Extra(){
return(
<>
<div class="search-modal-wrap" data-scheme="dark">
		<div class="search-modal-box" role="dialog" aria-modal="true">

			<form method="get" class="search-form" action="http://localhost:8004/">
				<input type="search" class="search-field live-search-query" name="s" placeholder="Search..." value="" required />

				<button type="submit" class="search-submit visuallyhidden">Submit</button>

				<p class="message">
					Type above and press <em>Enter</em> to search. Press <em>Esc</em> to cancel.				</p>
						
			</form>

		</div>
	</div>
	
<div id="auth-modal" class="ts-modal auth-modal" aria-hidden="true">
	<div class="ts-modal-overlay" tabindex="-1" data-micromodal-close>
		<div class="ts-modal-container" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
			<header class="ts-modal-header">
				<h2 id="auth-modal-title" class="visuallyhidden">
					Sign In or Register				</h2>

				<button class="close-btn" aria-label="Close modal" data-micromodal-close></button>
			</header>

			<div class="auth-modal-content auth-widget">
				<div class="auth-modal-login">
						<h1>Welcome Back!</h1>
	<p class="message text">Login below or <a href="#" class="register-link">Register Now</a>.</p>

		<div class="social-login">
		<div class="spc-social spc-social-c-icon">
						<a href="wp-login6fb0.html?action=wordpress_social_authenticate&amp;provider=Facebook&amp;mode=login" class="link s-facebook" rel="noopener" title="Login with Facebook">
				<i class="icon tsi tsi-facebook"></i>
				<span class="visuallyhidden">Facebook</span>
			</a>
						<a href="wp-login4385.html?action=wordpress_social_authenticate&amp;provider=Google&amp;mode=login" class="link s-google" rel="noopener" title="Login with Google">
				<i class="icon tsi tsi-google"></i>
				<span class="visuallyhidden">Google</span>
			</a>
						<a href="wp-login752e.html?action=wordpress_social_authenticate&amp;provider=Twitter&amp;mode=login" class="link s-twitter" rel="noopener" title="Login with Twitter">
				<i class="icon tsi tsi-twitter"></i>
				<span class="visuallyhidden">Twitter</span>
			</a>
					</div>

		<p class="social-label"><span>or with email</span></p>
	</div>
	<form method="post" action="https://smartmag.theme-sphere.com/good-news/wp-login.php" class="login-form">

		<div class="input-group">
			<input type="text" name="log" value="" placeholder="Username or Email" />
		</div>

		<div class="input-group">
			<input type="password" name="pwd" value="" placeholder="Password" />
		</div>

				
	<input type="hidden" name="user-cookie" value="1" />

	<input type="hidden" id="bbp_redirect_to" name="redirect_to" value="https://smartmag.theme-sphere.com/good-news/" /><input type="hidden" id="_wpnonce" name="_wpnonce" value="208b817f6d" /><input type="hidden" name="_wp_http_referer" value="/good-news/" />
		<button type="submit" name="wp-submit" id="user-submit" class="ts-button submit user-submit">Log In</button>

		<div class="footer">
			<div class="remember">
				<input name="rememberme" type="checkbox" id="rememberme" value="forever" />
				<label for="rememberme">Remember Me</label>
			</div>

			<a href="my-account/lost-password/index.html" title="Lost password?" class="lost-pass">
				Lost password?			</a>
		</div>

	</form>				</div>

									<div class="auth-modal-register">
							<h1>Register Now!</h1>

	<p class="message text">
		Already registered? <a href="#" class="login-link">Login</a>.	</p>

		<div class="social-login">
		<div class="spc-social spc-social-c-icon">
						<a href="wp-login6fb0.html?action=wordpress_social_authenticate&amp;provider=Facebook&amp;mode=login" class="link s-facebook" rel="noopener" title="Login with Facebook">
				<i class="icon tsi tsi-facebook"></i>
				<span class="visuallyhidden">Facebook</span>
			</a>
						<a href="wp-login4385.html?action=wordpress_social_authenticate&amp;provider=Google&amp;mode=login" class="link s-google" rel="noopener" title="Login with Google">
				<i class="icon tsi tsi-google"></i>
				<span class="visuallyhidden">Google</span>
			</a>
						<a href="wp-login752e.html?action=wordpress_social_authenticate&amp;provider=Twitter&amp;mode=login" class="link s-twitter" rel="noopener" title="Login with Twitter">
				<i class="icon tsi tsi-twitter"></i>
				<span class="visuallyhidden">Twitter</span>
			</a>
					</div>

		<p class="social-label"><span>or with email</span></p>
	</div>
	<form method="post" action="https://smartmag.theme-sphere.com/good-news/wp-login.php?action=register" class="register-form">

		<div class="input-group">
			<input type="text" name="user_login" value="" placeholder="Your Username" />
		</div>

		<div class="input-group">
			<input type="text" name="user_email" value="" placeholder="Your Email" />
		</div>

		
		<button type="submit" name="wp-submit" class="ts-button submit user-submit">Register</button>

		<div class="footer">
			<p>A password will be e-mailed to you.</p>
		</div>

	</form>					</div>
							</div>

		</div>			</div>			</div>
	
</>
);
}
