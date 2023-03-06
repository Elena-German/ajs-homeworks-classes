const typeList = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  // Этот вариант мне кажется логичнее. Если имя или тип не проходят проверку,
  // то игрок вообще не создается и нет смысла создавать свойства.
  // Мы не можем создать игрока без имени или типа персонажа.
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      if (typeList.includes(type)) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
      } else {
        throw new Error('Игрок не создан. Тип персонажа неопределен. Требуется один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
      }
    } else {
      throw new Error('Игрок не создан. Формат имени персонажа - строка, min 2 символа, max 10.');
    }
  }
  /* далее реализовала ваш вариант:
  "присваивать значения this.name или this.type при проверке соответ. аргумента name или type"

      constructor(name, type) {
          if (name.length >= 2 && name.length <= 10) {
              this.name = name;
              if (typeList.includes(type)) {
                  this.type = type;
              } else {
                  throw new Error(`Игрок не создан. Тип персонажа неопределен.
                  Требуется один из типов (строка):
                  Bowman, Swordsman, Magician, Daemon, Undead, Zombie.`);
              }
          } else {
              throw new Error(`Игрок не создан.
              Формат имени персонажа - строка, min 2 символа, max 10.`);
          }
          this.health = 100;
          this.level = 1;
        }
  */

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Здоровье персонажа =0. Нельзя повысить уровень умершего персонажа.');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
