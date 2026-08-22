async function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
  try {
    const response = await fetch(url, options);

    // لو الخطأ من السيرفر (5xx) نقوم برمي خطأ ليتم اصطياده وإعادة المحاولة
    if (!response.ok) {
      if (response.status >= 500 && retries > 0) {
        throw new Error(`Server Error: ${response.status}`);
      }
      throw new Error(`Request failed with status: ${response.status}`);
    }

    return await response.json();

  } catch (error) {
    // التوقف التام عند استنفاد كل المحاولات المتاحة
    if (retries === 0) {
      console.error("All retry attempts failed:", error.message);
      throw error;
    }

    console.warn(`Attempt failed. Retrying in ${delay}ms... (Remaining: ${retries})`);
    
    // الانتظار مع مضاعفة وقت التأخير للمرة القادمة
    await new Promise((resolve) => setTimeout(resolve, delay));
    return fetchWithRetry(url, options, retries - 1, delay * 2);
  }
}

fetchWithRetry("exampl", {}, 3, 1000)