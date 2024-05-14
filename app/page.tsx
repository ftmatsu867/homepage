import Image from "next/image";
export default function Home() {
  return (
    <main className="max-w-4xl min-h-screen bg-white mx-auto px-4 mb-10">
      <h1 className="text-4xl py-8 mb-8 text-center border-b-4">婦中薬局</h1>
      <section className="my-10">
        <h2 className="text-2xl border-b-2">お知らせ</h2>
        <p className="mt-4">婦中薬局ではオンライン資格確認システムを通じて患者の診療情報、
        薬剤情報等を取得し、調剤、服薬指導等を行う際に当該情報を閲覧し、活用しています。<br />
        ・マイナンバーカードの健康保険証利用を促進する等、医療DXを通じて質の高い医療を提供できるように取り組んでいます。<br />
        ・電子処方箋や電子カルテ情報共有サービスを活用するなど、医療DXに係る取り組みを実施しています。<br />
        ・在宅医療も積極的に行っています。
        </p>
      </section>
      <h2 className="text-2xl border-b-2">薬局情報</h2>
      <section className="flex justify-between mt-10">
        <div className="flex-grow mr-12">
          <div className="flex border-b-2 py-2">
            <span className="w-40">所在地</span>
            <span>〒939-2721 富山県富山市婦中町板倉256-1</span>
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
              <p>日: 休み</p>
            </div>
          </div>
        </div>
        <div>
          <Image src="/futyu.png" width={300} height={300} alt="" />
        </div>
      </section>
    </main>
  );
}
