import SettingGeneralComponent from "@/components/ChatBox/SettingGeneralComponent";

const SettingGeneralPage = ({ params }: { params: { id: string } }) => {
  const chatbot_id = params.id;
  return (
    <>
      <SettingGeneralComponent id={chatbot_id} />
    </>
  );
};
export default SettingGeneralPage;
