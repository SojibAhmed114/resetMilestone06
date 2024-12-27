const loadAllPhone = async (status, searchBox) =>{
  document.getElementById('spinner').style.display = "none";
  
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchBox ? searchBox :"iphone"}`);
    const data = await res.json();
    if (status) {
      displayAllPhone(data.data)
    } else {
      displayAllPhone(data.data.slice(0,6))
    };
  
}

const displayAllPhone = (phones)=>{
  document.getElementById('phones-container').innerHTML = "";
  const phonesContainer = document.getElementById('phones-container');
  phones.forEach(phone => {
    const {brand,slug,image} = phone
    const div = document.createElement('div');
    div.innerHTML =`
    <div class="card m-2 bg-base-100 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src="${image}"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${brand}</h2>
    <p>${slug}</p>
    <div class="card-actions">
      <button onclick="phoneDetails('${slug}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
    `;
    phonesContainer.appendChild(div);
  });
}


const handleShowAll = () =>{
  loadAllPhone(true);
};




const handleSearch = () => {
  document.getElementById('spinner').style.display ='block';
 const searchBox = document.getElementById('search-box').value;
  setTimeout(() =>{
    loadAllPhone(false, searchBox);
  }, 1000)
}


const phoneDetails = async (slug)=> {
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`);
  const data = await res.json();
  const {brand,image,name} = data.data;

  const showContainer = document.getElementById('modal-container');
  showContainer.innerHTML = `
<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <img src="${image}" alt="photo">
    <h3 class="text-lg font-bold">${brand}</h3>
    <h3 class="text-xl font-bold">${name}</h3>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  `;
  my_modal_5.showModal()
};


loadAllPhone(false, 'iphone')




