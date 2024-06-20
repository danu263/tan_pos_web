import { useParams } from "react-router-dom";

export const MemberProfile = () => {
  const { id: userId } = useParams();
  return (
    <>
      <h1>Member Profile Page!</h1>
      <h4>{userId}</h4>
    </>
  );
};
