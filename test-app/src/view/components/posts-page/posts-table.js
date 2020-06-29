import React from 'react';

const PostsTable = ({postsList}) => {
  return <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Заголовок</th>
      <th scope="col">Пост</th>
    </tr>
  </thead>
  <tbody>
    {postsList.map(e => {
      return <tr>
        <th scope="row">{e.id}</th>
        <td>{e.title}</td>
        <td>{e.body}</td>
      </tr>
    })}
  </tbody>
</table>
}

export default PostsTable;