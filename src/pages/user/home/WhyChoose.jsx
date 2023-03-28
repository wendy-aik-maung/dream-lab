import React from "react";
import whycoose from "../../../assets/whychoose.png";
const WhyChoose = () => {
  return (
    <section className=" bg-dreamLabColor1 bg-opacity-10   px-2 md:px-6 lg:px-20 py-20 flex flex-col md:flex-row items-center justify-between font-poppins text-textColor gap-8">
      <div className="basis-[25%] md:basis-1/3  justify-center hidden md:flex">
        <img src={whycoose} alt="why choose" />
      </div>
      <div className="basis-full lg:basis-[65%] ">
        <h2 className="font-semibold text-2xl lg:text-3xl mb-8 text-center md:text-left">
          Why Choose Dream Lab
        </h2>
        <ul className="flex flex-col gap-4">
          <li className="list-disc">
            Dreamlab ဆိုတာကေတာ့ ကမ္ဘာေကျာ် personal, professional and business
            development စာအုပ်ေတွကို "ြမန်မာလို" ဖတ်ရှုနိုင်အေအာင် အနှစ်ချ
            ူပ်ထားသည့် website တစ်ခုြဖစ်ပါတယ်။
          </li>
          <li className="list-disc">
            နေ့စဥ် ကမ္ဘာကျော်စာအုပ်များကို မြန်မာလို အဆီအနှစ်ထုတ်
            အနှစ်ချုပ်ရေးပေးထားပါတယ်။
          </li>
          <li className="list-disc">
            ဖုန်းနဲ့အင်တာနက်ရှိရင် စာအုပ်တွေ သယ်သွားစရာမလိုတော့ဘူးပေါ့။
          </li>
          <li className="list-disc">
            1st June 2020 ကစတင်ခဲ့ပါသည်။ တစ်ရက်တစ်အုပ် စာအုပ်‌ေတွအြပင် ‌ေန
            ့စဥ်တင်ေပးေနတဲ့ စာအုပ်အသစ်ေတွကိုလဲ ဖတ်ရှုနိုင်မှာြဖစ်ပါတယ်။
            ဒါေြကာင့် ေန ့စဥ်ကိုယ့်ရဲ ့ဦးေနှာက်မှာရင်းနှီးြမှ ူပ်နှံဖို ့ အခုပဲ
            Dream Lab မှာ Subscribe လုပ်လိုက်ပါနော်။
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChoose;
