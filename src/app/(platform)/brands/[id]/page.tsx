import BrandScreen from "<prefix>/features/brands/screens/BrandScreen";

type Props = { params: Promise<{ id: string }> };

export default async function BrandPage({ params }: Props) {
  const { id } = await params;
  return <BrandScreen id={id} />;
}
