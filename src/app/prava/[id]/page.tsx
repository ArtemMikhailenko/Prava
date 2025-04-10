// src/app/prava/[id]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CategoryTemplate } from '@/components/CategoryTemplate/CategoryTemplate'
import { getCategoryData } from '@/data/categories'
import { JSX } from 'react'

type Props = {
  params: { id: string }
}

// Metadata generator function
export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

// Page component
export default async function CategoryPage({ params }: Props): Promise<JSX.Element> {
  const categoryData = getCategoryData(params.id)

  if (!categoryData) {
    notFound()
  }

  return <CategoryTemplate data={categoryData} />
}