function UserList(props) {
    return (
        <div>
            <p>
                Na liście znajdują się:{' '}
                {props.userList.map((e, i) =>
                    i < props.userList.length - 1 ? `${e.name}, ` : e.name,
                )}
            </p>
            <p>Wszystkich osób jest {props.userList.length}</p>
        </div>
    );
}

export default UserList;
