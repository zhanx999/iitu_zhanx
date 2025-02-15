import React, { useState } from 'react';
import "./CourseEnrollment.css"

const CourseEnrollment = ({courses}) => {

  // Инициализируем состояние для хранения количества студентов для каждого курса
  const [studentCounts, setStudentCounts] = useState(
    courses.reduce((acc, course) => {
      acc[course.id] = 0; // Начальное количество студентов для каждого курса
      return acc;
    }, {})
  );

  // Функция для увеличения количества студентов
  const incrementCount = (courseId) => {
    setStudentCounts((prevCounts) => ({
      ...prevCounts,
      [courseId]: prevCounts[courseId] + 1,
    }));
  };

  // Функция для уменьшения количества студентов
  const decrementCount = (courseId) => {
    setStudentCounts((prevCounts) => ({
      ...prevCounts,
      [courseId]: Math.max(prevCounts[courseId] - 1, 0), // Не допускаем отрицательных значений
    }));
  };

  return (

    <div id='enrollment'>
    <h2 className='title_reg'>Регистрация на курсы</h2>
    <div className="course-list">

      {courses.map((course) => (
        <div key={course.id} className="course-item">
          <h3>{course.title}</h3>
          <p>Количество зарегистрированных студентов: {studentCounts[course.id]}</p>
          <div className="button-group">
            <button onClick={() => decrementCount(course.id)}>-</button>
            <button onClick={() => incrementCount(course.id)}>+</button>
          </div>
        </div>
      ))}
    </div>

    </div>
  );
};

export default CourseEnrollment;
