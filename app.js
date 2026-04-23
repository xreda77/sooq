// =====================================================
// السوق المفتوح - ملف JavaScript الرئيسي
// جميع الوظائف والتفاعلات
// =====================================================

// بيانات الإعلانات (محاكاة قاعدة بيانات)
const adsData = [
    {
        id: 1,
        title: "تويوتا كامري 2023 فل كامل",
        category: "vehicles",
        categoryName: "سيارات",
        price: 125000,
        negotiable: true,
        location: "الرياض",
        date: "منذ ساعتين",
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400",
        featured: true,
        condition: "new",
        description: "سيارة بحالة الوكالة، ممشى 5000 كم فقط، ضمان 5 سنوات"
    },
    {
        id: 2,
        title: "شقة فاخرة للبيع في جدة",
        category: "real-estate",
        categoryName: "عقارات",
        price: 850000,
        negotiable: true,
        location: "جدة",
        date: "منذ 3 ساعات",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400",
        featured: true,
        condition: "new",
        description: "شقة 4 غرف، إطلالة بحرية، موقع مميز في حي الشاطئ"
    },
    {
        id: 3,
        title: "آيفون 15 برو ماكس 256GB",
        category: "electronics",
        categoryName: "موبايلات",
        price: 4500,
        negotiable: false,
        location: "الرياض",
        date: "منذ 5 ساعات",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400",
        featured: true,
        condition: "new",
        description: "جديد لم يفك تغليفه، ضمان أبل سنة كاملة"
    },
    {
        id: 4,
        title: "كنبة جلد طبيعي 3+2+1",
        category: "furniture",
        categoryName: "أثاث",
        price: 3500,
        negotiable: true,
        location: "مكة",
        date: "منذ يوم",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
        featured: false,
        condition: "used",
        description: "استخدام 6 أشهر فقط، بحالة ممتازة، جلد إيطالي"
    },
    {
        id: 5,
        title: "ماك بوك برو M2 شريحة 13 إنش",
        category: "electronics",
        categoryName: "إلكترونيات",
        price: 5500,
        negotiable: true,
        location: "الدمام",
        date: "منذ يوم",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=400",
        featured: true,
        condition: "used",
        description: "حالة ممتازة، بطارية 100%، مع الكرتون والشاحن الأصلي"
    },
    {
        id: 6,
        title: "مطلوب موظفة استقبال",
        category: "jobs",
        categoryName: "وظائف",
        price: 0,
        salary: "4000-6000 ريال",
        negotiable: false,
        location: "الرياض",
        date: "منذ يومين",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400",
        featured: false,
        condition: "new",
        description: "مطلوب موظفة استقبال للعمل في عيادة أسنان، خبرة 2 سنوات"
    },
    {
        id: 7,
        title: "فستان زفاف فاخر",
        category: "fashion",
        categoryName: "أزياء",
        price: 2500,
        negotiable: true,
        location: "جدة",
        date: "منذ 3 أيام",
        image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=400",
        featured: false,
        condition: "used",
        description: "لبس مرة واحدة فقط، مقاس 12-14، مع طرحة واكسسوارات"
    },
    {
        id: 8,
        title: "جهاز جري كهربائي",
        category: "sports",
        categoryName: "رياضة",
        price: 1200,
        negotiable: true,
        location: "الخبر",
        date: "منذ 4 أيام",
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400",
        featured: false,
        condition: "used",
        description: "جهاز جري منزلي، نظيف، يحتاج كرتونة سرعة فقط"
    },
    {
        id: 9,
        title: "هيونداي توسان 2022",
        category: "vehicles",
        categoryName: "سيارات",
        price: 98000,
        negotiable: true,
        location: "أبوظبي",
        date: "منذ 5 أيام",
        image: "https://images.unsplash.com/photo-1503376763036-066120622c74?w=400",
        featured: false,
        condition: "used",
        description: "ممشى 45,000 كم، صيانة وكالة، فل كامل"
    },
    {
        id: 10,
        title: "ببغاء كوكتيل بالقفص",
        category: "pets",
        categoryName: "حيوانات",
        price: 800,
        negotiable: true,
        location: "دبي",
        date: "منذ أسبوع",
        image: "https://images.unsplash.com/photo-1552728089-57bdde30beb8?w=400",
        featured: false,
        condition: "used",
        description: "ببغاء عمره سنتين، يتكلم، مع القفص والأكل"
    },
    {
        id: 11,
        title: "غرفة نوم كاملة",
        category: "furniture",
        categoryName: "أثاث",
        price: 4200,
        negotiable: true,
        location: "القاهرة",
        date: "منذ أسبوع",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
        featured: false,
        condition: "new",
        description: "غرفة نوم كاملة، دولاب 4 ضلفة + سرير 2 متر + تسريحة"
    },
    {
        id: 12,
        title: "ساعة أبل واتش 8",
        category: "electronics",
        categoryName: "إلكترونيات",
        price: 1200,
        negotiable: false,
        location: "الرياض",
        date: "منذ أسبوعين",
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400",
        featured: false,
        condition: "used",
        description: "45mm، GPS + Cellular، مع سوارين إضافيين"
    }
];

