---
layout: page
permalink: /cafe_spots/cafe_article
---

<div>
  <div class="container">
    <article class="blog-post" id="article-container">
      <h2 class="display-5 link-body-emphasis mb-1" id="cafe_name"></h2>
        <p class="blog-post-meta">
          <span id="date_created"> </span> 
          <span id="created_by">  </span>
          <div class="business-info">
            <div class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <span id="location"></span>
            </div>
            <div class="info-item">
                <i class="far fa-clock"></i>
                <span id="time" ></span>
            </div>
            <div class="info-item">
                <i class="fab fa-facebook"></i>
                <a href="" id="facebook_link" target="_blank"></a>
            </div>
            <div class="info-item">
                <i class="fab  fa-instagram"></i>
                <a href="" id="instagram_link" target="_blank"></a>
            </div>
          </div>
        </p>
        <div class="row"> 
          <div class="col-md-9"> 
            <blockquote class="blockquote" id="paragraph">
            </blockquote>
          </div>     
          <div class="col-md-3">
            <div class="slideshow-container">
                <div class="slides">
                </div>
            </div>
          </div>
        </div>
      </article>
  </div>
</div>
<script>
      const params = new URLSearchParams(window.location.search);
      const cafeId = parseInt(params.get("id"), 10); // e.g., ?id=1
      fetch('{{ site.baseurl }}/assets/data/cafe_article.json')
        .then(res => res.json())
        .then(data => {
          const article = data.find(a => a.cafe_id === cafeId);
          if (!article) {
            document.getElementById("article-container").innerHTML = "<p>Article not found.</p>";
            return;
          }
          // Set content by ID
          document.getElementById("cafe_name").textContent = article.cafe_name;
          document.getElementById("date_created").textContent = article.date_created;
          document.getElementById("created_by").textContent = `by ${article.created_by}`;
          document.getElementById("location").textContent = article.location;
          document.getElementById("time").textContent = article.time;
          const facebookLink = document.getElementById("facebook_link");
          if (article.facebook) {
            facebookLink.href = article.facebook;
            facebookLink.textContent = "Facebook";
          } else {
            facebookLink.parentElement.style.display = "none";
          }
          const instagramLink = document.getElementById("instagram_link");
          if (article.instagram) {
            instagramLink.href = article.instagram;
            instagramLink.textContent = "Instagram";
          } else {
            instagramLink.parentElement.style.display = "none";
          }
          // Fill paragraphs
          const paragraphContainer = document.getElementById("paragraph");
          if (Array.isArray(article.paragraphs)) {
            paragraphContainer.innerHTML = article.paragraphs.map(p => `<p>${p}</p>`).join("");
          }
          // Populate slideshow
          const slidesContainer = document.querySelector(".slides");
          if (Array.isArray(article.images)) {
            slidesContainer.innerHTML = article.images.map(img => `<img src="{{ site.baseurl}}/${img}" alt="Cafe image" style="width:100%">`).join("");
          }
          switch (article.country) {
              case "Philippines":
                  document.getElementById("PhilippinesHeader").style.fontWeight = "bold";
                  break;
              case "Thailand":
                  document.getElementById("ThailandHeader").style.fontWeight = "bold";
                  break;
              case "Vietnam":
                  document.getElementById("VietnamHeader").style.fontWeight = "bold";
                  break;
              default:
                  // No matching country in URL
          }
          // Start slideshow
          let index = 0;
          function nextSlide() {
            index++;
            if (index >= slidesContainer.children.length) {
              index = 0;
            }
            slidesContainer.style.transform = `translateX(-${index * 100}%)`;
          }
          setInterval(nextSlide, 3000);
        })
        .catch(err => {
          console.error(err);
          document.getElementById("article-container").innerHTML = "<p>Error loading data.</p>";
        });
</script>



