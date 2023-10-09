import ModelComponent from "@/components/ChatBox/ModelComponent";

const ModelPage = ({ params }: { params: { id: string } }) => {
  const chatbot_id = params.id;
  return (
    <>
      <ModelComponent id={chatbot_id} />
    </>
  );
};

export default ModelPage;
