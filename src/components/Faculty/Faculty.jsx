import React from "react";
import "./Faculty.css"; // Подключаем стили

const students = [
  { id: 1, name: "Абдырасулов Динмухаммет Бекарысович", gpa: 3.8, role: "Староста" },
  { id: 2, name: "Биарстан Абылай Рауанұлы", gpa: 3.5, role: "Активист" },
  { id: 3, name: "Бурленова Амина Арманқызы", gpa: 3.9, role: "Лучший в программировании" },
  { id: 4, name: "Ғалымжанұлы Жандос", gpa: 3.2, role: "Участник олимпиад" },
  { id: 5, name: "Елік Бахтияр Серікұлы", gpa: 3.7, role: "Спортсмен" },
  { id: 6, name: "Ермұқан Әділет Әбдірқанұлы", gpa: 3.6, role: "Творческая личность" },
  { id: 7, name: "Жалғасов Бексұлтан Қайратұлы", gpa: 3.3, role: "Общественная деятельность" },
  { id: 8, name: "Жолдас Əлнұр Нұрланұлы", gpa: 3.4, role: "Дизайнер" },
  { id: 9, name: "Жолдасбек Төрежан Бекзатұлы", gpa: 3.8, role: "Программист" },
  { id: 10, name: "Ибраимов Даурен Сансызбаевич", gpa: 3.5, role: "Инженер" },
  { id: 11, name: "Идриш Медет Маратұлы", gpa: 3.1, role: "Фотограф" },
  { id: 12, name: "Иса Диас Мырзағұлұлы", gpa: 3.0, role: "Музыкант" },
  { id: 13, name: "Казанцев Тамерлан Константинович", gpa: 3.7, role: "Научный исследователь" },
  { id: 14, name: "Мұратбайқызы Гүлнәзік", gpa: 3.6, role: "Журналист" },
  { id: 15, name: "Оңласын Мереке Ғалымжанқызы", gpa: 3.9, role: "Программист" },
  { id: 16, name: "Сағынбаев Алишер Болатбекұлы", gpa: 3.5, role: "Менеджер", phone: "87716505520" },
  { id: 17, name: "Серікқали Ертай Акимұлы", gpa: 3.2, role: "Аналитик" },
  { id: 18, name: "Тен Нариман Тимурович", gpa: 3.8, role: "Разработчик игр" },
  { id: 19, name: "Уранбайқызы Жансая", gpa: 3.4, role: "Маркетолог" },
  { id: 20, name: "Хапез Абылай Ерланұлы", gpa: 3.3, role: "Киберспортсмен" },
];

const Faculty = () => {
  return (
    <section className="faculty-container" id='faculty'>
      <h2 className="faculty-title">Faculty Section</h2>
      <p className="faculty-description">
        Display information about faculty members or your groupmates.
      </p>
      <div className="faculty-list">
        {students.map((student) => (
          <div key={student.id} className="faculty-card">
            <h3 className="student-name">{student.name}</h3>
            <p className="student-info">📊 GPA: <strong>{student.gpa}</strong></p>
            <p className="student-info"> Роль: <strong>{student.role}</strong></p>
            {student.phone && (
              <p className="student-info">📞 Телефон: <strong>{student.phone}</strong></p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faculty;
