console.log ('adw')

let highlightText = {
        health: 'orbitz is crafting beverages with quality ingredients, striving to maintain a balance between indulgence and health-consciousness, ensuring consumers can enjoy their favourite flavours',
        refreshment: 'whether indulging in a classic favourite or exploring a new flavour adventure, orbitz delivers a refreshing drinking experience, leaving consumers eagerly anticipating their next flavourful encounter.',
        flavour: 'orbitz boasts a diverse selection of innovative flavour combinations, carefully crafted to excite and intrigue taste buds with each sip, offering a refreshing departure from conventional soft drinks.'
    },
    featuresCard = document.querySelector('.features-card'),
    featuresBtns = document.querySelectorAll('.highlight');

function openFeature(event) {
    featuresCard.innerHTML = "";

    let featureName = event.target.dataset.info;
    let featureText = highlightText[featureName];

    let newItem = document.createElement('p');
    newItem.textContent = featureText;
    featuresCard.appendChild(newItem);
    console.log('info open')
}


featuresBtns.forEach(function(btn) {
    btn.addEventListener('click', openFeature);});