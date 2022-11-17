function serchUserImg () {
    fetch(url,{headers: {
    'x-api-key': api_key
    }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        data = data.filter(img=> img.image?.url!=null); //filter to only include those with an `image` object
        storedBreeds = data;
        for (let i = 0; i < storedBreeds.length; i++) {
            const breed = storedBreeds[i];
            let userImg = document.createElement('img');
            if (breed.id === users[0].name) { //skip any breeds that don't have an image
                userImg.setAttribute("src", breed.image.url);
                userImg.setAttribute("class", "userImg");
                player1.insertAdjacentElement("afterbegin", userImg)
                break
            }
        }
    }).catch(function(error) {
    console.log(error);
    });
}



//easter egg si se ingresa como nombre de usuario el id de una de las razas de gatos, esta hace que se cargue una como img de usuario