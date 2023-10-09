import LeadsComponent from "@/components/ChatBox/LeadsComponent";

const LeadsPage = ({ params }: { params: { id: string } }) => {
  const chatbot_id = params.id;
  return (
    <>
      <LeadsComponent id={chatbot_id} />
    </>
  );
};

export default LeadsPage;
