import styled from "@emotion/styled";
import {
  getDateFromDateKey,
  getDisplayDate,
  getDisplayDay,
} from "../utils/date.ts";

const Container = styled.div`
  display: grid;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
`;

interface Props {
  selectedKey: string;
}

export default function TodoHeaderDate({ selectedKey }: Props) {
  const currentDate = getDateFromDateKey(selectedKey);
  return (
    <Container>
      <h1>{getDisplayDate(currentDate)}</h1>
      <div className="day">{getDisplayDay(currentDate)}</div>
    </Container>
  );
}
