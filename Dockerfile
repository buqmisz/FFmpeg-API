FROM node:20

# تثبيت ffmpeg
RUN apt-get update && apt-get install -y ffmpeg && apt-get clean

# نسخ الملفات
WORKDIR /app
COPY . .

# تثبيت الاعتمادات
RUN npm install

# تشغيل السيرفر
CMD ["node", "server.js"]
