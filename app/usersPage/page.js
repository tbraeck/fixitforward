import axios from 'axios';

export const getStaticProps = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/users');
    const users = res.data.data;

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: {
        users: [],
      },
    };
  }
};

const UsersPage = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
