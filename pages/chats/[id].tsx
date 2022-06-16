import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="m-16">
      <div className="flex m-5 mb-10 items-center">
        <div className="w-5 h-5 bg-slate-400 rounded-full "/>
        <div className=" rounded-lg p-5 border m-2">얼마에 파세요?</div>
      </div>
      <div className="flex m-5 items-center flex-row-reverse">
        <div className="w-5 h-5 bg-blue-400 rounded-full"/>
        <div className=" rounded-lg p-5 border m-2">￦20,000</div>
      </div>
      <div className="flex m-5 items-center">
        <div className="w-5 h-5 bg-slate-400 rounded-full"/>
        <div className=" rounded-lg p-5 border m-2">미쳤어</div>
      </div>
      <div className="flex m-5 items-center">
        <div className="w-5 h-5 bg-slate-400 rounded-full"/>
        <div className=" rounded-lg p-5 border m-2">좀만 싸게 줘봐~!</div>
      </div>
      <div className="flex m-5 items-center flex-row-reverse">
        <div className="w-5 h-5 bg-blue-400 rounded-full"/>
        <div className=" rounded-lg p-5 border m-2">￦20,000 밑으로는 NO!</div>
      </div>
      <div className="flex m-5 items-center">
        <div className="w-5 h-5 bg-slate-400 rounded-full"/>
        <div className=" rounded-lg p-5 border m-2">때려치워</div>
      </div>
      <div className="flex m-5 items-center">
        <div className="w-5 h-5 bg-slate-400 rounded-full"/>
        <div className=" rounded-lg p-5 border m-2">미안해요 ￦20,000에 거래할게요 </div>
      </div>
      <div className="flex m-5 items-center flex-row-reverse">
        <div className="w-5 h-5 bg-blue-400 rounded-full"/>
        <div className=" rounded-lg p-5 border m-2">너는 인성이 안되어있어 ￦22,000원이야</div>
      </div>
      <div className="flex m-5 items-center">
        <div className="w-5 h-5 bg-slate-400 rounded-full"/>
        <div className=" rounded-lg p-5 border m-2">정신이 똑바로 있는거에요?</div>
      </div>
      <div className="flex m-5 items-center">
        <div className="w-5 h-5 bg-slate-400 rounded-full"/>
        <div className=" rounded-lg p-5 border m-2">답장해요 네?</div>
      </div>
      <div className="flex m-5 items-center">
        <div className="w-5 h-5 bg-slate-400 rounded-full"/>
        <div className=" rounded-lg p-5 border m-2">저기요?</div>
      </div>
      <div className="flex m-5 items-center flex-row-reverse ">
        <div className="w-5 h-5 bg-blue-400 rounded-full "/>
        <div className=" rounded-lg p-5 border m-2">사용자가 채팅방을 나가셧습니다</div>
      </div>
      <div className="fixed py-2 bg-white bottom-0 inset-x-0 ">
        <div className="flex relative max-w-md items-center w-full mx-auto">
          <input type="text" className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500" />
          <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
            <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white">&rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;