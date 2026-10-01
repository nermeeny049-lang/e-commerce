import CategoryScreen from "<prefix>/features/categories/screens/categoryScreen";

type Props = { params: Promise<{ id: string }> };

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  return <CategoryScreen id={id} />;
}
