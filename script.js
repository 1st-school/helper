// --- БАЗА ДАННЫХ ПРОИЗВЕДЕНИЙ (На основе твоего списка) ---
const libraryData = [
    {
        name: "Александр Сергеевич Пушкин",
        works: [
            {
                title: "Капитанская дочка",
                history: "Исторический роман, написанный в 1836 году. Пушкин работал над ним во время изучения архивов пугачёвского бунта. Он специально ездил на Урал и в Поволжье, чтобы пообщаться с очевидцами событий. В произведении отразились размышления писателя о дворянской чести, долге и бессмысленности «русского бунта».",
                links: {
                    text: "https://ilibrary.ru/text/107/p.1/index.html",
                    audio: "https://www.youtube.com/results?search_query=капитанская+дочка+аудиокнига",
                    movie: "https://www.youtube.com/results?search_query=капитанская+дочка+фильм",
                    theater: "https://www.youtube.com/results?search_query=капитанская+дочка+спектакль",
                    images: "https://www.google.com/search?tbm=isch&q=иллюстрации+капитанская+дочка"
                }
            },
            {
                title: "Пиковая дама",
                history: "Мистическая повесть 1834 года. Сюжет был подсказан князем Голицыным, который рассказал Пушкину, как его бабушка отыгралась в карты благодаря секрету, узнанному от графа Сен-Жермена. Пушкин превратил этот анекдот в глубокую психологическую драму о судьбе и азарте.",
                links: {
                    text: "https://ilibrary.ru/text/479/p.1/index.html",
                    audio: "https://www.youtube.com/results?search_query=пиковая+дама+пушкин+аудиокнига",
                    movie: "https://www.youtube.com/results?search_query=пиковая+дама+фильм",
                    theater: "https://www.youtube.com/results?search_query=пиковая+дама+опера",
                    images: "https://www.google.com/search?tbm=isch&q=пиковая+дама+иллюстрации"
                }
            },
            {
                title: "Цыганы",
                history: "Поэма, завершенная в 1824 году. Одно из последних романтических произведений поэта («южных поэм»). В ней Пушкин развенчивает миф о «естественном человеке», показывая, что страсти кипят везде, даже вдали от цивилизации.",
                links: {
                    text: "https://ilibrary.ru/text/446/p.1/index.html",
                    audio: "https://www.youtube.com/results?search_query=цыганы+пушкин+аудио",
                    movie: "https://www.youtube.com/results?search_query=цыганы+пушкин+экранизация",
                    theater: "",
                    images: "https://www.google.com/search?tbm=isch&q=поэма+цыганы+иллюстрации"
                }
            }
        ]
    },
    {
        name: "Николай Васильевич Гоголь",
        works: [
            {
                title: "Шинель",
                history: "Повесть вышла в 1842 году. Замысел возник из канцелярского анекдота о чиновнике, потерявшем ружье, на которое долго копил. Гоголь трансформировал смешную историю в трагедию «маленького человека», Акакия Акакиевича, для которого шинель стала смыслом жизни.",
                links: {
                    text: "https://ilibrary.ru/text/978/p.1/index.html",
                    audio: "https://www.youtube.com/results?search_query=шинель+гоголь+аудиокнига",
                    movie: "https://www.youtube.com/results?search_query=шинель+фильм",
                    theater: "https://www.youtube.com/results?search_query=шинель+спектакль+современник",
                    images: "https://www.google.com/search?tbm=isch&q=шинель+гоголь+иллюстрации"
                }
            },
            {
                title: "Ревизор",
                history: "Комедия 1836 года. Сюжет подсказал Пушкин. Гоголь хотел собрать «в одну кучу» все дурное в России и посмеяться над этим. Пьеса вызвала грандиозный скандал, а Николай I после премьеры сказал: «Всем досталось, а мне больше всех!».",
                links: {
                    text: "https://ilibrary.ru/text/473/p.1/index.html",
                    audio: "https://www.youtube.com/results?search_query=ревизор+аудиоспектакль",
                    movie: "https://www.youtube.com/results?search_query=ревизор+фильм",
                    theater: "https://www.youtube.com/results?search_query=ревизор+малый+театр",
                    images: "https://www.google.com/search?tbm=isch&q=ревизор+иллюстрации"
                }
            }
        ]
    },
    {
        name: "Михаил Юрьевич Лермонтов",
        works: [
            {
                title: "Мцыри",
                history: "Романтическая поэма 1839 года. Замысел возник после поездки Лермонтова по Военно-Грузинской дороге, где он встретил старого монаха. Тот рассказал историю своей жизни: будучи ребенком, он был пленен генералом Ермоловым. Образ Мцыри стал символом свободы и борьбы.",
                links: {
                    text: "https://ilibrary.ru/text/1188/p.1/index.html",
                    audio: "https://www.youtube.com/results?search_query=мцыри+аудиокнига",
                    movie: "https://www.youtube.com/results?search_query=мцыри+мультфильм",
                    theater: "https://www.youtube.com/results?search_query=мцыри+спектакль",
                    images: "https://www.google.com/search?tbm=isch&q=мцыри+иллюстрации"
                }
            }
        ]
    },
    {
        name: "Уильям Шекспир",
        works: [
            {
                title: "Ромео и Джульетта",
                history: "Трагедия написана около 1595 года. Сюжет не оригинален — Шекспир заимствовал его из поэмы Артура Брука, который, в свою очередь, взял его у итальянских новеллистов. Однако Шекспир углубил характеры героев, превратив их в вечный символ любви, побеждающей вражду.",
                links: {
                    text: "http://lib.ru/SHAKESPEARE/romeo.txt",
                    audio: "https://www.youtube.com/results?search_query=ромео+и+джульетта+аудиокнига",
                    movie: "https://www.youtube.com/results?search_query=ромео+и+джульетта+фильм+дзеффирелли",
                    theater: "https://www.youtube.com/results?search_query=ромео+и+джульетта+балет",
                    images: "https://www.google.com/search?tbm=isch&q=romeo+and+juliet+illustrations"
                }
            }
        ]
    },
    {
        name: "Александр Грин",
        works: [
            {
                title: "Алые паруса",
                history: "Повесть-феерия, законченная в 1923 году. Идея родилась у Грина, когда он увидел в витрине магазина игрушечную лодочку с белым парусом. Он мысленно «перекрасил» парус в красный цвет, решив, что так он станет символом ликующей радости и исполнившейся мечты.",
                links: {
                    text: "https://ilibrary.ru/text/1560/p.1/index.html",
                    audio: "https://www.youtube.com/results?search_query=алые+паруса+аудиокнига",
                    movie: "https://www.youtube.com/results?search_query=алые+паруса+фильм",
                    theater: "https://www.youtube.com/results?search_query=алые+паруса+рок+опера",
                    images: "https://www.google.com/search?tbm=isch&q=алые+паруса+иллюстрации"
                }
            }
        ]
    },
    {
        name: "Антуан де Сент-Экзюпери",
        works: [
            {
                title: "Маленький принц",
                history: "Аллегорическая повесть-сказка, написанная в 1942 году в Нью-Йорке, когда автор был в изгнании. Рисунки в книге выполнены самим автором. Это философская история о долге, верности и ответственности: «Мы в ответе за тех, кого приручили».",
                links: {
                    text: "http://lib.ru/EKZUPERY/m_princ.txt",
                    audio: "https://www.youtube.com/results?search_query=маленький+принц+аудиокнига",
                    movie: "https://www.youtube.com/results?search_query=маленький+принц+мультфильм",
                    theater: "https://www.youtube.com/results?search_query=маленький+принц+спектакль",
                    images: "https://www.google.com/search?tbm=isch&q=маленький+принц+рисунки+экзюпери"
                }
            }
        ]
    },
    {
        name: "В.М. Шукшин",
        works: [
            {
                title: "Чудик (и другие рассказы)",
                history: "Рассказы Шукшина посвящены простым деревенским людям со своеобразным характером. Герои, которых автор называл «чудиками», часто попадают в нелепые ситуации, но обладают чистой душой и стремлением к правде, которого так не хватает в черством городском мире.",
                links: {
                    text: "http://lib.ru/SHUKSHIN/chudik.txt",
                    audio: "https://www.youtube.com/results?search_query=шукшин+рассказы+аудио",
                    movie: "https://www.youtube.com/results?search_query=живет+такой+парень+фильм",
                    theater: "https://www.youtube.com/results?search_query=рассказы+шукшина+спектакль",
                    images: "https://www.google.com/search?tbm=isch&q=шукшин+чудик+иллюстрации"
                }
            }
        ]
    },
     {
        name: "Иван Сергеевич Тургенев",
        works: [
            {
                title: "Ася",
                history: "Повесть 1858 года. Написана в Германии. В основе сюжета — сложная история любви неуверенного в себе господина Н.Н. и эксцентричной девушки Аси (внебрачной дочери барина). Тургенев ставит вопрос о «лишних людях» и их неспособности к сильным поступкам ради любви.",
                links: {
                    text: "https://ilibrary.ru/text/1039/p.1/index.html",
                    audio: "https://www.youtube.com/results?search_query=тургенев+ася+аудиокнига",
                    movie: "https://www.youtube.com/results?search_query=ася+фильм",
                    theater: "",
                    images: "https://www.google.com/search?tbm=isch&q=тургенев+ася+иллюстрации"
                }
            }
        ]
    }
];

