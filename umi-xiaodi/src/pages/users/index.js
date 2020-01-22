import Link from 'umi/link'
import styles from './index.css';

export default function() {
  const usersList = [
    {id: 1, name: 'Owen'},
    {id: 2, name: 'Jerry'}
  ]
  return (
    <div className={styles.normal}>
      <h1>用户页user下的index页面</h1>
      <ul>
        {usersList.map(val => (
          <li key={val.id}>
            <Link to={`/users/${val.name}`}>
              {val.name}  
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
