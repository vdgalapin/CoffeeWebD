---
layout: page
# title: home
permalink: /cafe_spots/home/
---

<div class="container">     
    <div class="row mb-2" id="CafeList"> 
    </div>
</div>
<script>
fetch('{{ site.baseurl }}/assets/data/cafes.json')
.then(response => response.json())
.then(data => {
  const urlParams = new URLSearchParams(window.location.search);
  // Country Filter
  const countryFilter = urlParams.get('country');
  // Date Filter
  const dateFilter = urlParams.get('sort_date');
  const container = document.getElementById('CafeList');
  const filteredCafes = countryFilter ? data.filter(cafe => cafe.country.toLowerCase() === countryFilter.toLowerCase()) : data;
  if (dateFilter == 'desc' ) {
    filteredCafes.sort((a,b) => new Date(a.date_created) - new Date(b.date_created));
  } else {
    filteredCafes.sort((a,b) => new Date(b.date_created) - new Date(a.date_created));
  }
  filteredCafes.forEach(cafe => {
    const col = document.createElement('div');
    col.className = 'col-md-6';
    col.innerHTML = `
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success-emphasis">${cafe.specified_location}</strong>
          <h3 class="mb-0">${cafe.name}</h3>
          <div class="mb-1 text-body-secondary">${cafe.date_created}</div>
          <p>${cafe.short_caption || ''}</p>
          <a href="{{ site.baseurl }}/cafe_spots/cafe_article?id=${cafe.cafe_id}" class="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading<svg class="bi"><use xlink:href="#chevron-right"/></svg>
          </a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <image href="{{ site.baseurl }}/assets/images/${cafe.image_location_path}" width="110%" height="100%" />
          </svg>
        </div>
        <div class="col-auto d-block d-sm-none">
          <svg class="bd-placeholder-img" width="120" height="170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <image href="{{ site.baseurl }}/assets/images/${cafe.image_location_path}" width="110%" height="100%" />
          </svg>
        </div>
      </div>`;
    container.appendChild(col);
  });
});
</script>
