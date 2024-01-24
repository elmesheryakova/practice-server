"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const uuid_1 = require("uuid");
exports.db = {
    senior: [
        {
            id: (0, uuid_1.v4)(),
            theme: 'Основные принципы и языки разработки',
            questions: [
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Что такое Solid?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Какие принципы SOLID вы считаете наиболее важными в контексте фронтенд-разработки, и как вы их применяли в своих проектах?',
                    answer: 'ответ2',
                    level: 'middle',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Какие принципы проектирования и архитектурные шаблоны вы предпочитаете при разработке фронтенд-приложений, и почему?',
                    answer: 'ответ2',
                    level: 'middle',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Расскажите о вашем опыте применения паттернов проектирования в контексте разработки пользовательского интерфейса.',
                    answer: 'ответ2',
                    level: 'middle',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Что такое Политика безопасности контента?',
                    answer: 'ответ2',
                    level: 'middle',
                }
            ],
        },
        {
            id: (0, uuid_1.v4)(),
            theme: 'Фронтенд-разработка и технологии',
            questions: [
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Каковы основные различия между SPA и SSR',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Объясните, как работает цикл событий JavaScript.',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Опыт использования инструментов и методов отладки для фронтенд-разработки',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Опыт работы с TypeScript',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Расскажите о вашем опыте внедрения TypeScript в существующий проект и обработке сложностей при миграции',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Какие продвинутые концепции TypeScript вы использовали в своих проектах, такие как mapped types, conditional types и infer',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Что такое Docker и чем он может быть полезен фронтенд-разработчику?',
                    answer: 'ответ1',
                    level: 'light',
                }
            ],
        },
        {
            id: (0, uuid_1.v4)(),
            theme: 'Тестирование',
            questions: [
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Какие инструменты и фреймворки для тестирования вы предпочитаете и почему?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Какие уровни тестирования вы знаете?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Можно ли добиться 100%-го покрытия тестами? Как бы вы это обеспечили?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Разница между Shallowmount и Mount в Vue Test Utils',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Как реализовать эффективное юнит-тестирование для компонентов с использованием моков и стабов?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Как решить проблемы с тестированием компонентов, которые зависят от сторонних библиотек или внешних ресурсов?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Какие принципы и практики вы применяете для создания компонентов, легко тестируемых и поддерживаемых в будущем?',
                    answer: 'ответ1',
                    level: 'light',
                }
            ],
        },
        {
            id: (0, uuid_1.v4)(),
            theme: 'Оптимизация производительности',
            questions: [
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Как бы вы оптимизировали производительность веб-сайта?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Что такое Webpack и какую роль он играет во фронтенд-разработке?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Цель Babel в современной фронтенд-разработке',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Как вы обрабатываете кэширование браузера для внешних приложений?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Какие архитектурные решения вы применяли для обеспечения масштабируемости и гибкости фронтенд-приложений?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Сценарий отладки сложной проблемы в Vue.js',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Сценарий улучшения производительности приложения Vue.js.',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Наиболее распространенные проблемы с производительностью интерфейсных приложений и их устранение',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Какие показатели производительности вы считаете важными при разработке?',
                    answer: 'ответ1',
                    level: 'light',
                }
            ],
        },
        {
            id: (0, uuid_1.v4)(),
            theme: 'Vue.js',
            questions: [
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Почему вы предпочитаете Vue.js другим интерфейсным фреймворкам?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Реактивность в Vue.js',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Что такое виртуальный DOM?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Однофайловые компоненты.',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Асинхронные компоненты.',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Разрешение циклических зависимостей между компонентами.',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Цель nextTick в VueJS.',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Работа с состоянием приложения в Vue.js.',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Вотчер в Vue.js',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Разница между Vue 2 и Vue 3.',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Composition API в Vue.',
                    answer: 'ответ1',
                    level: 'light',
                }
            ],
        },
        {
            id: (0, uuid_1.v4)(),
            theme: 'Микрофронтенды',
            questions: [
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Что такое микрофронтенды и в чем основное отличие от монолитной архитектуры?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Какие преимущества микрофронтендов в сравнении с монолитной архитектурой?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Расскажите о вашем опыте внедрения и использования микрофронтендов в проектах. Какие вызовы вы сталкивались и как их решали?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Как решаются проблемы с общими ресурсами, такими как шрифты, изображения или сторонние библиотеки, в микрофронтендах?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Какие антипаттерны или распространенные ошибки вы видели при работе с микрофронтендами и как их избежать?',
                    answer: 'ответ1',
                    level: 'light',
                }
            ],
        },
        {
            id: (0, uuid_1.v4)(),
            theme: 'HTTP и сетевыми протоколы',
            questions: [
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Расскажите о преимуществах и особенностях протоколов HTTP/2 и HTTP/3.',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Какие HTTP-заголовки считаете важными для оптимизации производительности и безопасности веб-приложений?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Какие меры безопасности применяются на уровне HTTP (например, HTTPS) и как они влияют на защиту данных пользователя?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Расскажите о своем опыте использования заголовков для управления кэшированием и обеспечения безопасности.',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Что такое REST и RESTful сервисы?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Расскажите о своем опыте работы с RESTful API: проблемы, с которыми вы сталкивались, и способы их решения.',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'В чем основные отличия между REST и GraphQL?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Какие преимущества и недостатки GraphQL с точки зрения веб-разработки?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Расскажите о своем опыте использования GraphQL в проектах',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Как работают WebSockets и в чем их преимущества по сравнению с традиционными методами обмена данными?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'В каких сценариях вы предпочли бы использовать WebSockets, а не HTTP?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Что такое JWT и какие преимущества он предоставляет для аутентификации и авторизации в веб-приложениях?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Как обеспечить безопасность JWT, особенно при передаче через незащищенные каналы?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Как работает механизм CORS, и какие проблемы он решает в веб-разработке?',
                    answer: 'ответ1',
                    level: 'light',
                },
                {
                    id: (0, uuid_1.v4)(),
                    question: 'Какие меры можно принять для управления и настройки CORS в приложении?',
                    answer: 'ответ1',
                    level: 'light',
                }
            ],
        },
    ],
};
