import BooksList from "./components/bookslist/BooksList";
import Article from "./components/article/Article";

import data from './data/data'

function App() {
  //console.log(data);
  return (
    <div>
        {data.map(oneArticle =>
            <Article propsData=
                {{
                    key:oneArticle.id,
                    title:oneArticle.title,
                    description:oneArticle.description
                }} />)
              }

     <BooksList/>
    </div>
  );
}

export default App;
