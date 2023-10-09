import SecurityComponent from "@/components/ChatBox/SecurityComponent";

const SecurityPage = ({ params }: { params: { id: string } }) => {
  const chatbot_id = params.id;
  return (
    <>
      <SecurityComponent id={chatbot_id} />
    </>
  );
};

export default SecurityPage;
