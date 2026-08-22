// 1. الدالة المركزية لجلب الدفعة التالية
async function fetchFeed(nextCursor = null) {
  const url = new URL("/api/feed", "https://api.example.com");
  url.searchParams.set("limit", "10");
  
  if (nextCursor) {
    url.searchParams.set("cursor", nextCursor);
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to load feed");
  
  return await response.json(); 
  // الشكل المتوقع للرد: { items: [...], nextCursor: "abc123cursor" }
}

// 2. منطق زر Load More
let currentCursor = null;

async function handleLoadMore() {
  const result = await fetchFeed(currentCursor);
  
  renderPosts(result.items);     // عرض البوستات في الشاشة
  currentCursor = result.nextCursor; // تحديث المؤشر للدفعة القادمة

  if (!currentCursor) { //result.nextCursor === null
    console.log("وصلنا لآخر البيانات المتاحة");
  }
}