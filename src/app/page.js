import Image from "next/image";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>익명 투표</h1>
      <p>아래에서 투표를 선택하세요:</p>
      <form>
        <div>
          <input type="radio" id="option1" name="vote" value="option1" />
          <label htmlFor="option1">옵션 1</label>
        </div>
        <div>
          <input type="radio" id="option2" name="vote" value="option2" />
          <label htmlFor="option2">옵션 2</label>
        </div>
        <div>
          <input type="radio" id="option3" name="vote" value="option3" />
          <label htmlFor="option3">옵션 3</label>
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>투표하기</button>
      </form>
    </div>
  );
}
