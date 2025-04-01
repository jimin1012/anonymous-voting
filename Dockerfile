# 1. Node.js 이미지 사용
FROM node:18-alpine

# 2. 작업 디렉터리 설정
WORKDIR /app

# 3. package.json과 package-lock.json 복사
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. 소스 코드 복사
COPY . .

# 6. Next.js 빌드 (선택 사항)
RUN npm run build

# 7. 포트 설정 및 실행 명령어
EXPOSE 3000
CMD ["npm", "run", "dev"]
