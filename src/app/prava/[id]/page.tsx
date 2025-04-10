import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CategoryTemplate } from '@/components/CategoryTemplate/CategoryTemplate';
import { getCategoryData } from '@/data/categories';

// Генерация метаданных для страницы
export async function generateMetadata({ params }: { params: { id: any } }): Promise<Metadata> {
  const categoryData = getCategoryData(params.id);
  
  if (!categoryData) {
    return {
      title: 'Категория не найдена',
      description: 'Запрашиваемая категория водительских прав не найдена'
    };
  }
  
  return {
    title: categoryData.title,
    description: categoryData.subtitle
  };
}

export default function CategoryPage({ params }: { params: { id: any } }) {
  const categoryData = getCategoryData(params.id);
  
  // Если категория не найдена, отдаем 404
  if (!categoryData) {
    notFound();
  }
  
  return <CategoryTemplate data={categoryData} />;
}