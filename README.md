# FFmpeg API for n8n Workflows

خدمة بسيطة لتحويل ملفات الصوت باستخدام FFmpeg، يمكن استخدامها مع n8n عبر HTTP Request Node.

## 📦 الميزات

- تستقبل ملف `.pcm` عبر POST
- تحوله إلى `.mp3` باستخدام FFmpeg
- تعيد الملف الناتج للتحميل
- مثالية للعمل مع n8n في Railway

## 🚀 النشر على Railway

1. اضغط "New Project" في Railway.
2. اختر "Deploy from GitHub".
3. تأكد من وجود `Dockerfile` في المشروع.
4. Railway سيبني الخدمة تلقائيًا.

## 🛠 نقطة النهاية (API)

### POST `/convert`

- **Form Field:** `file`
- **نوع البيانات:** ملف `.pcm`
- **الاستجابة:** ملف `.mp3` جاهز للتحميل

## 🧪 مثال استخدام في n8n

- Node: `HTTP Request`
- Method: `POST`
- URL: `http://ffmpeg-service:3000/convert`
- Content-Type: `Form-Data`
- Binary Data: `true`
- Property Name: `data`
- Form Field Name: `file`

## ✅ جاهزة للعمل مع n8n (w / workers)
