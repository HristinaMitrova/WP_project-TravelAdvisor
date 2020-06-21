# WP_project-TravelAdvisor
Web programming project


Проект по предметот Веб Програмирање на ФИНКИ учебна 2019/20 година.

Студент: Христина Митрова 

![Screenshot1](trlogo222.png)  


### Тема и краток опис:
Апликација која ќе има можност за пребарување на reviews од други корисници за одредени патувања/дестинации.
Да нуди можност за преглед на агенции кои вршат организација на патувања за посакуваната дестинација, мапирање на агенциите на мапа, пишување соптвено review по креирање на user account, совет од chatbot за одредени поволности околу дестинацијата.




### Користени технологии за backend:
Java Spring Boot

Слоевит дизајн со CRUD функционалности.

### Користени технологии за база:
MySQL

Во application properties е наведена конфигурацијата за поврзување со базата.

### Користени технологии за frontend: 
React.js

Во директориумот со име frontend1 е сместен истоимениот дел.
Функционалности: CRUD functionalties, chatbot кој нуди совети околу избор на дестинација, мапирање на туристички агенции на мапата на нашата држава, автентикација на корисник со Firebase при логирање и регистрација, пребарување на постоечки аранжмани преку Search компонента,можност за додавање на слика во Reviews со drag&drop, Geo-chart со кој е претставена атрактивноста на дестинацијата според geo мапирање.
Дополнителни технологии:
    "axios",
    "react-fontawesome",
    "bootstrap",
    "react-bootstrap",
    "reactstrap",
    "styled-components",
    "firebase",
    "moment",
    "react-dom",
    "react-dropzone",
    "react-google-charts",
    "react-map-gl",
    "react-responsive-carousel",
    "react-router-dom",
    "react-simple-chatbot".
    
   



За стартување на backend делот потребно е да се стартува DemoApplication.java класата (demo/src/main/java/com/example/demo/DemoApplication.java), а за frontend делот потребно е да се навигира во фолдерот frontend1 (demo/frontend/frontend1), да се инсталирааат потребните зависности за react (npm install), и со npm start (наредбите може да се извршат во терминал) да се стартува React апликацијата (која може да се тестира во browser на http://localhost:3000/ ).

Развојна околина и за frontened и за backend која ја користев: IntelliJ, а за базата MySQL Workbench 8.0 CE.