// حالة التطبيق
let currentCategory = 'all';
let currentViewMode = 'grid';
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// =====================================================
// دوال التهيئة
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    renderListings();
    renderFeatured();
    updateFavoriteButtons();
    setupEventListeners();
});

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // نموذج تسجيل الدخول
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // البحث بالضغط على Enter
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // إغلاق النموذج بالضغط على Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLoginModal();
        }
    });

    // إغلاق النموذج بالضغط خارج المحتوى
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeLoginModal();
            }
        });
    }
}

// =====================================================
// عرض الإعلانات
// =====================================================

function renderListings(category = 'all', filters = {}) {
    const grid = document.getElementById('listingsGrid');
    if (!grid) return;

    // تصفية الإعلانات
    let filteredAds = adsData.filter(ad => {
        if (category !== 'all' && ad.category !== category) return false;
        
        // تطبيق الفلاتر
        if (filters.city && ad.location !== filters.city) return false;
        if (filters.condition && ad.condition !== filters.condition) return false;
        if (filters.price) {
            const price = ad.price;
            if (filters.price === '0-1000' && price >= 1000) return false;
            if (filters.price === '1000-5000' && (price < 1000 || price > 5000)) return false;
            if (filters.price === '5000-10000' && (price < 5000 || price > 10000)) return false;
            if (filters.price === '10000+' && price < 10000) return false;
        }
        
        return true;
    });

    // عرض الإعلانات
    if (filteredAds.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px;">
                <i class="fas fa-search" style="font-size: 64px; color: #ddd; margin-bottom: 20px; display: block;"></i>
                <h3 style="color: var(--text-light); margin-bottom: 10px;">لا توجد إعلانات</h3>
                <p style="color: var(--text-muted);">جرب تغيير معايير البحث</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredAds.map(ad => createAdCard(ad)).join('');

    // إضافة تأثيرات التحميل التدريجي
    const cards = grid.querySelectorAll('.ad-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function createAdCard(ad) {
    const isFavorite = favorites.includes(ad.id);
    const priceDisplay = ad.price === 0 ? ad.salary : formatPrice(ad.price) + ' ريال';
    
    return `
        <div class="ad-card" onclick="viewAdDetails(${ad.id})">
            <div class="ad-image">
                <img src="${ad.image}" alt="${ad.title}" loading="lazy">
                ${ad.featured ? '<span class="ad-badge featured">مميز</span>' : '<span class="ad-badge new">جديد</span>'}
                <button class="ad-favorite ${isFavorite ? 'active' : ''}" 
                        onclick="event.stopPropagation(); toggleFavorite(${ad.id})"
                        title="${isFavorite ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}">
                    <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            <div class="ad-content">
                <span class="ad-category">${ad.categoryName}</span>
                <h3 class="ad-title">${ad.title}</h3>
                <div class="ad-details">
                    <div class="ad-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${ad.location}</span>
                    </div>
                    <div class="ad-date">
                        <i class="fas fa-clock"></i>
                        <span>${ad.date}</span>
                    </div>
                </div>
                <div class="ad-footer">
                    <div class="ad-price">
                        ${priceDisplay}
                        ${ad.negotiable ? '<span class="ad-negotiable"> (قابل للتفاوض)</span>' : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderFeatured() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (!featuredGrid) return;

    const featuredAds = adsData.filter(ad => ad.featured);
    
    featuredGrid.innerHTML = featuredAds.map(ad => `
        <div class="featured-card" onclick="viewAdDetails(${ad.id})">
            <div class="featured-image">
                <img src="${ad.image}" alt="${ad.title}">
            </div>
            <div class="featured-content">
                <h3>${ad.title}</h3>
                <div class="featured-price">
                    ${ad.price === 0 ? ad.salary : formatPrice(ad.price) + ' ريال'}
                </div>
                <div class="featured-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${ad.location}</span>
                    <span><i class="fas fa-clock"></i> ${ad.date}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// =====================================================
// الفلاتر والتصنيفات
// =====================================================

function filterCategory(category) {
    currentCategory = category;
    
    // تحديث الروابط النشطة
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
    });
    event.target.closest('a').classList.add('active');
    
    renderListings(category, getCurrentFilters());
    
    // التمرير إلى قسم الإعلانات
    const listingsSection = document.querySelector('.listings-section');
    if (listingsSection) {
        listingsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function getCurrentFilters() {
    return {
        city: document.getElementById('cityFilter')?.value || '',
        price: document.getElementById('priceFilter')?.value || '',
        condition: document.getElementById('conditionFilter')?.value || ''
    };
}

function applyFilters() {
    renderListings(currentCategory, getCurrentFilters());
}

function resetFilters() {
    document.getElementById('cityFilter').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('conditionFilter').value = '';
    renderListings(currentCategory, {});
}

// =====================================================
// البحث
// =====================================================

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
        renderListings(currentCategory, getCurrentFilters());
        return;
    }

    const grid = document.getElementById('listingsGrid');
    const filteredAds = adsData.filter(ad => 
        ad.title.toLowerCase().includes(searchTerm) ||
        ad.description.toLowerCase().includes(searchTerm) ||
        ad.categoryName.includes(searchTerm) ||
        ad.location.includes(searchTerm)
    );

    if (filteredAds.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px;">
                <i class="fas fa-search" style="font-size: 64px; color: #ddd; margin-bottom: 20px; display: block;"></i>
                <h3 style="color: var(--text-light); margin-bottom: 10px;">لا توجد نتائج</h3>
                <p style="color: var(--text-muted);">جرب البحث بكلمات مختلفة</p>
            </div>
        `;
    } else {
        grid.innerHTML = filteredAds.map(ad => createAdCard(ad)).join('');
    }

    // التمرير إلى النتائج
    document.querySelector('.listings-section').scrollIntoView({ behavior: 'smooth' });
}

// =====================================================
    // عرض التصنيفات
    // =====================================================

function showCategories() {
    document.querySelector('.categories-section').scrollIntoView({ behavior: 'smooth' });
}

// =====================================================
// المفضلة
// =====================================================

function toggleFavorite(adId) {
    const index = favorites.indexOf(adId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(adId);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderListings(currentCategory, getCurrentFilters());
    updateFavoriteButtons();
    
    // إظهار إشعار
    showNotification(
        index > -1 ? 'تمت الإزالة من المفضلة' : 'تمت الإضافة للمفضلة',
        index > -1 ? 'info' : 'success'
    );
}

function updateFavoriteButtons() {
    document.querySelectorAll('.ad-favorite').forEach(btn => {
        const adId = parseInt(btn.getAttribute('onclick').match(/\d+/)[0]);
        const isFavorite = favorites.includes(adId);
        btn.classList.toggle('active', isFavorite);
        btn.innerHTML = `<i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>`;
    });
}

// =====================================================
// تفاصيل الإعلان
// =====================================================

function viewAdDetails(adId) {
    const ad = adsData.find(a => a.id === adId);
    if (!ad) return;

    // فتح نافذة تفاصيل الإعلان
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px; max-height: 90vh; overflow-y: auto;">
            <div class="modal-header">
                <h2>${ad.title}</h2>
                <button class="close-btn" onclick="this.closest('.modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div style="margin-bottom: 20px;">
                    <img src="${ad.image}" alt="${ad.title}" style="width: 100%; border-radius: 8px; max-height: 400px; object-fit: cover;">
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 15px;">
                    <div style="font-size: 32px; font-weight: 800; color: var(--primary-color);">
                        ${ad.price === 0 ? ad.salary : formatPrice(ad.price) + ' ريال'}
                        ${ad.negotiable ? '<span style="font-size: 14px; color: #27ae60;"> (قابل للتفاوض)</span>' : ''}
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <span class="ad-badge ${ad.featured ? 'featured' : 'new'}">${ad.featured ? 'مميز' : 'جديد'}</span>
                        <span class="ad-category">${ad.categoryName}</span>
                    </div>
                </div>
                <div style="display: flex; gap: 30px; margin-bottom: 20px; flex-wrap: wrap; color: var(--text-light);">
                    <span><i class="fas fa-map-marker-alt"></i> ${ad.location}</span>
                    <span><i class="fas fa-clock"></i> ${ad.date}</span>
                    <span><i class="fas fa-tag"></i> ${ad.condition === 'new' ? 'جديد' : 'مستعمل'}</span>
                </div>
                <div style="margin-bottom: 25px;">
                    <h3 style="margin-bottom: 10px;">الوصف</h3>
                    <p style="color: var(--text-light); line-height: 1.8;">${ad.description}</p>
                </div>
                <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                    <button class="btn-primary" style="flex: 1; min-width: 150px;" onclick="contactSeller(${ad.id})">
                        <i class="fas fa-phone"></i> اتصل بالبائع
                    </button>
                    <button class="btn-secondary" style="flex: 1; min-width: 150px;" onclick="sendMessage(${ad.id})">
                        <i class="fas fa-comment"></i> إرسال رسالة
                    </button>
                    <button class="btn-secondary ${favorites.includes(ad.id) ? 'active' : ''}" 
                            style="width: 50px;" 
                            onclick="toggleFavorite(${ad.id}); this.closest('.modal').remove(); viewAdDetails(${ad.id})">
                        <i class="${favorites.includes(ad.id) ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // إغلاق النموذج بالضغط على Escape
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.remove();
        }
    });
    
    // إغلاق النموذج بالضغط خارج المحتوى
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// =====================================================
// التواصل مع البائع
// =====================================================

function contactSeller(adId) {
    showNotification('جاري الاتصال بالبائع...', 'info');
    // هنا يمكن إضافة منطق الاتصال الفعلي
    setTimeout(() => {
        showNotification('تم فتح نافذة المحادثة', 'success');
    }, 1000);
}

function sendMessage(adId) {
    const message = prompt('اكتب رسالتك للبائع:');
    if (message && message.trim()) {
        showNotification('تم إرسال رسالتك بنجاح', 'success');
    }
}

// =====================================================
// إضافة إعلان جديد
// =====================================================

function addNewAd() {
    // التحقق من تسجيل الدخول (محاكاة)
    const isLoggedIn = false; // في الواقع يتم التحقق من الجلسة
    
    if (!isLoggedIn) {
        showLoginModal();
        showNotification('الرجاء تسجيل الدخول لإضافة إعلان', 'warning');
        return;
    }
    
    // فتح نموذج إضافة إعلان
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px; max-height: 90vh; overflow-y: auto;">
            <div class="modal-header">
                <h2>إضافة إعلان جديد</h2>
                <button class="close-btn" onclick="this.closest('.modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <form id="addAdForm" onsubmit="submitAd(event)">
                    <div class="form-group">
                        <label>عنوان الإعلان *</label>
                        <input type="text" id="adTitle" required placeholder="مثال: سيارة تويوتا كامري للبيع">
                    </div>
                    <div class="form-group">
                        <label>القسم *</label>
                        <select class="filter-select" id="adCategory" required style="width: 100%;">
                            <option value="">اختر القسم</option>
                            <option value="vehicles">سيارات</option>
                            <option value="real-estate">عقارات</option>
                            <option value="electronics">موبايلات وإلكترونيات</option>
                            <option value="furniture">أثاث منزلي</option>
                            <option value="jobs">وظائف</option>
                            <option value="fashion">أزياء</option>
                            <option value="sports">رياضة</option>
                            <option value="pets">حيوانات</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>السعر (ريال) *</label>
                        <input type="number" id="adPrice" required placeholder="أدخل السعر">
                    </div>
                    <div class="form-group">
                        <label>الموقع *</label>
                        <select class="filter-select" id="adLocation" required style="width: 100%;">
                            <option value="">اختر المدينة</option>
                            <option value="الرياض">الرياض</option>
                            <option value="جدة">جدة</option>
                            <option value="مكة">مكة</option>
                            <option value="الدمام">الدمام</option>
                            <option value="أبوظبي">أبوظبي</option>
                            <option value="دبي">دبي</option>
                            <option value="القاهرة">القاهرة</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>الوصف *</label>
                        <textarea id="adDescription" required rows="4" placeholder="اكتب وصفاً تفصيلياً للإعلان" 
                                  style="width: 100%; padding: 14px; border: 2px solid var(--border-color); border-radius: var(--radius); font-family: inherit; resize: vertical;"></textarea>
                    </div>
                    <div class="form-group">
                        <label>صور المنتج</label>
                        <div style="border: 2px dashed var(--border-color); border-radius: var(--radius); padding: 40px; text-align: center; cursor: pointer;" onclick="document.getElementById('adImages').click()">
                            <i class="fas fa-cloud-upload-alt" style="font-size: 48px; color: var(--text-muted); margin-bottom: 15px;"></i>
                            <p style="color: var(--text-light);">انقر هنا لرفع الصور أو اسحبها هنا</p>
                            <input type="file" id="adImages" multiple accept="image/*" style="display: none;">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="checkbox" style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                            <input type="checkbox" id="adNegotiable">
                            <span>السعر قابل للتفاوض</span>
                        </label>
                    </div>
                    <button type="submit" class="btn-submit">
                        <i class="fas fa-plus-circle"></i> نشر الإعلان
                    </button>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function submitAd(event) {
    event.preventDefault();
    
    const formData = {
        id: adsData.length + 1,
        title: document.getElementById('adTitle').value,
        category: document.getElementById('adCategory').value,
        categoryName: document.getElementById('adCategory').options[document.getElementById('adCategory').selectedIndex].text,
        price: parseInt(document.getElementById('adPrice').value),
        location: document.getElementById('adLocation').value,
        description: document.getElementById('adDescription').value,
        date: 'الآن',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
        featured: false,
        condition: 'new',
        negotiable: document.getElementById('adNegotiable').checked
    };
    
    adsData.unshift(formData);
    
    // إغلاق النموذج
    document.querySelector('.modal').remove();
    
    // إعادة تحميل الإعلانات
    renderListings(currentCategory, getCurrentFilters());
    
    showNotification('تم نشر إعلانك بنجاح!', 'success');
    
    // التمرير إلى الإعلان الجديد
    document.querySelector('.listings-section').scrollIntoView({ behavior: 'smooth' });
}

// =====================================================
// تسجيل الدخول
// =====================================================

function showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function showRegisterModal() {
    closeLoginModal();
    
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 450px;">
            <div class="modal-header">
                <h2>إنشاء حساب جديد</h2>
                <button class="close-btn" onclick="this.closest('.modal').remove(); document.body.style.overflow = '';">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <form onsubmit="event.preventDefault(); showNotification('تم إنشاء الحساب بنجاح!', 'success'); this.closest('.modal').remove();">
                    <div class="form-group">
                        <label>الاسم الكامل</label>
                        <input type="text" required placeholder="أدخل اسمك الكامل">
                    </div>
                    <div class="form-group">
                        <label>رقم الجوال</label>
                        <input type="tel" required placeholder="05xxxxxxxx">
                    </div>
                    <div class="form-group">
                        <label>البريد الإلكتروني</label>
                        <input type="email" required placeholder="example@email.com">
                    </div>
                    <div class="form-group">
                        <label>كلمة المرور</label>
                        <input type="password" required placeholder="أدخل كلمة المرور">
                    </div>
                    <div class="form-group">
                        <label>تأكيد كلمة المرور</label>
                        <input type="password" required placeholder="أعد إدخال كلمة المرور">
                    </div>
                    <div class="form-group">
                        <label class="checkbox" style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                            <input type="checkbox" required>
                            <span>أوافق على <a href="#" style="color: var(--primary-color);">شروط الاستخدام</a> و <a href="#" style="color: var(--primary-color);">سياسة الخصوصية</a></span>
                        </label>
                    </div>
                    <button type="submit" class="btn-submit">إنشاء حساب</button>
                </form>
                <div class="register-link" style="margin-top: 20px;">
                    لديك حساب بالفعل؟ <a href="#" onclick="this.closest('.modal').remove(); showLoginModal();">تسجيل الدخول</a>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function handleLogin(event) {
    event.preventDefault();
    
    // محاكاة تسجيل الدخول
    setTimeout(() => {
        closeLoginModal();
        showNotification('تم تسجيل الدخول بنجاح!', 'success');
        
        // تحديث واجهة المستخدم لعرض المستخدم مسجل الدخول
        const headerActions = document.querySelector('.header-actions');
        if (headerActions) {
            headerActions.innerHTML = `
                <button class="btn-secondary" style="gap: 10px;">
                    <i class="fas fa-user-circle"></i>
                    <span>أحمد</span>
                    <i class="fas fa-chevron-down" style="font-size: 12px;"></i>
                </button>
                <button class="btn-primary" onclick="addNewAd()">
                    <i class="fas fa-plus-circle"></i>
                    أضف إعلانك
                </button>
            `;
        }
    }, 1000);
}

// =====================================================
// وضع العرض (شبكة/قائمة)
// =====================================================

function setViewMode(mode) {
    currentViewMode = mode;
    const grid = document.getElementById('listingsGrid');
    const viewButtons = document.querySelectorAll('.view-btn');
    
    viewButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    if (mode === 'list') {
        grid.classList.add('list-view');
    } else {
        grid.classList.remove('list-view');
    }
}

// =====================================================
// تحميل المزيد
// =====================================================

function loadMore() {
    const btn = document.querySelector('.btn-load-more');
    if (btn) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحميل...';
        btn.disabled = true;
        
        setTimeout(() => {
            // إضافة إعلانات إضافية (محاكاة)
            const newAds = adsData.slice(0, 4).map(ad => ({
                ...ad,
                id: ad.id + 100,
                date: 'منذ أسبوعين'
            }));
            
            adsData.push(...newAds);
            renderListings(currentCategory, getCurrentFilters());
            
            btn.innerHTML = '<i class="fas fa-spinner"></i> تحميل المزيد';
            btn.disabled = false;
            
            showNotification('تم تحميل المزيد من الإعلانات', 'success');
        }, 1000);
    }
}

// =====================================================
// أدوات مساعدة
// =====================================================

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function showNotification(message, type = 'info') {
    // إزالة أي إشعار سابق
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const colors = {
        success: '#27ae60',
        error: '#e74c3c',
        warning: '#f39c12',
        info: '#3498db'
    };
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${colors[type]};
        color: white;
        padding: 16px 30px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 500;
        animation: slideDown 0.3s ease;
    `;
    notification.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // إزالة الإشعار بعد 3 ثواني
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// إضافة أنماط CSS للإشعارات
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// =====================================================
// تأثيرات التمرير
// =====================================================

window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    }
});

// =====================================================
// اختصارات لوحة المفاتيح
// =====================================================

document.addEventListener('keydown', (e) => {
    // Ctrl + K للبحث
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        document.getElementById('searchInput')?.focus();
    }
    
    // Ctrl + N لإضافة إعلان
    if (e.ctrlKey && e.key === 'n') {
        e.preventDefault();
        addNewAd();
    }
});

// =====================================================
// تهيئة الصفحة
// =====================================================

console.log('%cالسوق المفتوح', 'font-size: 24px; font-weight: bold; color: #009688;');
console.log('%cتم تحميل التطبيق بنجاح!', 'font-size: 14px; color: #666;');
