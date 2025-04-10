// src/app/prava/[id]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CategoryTemplate } from '@/components/CategoryTemplate/CategoryTemplate'
import { getCategoryData } from '@/data/categories'

// Page component with explicit types
export default function CategoryPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const categoryData = getCategoryData(params.id)

  if (!categoryData) {
    notFound()
  }

  return <CategoryTemplate data={categoryData} />
}

// Metadata function with explicit types
export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
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