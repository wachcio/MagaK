import Names from './Names';
import UserListCount from './UserListCounti';

function UserList(props) {
    return (
        <div>
            <Names userList={props.userList} />
            <UserListCount userList={props.userList} />
        </div>
    );
}

export default UserList;
