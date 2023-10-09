import ChatInterfaceComponent from "@/components/ChatBox/ChatInterfaceComponent";

const ChatInterfacePage = ({ params }: { params: { id: string } }) => {
  const chatbot_id = params.id;
  return (
    <>
      <ChatInterfaceComponent id={chatbot_id} />
    </>
  );
};
export default ChatInterfacePage;
