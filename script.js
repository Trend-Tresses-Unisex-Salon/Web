const WHATSAPP_NUMBER = '919038440194';
const INSTAGRAM_URL = 'https://www.instagram.com/trendandtressessalon/?hl=en';

const serviceMap = {
  "Men's": [
    { name: 'Haircut + wash', price: 499 },
    { name: 'Haircut + beard + wash', price: 599 },
    { name: 'Cleanshave', price: 149 },
    { name: 'Global color', price: 499 },
    { name: 'Keratin', price: 1499 },
    { name: 'Hair spa', price: 499 },
    { name: 'Hair Highlight', price: 999 },
    { name: 'Hair smoothening', price: 1499 },
    { name: 'Botox Hair', price: 1999 },
    { name: 'Beard Colour', price: 149 },
    { name: 'Shampoo with masque', price: 399 },
    { name: 'Head oil message', price: 599 },
    { name: 'Threading', price: 49 },
    { name: 'Beard Trim', price: 149 },
    { name: 'Hair styling', price: 499 },
  ],
  "Women's": [
    { name: 'Bob cut', price: 799 },
    { name: 'Layer cut', price: 799 },
    { name: 'U cut', price: 499 },
    { name: 'V cut', price: 499 },
    { name: 'Baby cut', price: 599 },
    { name: 'Front layer', price: 699 },
    { name: 'Head shape cut', price: 600 },
    { name: 'Butterfly cut', price: 799 },
    { name: 'French cut', price: 699 },
    { name: 'Boy cut', price: 599 },
    { name: 'Feather cut', price: 799 },
    { name: 'Wolf cut', price: 699 },
    { name: 'Bangs cut', price: 799 },
    { name: 'Wavy cut (curly hair)', price: 699 },
    { name: 'Ironing', price: 799 },
    { name: 'Tong', price: 799 },
    { name: 'Crimping', price: 699 },
  ],
  'Hair colour & treatments': [
    { name: 'Global hair colour', price: 1999 },
    { name: 'Balayage hair colour', price: 4999 },
    { name: 'Highlights', price: 300 },
    { name: 'Ombre hair colour', price: 3999 },
    { name: 'Root touchup', price: 999 },
    { name: 'Hair pumming', price: 3999 },
    { name: 'Botox treatment', price: 4999 },
    { name: 'Keratin treatment', price: 2999 },
    { name: 'Nanoplastia treatment', price: 7999 },
    { name: 'Plex treatment', price: 999 },
    { name: 'Hair protein treatment', price: 2999 },
    { name: 'Hair regrowth treatment', price: 1999 },
  ],
  'Hair wash & spa': [
    { name: 'Shampoo wash normal', price: 399 },
    { name: 'Loreal shampoo wash', price: 499 },
    { name: 'Botox shampoo wash', price: 799 },
    { name: 'Keratin shampoo wash', price: 599 },
    { name: 'Colour protection shampoo wash', price: 599 },
    { name: 'Almond oil head massage', price: 599 },
    { name: 'Coconut oil head massage', price: 599 },
    { name: 'Anti dandruff treatment', price: 1999 },
    { name: 'Anti hairfall treatment', price: 1999 },
    { name: 'Normal hair spa', price: 999 },
    { name: 'Botox spa', price: 1999 },
    { name: 'Keratin spa', price: 1499 },
    { name: 'Anti hairfall spa', price: 1499 },
  ],
  Skin: [
    { name: 'Acne Treatment', price: 1999 },
    { name: 'Aroma magic facial', price: 1499 },
    { name: 'Fruit facial', price: 499 },
    { name: 'Pigmentation Treatment', price: 2499 },
    { name: 'Korean Facial', price: 1999 },
    { name: 'Hydra Facial', price: 1999 },
    { name: 'Instant Glow Treatment', price: 1999 },
    { name: 'O3+ glow facial', price: 2499 },
    { name: 'Oxygeno Facial', price: 3499 },
    { name: 'Water shine Treatment', price: 4999 },
    { name: 'Anti Acne', price: 1999 },
    { name: 'Pedicure', price: 999 },
    { name: 'Manicure', price: 599 },
    { name: 'Instant Tan Remove', price: 1999 },
    { name: 'D Tan', price: 349 },
    { name: 'Korean Glass Treatment', price: 1999 },
    { name: 'Clean Up', price: 349 },
  ],
  Nail: [
    { name: 'Nail extension', price: 999 },
    { name: 'Gel polish', price: 599 },
    { name: 'Nail art', price: 999 },
    { name: 'Chrome', price: 599 },
    { name: 'Many more', price: 599 },
  ],
  'Aesthetic treatments': [
    { name: 'Microblading', price: 9999 },
    { name: 'BB Glow Treatment', price: 9999 },
    { name: 'Mole Removal', price: 499 },
    { name: 'Eye Brow tinting/Lifting', price: 999 },
    { name: 'Tatoo art', price: 999 },
    { name: 'Eyelash Extension', price: 1999 },
    { name: 'Body polishing', price: 2999 },
  ],
  Wax: [
    { name: 'Full Hand', price: 499 },
    { name: 'Half Hand', price: 299 },
    { name: 'Full Leg', price: 799 },
    { name: 'Half Leg', price: 399 },
    { name: 'Under Arm', price: 99 },
    { name: 'Back Wax', price: 499 },
    { name: 'Face Wax', price: 299 },
    { name: 'Full Body', price: 1499 },
  ],
};

