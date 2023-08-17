import styled from "@emotion/styled";
import { ReactNode } from "react";

const Container = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 96px auto 32px;
  display: flex;
  flex-direction: column;
`;

interface Props {
  children: ReactNode;
}

export default function TodoContainer({ children }: Props) {
  return <Container>{children}</Container>;
}
