import mongoose from 'mongoose';

// 환경 변수에서 MongoDB 연결 URL 가져오기 (.env.local 파일에서 설정해야 함)
const MONGODB_URI = process.env.MONGODB_URI;

// 만약 MONGODB_URI가 설정되지 않았다면 오류 발생
if (!MONGODB_URI) {
  throw new Error('⚠️ MONGODB_URI 환경 변수가 설정되지 않았습니다.');
}

// 전역 변수를 활용해 캐시된 연결 정보 저장 (Next.js에서는 핫 리로드 시 여러 번 연결 방지)
let cached = global.mongoose || { conn: null, promise: null };

/**
 * MongoDB 데이터베이스에 연결하는 함수
 * - 이미 연결된 경우 기존 연결을 반환 (중복 연결 방지)
 * - 처음 연결하는 경우 새로운 MongoDB 연결을 생성
 */
export async function connectToDatabase() {
  // 이미 연결된 경우 기존 연결 반환 (불필요한 재연결 방지)
  if (cached.conn) return cached.conn;

  // 아직 연결되지 않았다면 새로운 연결 생성
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        authSource: 'admin', // MongoDB 인증을 위한 DB (Docker 실행 시 설정 필요)
      })
      .then((mongoose) => mongoose); // 연결 후 Mongoose 객체 반환
  }

  // 연결이 완료되면 캐시에 저장하고 반환
  cached.conn = await cached.promise;
  console.log('✅ MongoDB 연결 성공!');
  return cached.conn;
}
