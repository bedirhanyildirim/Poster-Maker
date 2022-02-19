<template>
<div id="posterMakerHomepage">
  <section id="welcome">
    <header class="header">
      <div class="content-block">
        <div class="logo">
          <router-link to="/poster-maker">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="220 200 350 350">
              <defs>
                <linearGradient id="linear-gradient" x1="0.914" y1="0.834" x2="0.419" y2="0.387" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#ddd"/>
                  <stop offset="1" stop-color="#b2afaf"/>
                </linearGradient>
                <filter id="Path_27" x="207.182" y="261.823" width="103.023" height="104.338" filterUnits="userSpaceOnUse">
                  <feOffset dy="3" input="SourceAlpha"/>
                  <feGaussianBlur stdDeviation="2" result="blur"/>
                  <feFlood flood-opacity="0.161"/>
                  <feComposite operator="in" in2="blur"/>
                  <feComposite in="SourceGraphic"/>
                </filter>
                <radialGradient id="radial-gradient" cx="0.318" cy="0.183" r="0.872" gradientTransform="matrix(0.252, 0.968, -0.568, 0.148, 0.342, -0.152)" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#727272"/>
                  <stop offset="1" stop-color="#717171"/>
                </radialGradient>
                <linearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#efefef"/>
                  <stop offset="0.5" stop-color="#f7f7f7"/>
                  <stop offset="1" stop-color="#e3e3e3"/>
                </linearGradient>
                <linearGradient id="linear-gradient-3" x1="0.5" x2="0.5" y2="0.682" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#727272"/>
                  <stop offset="1" stop-color="#393939"/>
                </linearGradient>
                <linearGradient id="linear-gradient-4" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#797979"/>
                  <stop offset="1" stop-color="#414141"/>
                </linearGradient>
                <clipPath id="clip-poster-maker">
                  <rect width="768" height="768"/>
                </clipPath>
              </defs>
              <g id="poster-maker" clip-path="url(#clip-poster-maker)">
                <g id="paper" transform="matrix(0.891, -0.454, 0.454, 0.891, -284.697, 150.934)">
                  <path id="Subtraction_7" data-name="Subtraction 7" d="M202.494,281.579H26a25.978,25.978,0,0,1-26-26V87A87.849,87.849,0,0,1,1.269,72.114l35.9-26.571L67.582,2.175A87.488,87.488,0,0,1,87,0h57.495a84.621,84.621,0,0,1,16.929,1.707,83.538,83.538,0,0,1,30.036,12.639A84.245,84.245,0,0,1,221.893,51.3a83.578,83.578,0,0,1,4.894,15.768A84.62,84.62,0,0,1,228.494,84v171.58a25.978,25.978,0,0,1-26,26Z" transform="translate(376.698 352.206)" fill="#bababa"/>
                  <g transform="matrix(0.89, 0.45, -0.45, 0.89, 322.19, -5.23)" filter="url(#Path_27)">
                    <path id="Path_27-2" data-name="Path 27" d="M66.936,10.073s-6.383,21.1.483,52.519c-.007,4.868,1.212,7.547-2.312,10.7s-6.216,2.193-11.786,1.9C25.857,66.768.958,79.741.958,79.741Z" transform="matrix(0.89, -0.45, 0.45, 0.89, 207.76, 286.55)" fill="url(#linear-gradient)"/>
                  </g>
                </g>
                <g id="pict" transform="matrix(0.914, 0.407, -0.407, 0.914, 354.903, 236.184)">
                  <path id="Rectangle_103" data-name="Rectangle 103" d="M10,0h92a10,10,0,0,1,10,10V23A34,34,0,0,1,78,57H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z" transform="translate(109 21)" fill="url(#radial-gradient)"/>
                  <rect id="Rectangle_100" data-name="Rectangle 100" width="211" height="67" rx="31" fill="url(#linear-gradient-2)"/>
                  <rect id="Rectangle_101" data-name="Rectangle 101" width="14" height="118" transform="translate(98 67)" fill="url(#linear-gradient-3)"/>
                  <path id="Rectangle_102" data-name="Rectangle 102" d="M22,0H38A22,22,0,0,1,60,22v97a26,26,0,0,1-26,26H26A26,26,0,0,1,0,119V22A22,22,0,0,1,22,0Z" transform="translate(75 131)" fill="url(#linear-gradient-4)"/>
                </g>
              </g>
            </svg>
          </router-link>
        </div>
        <div class="nav">
          <router-link to="/">bedirhan.design</router-link>
          <router-link to="/poster-maker/app">Design Poster</router-link>
        </div>
      </div>
    </header>
    <div class="content">
      <div class="content-block">
        <div class="content-left">
          <div class="welcome-text">
            <span class="hero">Poster Maker</span>
            <span class="slogan">We do <span style="color: #000000; font-weight: bold; letter-spacing: 0">not</span> design posters,<br> we design <span style="letter-spacing: 0; color: #000000; font-weight: bold">Poster Design Experience.</span></span>
          </div>
          <div class="hero-button">
            <router-link to="/poster-maker/app">
              Let's Make a Poster!
            </router-link>
          </div>
        </div>
        <div class="content-right">
          <span class="title">
            Latest Posters
          </span>
          <ul>
            <li class="first">
              <img src="../assets/example-poster-3.png" alt="example">
            </li>
            <li class="second">
              <img src="../assets/example-poster-2.png" alt="example">
            </li>
            <li class="third">
              <img src="../assets/example-poster-1.png" alt="example">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="why" style="background-color: indianred">
    <div class="welcome-text">
      Why you should use <b>Poster Maker</b>
    </div>
    <ul>
      <li><RouterLink to="/poster-maker/app">Create Poster Now</RouterLink></li>
      <li><RouterLink to="/">Go to bedirhan.design</RouterLink></li>
    </ul>
  </section>
  <section id="how">
    <div class="welcome-text">
      How to use <b>Poster Maker</b>
    </div>
    <ul>
      <li><RouterLink to="/poster-maker/app">Create Poster Now</RouterLink></li>
      <li><RouterLink to="/">Go to bedirhan.design</RouterLink></li>
    </ul>
  </section>
  <section id="who" style="background-color: lightblue">
    <div class="welcome-text">
      Who we are, <b>Poster Maker</b>
    </div>
    <ul>
      <li><RouterLink to="/poster-maker/app">Create Poster Now</RouterLink></li>
      <li><RouterLink to="/">Go to bedirhan.design</RouterLink></li>
    </ul>
  </section>
