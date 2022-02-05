<template>
<div id="home">
  <div class="window">
    <MacOSWindow>
      <div class="content">
        <div class="welcome-text">
          <span class="static">Welcome to</span>
          <span class="typing">bedirhan.design</span>
        </div>
        <div class="apps">
          <div class="title">Apps in your service</div>
          <ul class="app-list">
            <li class="app-list-item">
              <div class="card">
                <div class="card-header">
                  <div class="icon">
                    <img src="../assets/poster-maker-blue-gradient.png" alt="Poster Maker">
                  </div>
                  <div class="title">Poster Maker</div>
                </div>
                <div class="card-mid">
                  Create simple, basic, well aligned, beautiful posters in one click.
                </div>
                <div class="card-footer">
                  <RouterLink to="/poster-maker">Open</RouterLink>
                </div>
              </div>
            </li>
            <li class="app-list-item">
              <div class="card">
                <div class="card-header">
                  <div class="icon">
                    <img src="../assets/poster-maker-grey.png" alt="Poster Maker">
                  </div>
                  <div class="title">Image Cropper</div>
                </div>
                <div class="card-mid">
                  Simple image cropper on your browser. Crop your image right now.
                </div>
                <div class="card-footer">
                  <RouterLink to="/image-cropper" class="disabled">Soon</RouterLink>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </MacOSWindow>
  </div>
</div>
</template>

<script>
import MacOSWindow from "../components/shared/MacOSWindow";

export default {
  components: { MacOSWindow }
}
</script>

<style lang="scss" scoped>
#home {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  color: #ffffff;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: "JetBrains Mono", monospace;

  .window {
    z-index: 2;
    width: 680px;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
      padding: 20px;

      .welcome-text {
        width: 100%;
        display: flex;
        font-size: 20px;
        flex-direction: column;
        align-items: flex-start;

        .static, .typing {
          display: block;
        }

        .static {
          margin-bottom: 2px;
        }

        .typing {
          font-size: 30px;
          width: max-content;
          position: relative;
          color: rgb(255 208 99);

          &::before,
          &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
          &::before {
            background: rgb(39, 49, 56);
            animation: typewriter 2s steps(15) 2s forwards;
          }
          &::after {
            width: 0.125em;
            background: white;
            animation: typewriter 2s steps(15) 2s forwards,
            blink 1s ease 0s 6 forwards;
          }
        }
      }

      .apps {
        margin-top: 40px;

        .title {
          color: #cccccc;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .app-list {
          gap: 20px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;

          .app-list-item {

            .card {
              width: 290px;
              overflow: hidden;
              border-radius: 7px;
              backdrop-filter: blur(5px);
              font-family: Roboto, monospace;
              background: rgba(255, 255, 255, 0.1);
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
              border: 1px solid rgba(255, 255, 255, 0.2);

              animation: slide-top 1s ease-in-out both;

              .card-header {
                padding: 10px;
                display: flex;
                align-items: center;

                .icon {
                  margin-right: 10px;
                  img {
                    width: 40px;
                    height: 40px;
                  }
                }
                .title {
                  color: #ffffff;
                  font-size: 18px;
                  font-weight: 400;
                }
              }
              .card-mid {
                font-size: 14px;
                font-weight: 300;
                line-height: 20px;
                padding: 0 14px 24px 14px;
              }
              .card-footer {
                padding: 10px;
                text-align: right;
                border-top: 1px solid rgba(255, 255, 255, 0.2);

                a {
                  color: white;
                  font-size: 14px;
                  padding: 8px 32px;
                  width: max-content;
                  border-radius: 20px;
                  display: inline-block;
                  background-color: #3A6DF0;
                  transition: background-color 200ms ease;

                  &.disabled {
                    cursor: not-allowed;
                    pointer-events: none;
                    background-color: #303030;
                  }
                  &:hover {
                    background-color: #1ba5ec;
                  }
                }
              }
            }
          }
        }
      }
    }

  }
  &::before {
    content: '';
    inset: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-repeat: repeat;
    background-size: 600% 600%;
    animation: bg-slide 16s ease-in-out infinite alternate both;
    background-image: linear-gradient(315deg, #cc6aa5, #3e91cc, #2dcca7);
  }
}
@keyframes bg-slide {
  0% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
@keyframes typewriter {
  to {
    left: 100%;
  }
}
@keyframes blink {
  to {
    background: transparent;
  }
}
@keyframes slide-top {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@media only screen and (max-width: 720px) {
  #home {
    padding: 20px;

    .window {
      width: 100%;

      .content {
        .apps {
          .app-list {
            flex-direction: column;

            .app-list-item {
              width: 100%;

              .card {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 500px) {
  #home {
    .window {
      .content {
        .welcome-text {
          .static {
            font-size: 18px;
          }
          .typing {
            font-size: 24px;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 410px) {
  #home {
    .window {
      .content {
        .welcome-text {
          .static {
            font-size: 16px;
          }
          .typing {
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>