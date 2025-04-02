
import { connectToDatabase } from '../../../lib/mongodb';

export default async function vote() {  
    // MongoDB 연결
  await connectToDatabase();

 
  return (
    <div>
      <h2>몽고 연결 완!</h2>
    </div>
  );
}
