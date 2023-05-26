export const contact = () =>{
    return `
    <div id="contact" class="content4">
    <section id="fourth" class="main">
      <header>
        <div class="container">
          <h2 style="font-size: 40px;" >CONTACT</h2>
          <p>Thông tin liên hệ</p>
        </div>
      </header>
      <div class="content style4 featured">
        <div class="container small">
          <form method="post" action="#">
            <div class="row half">
              <div class="u6">
                <input type="text" class="text4" placeholder="Tên" />
              </div>
              <div class="u6">
                <input type="text" class="text4" placeholder="Email" />
              </div>
            </div>
            <div class="row half">
              <div class="12u">
                <textarea
                  name="message"
                  placeholder="Tin nhắn"
                  style="width: 47%; height: 130px"
                ></textarea>
              </div>
            </div>
            <div class="row">
              <div class="12u">
                <ul class="actions">
                  <li>
                    <input type="submit" class="button" value="Gửi" />
                  </li>
                  <li>
                    <input
                      type="reset"
                      class="button alt"
                      value="Đặt lại"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
    `
}