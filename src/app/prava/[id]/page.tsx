// app/prava/[id]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'
import { CategoryTemplate } from '@/components/CategoryTemplate/CategoryTemplate'
import { getCategoryData } from '@/data/categories'

// 1. Синхронный generateMetadata, возвращает Metadata (может быть async, но типы проще соблюдать синхронно)
export function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Metadata {
  const categoryData = getCategoryData(params.id)

  if (!categoryData) {
    return {
      title: 'Категория не найдена',
      description: 'Запрашиваемая категория водительских прав не найдена',
    }
  }

  return {
    title: categoryData.title,
    description: categoryData.subtitle,
  }
}

// 2. Компонент страницы с правильной типизацией params.id как string
export default function CategoryPage({ params }: { params: { id: string } }) {
  const categoryData = getCategoryData(params.id)

  if (!categoryData) {
    notFound()
  }

  return <CategoryTemplate data={categoryData} />
}
