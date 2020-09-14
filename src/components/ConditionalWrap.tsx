import React, { ReactNode } from 'react';

interface ConditionalWrapProps {
  condition: boolean;
  wrap: (children: ReactNode) => JSX.Element;
  children: ReactNode;
}

const ConditionalWrap = ({
  condition,
  wrap,
  children,
}: ConditionalWrapProps) => <>{condition ? wrap(children) : children}</>;

export default ConditionalWrap;
