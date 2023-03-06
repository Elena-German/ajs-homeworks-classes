import Bowerman from './Bowerman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

// для устранения ошибки линтера 'is defined but never used   no-unused-vars'
Bowerman();
Swordsman();
Magician();
Daemon();
Undead();
Zombie();

/* const pl = new Zombie('lena');
alert(`создали нового ${pl.name}
${pl.type}
${pl.health}
${pl.level}
${pl.attack}
${pl.defence}
`);
pl.damage(15);
alert(`нанесли урон 15 ${pl.name}
${pl.type}
${pl.health}
${pl.level}
${pl.attack}
${pl.defence}
`);
pl.levelUp();
alert(`повысили уровень ${pl.name}
${pl.type}
${pl.health}
${pl.level}
${pl.attack}
${pl.defence}
`);
*/
