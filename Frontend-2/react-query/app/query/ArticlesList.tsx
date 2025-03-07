import { useQuery } from "@tanstack/react-query";

interface Article {
  id: number;
  title: string;
}

const fetchArticles = async (): Promise<Article[]> => {
  return await fetch("/api/articles").then((res) => res.json());
}

const ArticlesList = () => {
  const { data, isLoading } = useQuery({ queryKey: ["articles"], queryFn: fetchArticles });

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {data?.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
};

export default ArticlesList;