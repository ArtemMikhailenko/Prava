// src/app/prava/[id]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CategoryTemplate } from '@/components/CategoryTemplate/CategoryTemplate'
import { getCategoryData } from '@/data/categories'

// Custom interface that matches the error message requirements
interface PageProps {
  params: Promise<{ id: string }>
}

// Page component
export default async function CategoryPage({ params }: PageProps) {
  // Resolve the params promise
  const resolvedParams = await params;
  const categoryData = getCategoryData(resolvedParams.id)

  if (!categoryData) {
    notFound()
  }

  return <CategoryTemplate data={categoryData} />
}

// Metadata function - also needs to handle promise params
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Resolve the params promise
  const resolvedParams = await params;
  const categoryData = getCategoryData(resolvedParams.id)

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