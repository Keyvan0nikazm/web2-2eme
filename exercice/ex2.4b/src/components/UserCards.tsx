import { User } from '../type';
import './UserCards.css';

interface UserCardsProps {
    users : User[];
}

const UserCards = (props: UserCardsProps) => {
    return (
        <div>
            <ul>
                {props.users.map((user) => (
                    <li>
                      <div className="user-card">
                        <h2>{user.name}</h2> 
                        <div>{user.age} </div> 
                        <div className={user.online ? "user-card--online" : "user-card--offline"}>
                            {user.online ? "en ligne" : "hors ligne"}
                        </div>
                      </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserCards;