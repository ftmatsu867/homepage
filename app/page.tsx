import Image from "next/image";
export default function Home() {
  return (
    <main className="max-w-4xl min-h-screen bg-white mx-auto px-4">
      <h1 className="text-4xl py-8 mb-8 text-center border-b-4">婦中薬局</h1>
      <section className="flex justify-between">
        <div className="flex-grow mr-12">
          <div className="flex border-b-2 py-2">
            <span className="w-40">所在地</span>
            <span>〒939-2721 富山県富山市板倉256-1</span>
          </div>
          <div className="flex border-b-2 py-2">
            <span className="w-40">TEL</span>
            <span>076-481-6505</span>
          </div>
          <div className="flex border-b-2 py-2">
            <span className="w-40">FAX</span>
            <span>076-481-6545</span>
          </div>
          <div className="flex py-2">
            <span className="w-40">営業時間</span>
            <div className="space-y-3">
              <p className="border-b-2">月: 9:00~18:30</p>
              <p className="border-b-2">火: 9:00~18:30</p>
              <p className="border-b-2">水: 9:00~17:00</p>
              <p className="border-b-2">木: 9:00~18:30</p>
              <p className="border-b-2">金: 9:00~18:30</p>
              <p className="border-b-2">土: 9:00~13:00</p>
              <p className="border-b-2">日: 休み</p>
            </div>
          </div>
        </div>
        <div>
          <Image src="/futyu.jpg" width={300} height={300} alt="" />
        </div>
      </section>
      <section className="my-10">
        <h2 className="text-2xl border-b-2">お知らせ</h2>
        <p className="mt-4">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </section>
    </main>
  );
}
