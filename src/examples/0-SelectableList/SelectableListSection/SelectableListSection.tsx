import { SelectableList } from '../SelectableList/SelectableList';
import { charactersList, vegetablesList } from './data';
import classes from './SelectableListSection.module.css';

type Vegetable = {
  id: string;
  label: string;
  icon: string;
};

type Character = {
  id: string;
  firstName: string;
  lastName: string;
  photo: string;
};

export const SelectableListSection = () => {
  return (
    <div className={classes.section}>
      <div>
        <h2>Vegetables</h2>
        <SelectableList
          items={vegetablesList}
          renderItem={({ label, icon }) => `${icon} ${label}`}
        />
      </div>
      <div>
        <h2>Game of Thrones characters list</h2>
        <SelectableList
          items={charactersList}
          renderItem={(char) => <CharacterListItem character={char} />}
        />
      </div>
    </div>
  );
};

const CharacterListItem = ({ character }: { character: Character }) => {
  return (
    <div className={classes.charItem}>
      <img src={character.photo} alt="" className={classes.charPhoto} />
      <div>
        {character.firstName} {character.lastName}
      </div>
    </div>
  );
};
