import React from 'react';

function NavBanner() {
  return (
        <ul className="banner-navigation">
                <li className="banner-navigation-item">
                        <a href="/about">
                                <i class="fas fa-address-card banner-icon"></i>
                                <p>About</p>
                        </a>
                </li>

                <li className="banner-navigation-item">
                        <a href="/projects">
                                <i class="fas fa-laptop-code banner-icon"></i>
                                <p>Projects</p>
                        </a>
                </li>

                <li className="banner-navigation-item">
                        <a href="/skills">
                                <i class="fas fa-file banner-icon"></i>
                                <p>Resume</p>
                        </a>
                </li>

                <li className="banner-navigation-item">
                        <a href="/contact">
                                <i class="fas fa-envelope-square banner-icon"></i>
                                <p>Contact</p>
                        </a>
                </li>
        </ul>
  );
}

export default NavBanner;