<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/css/styles.css" />
    <link
        rel="icon"
        type="image/x-icon"
        href="images/black-icon-transformed.png"
    />
    <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
    />
    <title>E-bus</title>
</head>
<body>
<div class="back-img">
    <div class="navbar">
        <div class="navbar-left">
            <a href="index.html">
                <img src="images/black-icon-transformed.png" />
                <div>e-bus</div>
            </a>
        </div>
        <div class="navbar-right">
            <div class="schedule">
                <a href="destinations.html">
                    <img src="icons/marker.png" />
                    <div>Destinations</div>
                </a>
            </div>
            <div class="rules">
                <a href="rules.html">
                    <img src="icons/document.png" />
                    <div>Rules</div>
                </a>
            </div>
            <div class="contacts">
                <a href="contacts.html">
                    <img src="icons/user.png" />
                    <div>Contacts</div>
                </a>
            </div>
            <div class="rules">
                <a href="help.html">
                    <img src="icons/interrogation.png" />
                    <div>Help</div>
                </a>
            </div>
            <div class="sign-in">
                <a href="sign-in.html">Sign-in</a>
            </div>
        </div>
    </div>
</div>
@yield('content')
<div class="footer">
    <div class="footer_wrapper">
        <div class="flix-page-container">
            <hr class="flix-divider" />
        </div>
        <div class="footer_section">
            <div class="footer_left">
                <span class="footer_left-copyright"> © 2022-2023, АО «E-BUS» </span>
                <p class="footer_left-license">
                    License to provide information and services in the field of bus
                    transport No. 1.2.245/61 dated 03.02.2020, issued by Agency of the
                    Republic of Kazakhstan for Regulation and Development transport
                    sector.
                </p>
                <div>
                    <a href="https://www.greyhound.com/" class="footer-2__left-title">
                        Corporate website
                    </a>
                </div>
            </div>
            <div class="footer_right">
                <div class="">
                    <a
                        href="http://instagram.com/yrssl"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                    ><img
                            src="https://aviax.cdn.aviata.me/releases/2023.1.2/assets/static/instagram-icon.6d509383.svg"
                            alt="E-BUS в Instagram"
                            width="32"
                            height="32" /></a
                    ><a
                        href="https://www.youtube.com/"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                    ><img
                            src="https://aviax.cdn.aviata.me/releases/2023.1.2/assets/static/youtube-icon.2d4ad397.svg"
                            alt="E-BUS в YouTube"
                            width="32"
                            height="32" /></a
                    ><a
                        href="https://www.facebook.com"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                    ><img
                            src="https://aviax.cdn.aviata.me/releases/2023.1.2/assets/static/facebook-icon.53c62c05.svg"
                            alt="E-BUS в Facebook"
                            width="32"
                            height="32" /></a
                    ><a
                        href="https://twitter.com"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                    ><img
                            src="https://aviax.cdn.aviata.me/releases/2023.1.2/assets/static/twitter-icon.c1943575.svg"
                            alt="E-BUS в Twitter"
                            width="32"
                            height="32"
                        /></a>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
