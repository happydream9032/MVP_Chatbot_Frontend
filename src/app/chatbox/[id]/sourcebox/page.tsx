import UpdateDataComponent from "@/components/ChatBox/UpdateDataComponent";

const UpdateDataPage = ({ params }: { params: { id: string } }) => {
  const chatbot_id = params.id;
  return (
    <>
      <UpdateDataComponent id={chatbot_id} />
    </>
  );
};
export default UpdateDataPage;
