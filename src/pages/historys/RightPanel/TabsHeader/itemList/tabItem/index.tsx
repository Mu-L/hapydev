import React, { useMemo } from 'react';
import { TabItemWrapper } from './style';
import { theme, Modal } from 'antd';
import SvgClose from '@assets/icons/close.svg?react';
import cn from 'classnames';
import { useSafeState } from 'ahooks';
import { methodsWrapper } from '@theme/methods';
import { REQUEST_METHOD } from '@constants/request';
import SvgWebSocket from '@assets/icons/websocket.svg?react';
import SvgGrpc from '@assets/icons/grpc.svg?react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import renderHttp from './http';

type Props = {
  value: any;
  isChanged: boolean;
  selected: boolean;
  onClick: () => void;
  onCloseItem: () => void;
  tab_id: string;
};

const TabItem: React.FC<Props> = (props) => {
  const { value, isChanged, selected, onClick, onCloseItem, tab_id } = props;

  const [isModalOpen, setIsModalOpen] = useSafeState(false);
  const { token } = theme.useToken();

  const { setNodeRef, listeners, transform, transition, attributes, isSorting } = useSortable({
    id: `${tab_id}`,
  });

  const styles = {
    transform: CSS.Transform.toString(transform),
    ...(isSorting ? { transition } : {}),
  };

  const handleCloseItem = (
    state: boolean,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();

    setIsModalOpen(state);
  };

  const renderNode = {
    api: REQUEST_METHOD[value?.method] ?? 'GET',
    socket_client: 'SOCK',
    websocket: <SvgWebSocket />,
    grpc: <SvgGrpc />,
  };

  const comoutedClassName = useMemo(() => {
    if (value?.data_type === 'http') {
      return {
        method: true,
        [value?.method]: true,
      };
    }
    if (value?.data_type === 'socket_client') {
      return {
        method: true,
        socket_client: true,
      };
    }
    return {
      'item-icon': true,
      [value?.data_type]: true,
    };
  }, [value]);

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      onClick();
      return;
    }
    if (e.button === 1) {
      onCloseItem();
    }
  };

  return (
    <TabItemWrapper
      className={cn({
        selected: selected,
      })}
      token={token}
      ref={setNodeRef}
      style={styles}
      {...attributes}
      {...listeners}
    >
      <Modal
        title="有修改的内容未保存"
        width={400}
        open={isModalOpen}
        onOk={onCloseItem}
        onCancel={setIsModalOpen.bind(null, false)}
        cancelText="取消"
        okText="确定"
      >
        <p>确定关闭？</p>
      </Modal>
      <div onMouseDown={handleMouseDown} className={cn('item-title', methodsWrapper)}>
        {renderHttp(value)}
      </div>
      {isChanged === true ? (
        <div onClick={handleCloseItem.bind(null, true)} className="btn-comfirm-close">
          <SvgClose />
        </div>
      ) : (
        <div
          className="btn-close"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onCloseItem();
          }}
        >
          <SvgClose />
        </div>
      )}
    </TabItemWrapper>
  );
};

export default TabItem;