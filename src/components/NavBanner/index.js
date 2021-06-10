import React from 'react';

function NavBanner() {
  return (
        <ul className="banner-navigation">
                <li className="banner-navigation-item">
                        <a href="/about">
                                <i class="fas fa-address-card banner-icon"></i>
                                <h4>About</h4>
                        </a>
                </li>

                <li className="banner-navigation-item">
                        <a href="/projects">
                                <i class="fas fa-laptop-code banner-icon"></i>
                                <h4>Projects</h4>
                        </a>
                </li>

                <li className="banner-navigation-item">
                        <a href="/skills">
                                <i class="fas fa-file banner-icon"></i>
                                <h4>Resume</h4>
                        </a>
                </li>

                <li className="banner-navigation-item">
                        <a href="/contact">
                                <i class="fas fa-envelope-square banner-icon"></i>
                                <h4>Contact</h4>
                        </a>
                </li>
        </ul>
  );
}

export default NavBanner;