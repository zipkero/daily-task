import styled from "@emotion/styled";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import TodoHeaderDate from "./TodoHeaderDate.tsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 32px 24px;
  border-bottom: 1px solid #e9ecef;
`;

const DateBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemainBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #20c997;
  font-size: 18px;
  margin-top: 20px;
  font-weight: bold;
`;

const ArrowBlock = styled.div`
  width: 10%;
  cursor: pointer;
  opacity: 0.2;
  &:hover {
    opacity: 1;
  }
`;

export default function TodoHeader() {
  return (
    <Container>
      <DateBlock>
        <ArrowBlock>
          <IoIosArrowDropleft onClick={() => alert("left")} size="2.5em" />
        </ArrowBlock>
        <TodoHeaderDate selectedKey={"2020-01-01"} />
        <ArrowBlock>
          <IoIosArrowDropright onClick={() => alert("right")} size="2.5em" />
        </ArrowBlock>
      </DateBlock>
      <RemainBlock>
        <span>할 일 2개 남음</span>
      </RemainBlock>
    </Container>
  );
}
