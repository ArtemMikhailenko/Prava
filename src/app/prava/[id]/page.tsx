// src/app/prava/[id]/page.tsx

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CategoryTemplate } from '@/components/CategoryTemplate/CategoryTemplate'
import { getCategoryData, categoriesData } from '@/data/categories'

interface PageProps {
  // Next.js ожидает, что params будет Promise<{ id: string }>
  params: Promise<{ id: string }>
}

// 1) Статические параметры для SSG
export function generateStaticParams(): { id: string }[] {
  return Object.keys(categoriesData).map((id) => ({ id }))
}

// 2) Метаданные — тоже асинхронная функция
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const category = getCategoryData(id)

  if (!category) {
    return {
      title: 'Категория не найдена',
      description: 'Запрашиваемая категория водительских прав не найдена',
    }
  }

  return {
    title: category.title,
    description: category.subtitle,
  }
}

// 3) Компонент страницы — асинхронный, чтобы получить params
export default async function CategoryPage({ params }: PageProps) {
  const { id } = await params
  const category = getCategoryData(id)

  if (!category) {
    notFound()
  }

  return <CategoryTemplate data={category} />
}