// --- ЛОГИКА ПРИЛОЖЕНИЯ ---

const authorsList = document.getElementById('authorsList');
const mainContainer = document.getElementById('mainContainer');
const modal = document.getElementById('workModal');
const closeModal = document.querySelector('.close-modal');
const searchInput = document.getElementById('searchInput');

// 1. Рендер списка авторов
function renderAuthors(filter = "") {
    authorsList.innerHTML = "";
    
    libraryData.forEach(author => {
        if (author.name.toLowerCase().includes(filter.toLowerCase())) {
            const li = document.createElement('li');
            li.textContent = author.name;
            li.onclick = () => showAuthorWorks(author);
            authorsList.appendChild(li);
        }
    });
}

// 2. Отображение произведений автора
function showAuthorWorks(authorData) {
    // Подсветка активного автора
    const allAuthors = authorsList.querySelectorAll('li');
    allAuthors.forEach(li => li.classList.remove('active'));
    // (В реальном проекте можно добавить ID, здесь упростим)
    event.target.classList.add('active');

    // Формируем HTML для главной области
    let htmlContent = `
        <div class="author-header">${authorData.name}</div>
        <div class="works-grid">
    `;

    authorData.works.forEach((work, index) => {
        htmlContent += `
            <div class="work-card" onclick="openModal('${authorData.name}', ${index})">
                <h3>${work.title}</h3>
                <p>Нажмите, чтобы открыть материалы</p>
            </div>
        `;
    });

    htmlContent += `</div>`;
    mainContainer.innerHTML = htmlContent;
}

