// buat variabel dengan array.
// let, const, var adalah variabel global tempat penyimpanan data
let blogs = [];

// function : untuk membuat suatu fungsi/perintah untuk aplikasi
function addBlog(event) {
  event.preventDefault(); // mencegah halaaman di refresh
  // variabel title ini menyimpan data dari inputan title di form
  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image");

  image = URL.createObjectURL(image.files[0]); // untuk mengambil data gambar

  // membuat objek dengan const
  const blog = {
    title: title,
    content: content,
    image: image,
    author: "Ridho Syawali",
    postAt: new Date().toLocaleString(),
  };

  blogs.push(blog);

  console.log(blog);
  console.log(blogs);

  renderBlog();
}

//fungsi ini untuk merender content blog ke blog-list pada index.html
function renderBlog() {
  // akses element dengan id contents
  let contentContainer = document.getElementById("contents");

  contentContainer.innerHTML = ""; // untuk inject/menyisipkan elemen html

  //   dibawah ini ada proses looping setiap data di Array(blogs) dan tampilkan dalam bentuk html
  for (let i = 0; i < blogs.length; i++) {
    contentContainer.innerHTML += `
      <div id="contents" class="blog-list">
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt="image" />
          </div>
          <div class="blog-content">
            <h1>${blogs[i].title}</h1>
            <span class="detail-blog-content">
              ${blogs[i].postAt} | ${blogs[i].author}
            </span>
            <p>
              ${blogs[i].content}
            </p>
          </div>
        </div>
      </div>`;
  }
}
