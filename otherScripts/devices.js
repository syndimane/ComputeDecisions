// Device Data
// {name: "", type: "", form: "", cpu: "", ram: "", gpu: "", storage: "", price: "", desc: "", image: ""},
{
    let devices = [
        // business / student
        {name: "Acer Extensa 15", type: "business student", form: "laptop", cpu: "Intel Core i5-1235u", ram: "8GB DDR4", gpu: "Integrated Intel UHD Graphics", storage: "256GB M.2 SSD", price: "$1,079", desc: "Designed for small businesses and everyday users, the Acer Extensa 15 features superior functionality and a full range of essential business features. Stay productive, maximize your multitasking and work comfortably with with the versatile Acer Extensa 15 and its number keypad plus long battery life. Powered by the latest 12th Gen Intel Core i5 processor, this 15-inch laptop for small businesses keeps you productive with its comprehensive connectivity options.", image: "images/Acer Extensa 15.webp"},
        {name: "Acer Chromebook 311", type: "business student", form: "laptop", cpu: "Intel Celeron N4500", ram: "4GB DDR4", gpu: "Integrated Intel UHD Graphics", storage: "64GB eMMC", price: "$419", desc: "Stay productive anywhere with the Acer Chromebook 311 11.6” HD Laptop, a lightweight and portable Chromebook designed for students, work, and everyday computing. Powered by the Intel Celeron N4500 processor, this ChromeOS laptop delivers reliable performance for web browsing, streaming, online classes, and productivity applications.", image: "images/Acer Chromebook 311.webp"},
        {name: "Lenovo ThinkBook 14", type: "business student", form: "laptop", cpu: "AMD Ryzen 5 220", ram: "16GB SODIMM DDR5-5600", gpu: "Integrated AMD Radeon 740M Graphics", storage: "512GB SSD M.2", price: "$2,269", desc: "Powered by an AI-driven processor and NPU, the ThinkBook 14 Gen 9 laptop simplifies routine tasks in an energy‑efficient design. Advanced AI capabilities offer enhanced video conferencing, document automation with summarization, and faster data analysis for greater productivity. Ideal for modern professionals on the move; it meets everyday demands with no compromises.", image: "images/lenovo thinkbook 14.jpg"},
        // gaming
        {name: "Nebula", type: "gaming", form: "pc", cpu: "AMD Ryzen 5 5500 6-Core 4.2GHz", ram: "16GB DDR4", gpu: "Gigabyte GeForce RTX 3050 6GB Windforce", storage: "500GB NVMe M.2", price: "$1,679", desc: "Embark on an adventure with the Nebula, a PC that delivers performance in a tight package. At its heart lies a 6-core processor and a RTX 3050 graphics card, capable of blasting through competition with cosmic clarity and fluidity, while the lightning-fast SSD ensures games and apps load at warp speed, keeping you in the action without delay.", image: "images/Nebula Rev.png"},
        {name: "Acer Nitro V 16S", type: "gaming", form: "laptop", cpu: "Intel Core 7-240H 10 core", ram: "16GB DDR5", gpu: "NVIDIA GeForce RTX 5060 8GB", storage: "1024GB NVMe SSD", price: "$2,949", desc: "The Acer Nitro V 16S is a slim gaming laptop built for gamers who demand performance on the go. Powered by an Intel®️ Core™️ 7 240H processor and NVIDIA®️ GeForce RTX™️ 5060 Laptop GPU, with a bright WQXGA 180Hz display and all the essentials for gaming anywhere.", image: "images/Nitro V 16S.webp"},
        {name: "ECLIPSE", type: "gaming designer", form: "pc", cpu: "Intel Core Ultra 7 Processor 265KF", ram: "32GB DDR5–6000", gpu: "Gigabyte GeForce RTX 5070 Ti Windforce OC", storage: "2TB NVMe M.2 SSD", price: "$4,979", desc: "Designed for the true enthusiasts who demand nothing but the best, the Eclipse is equipped with state-of-the-art hardware to conquer every challenge. Powered by Intel’s Ultra 7 265KF, the Eclipse delivers unparalleled performance. Experience stunning real-time ray tracing and silky-smooth frame rates with the GeForce RTX 5070 Ti. A massive RGB liquid cooler ensures everything stays cool under pressure even during the most demanding tasks. 32GB of RAM and lightning-fast 2TB PCIe 4.0 NVMe SSD, ensures that no task is too heavy, and no game too demanding. The integrated monitor provides live system stats at a glance, while synchronized ARGB lighting enhances your setup, allowing you to customize the look of your machine to fit your personal style. Whether you’re a professional gamer, 4K video editor, or content creator, the Eclipse offers unparalleled performance to handle even the most resource-intensive tasks with ease.", image: "images/Eclipse Side composite.webp"},
        // home
        {name: "Acer Chromebook 511", type: "home-office student", form: "laptop", cpu: "Intel Celeron N4500", ram: "4GB RAM", gpu: "Intel UHD Graphics", storage: "32GB SSD", price: "$399", desc: "Start thinking outside the box with the Acer Chromebook 511. Not only is this Chromebook one of the best laptops for students on the market today, but it also comes with a unique OceanGlass™ touchpad that helps reduce waste in the environment. Students will stay engaged and ready to achieve more in the classroom with a state-of-the-art processor, military durability, and long battery life.", image: "images/Acer Chromebook 511.webp"},
        {name: "Acer Rugged Chromebook 311", type: "home-office student", form: "laptop", cpu: "Kompanio 540 Octa-Core", ram: "4 GB LPDDR5X", gpu: "Integrated Arm Mali-G57 MC2", storage: "32GB eMMC SSD", price: "$549", desc: "The Acer Chromebook 311 is a durable 11-inch Chromebook built for all-day learning with a long battery life, secure features, and easy management for students and teachers.", image: "images/acer rugged.webp"},
        {name: "HP Omnibook 5", type: "home-office student", form: "laptop", cpu: "Intel Core i7-1355U", ram: "16 GB DDR4-3200", gpu: "Integrated Intel Iris Xe Graphics", storage: "512 GB M.2 NVMe", price: "$1,279", desc: "The ultimate everyday workhorse, built for absolute comfort and convenience. Need a laptop that effortlessly keeps pace with your busy lifestyle? Meet the HP 15.6” Touchscreen Laptop. Wrapped in a sleek Natural Silver finish, this reliable powerhouse pairs a blazing-fast 13th Gen Intel Core i7 processor with an intuitive touch display to completely change the way you tackle work, study, and play.", image: "images/hp omnibook.webp"},
        // designer
        {name: "MSI Stealth A16 AI+", type: "designer gaming", form: "laptop", cpu: "AMD Ryzen AI 9 HX 370", ram: "LPDDR5 32GB", gpu: "NVIDIA GeForce RTX 5080", storage: "2TB NVMe SSD", price: "$15,258", desc: "MSI Stealth Series Gaming Notebook 16” QHD AMD Ryzen™ AI 9 HX 370 Processor LPDDR5× 32GB 2TB SSD RTX 5080 GDDR7 16GB Windows11 Pro", image: "images/msi stealth.webp"},
        {name: "MSI Raider Gaming Notebook", type: "designer gaming", form: "laptop", cpu: "Ryzen 9 9955HX3D", ram: "DDR5 64GB", gpu: "NVIDIA GeForce RTX 5080", storage: "2TB NVMe SSD", price: "$17,436", desc: "MSI Raider Series Gaming Notebook 18” UHD Ryzen 9 9955HX3D, DDR5 32GB*2 2TB SSD Windows® 11 Pro High End Nvidia RTX 5080, GDDR7 16GB", image: "images/MSI raider.webp"},
        {name: "HP Elitebook X Flip", type: "designer", form: "laptop", cpu: "Intel Core Ultra 5 325", ram: "16 GB LPDDR5", gpu: "Integrated Intel Graphics", storage: "512GB NVMe SSD", price: "$4,173", desc: "From sketching ideas to presenting bold visions, the HP EliteBook X Flip G2i 14 inch Notebook AI PC empowers mobile professionals with a lightweight convertible design, touch input, and enterprise-grade security-built to support today's AI-powered workflows[3] and tomorrow's innovations.", image: "images/HP elite.jpg"}
    ]

    let deviceToCompare1 = devices.find(device => device.name === localStorage.getItem("deviceToCompare1")) || null;
    let deviceToCompare2 = devices.find(device => device.name === localStorage.getItem("deviceToCompare2")) || null;
    let deviceComparison1 = document.getElementById("deviceComparison1");
    let deviceComparison2 = document.getElementById("deviceComparison2");

    function updateCompareSelectionUi() {
        const selectedCount = [deviceToCompare1, deviceToCompare2].filter(Boolean).length;
        const selectedDeviceCount = document.getElementById("selectedDeviceCount");

        if (selectedDeviceCount) {
            selectedDeviceCount.textContent = `${selectedCount} ${selectedCount === 1 ? "Item" : "Items"} Selected`;
        }

        document.querySelectorAll(".compare-device-button").forEach(button => {
            const selectedDevice = button.dataset.comparisonSlot === "1" ? deviceToCompare1 : deviceToCompare2;
            const isSelected = selectedDevice === devices[Number(button.dataset.deviceIndex)];
            button.classList.toggle("compare-selected", isSelected);
            button.setAttribute("aria-pressed", String(isSelected));
        });
    }

    function displayDeviceComparison() {
        if (deviceComparison1 != null) {
            deviceComparison1.innerHTML = deviceToCompare1 ? 
            `
                <img src="${deviceToCompare1.image}" alt="Device 1 Image" style="height: 50%; max-height: 500px; width: auto; max-width: 100%;">
                <h2>${deviceToCompare1.name}</h2>
                <ul class="compare-device-specs">
                    <li><strong>CPU:</strong> ${deviceToCompare1.cpu}</li>
                    <li><strong>RAM:</strong> ${deviceToCompare1.ram}</li>
                    <li><strong>GPU:</strong> ${deviceToCompare1.gpu}</li>
                    <li><strong>Storage:</strong> ${deviceToCompare1.storage}</li>
                    <li><strong>Device Type:</strong> ${deviceToCompare1.form}</li>
                    <li><strong>Price:</strong> ${deviceToCompare1.price}</li>
                </ul>
                <div class="custom-flex">
                    <button onclick="window.location.href = 'devices.html'" class="filter-button" style="margin-top: 15px;">Find Device</button>
                    <button onclick="setDeviceToCompare(null, 1)" class="filter-button" style="margin-top: 15px;">Remove</button>
                </div>
            ` : 
            `
                <img src="images/placeholder image.png" alt="Device 1 Image" style="height: 50%; max-height: 500px; width: auto; max-width: 100%;">
                <h2>No Device Selected</h2>
                <ul class="compare-device-specs">
                    <li><strong>CPU:</strong></li>
                    <li><strong>RAM:</strong></li>
                    <li><strong>GPU:</strong></li>
                    <li><strong>Storage:</strong></li>
                    <li><strong>Device Type:</strong></li>
                    <li><strong>Price:</strong></li>
                </ul>
                <div class="custom-flex">
                    <button onclick="window.location.href = 'devices.html'" class="filter-button" style="margin-top: 15px;">Find Device</button>
                    <button onclick="setDeviceToCompare(null, 1)" class="filter-button" style="margin-top: 15px;">Remove</button>
                </div>
            `;
        }
        if (deviceComparison2 != null) {
            deviceComparison2.innerHTML = deviceToCompare2 ? 
            `
                <img src="${deviceToCompare2.image}" alt="Device 2 Image" style="height: 50%; max-height: 500px; width: auto; max-width: 100%;">
                <h2>${deviceToCompare2.name}</h2>
                <ul class="compare-device-specs">
                    <li><strong>CPU:</strong> ${deviceToCompare2.cpu}</li>
                    <li><strong>RAM:</strong> ${deviceToCompare2.ram}</li>
                    <li><strong>GPU:</strong> ${deviceToCompare2.gpu}</li>
                    <li><strong>Storage:</strong> ${deviceToCompare2.storage}</li>
                    <li><strong>Device Type:</strong> ${deviceToCompare2.form}</li>
                    <li><strong>Price:</strong> ${deviceToCompare2.price}</li>
                </ul>
                <div class="custom-flex">
                    <button onclick="window.location.href = 'devices.html'" class="filter-button" style="margin-top: 15px;">Find Device</button>
                    <button onclick="setDeviceToCompare(null, 2)" class="filter-button" style="margin-top: 15px;">Remove</button>
                </div>
            ` : 
            `
            <img src="images/placeholder image.png" alt="Device 1 Image" style="height: 50%; max-height: 500px; width: auto; max-width: 100%;">
                <h2>No Device Selected</h2>
                <ul class="compare-device-specs">
                    <li><strong>CPU:</strong></li>
                    <li><strong>RAM:</strong></li>
                    <li><strong>GPU:</strong></li>
                    <li><strong>Storage:</strong></li>
                    <li><strong>Device Type:</strong></li>
                    <li><strong>Price:</strong></li>
                </ul>
                <div class="custom-flex">
                    <button onclick="window.location.href = 'devices.html'" class="filter-button" style="margin-top: 15px;">Find Device</button>
                    <button onclick="setDeviceToCompare(null, 2)" class="filter-button" style="margin-top: 15px;">Remove</button>
                </div>
            `;
        }
    }

    window.setDeviceToCompare = function (deviceIndex, comparisonNumber) {
        if (comparisonNumber === 1) {
            if (deviceIndex === null) {
                deviceToCompare1 = null;
                localStorage.removeItem("deviceToCompare1");
            } else {
                deviceToCompare1 = devices[deviceIndex];
                localStorage.setItem("deviceToCompare1", deviceToCompare1.name);
                if (document.title !== "Devices") {
                    window.location.href = 'compare.html';
                    return;
                }
            }
        } else if (comparisonNumber === 2) {
            if (deviceIndex === null) {
                deviceToCompare2 = null;
                localStorage.removeItem("deviceToCompare2");
            } else {
                deviceToCompare2 = devices[deviceIndex];
                localStorage.setItem("deviceToCompare2", deviceToCompare2.name);
                if (document.title !== "Devices") {
                    window.location.href = 'compare.html';
                    return;
                }
            }
        }
        updateCompareSelectionUi();
        displayDeviceComparison();
    };

    function capitalizeFirstLetter(str) {
        if (!str) return ''; // Handle empty strings safely
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    if (window.location.pathname === "/compare.html") {
        displayDeviceComparison();
    }

    function DisplayDevices() {
        let deviceUi = document.getElementById("deviceUi");
        let deviceHtml = "";

        devices.forEach(device => {
            deviceHtml += formatDevice(device);
        });

        deviceUi.innerHTML = deviceHtml;
    }

    function formatDevice(device) {
        const deviceIndex = devices.indexOf(device);
        const isSelectedForDevice1 = deviceToCompare1 === device;
        const isSelectedForDevice2 = deviceToCompare2 === device;
        let deviceHTML = `
            <div class="device-container" data-category="${device.type}">
                <img src="${device.image}" style="height: 50%; max-height: 280px; width: auto; max-width: 100%;" alt="${device.name} Image">
                <h2 style="text-decoration: underline;">${device.name}</h2>
                <p>
                    <strong>CPU:</strong> &#9 ${device.cpu}<br>
                    <strong>GPU:</strong> &#9 ${device.gpu}<br>
                    <strong>RAM:</strong> &#9 ${device.ram}<br>
                    <strong>SSD:</strong> &#9 ${device.storage}
                </p>
                <h3><strong>Price:</strong> ${device.price}</h3>
                <div class="custom-flex" style="padding-top: 25px;">
                    <button class="compare-device-button ${isSelectedForDevice1 ? 'compare-selected' : ''}" data-device-index="${deviceIndex}" data-comparison-slot="1" aria-pressed="${isSelectedForDevice1}" onclick="setDeviceToCompare(${deviceIndex}, 1)">Compare Device 1</button>
                    <button class="compare-device-button ${isSelectedForDevice2 ? 'compare-selected' : ''}" data-device-index="${deviceIndex}" data-comparison-slot="2" aria-pressed="${isSelectedForDevice2}" onclick="setDeviceToCompare(${deviceIndex}, 2)">Compare Device 2</button>
                </div>
            </div>
        `;

        return deviceHTML;
    }

    function DisplaySlideshow() {
        const slideshowUi = document.getElementById('slideshow-devices');
        const previousButton = document.getElementById('slideshow-previous');
        const nextButton = document.getElementById('slideshow-next');

        if (!slideshowUi || !previousButton || !nextButton || devices.length === 0) {
            return;
        }

        let startIndex = 0;
        const tabletSlideshow = window.matchMedia('(min-width: 601px)');
        const desktopSlideshow = window.matchMedia('(min-width: 900px)');

        function getVisibleDeviceCount() {
            if (desktopSlideshow.matches) {
                return Math.min(3, devices.length);
            }

            return tabletSlideshow.matches ? Math.min(2, devices.length) : 1;
        }

        function renderSlides(direction) {
            slideshowUi.classList.remove('slideshow-changing-next', 'slideshow-changing-previous');
            void slideshowUi.offsetWidth;

            let deviceHtml = '';
            for (let offset = 0; offset < getVisibleDeviceCount(); offset += 1) {
                const device = devices[(startIndex + offset) % devices.length];
                deviceHtml += formatDevice(device);
            }

            slideshowUi.innerHTML = deviceHtml;
            slideshowUi.classList.add(`slideshow-changing-${direction}`);
        }

        previousButton.addEventListener('click', function () {
            startIndex = (startIndex - 1 + devices.length) % devices.length;
            renderSlides('previous');
        });

        nextButton.addEventListener('click', function () {
            startIndex = (startIndex + 1) % devices.length;
            renderSlides('next');
        });

        function handleBreakpointChange() {
            renderSlides('next');
        }

        tabletSlideshow.addEventListener('change', handleBreakpointChange);
        desktopSlideshow.addEventListener('change', handleBreakpointChange);

        renderSlides('next');
    }

    if (document.title == "Devices")
        DisplayDevices();
    else
        DisplaySlideshow();

    updateCompareSelectionUi();

    const compareNowButton = document.getElementById("compareNowButton");
    if (compareNowButton) {
        compareNowButton.addEventListener("click", function () {
            window.location.href = "compare.html";
        });
    }

    // Device filter script
{
    const filterInput = document.querySelector('#device-filter-input');
    const filterButtons = document.querySelectorAll('.filter-button');
    const resetFiltersButton = document.getElementById("reset-filters");
    const emptyMessage = document.querySelector('.filter-empty');
    let selectedCategory = 'all';

    const searchTerm = new URLSearchParams(window.location.search).get('search');
    const categoryTerm = new URLSearchParams(window.location.search).get('category');
    if (searchTerm) {
        filterInput.value = searchTerm;
    }
    if ([...filterButtons].some(button => button.dataset.filter === categoryTerm)) {
        selectedCategory = categoryTerm;
    }

    function filterDevices() {
        const filter = filterInput.value;
        const category = selectedCategory;
        let deviceHtml = "";
        let deviceUi = document.getElementById("deviceUi");
        let matchingDevices = 0;

        deviceUi.classList.remove('device-filter-changing');
        void deviceUi.offsetWidth;

        devices.forEach(device => {
            const deviceTypes = device.type.trim().split(/\s+/);
            const matchesCategory = category === 'all' || deviceTypes.includes(category);
            const matchesSearch = getInfo(device).toLowerCase().includes(filter.trim().toLowerCase());
            const isVisible = matchesCategory && matchesSearch;

            if (isVisible) {
                matchingDevices += 1;
                deviceHtml += formatDevice(device);
            }
        });

        deviceUi.innerHTML = deviceHtml;
        deviceUi.classList.add('device-filter-changing');
        emptyMessage.hidden = matchingDevices > 0;
    }

    function getInfo(card) {
        let info = "";

        info += card.name + card.form + card.cpu + card.gpu + card.ram + card.storage + card.desc + card.type;

        return info;
    }

    filterInput.addEventListener('input', function () {
        filterDevices();
    });

    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            selectedCategory = selectedCategory === button.dataset.filter ? 'all' : button.dataset.filter;
            filterButtons.forEach(function (filterButton) {
                filterButton.classList.toggle('active', filterButton.dataset.filter === selectedCategory);
            });
            filterDevices();
        });
    });

    resetFiltersButton.addEventListener('click', function () {
        filterInput.value = '';
        selectedCategory = 'all';
        filterButtons.forEach(function (filterButton) {
            filterButton.classList.remove('active');
        });
        filterDevices();
    });

    filterButtons.forEach(function (button) {
        button.classList.toggle('active', button.dataset.filter === selectedCategory);
    });
    filterDevices();
}
}