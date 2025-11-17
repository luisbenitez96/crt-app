// src/app/products/[slug]/page.tsx

interface ProductPageProps {
    params: {
      slug: string;
    };
  }
  
  export default function ProductDetailPage({ params }: ProductPageProps) {
    return (
      <main className="min-h-screen p-6">
        <h1 className="text-xl font-semibold mb-2">
          Detalle de producto: {params.slug}
        </h1>
        <p className="text-sm text-gray-600">
          Aquí irá la ficha del producto (imágenes, descripción, CTA a WhatsApp).
        </p>
      </main>
    );
  }
  