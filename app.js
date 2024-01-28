const sliderbox = document.getElementById('sliderbox')
const icon = document.getElementById('icon')
const slider = document.getElementById('myRange')

slider.addEventListener('change', (e) => {
  const sliderValue = e.target.value
  if (sliderValue > 80) {
    slider.style.display = 'none'
    icon.style.display = 'grid'
    sliderbox.classList.add('check', "bg-green-500/50")
    sliderbox.style.width = '100px'
  }
  else {
    slider.value = 0
  }
})