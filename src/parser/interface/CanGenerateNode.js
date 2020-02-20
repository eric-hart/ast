// @flow
import Node from '~/src/parser/node/Node';

export interface CanGenerateNode {
  generateNode(): Node;
}
