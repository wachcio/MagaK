function Names(props) {
    return (
        <p>
            Na liście znajdują się:{' '}
            {props.userList.map((e, i) => (i < props.userList.length - 1 ? `${e.name}, ` : e.name))}
        </p>
    );
}

export default Names;
