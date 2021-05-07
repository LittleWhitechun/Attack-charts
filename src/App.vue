<template>
  <div id="app">
    <div id="selected-country-name"></div>
    <!-- 控制展开或球体 -->
    <div id="map_controls">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="0"
        height="0"
        style="position: absolute"
      >
        <symbol id="map-plane" viewBox="-40 190 700 700">
          <path
            d="M0,260.1v548.3h593.4V260.1H0z M567.5,389.7H448.8V286h118.7V389.7z M307.9,389.7V286h115.1v103.7H307.9z
                        M422.9,415.5v110H307.9v-110H422.9z M282,389.7H166.9V286H282L282,389.7L282,389.7z M282,415.5v110H166.9v-110H282z M140.9,525.5
                        H25.9v-110h115.1L140.9,525.5L140.9,525.5z M140.9,551.5v110H25.9v-110H140.9z M166.9,551.5H282v110H166.9V551.5z M282,687.4v95
                        H166.9v-95H282z M307.9,687.4h115.1v95H307.9V687.4z M307.9,661.5v-110h115.1v110H307.9z M448.8,551.5h118.7v110H448.8L448.8,551.5
                        L448.8,551.5z M448.8,525.5v-110h118.7v110H448.8z M140.9,286v103.7H25.9V286H140.9z M25.9,687.4h115.1v95H25.9V687.4z M448.8,782.5
                        v-95h118.7v95H448.8z"
          />
        </symbol>

        <symbol id="map-globe" viewBox="-40 160 700 700">
          <path
            d="M297.4,213.6c-163.5,0-296.6,133-296.6,296.5s133.1,296.6,296.6,296.6s296.5-133,296.5-296.5
                            S461,213.6,297.4,213.6z M27.2,523.1h87.5c1.5,53.1,11.5,102.7,28,145H77.9C48.2,626.9,29.8,577,27.2,523.1z M284.4,311h-93.1
                            c25-39.6,57.4-65.4,93.1-70.5V311z M284.4,336.9v160.2H140.7c1.7-60.8,15-116.3,36.3-160.2H284.4L284.4,336.9z M310.4,336.9h107.5
                            c21.2,43.9,34.6,99.4,36.3,160.2H310.4V336.9z M310.4,311v-70.4c35.8,5.1,68.2,30.9,93.1,70.5L310.4,311L310.4,311z M392.4,256.8
                            c32.8,12.4,62.6,30.9,88,54.2h-47.6C421.1,290,407.5,271.7,392.4,256.8z M162,311h-47.6c25.4-23.3,55.2-41.8,88-54.2
                            C187.4,271.7,173.8,290,162,311z M149,336.9c-20.2,45.4-32.8,100.6-34.3,160.2H27.2c2.9-60.8,25.9-116.3,62.5-160.2H149L149,336.9z
                            M140.7,523.1h143.8v145H170.1C152.9,626.9,142.2,577,140.7,523.1z M284.4,694.1v85.6c-40.2-5.7-76.1-37.5-101.9-85.6H284.4z
                            M310.4,779.7v-85.6h101.9C386.4,742.2,350.6,774,310.4,779.7z M310.4,668.1v-145h143.8c-1.5,54-12.2,103.8-29.5,145H310.4z
                            M480.1,523.1h87.5c-2.5,54-21,103.8-50.8,145h-64.8C468.6,625.7,478.7,576.2,480.1,523.1z M480.1,497.1
                            c-1.6-59.6-14.1-114.7-34.3-160.2h59.3c36.6,43.9,59.6,99.4,62.5,160.2H480.1z M99.3,694.1h54.9c13.4,27.4,29.9,51,48.3,69.4
                            C162.8,748.5,127.6,724.5,99.3,694.1z M392.4,763.5c18.6-18.4,34.9-41.9,48.3-69.4h54.9C467.3,724.5,432.1,748.5,392.4,763.5z"
          />
        </symbol>
      </svg>
      <ul id="map_controls_buttons">
        <li id="map_control_type_globe">
          <svg class="map_control_button">
            <use xlink:href="#map-globe"></use>
          </svg>
          <div class="map_control_button_label">Switch to Plane view</div>
        </li>
        <li id="map_control_type_plane">
          <svg class="map_control_button">
            <use xlink:href="#map-plane"></use>
          </svg>
          <div class="map_control_button_label">Switch to Globe view</div>
        </li>
        <li id="test_plane">
          <!-- <svg class="map_control_button">
                        <use xlink:href="#map-plane"></use>
                    </svg> -->
        </li>
      </ul>
    </div>

    <!--  -->
    <!-- <div id="countrypop" class="countrypop hidden">
            <div class="popclose">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 595.3 841.9"
                    enable-background="new 0 0 595.3 841.9" xml:space="preserve">
                    <path d="M595.3,652.5L363.8,420.9l231.5-231.5l-66.1-66.1L297.6,354.8L66.1,123.3L0,189.4l231.5,231.5L0,652.5
	l66.1,66.1l231.5-231.5l231.5,231.5" />
                </svg>
            </div>
            <h3 id="countrypop_title"></h3>
            <h4 id="countrypop_subtitle">
                #&nbsp;<span id="countrypop_ranking"></span>&nbsp;MOST-ATTACKED COUNTRY
            </h4>
            <ul class="countrypop_subsystems">
                <li data-detectiontype="1" class="countrypop_subsystem" title="On-Access Scan">
                    <h3 class="countrypop_subsystem_name" style="color: #38b349">OAS</h3>
                    <h4 class="countrypop_subsystem_stats"></h4>
                </li>
                <li data-detectiontype="2" class="countrypop_subsystem" title="On-Demand Scan">
                    <h3 class="countrypop_subsystem_name" style="color: #ed1c24">ODS</h3>
                    <h4 class="countrypop_subsystem_stats"></h4>
                </li>
                <li data-detectiontype="3" class="countrypop_subsystem" title="Mail Anti Virus">
                    <h3 class="countrypop_subsystem_name" style="color: #f26522">MAV</h3>
                    <h4 class="countrypop_subsystem_stats"></h4>
                </li>
                <li data-detectiontype="4" class="countrypop_subsystem" title="Web Anti-Virus">
                    <h3 class="countrypop_subsystem_name" style="color: #0087f4">WAV</h3>
                    <h4 class="countrypop_subsystem_stats"></h4>
                </li>
                <li data-detectiontype="5" class="countrypop_subsystem" title="Intrusion Detection Scan">
                    <h3 class="countrypop_subsystem_name" style="color: #ec008c">IDS</h3>
                    <h4 class="countrypop_subsystem_stats"></h4>
                </li>
                <li data-detectiontype="6" class="countrypop_subsystem" title="Vulnerability Scan">
                    <h3 class="countrypop_subsystem_name" style="color: #fbf267">VUL</h3>
                    <h4 class="countrypop_subsystem_stats"></h4>
                </li>
                <li data-detectiontype="7" class="countrypop_subsystem" title="Kaspersky Anti-Spam">
                    <h3 class="countrypop_subsystem_name" style="color: #855ff4">KAS</h3>
                    <h4 class="countrypop_subsystem_stats"></h4>
                </li>
                <li data-detectiontype="8" class="countrypop_subsystem" title="Botnet Activity Detection">
                    <h3 class="countrypop_subsystem_name" style="color: #00d1a9">BAD</h3>
                    <h4 class="countrypop_subsystem_stats"></h4>
                </li>
            </ul>
            <div id="countrypop_disclaimer">
                Detections discovered since 00:00 GMT
            </div>

            <div id="countrypop_more_detail">
                <a id="more_detail" data-base-url="/stats">More details</a>
            </div>


            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0"
                style="position:absolute">

                <symbol id="countrypop_sharing_vk" viewBox="0 251.1 595.3 338.2">
                    <path d="M291.3,589.3h35.6c0,0,10.8-1.2,16.1-7.1c5.1-5.4,4.8-15.7,4.8-15.7s-0.7-47.8,21.5-54.8
	c21.8-6.9,49.9,46.1,79.6,66.5c22.5,15.5,39.6,12.1,39.6,12.1l79.6-1.2c0,0,41.6-2.5,21.9-35.2c-1.7-2.6-11.5-24.2-59.1-68.4
	c-49.8-46.3-43.1-38.8,16.9-118.8c36.7-48.7,51.4-78.5,46.7-91.2c-4.3-12.2-31.2-8.9-31.2-8.9l-89.5,0.6c0,0-6.6-0.9-11.6,2
	c-4.8,2.9-7.9,9.6-7.9,9.6s-14.1,37.7-33.1,69.7c-39.9,67.6-55.8,71.3-62.3,67.1c-15.2-9.8-11.4-39.3-11.4-60.4
	c0-65.6,9.9-93-19.4-100c-9.7-2.3-16.8-3.9-41.7-4.2c-32-0.4-59,0.1-74.3,7.6c-10.2,5-18,16.1-13.2,16.7c5.9,0.8,19.4,3.6,26.4,13.3
	c9.2,12.5,8.9,40.5,8.9,40.5s5.3,77.2-12.4,86.9c-12.1,6.6-28.6-6.8-64.1-68.3c-18.2-31.4-32-66.2-32-66.2s-2.6-6.5-7.4-9.9
	c-5.7-4.3-13.8-5.5-13.8-5.5l-84.9,0.5c0,0-12.7,0.4-17.5,5.9c-4.2,5-0.3,15.1-0.3,15.1s66.6,155.8,142,234.3
	C212.8,594.1,291.3,589.3,291.3,589.3" />
                </symbol>

                <symbol id="countrypop_sharing_fb" viewBox="98 35.8 400.5 770.5">
                    <path d="M357.4,806.3l0.3-351.6l118,0.1l17.8-137.1l-135.7-0.1l0.1-87.4c0-39.8,10.9-66.6,68.1-66.6l72.4,0.1
	l0.1-122.5c-12.5-1.7-55.6-5.4-105.7-5.4C288,35.6,216.5,99.4,216.5,216.4l-0.1,101l-118.3-0.1L98,454.4l118.4,0.1L215.9,806
	l141.5,0.1V806.3z" />
                </symbol>

                <symbol id="countrypop_sharing_tw" viewBox="0 357.8 595.3 484.1">
                    <path d="M595.5,415c-22,9.8-45.5,16.3-70.1,19.2c25.3-15,44.6-39,53.8-67.5c-23.7,13.9-49.9,24.2-77.7,29.7
	c-22.3-23.8-54-38.6-89.1-38.6c-67.4,0-122.2,54.7-122.2,122.2c0,9.6,1.2,19,3.3,27.9c-101.8-5.3-191.8-53.9-252-127.7
	c-10.4,18.1-16.5,39-16.5,61.4c0,42.5,21.6,79.7,54.5,101.7c-19.9-0.7-38.7-6.1-55.2-15.3v1.6c0,59.2,42,108.5,97.9,119.7
	c-10.2,2.8-21.1,4.4-32.2,4.4c-7.9,0-15.5-0.9-23.1-2.1c15.5,48.5,60.8,83.8,114.1,84.9c-41.8,32.7-94.4,52.2-151.8,52.2
	c-9.7,0-19.6-0.7-29.2-1.8c54,34.6,118.2,55,187.2,55c224.7,0,347.4-186.2,347.4-347.4c0-5.3-0.2-10.7-0.4-16
	C558.5,460.8,579.1,439.3,595.5,415L595.5,415z" />
                </symbol>

                <symbol id="countrypop_sharing_gplus" viewBox="0 245 595.3 596.9">
                    <path d="M595.2,511.3h-78.9v-78.8H476v78.8h-78.9v38.6H476v78.9h40.3v-78.9h78.9V511.3z M313.2,585.5l-28.8-21.9
	c-8.8-7-20.7-16.4-20.7-33.8c0-17.3,11.9-28.2,22.3-38.6c33.5-25.9,66.9-53.4,66.9-111.3c0-59.7-36.2-88.5-54.7-103.4h47.2L397,245
	H230.9c-43.1,0-101.2,4.4-146.5,41.4C50.2,315.3,39,358.1,39,394.2c0,61.2,47.9,123.2,132.4,123.2c8.1,0,16.6-0.8,25.4-1.7
	c-4,9.3-8,17.2-8,30.6c0,24.3,12.8,39.3,23.8,53.3C177,602,110.1,606,60.7,635.8c-47.1,27.7-61.4,67.6-61.4,95.8
	c0,58.2,53.4,112.8,169,112.8c137,0,211.7-75.1,211.7-148.9C380.1,641.2,348.2,614.6,313.2,585.5L313.2,585.5z M208.9,497.4
	c-68.6,0-99.5-87.1-99.5-139.7c0-20.4,4.1-43.6,17.5-60.1c12.8-15.8,35-23.9,55.7-23.9c66-0.1,100.4,87.8,100.4,144.2
	c0,14.2-1.5,37.2-19.9,55.3C250.4,486,228.8,497.2,208.9,497.4L208.9,497.4z M209.4,810.9c-85.2,0-140.3-40-140.3-95.9
	c0-55.7,51-74.5,68.6-80.8c33.5-11.1,76.5-12.6,83.6-12.6c8,0,12,0,18.3,0.9c60.7,42.4,86.9,63.4,86.9,103.6
	C326.6,774.7,286,810.9,209.4,810.9L209.4,810.9z" />
                </symbol>

            </svg>
            <div id="countrypop_social">
                <div>Share data</div>
                <ul id="countrypop_sharing_icons">


                    <li class="facebook">
                        <a href="" target="_blank" id="countrypop_sharing_icons_facebook">
                            <svg class="countrypop_sharing_button">
                                <use xlink:href="#countrypop_sharing_fb"></use>
                            </svg>
                        </a>
                    </li>

                    <li class="twitter">
                        <a href="" target="_blank" id="countrypop_sharing_icons_twitter">
                            <svg class="countrypop_sharing_button">
                                <use xlink:href="#countrypop_sharing_tw"></use>
                            </svg>
                        </a>
                    </li>

                </ul>
            </div>
        </div> -->
    <div id="marker_mis" class="marker hidden">
      <h3 id="marker_mis_title"></h3>
      <h4 id="marker_mis_subtitle">
        #&nbsp;<span id="marker_mis_ranking"></span>&nbsp;MOST-ATTACKED COUNTRY
      </h4>
    </div>
    <div id="eventpop" class="eventpop hidden">
      <div class="popclose">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 595.3 841.9"
          enable-background="new 0 0 595.3 841.9"
          xml:space="preserve"
        >
          <path
            d="M595.3,652.5L363.8,420.9l231.5-231.5l-66.1-66.1L297.6,354.8L66.1,123.3L0,189.4l231.5,231.5L0,652.5
	l66.1,66.1l231.5-231.5l231.5,231.5"
          />
        </svg>
      </div>
      <h3 id="eventpop_title"></h3>
      <h4 id="eventpop_subtitle">
        #&nbsp;<span id="eventpop_ranking"></span>&nbsp;MOST-ATTACKED COUNTRY
      </h4>
      <ul class="eventpop_subsystems">
        <li
          data-detectiontype="1"
          class="eventpop_subsystem"
          title="On-Access Scan"
        >
          <h3 class="eventpop_subsystem_name" style="color: #38b349">OAS</h3>
          <h4 class="eventpop_subsystem_stats"></h4>
        </li>
        <li
          data-detectiontype="2"
          class="eventpop_subsystem"
          title="On-Demand Scan"
        >
          <h3 class="eventpop_subsystem_name" style="color: #ed1c24">ODS</h3>
          <h4 class="eventpop_subsystem_stats"></h4>
        </li>
        <li
          data-detectiontype="3"
          class="eventpop_subsystem"
          title="Mail Anti Virus"
        >
          <h3 class="eventpop_subsystem_name" style="color: #f26522">MAV</h3>
          <h4 class="eventpop_subsystem_stats"></h4>
        </li>
        <li
          data-detectiontype="4"
          class="eventpop_subsystem"
          title="Web Anti-Virus"
        >
          <h3 class="eventpop_subsystem_name" style="color: #0087f4">WAV</h3>
          <h4 class="eventpop_subsystem_stats"></h4>
        </li>
        <li
          data-detectiontype="5"
          class="eventpop_subsystem"
          title="Intrusion Detection Scan"
        >
          <h3 class="eventpop_subsystem_name" style="color: #ec008c">IDS</h3>
          <h4 class="eventpop_subsystem_stats"></h4>
        </li>
        <li
          data-detectiontype="6"
          class="eventpop_subsystem"
          title="Vulnerability Scan"
        >
          <h3 class="eventpop_subsystem_name" style="color: #fbf267">VUL</h3>
          <h4 class="eventpop_subsystem_stats"></h4>
        </li>
        <li
          data-detectiontype="7"
          class="eventpop_subsystem"
          title="Kaspersky Anti-Spam"
        >
          <h3 class="eventpop_subsystem_name" style="color: #855ff4">KAS</h3>
          <h4 class="eventpop_subsystem_stats"></h4>
        </li>
        <li
          data-detectiontype="8"
          class="eventpop_subsystem"
          title="Botnet Activity Detection"
        >
          <h3 class="eventpop_subsystem_name" style="color: #00d1a9">BAD</h3>
          <h4 class="eventpop_subsystem_stats"></h4>
        </li>
      </ul>
      <div id="eventpop_disclaimer">Detections discovered since 00:00 GMT</div>

      <div id="eventpop_more_detail">
        <a id="more_detail" data-base-url="/stats">More details</a>
      </div>

      <div id="eventpop_social">
        <div>Share data</div>
        <ul id="eventpop_sharing_icons">
          <li class="facebook">
            <a href="" target="_blank" id="eventpop_sharing_icons_facebook">
              <svg class="eventpop_sharing_button">
                <use xlink:href="#eventpop_sharing_fb"></use>
              </svg>
            </a>
          </li>

          <li class="twitter">
            <a href="" target="_blank" id="eventpop_sharing_icons_twitter">
              <svg class="eventpop_sharing_button">
                <use xlink:href="#eventpop_sharing_tw"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="webgl">
      <canvas id="mask-canvas"></canvas>
      <canvas id="hide-mask-canvas"></canvas>
      <canvas id="hide-mask-1-canvas"></canvas>

      <canvas id="webgl-canvas" width="280" height="300"></canvas>
      <div id="china-canvas"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  created() {
    this.init();
  },
  methods: {
    init() {},
  },
};
</script>
<style>
#App {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
