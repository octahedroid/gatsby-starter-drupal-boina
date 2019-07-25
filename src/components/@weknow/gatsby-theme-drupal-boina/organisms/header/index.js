import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './style.scss'
import Button from '@weknow/gatsby-theme-drupal-boina/src/components/atoms/button'

const Header = ({ scrolled, isMobile, showSidebar, darkMenu }) => (
  <div className="grid-x align-middle c-header">
    {!scrolled && isMobile ? (
      <div className="c-header__normal cell grid-container align-right grid-x">
        <div className="cell grid-x small-12 medium-9 large-7 xlarge-6 xxlarge-6 align-right grid-x">
          <div
            className={`cell small-3 medium-2 grid-x align-center ${
              darkMenu ? 'c-header__menu--dark' : ''
            }`}
          >
            <Link className="c-header__menu-link" to="/">
              Home
            </Link>
          </div>
          <div
            className={`cell small-3 medium-2 grid-x align-center ${
              darkMenu ? 'c-header__menu--dark' : ''
            }`}
          >
            <Link className="c-header__menu-link" to="/about">
              About me
            </Link>
          </div>
          <div
            className={`cell small-6 medium-4 grid-x align-center ${
              darkMenu ? 'c-header__menu--dark' : ''
            }`}
          >
            <a
              className="c-header__menu-link c-header__menu-link--cta"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shadow CTA
            </a>
          </div>
        </div>
      </div>
    ) : (
      <div className="c-header__scrolled grid-x align-middle">
        <div className="cell grid-container grid-x align-middle">
          <Link to="/" className="c-header__logo__link">
            <svg
              className="c-header__logo"
              width="200"
              height="60"
              viewBox="0 0 480 180"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <g fillRule="nonzero" fill="#2BA9E0">
                  <path d="M74.667 111.493c-15.598 0-28.248 12.68-28.248 28.316s12.65 28.316 28.248 28.316 28.248-12.68 28.248-28.316-12.65-28.316-28.248-28.316zM109.83 106.066c8.361 8.758 13.507 20.633 13.507 33.743 0 16.603-8.255 31.218-20.851 40.03 23.316-7.2 42.613-24.77 51.243-46.048 11.953-29.445.804-51.582-17.85-71.678.59 2.58.912 5.32.912 8.06-.054 17.087-11.417 31.433-26.962 35.893zM77.883 70.227c0 11.982 9.702 21.654 21.601 21.654 11.9 0 21.655-9.726 21.655-21.654 0-11.982-9.702-21.654-21.601-21.654-11.9 0-21.655 9.672-21.655 21.654z" />
                  <path d="M37.414 171.242c-7.13-8.49-11.417-19.451-11.417-31.433 0-24.985 18.707-45.564 42.88-48.412-4.127-6.018-6.592-13.325-6.592-21.17 0-20.633 16.67-37.29 37.253-37.29 1.715 0 3.377.108 4.985.323C92.355 22.728 80.188 12.036 70.593.376c4.878 51.152-46.472 32.561-65.5 79.737-12.704 31.594-1.234 70.657 32.32 91.129z" />
                </g>
                <g fillRule="nonzero">
                  <g fill="#FFF">
                    <path d="M463.494 90h-44.745v12.808h30.682c-4.474 19.213-18.537 35.224-37.074 41.628l-73.51-73.649c7.671-22.415 29.404-38.425 54.334-38.425 19.176 0 36.435 9.606 47.301 24.336l9.588-8.326c-12.784-17.291-33.239-28.819-56.89-28.819-33.238 0-61.363 23.696-68.395 55.077l84.376 84.536c30.682-7.685 54.333-35.864 54.333-69.166zM322.868 90.64c0 17.932 7.03 35.224 20.454 48.673 13.424 13.449 31.322 20.493 48.58 20.493L322.868 90.64z" />
                  </g>
                  <path
                    d="M393.18.34c-49.218 0-89.489 40.347-89.489 89.66 0 49.313 40.27 89.66 89.49 89.66 49.219 0 89.49-40.347 89.49-89.66C482.67 40.687 442.4.34 393.18.34zm-49.858 139.613c-13.423-13.449-20.454-31.38-20.454-48.672l69.673 69.166c-17.897-.64-35.795-7.045-49.219-20.494zm65.2 18.572L324.785 74.63c7.032-31.381 35.157-55.077 68.396-55.077 23.65 0 44.105 11.528 56.89 28.82l-9.589 8.325c-10.866-14.73-28.125-24.336-47.301-24.336-24.93 0-46.023 16.01-54.333 38.425l73.509 73.65c18.537-6.405 32.6-22.416 37.074-41.629H418.75V90h44.745c0 33.302-23.651 61.48-54.972 68.525z"
                    fill="#639"
                  />
                </g>
                <path d="M274 143h-17.853l-40.592-32.34 34.597-33.319L274 96.854V143" />
                <path
                  d="M248.147 76a15.158 15.158 0 0 0-7.363-1.896c-4.722 0-8.94 2.15-11.73 5.532v41.068s23.6-14.845 26.223-26.625c.485-1.476.756-3.055.756-4.7 0-5.763-3.182-10.763-7.886-13.379"
                  fill="#A0283A"
                />
                <path
                  d="M217.295 74.104c-2.66 0-5.16.69-7.353 1.896-4.704 2.607-7.886 7.616-7.886 13.379 0 1.645.27 3.224.756 4.7 2.613 11.78 26.242 26.625 26.242 26.625V79.636c-2.81-3.382-7.027-5.532-11.759-5.532"
                  fill="#CC3C4C"
                />
              </g>
            </svg>
            <span>home</span>
          </Link>
          <div className="cell auto grid-x align-middle align-right">
            <Button link onClick={showSidebar}>
              <svg
                className="c-header__menu-handler"
                viewBox="261.53900146484375 145.27000427246094 97.40499877929688 75.30599975585938"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsbx="https://boxy-svg.com"
              >
                <path d="M 271.21 166.04 C 258.537 165.855 257.814 145.297 272.052 145.27 L 349.238 145.27 C 362.366 145.219 361.991 166.536 349.238 166.601 L 271.21 166.04 Z" />
                <path
                  d="M 271.327 193.058 C 258.236 193.153 258.175 172.32 271.962 172.288 L 333.333 172.288 C 346.511 172.231 346.796 193.547 333.368 193.619 L 271.327 193.058 Z"
                  transform="matrix(0.999998, 0.00207, -0.00207, 0.999998, 0.376693, -0.688812)"
                  bxorigin="0.873 0.438"
                />
                <path
                  d="M 270.629 219.998 C 258.692 220.37 258.234 199.264 271.105 199.228 L 317.107 199.228 C 329.316 199.168 328.571 220.486 317.133 220.559 L 270.629 219.998 Z"
                  transform="matrix(0.999998, 0.00207, -0.00207, 0.999998, 0.432427, -0.657421)"
                  bxorigin="0.873 0.438"
                />
              </svg>
              <span>menu</span>
            </Button>
          </div>
        </div>
      </div>
    )}
  </div>
)

Header.propTypes = {
  scrolled: PropTypes.bool,
  showSidebar: PropTypes.func,
  darkMenu: PropTypes.bool,
  isMobile: PropTypes.bool,
}

Header.defaultProps = {
  scrolled: false,
  showSidebar: null,
  darkMenu: false,
  isMobile: false,
}

export default Header
