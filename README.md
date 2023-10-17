# React + TypeScript + Vite + React-Hook-Form + Material UI

1. npm install
2. npm run dev

Utwórz stronę z formularzem w React

Formularz powinien się składać z:

- dropdownu z wartościami Afryka, Ameryka Południowa, Ameryka Północna, Antarktyda, Australia, Azja, Europa - label Kontynent
- input tekstowy - label Imie, pole wymagane
- input tekstowy - label Nazwisko
- datepicker - Data urodzenia
- przycisk „wyślij” jako submit formularza, wtedy uruchamiana jest walidacja

Walidacja:
• gdy z dropdownu zostanie wybrana wartość „Europa” a w inpucie nazwiska ilość znaków będzie mniejsza niż 2 powinna pokazać się wiadomość "Nie spełnione kryteria" pod dropdownem
• Jeśli pole wymagane nie zostanie wypełnione powinien pod tym polem pokazać się błąd "To pole jest wymagane"
• Jeśli data urodzenia będzie większa niż dzisiejsza data przycisk „wyślij” powinien stać się nieaktywny
• Jeśli użytkownik jest starszy niż 60 lat, zwiększ dwukrotnie wielkość font-size na całej stronie
• gdy wszystkie walidacje przejdą pomyślnie po kliknięciu w „wyślij” wyświetl na ekranie sukces, poprzez alert -> alert('sukces')

Formularz musi być ostylowany z wykorzystaniem biblioteki komponentów jak np material ui, ant design
do komponentów z biblioteki komponentów mają być przekazywane tylko te argumenty, które nie są domyślne i są potrzebne do działania aplikacji
jeśli chodzi o formularz jest dowolność, można użyć do tego biblioteki, lub korzystać tylko z Reacta
Kod powinien być udostępniony w formie linku na publicznym repozytorium na github lub gitlab
