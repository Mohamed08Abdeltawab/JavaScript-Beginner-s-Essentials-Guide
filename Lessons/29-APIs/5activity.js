async function apiFetch(endpoint, options = {}) {
  // 1. الترويسات الافتراضية لأي طلب JSON
  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // 2. دمج الإعدادات والترويسات
  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  // 3. إرسال طلب الشبكة
  const response = await fetch(endpoint, config);

  // 4. فحص نجاح الـ HTTP Status (200 - 299)
  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
  }

  // 5. التعامل الوقائي مع الردود الخالية من المحتوى
  if (response.status === 204) {
    return null;
  }

  // 6. فك وقراءة البيانات بصيغة JSON
  return response.json();
}