// 3. Открытие модального окна
function openModal(authorName, workIndex) {
    const author = libraryData.find(a => a.name === authorName);
    const work = author.works[workIndex];

    document.getElementById('modalTitle').textContent = work.title;
    document.getElementById('modalAuthor').textContent = author.name;
    document.getElementById('modalHistory').textContent = work.history;

    // Установка ссылок
    document.getElementById('btnText').href = work.links.text || "#";
    document.getElementById('btnAudio').href = work.links.audio || "#";
    document.getElementById('btnMovie').href = work.links.movie || "#";
    document.getElementById('btnTheater').href = work.links.theater || "#";
    document.getElementById('btnIllustrations').href = work.links.images || "#";

    // Скрываем кнопки, если ссылок нет (пустые)
    checkLink('btnMovie', work.links.movie);
    checkLink('btnTheater', work.links.theater);

    modal.style.display = "flex";
}

function checkLink(id, url) {
    const btn = document.getElementById(id);
    if (!url) btn.style.display = "none";
    else btn.style.display = "flex";
}

// 4. Закрытие модального окна
closeModal.onclick = () => { modal.style.display = "none"; }
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 5. Поиск
searchInput.addEventListener('input', (e) => {
    renderAuthors(e.target.value);
});

// Инициализация
renderAuthors();
