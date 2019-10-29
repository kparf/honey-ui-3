import { useContext } from 'react';
import Post from './Post';
import ApplicationMode from '../../contexts/ApplicationMode';
import range from 'lodash/range';


const padLength = (
  size = 0
) => (
  data = []
) => [...data, ...range(data.length, size).map(() => ({}))];

const Posts = ({ property="posts", data = []}) => {
  const mode = useContext(ApplicationMode);
  const postList = (mode === 'admin') ? padLength(1)(data && data.post) : data.post;

  return (
    <section property={property} className="Posts">
      {
        postList.map(post => <Post property="post" item={post}/>)
      }
    <style jsx>{`
      .Posts {
        
      }
    `}</style>
    </section>
  )
}

export default Posts;