const categorySelect = document.getElementById('category');
const serviceSelect = document.getElementById('service');
const summaryService = document.getElementById('summaryService');
const summaryPrice = document.getElementById('summaryPrice');
const bookingForm = document.getElementById('bookingForm');
const categoryChips = document.querySelectorAll('.category-chip');
const phoneInput = document.getElementById('phone');
const siteNav = document.getElementById('site-nav');
const navMenuToggle = document.querySelector('.nav-menu-toggle');
const offerTrigger = document.querySelector('.nav-offer-trigger');
const offerSection = document.getElementById('special-offer');
const offerClose = document.querySelector('.special-offer-close');

navMenuToggle.addEventListener('click', () => {
  const isExpanded = navMenuToggle.getAttribute('aria-expanded') === 'true';
  navMenuToggle.setAttribute('aria-expanded', String(!isExpanded));
  navMenuToggle.setAttribute('aria-label', isExpanded ? 'Open navigation menu' : 'Close navigation menu');
  siteNav.classList.toggle('is-open', !isExpanded);
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    navMenuToggle.setAttribute('aria-expanded', 'false');
    navMenuToggle.setAttribute('aria-label', 'Open navigation menu');
  });
});

offerTrigger.addEventListener('click', () => {
  offerSection.hidden = false;
  offerTrigger.setAttribute('aria-expanded', 'true');
  siteNav.classList.remove('is-open');
  navMenuToggle.setAttribute('aria-expanded', 'false');
  navMenuToggle.setAttribute('aria-label', 'Open navigation menu');
  offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

offerClose.addEventListener('click', () => {
  offerSection.hidden = true;
  offerTrigger.setAttribute('aria-expanded', 'false');
  offerTrigger.focus();
});

phoneInput.addEventListener('input', () => {
  const digits = phoneInput.value.replace(/\D/g, '');
  const nationalNumber = digits.startsWith('91') ? digits.slice(2, 12) : digits.slice(0, 10);
  phoneInput.value = `+91${nationalNumber}`;
});

function formatPrice(value) {
  return `₹${Number(value).toLocaleString('en-IN')}`;
}

function formatTimeDisplay(value) {
  const [hours, minutes] = value.split(':').map(Number);
  const suffix = hours >= 12 ? 'PM' : 'AM';
  const displayHour = hours % 12 === 0 ? 12 : hours % 12;
  return `${displayHour}:${String(minutes).padStart(2, '0')} ${suffix}`;
}

function populateTimeSlots() {
  const timeSelect = document.getElementById('time');
  const slots = [];
  const startMinutes = 10 * 60 + 30;
  const endMinutes = 20 * 60 + 30;

  for (let totalMinutes = startMinutes; totalMinutes <= endMinutes; totalMinutes += 30) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    slots.push(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);
  }

  timeSelect.innerHTML = '<option value="">Select a time slot</option>';

  slots.forEach((slot) => {
    const option = document.createElement('option');
    option.value = slot;
    option.textContent = formatTimeDisplay(slot);
    timeSelect.appendChild(option);
  });
}

function populateDateOptions() {
  const dateSelect = document.getElementById('date');
  const startDate = new Date('2026-09-28T00:00:00');
  const endDate = new Date('2027-05-31T00:00:00');
  const dateOptions = [];

  const current = new Date(startDate);
  while (current <= endDate) {
    if (current.getDay() !== 0) {
      const yyyy = current.getFullYear();
      const mm = String(current.getMonth() + 1).padStart(2, '0');
      const dd = String(current.getDate()).padStart(2, '0');
      const value = `${yyyy}-${mm}-${dd}`;
      const weekday = current.toLocaleDateString('en-US', { weekday: 'short' });
      const formattedDate = current.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
      dateOptions.push({ value, label: `${weekday}, ${formattedDate}` });
    }
    current.setDate(current.getDate() + 1);
  }

  dateSelect.innerHTML = '<option value="">Select a date</option>';
  dateOptions.forEach(({ value, label }) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    dateSelect.appendChild(option);
  });
}