</div>
</template>

<script>
import PosterMakerLayout from "@/layout/PosterMaker"

export default {
  components: { PosterMakerLayout }
}
</script>

<style lang="scss" scoped>
#posterMakerHomepage {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;

  section {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    scroll-snap-align: start;

    .content-block {
      height: 100%;
      width: 1080px;
    }
  }

  #welcome {
    display: block;

    .header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .content-block {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }

      .logo {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          display: flex;
          align-items: center;
          flex-direction: row;

          svg {
            width: 40px;
            height: 40px;
            display: block;

            #Rectangle_100 {
              fill: #f7f7f7;
              transition: fill 500ms ease-in-out;
            }
          }

          &:hover {
            svg {
              #Rectangle_100 {
                fill: #efefef;
              }
            }
          }
        }
      }
      .nav {
        display: flex;
        margin-left: auto;
        margin-right: 8px;

        a {
          color: #000000;
          margin-right: 48px;
          transition: color 200ms ease;

          &:last-child {
            margin-right: 0;
          }

          &:hover {
            color: #1ba5ec;
          }
        }
      }
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      height: calc(100% - 60px);

      .content-block {
        display: flex;
        justify-content: space-between;

        .content-left {
          width: 720px;
          display: flex;
          padding: 0 20px;
          overflow: hidden;
          flex-direction: column;
          justify-content: center;

          .welcome-text {
            width: 100%;
            margin-top: -60px;

            .hero {
              display: block;
              font-size: 44px;
              letter-spacing: 0;
              font-weight: bold;
            }
            .slogan {
              display: block;
              font-size: 20px;
              color: #505050;
              margin-top: 24px;
              letter-spacing: 2px;
              line-height: 26px;
            }
          }

          .hero-button {
            width: 100%;
            display: block;
            margin-top: 120px;

            a {
              color: #303030;
              padding: 24px 60px;
              border-radius: 4px;
              border: 1px solid #303030;
              transition: all 200ms ease;

              &:hover {
                color: white;
                background-color: #303030;
              }
            }
          }
        }
        .content-right {
          width: 360px;
          display: flex;
          overflow: hidden;
          align-items: center;
          flex-direction: column;
          justify-content: center;

          .title {
            width: 200px;
            display: block;
            color: #505050;
            text-align: center;
            font-weight: normal;
            padding-bottom: 8px;
            margin-bottom: 24px;
            border-bottom: 1px solid #505050;
          }

          ul {
            display: flex;
            flex-direction: column;

            li {
              overflow: hidden;
              border-radius: 4px;
              box-shadow: 0 0 5px 0 rgba(0, 0, 0, .3);

              img {
                margin: 0;
                padding: 0;
                border: none;
                outline: none;
                width: 340px;
                height: 340px;
                vertical-align: middle;
              }

              &.first {
                z-index: 100;
                animation: slide-top .5s ease-in-out both;
              }
              &.second {
                z-index: 99;
                margin-top: -260px;
                transform: scale(.75);
                animation: slide-top .5s .5s ease-in-out both;
              }
              &.third {
                z-index: 98;
                margin-top: -270px;
                transform: scale(.5);
                animation: slide-top .5s 1s ease-in-out both;
              }
            }
          }
        }
      }
    }
  }
}
@keyframes slide-top {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>