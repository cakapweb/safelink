document.body.append(CreateCSS);
var dataHasil = 0;
if (document.getElementById('safelink-start')) {
    document.getElementById('safelink-start').innerHTML = `
<br />
<div class="card">
  <h3> Anda Akan Diahlikan! </h3>
  <span style="font-size: medium;">Terima Kasih Telah Berkunjung</span>
  <div class="time" style="font-size: small;">
    <script type="text/javascript">
      var mydate = new Date()
      var year = mydate.getYear()
      if (year < 1000) year += 1900
      var day = mydate.getDay()
      var month = mydate.getMonth()
      var daym = mydate.getDate()
      if (daym < 10) daym = "0" + daym
      var dayarray = new Array("Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu")
      var montharray = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12")
      document.write("" + dayarray[day] + " " + daym + "/" + montharray[month] + "/" + year + "")
    </script>
  </div>
  <div class="goodbye">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
      <title>404</title>
      <g id="Layer_12 yellow-back-fig" data-name="Layer 12">
        <path class="cls-1" d="M600.87,872H156a4,4,0,0,0-3.78,4.19h0a4,4,0,0,0,3.78,4.19H600.87a4,4,0,0,0,3.78-4.19h0A4,4,0,0,0,600.87,872Z" />
        <rect class="cls-1" x="680.91" y="871.98" width="513.38" height="8.39" rx="4.19" ry="4.19" />
        <path class="cls-1" d="M1480,876.17h0c0,2.32,2.37,4.19,5.3,4.19h350.61c2.93,0,5.3-1.88,5.3-4.19h0c0-2.32-2.37-4.19-5.3-4.19H1485.26C1482.33,872,1480,873.86,1480,876.17Z" />
        <rect class="cls-1" x="492.21" y="920.64" width="249.8" height="8.39" rx="4.19" ry="4.19" />
        <path class="cls-1" d="M1549.14,924.84h0a4.19,4.19,0,0,0-4.19-4.19H1067.46a14.66,14.66,0,0,1,.35,3.21v1A4.19,4.19,0,0,0,1072,929h472.94A4.19,4.19,0,0,0,1549.14,924.84Z" />
        <path class="cls-1" d="M865.5,924.84h0a4.19,4.19,0,0,0,4.19,4.19h82.37a12.28,12.28,0,0,1-.19-2v-2.17a4.19,4.19,0,0,0-4.19-4.19h-78A4.19,4.19,0,0,0,865.5,924.84Z" />
        <rect class="cls-1" x="915.6" y="981.47" width="54.72" height="8.39" rx="4.19" ry="4.19" />
        <path class="cls-1" d="M730.33,985.67h0c0,2.32,4.23,4.19,9.44,4.19h104.3c5.22,0,9.44-1.88,9.44-4.19h0c0-2.32-4.23-4.19-9.44-4.19H739.78C734.56,981.47,730.33,983.35,730.33,985.67Z" />
        <rect class="cls-1" x="997.06" y="981.47" width="78.11" height="8.39" rx="4.19" ry="4.19" />
        <g id="round-conf">
          <path class="cls-1 circle c1" d="M536.41,155.14a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,536.41,155.14Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,536.41,183.81Z" />
          <path class="cls-1 circle c2" d="M1345.09,82.44a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1345.09,82.44Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1345.09,111.12Z" />
          <path class="cls-1 circle c3" d="M70.12,363A17.77,17.77,0,1,0,87.89,380.8,17.77,17.77,0,0,0,70.12,363Zm0,28.68A10.9,10.9,0,1,1,81,380.8,10.9,10.9,0,0,1,70.12,391.7Z" />
          <path class="cls-1 circle c4" d="M170.47,751.82a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,170.47,751.82Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,170.47,780.5Z" />
          <path class="cls-1 circle c5" d="M1457.34,762.73a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1457.34,762.73Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1457.34,791.4Z" />
          <path class="cls-1 circle c6" d="M1829.15,407.49a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1829.15,407.49Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1829.15,436.17Z" />
        </g>
      </g>
      <g id="bike" data-name="Layer 5">
        <path class="cls-8 wheel" d="M1139.82,780.44a76.59,76.59,0,1,0-57.9,91.53A76.59,76.59,0,0,0,1139.82,780.44Zm-28.12,6.33a47.59,47.59,0,0,1,.83,15.8c-30.14-6.28-47.68-21.65-54.39-52.52A47.73,47.73,0,0,1,1111.69,786.77Zm-70.46-30.9c10.35,26.88,10.14,50.4-13.73,70.77a47.67,47.67,0,0,1,13.73-70.77Zm34.35,88a47.55,47.55,0,0,1-34.94-5.62c16.8-20.36,41.71-25.94,67.09-19.46A47.66,47.66,0,0,1,1075.58,843.85Z" />
        <path class="cls-8 wheel" d="M864.89,789.69a76.59,76.59,0,1,0-66.13,85.78A76.59,76.59,0,0,0,864.89,789.69Zm-28.59,3.7a47.59,47.59,0,0,1-.64,15.81c-29.43-9-45.47-26-49.3-57.33A47.73,47.73,0,0,1,836.3,793.39ZM769,756.1c7.82,27.72,5.43,51.12-20.22,69.2A47.67,47.67,0,0,1,769,756.1Zm26.06,90.78a47.55,47.55,0,0,1-34.27-8.83c18.61-18.72,43.93-22,68.6-13.16A47.66,47.66,0,0,1,795.06,846.88Z" />
        <g>
          <rect class="cls-1" x="871.39" y="693.37" width="12.87" height="53.21" transform="translate(-165.97 273.38) rotate(-16.19)" />
          <path class="cls-5" d="M813.93,679.35c-3.72-5.2,2.24-18.5,9.16-16.13,33.43,11.46,73.85,10.45,73.85,10.45,8.84.15,14.44,10.34,7.27,15.48-14.36,8.79-33.13,17-56.35,9.76C830.17,693.41,819.83,687.6,813.93,679.35Z" />
          <path class="cls-7" d="M813.93,679.35c-3.72-5.2,2.24-18.5,9.16-16.13,33.43,11.46,73.85,10.45,73.85,10.45,8.84.15,14.44,10.34,7.27,15.48-14.36,8.79-33.13,17-56.35,9.76C830.17,693.41,819.83,687.6,813.93,679.35Z" />
          <path class="cls-5" d="M817.15,680.06c-3.59-5,1.69-16.51,8.37-14.22,32.3,11.09,71.41,7.83,71.41,7.83,8.54.14,17.45,9.94,7.43,15.88-13.87,8.51-32,16.44-54.44,9.44C832.84,693.67,822.85,688,817.15,680.06Z" />
        </g>
        <g>
          <circle class="cls-9" cx="1022.66" cy="599.55" r="11.57" transform="translate(-4.86 8.38) rotate(-0.47)" />
          <path class="cls-1" d="M1069.76,792.37l-34.89-96.74,1.93-.8-1.71-4.15-1.74.72-13.26-36.76,1.27-.42-2.25-6.76,5.94-2-2.57-7.72-9.7,3.22c-11.55-22.55,2-36.33,15-41.86l-5.57-8.81c-23,10.29-29.61,28.75-19.53,54l-9.38,3.12,2.56,7.72,5.47-1.82,2.25,6.76,2.36-.78,13.62,37.76-2.35,1,1.71,4.15,2.16-.89,34.65,96.09a7.47,7.47,0,0,0,9.56,4.49h0A7.47,7.47,0,0,0,1069.76,792.37Z" />
          <circle class="cls-11" cx="1027.9" cy="587.94" r="12.99" transform="translate(-4.77 8.42) rotate(-0.47)" />
        </g>
        <path class="cls-5" d="M1021.29,654l-17.73,6.15,1.72,5.59-31.41,82.36c-19.35,32.53-66.3,36.72-75.56,16.68l-7.09-21.5L879,747.1l3.28,10.09-94.65,33.95c-11.49,2.29-11.85,15.79-2.61,17.84,0,0,39.11,3.66,103,9.5a92.75,92.75,0,0,0,40.89-5.29c44.32-16.56,57.73-50.67,57.73-50.67l26.82-67.26a1.37,1.37,0,0,1,2.53,0l1.42,3.33,17.75-7.62Z" />
        <path class="cls-7" d="M1021.29,654l-17.73,6.15,1.72,5.59-31.41,82.36c-19.35,32.53-66.3,36.72-75.56,16.68l-7.09-21.5L879,747.1l3.28,10.09-94.65,33.95c-11.49,2.29-11.85,15.79-2.61,17.84,0,0,39.11,3.66,103,9.5a92.75,92.75,0,0,0,40.89-5.29c44.32-16.56,57.73-50.67,57.73-50.67l26.82-67.26a1.37,1.37,0,0,1,2.53,0l1.42,3.33,17.75-7.62Z" />
      </g>
    </svg>
  </div>
  <div class="safelink" dir="ltr" trbidi="on">
    <div id="daplong">
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <br />
    <script>
      var currentURL = location.href;
      var str = currentURL;
      var res = str.replace("document.write(+ url +);?url=", "");
      document.write(' < div id = "download"
          href = "#golink"
          class = "visit-link button1"
          onclick = "changeLink();"
          style = "display:none;" >document.write(+ teksgo +)< /div>')
    </script>
  </div>
</div>
`;