function setActiveCategoryChip(category) {
  categoryChips.forEach((chip) => {
    chip.classList.toggle('active', chip.dataset.category === category);
  });
}

function populateServices(selectedCategory = '') {
  const options = serviceMap[selectedCategory] || [];
  serviceSelect.innerHTML = '<option value="">Select a service</option>';

  options.forEach((item) => {
    const option = document.createElement('option');
    option.value = item.name;
    option.dataset.price = item.price;
    option.textContent = `${item.name} — ${formatPrice(item.price)}`;
    serviceSelect.appendChild(option);
  });

  const selectedPreset = document.querySelector('.service-card.active');
  if (selectedPreset) {
    serviceSelect.value = selectedPreset.dataset.service;
    updateSummary();
  }
}

function updateSummary() {
  const serviceName = serviceSelect.value;
  const selected = serviceMap[categorySelect.value]?.find((item) => item.name === serviceName);
  const price = selected?.price || 0;

  summaryService.textContent = serviceName || 'Not selected';
  summaryPrice.textContent = formatPrice(price);
}

categorySelect.addEventListener('change', (e) => {
  const value = e.target.value;
  populateServices(value);
  setActiveCategoryChip(value);
  updateSummary();
});

categoryChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const category = chip.dataset.category;
    categorySelect.value = category;
    setActiveCategoryChip(category);
    populateServices(category);
    updateSummary();
  });
});

serviceSelect.addEventListener('change', updateSummary);

const actionButtons = document.querySelectorAll('[data-service]');
actionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.category || 'Men\'s';
    const service = button.dataset.service || '';
    categorySelect.value = category;
    populateServices(category);
    serviceSelect.value = service;
    updateSummary();
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  });
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const category = categorySelect.value;
  const service = serviceSelect.value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const selected = serviceMap[category]?.find((item) => item.name === service);
  const total = selected?.price || 0;

  if (!name || !phone || !category || !service || !date || !time) {
    alert('Please fill in all booking details before sending your request.');
    return;
  }

  if (!/^\+91\d{10}$/.test(phone)) {
    alert('Please enter a valid phone number starting with +91 followed by exactly 10 digits.');
    document.getElementById('phone').focus();
    return;
  }

  const message = [
    'Hello Trend & Tresses Salon,',
    '',
    'I would like to book a salon appointment.',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Category: ${category}`,
    `Service: ${service}`,
    `Date: ${date}`,
    `Time: ${time}`,
    `Total: ${formatPrice(total)}`,
    '',
    'Please confirm my appointment. Thank you!'
  ].join('\n');

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
});

document.querySelector('.brand').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const instagramLinks = document.querySelectorAll('a[href="https://www.instagram.com/"]');
instagramLinks.forEach((link) => {
  link.href = INSTAGRAM_URL;
  link.target = '_blank';
  link.rel = 'noreferrer';
});

categorySelect.value = 'Men\'s';
populateServices('Men\'s');
serviceSelect.value = 'Haircut + wash';
updateSummary();

window.addEventListener('DOMContentLoaded', () => {
  populateDateOptions();
  populateTimeSlots();
});
