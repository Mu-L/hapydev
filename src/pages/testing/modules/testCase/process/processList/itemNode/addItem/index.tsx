import { ProcessItem } from '#types/testing';
import { Button, Dropdown, theme } from 'antd';
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import cn from 'classnames';
import { useMemoizedFn, useSafeState } from 'ahooks';
import TypeSelect from '../../typeSelect';
import { cloneDeep, isNull } from 'lodash';
import {
  DEFAULT_GROUP_DATA,
  DEFAULT_IF_DATA,
  DEFAULT_LOOP_DATA,
  DEFAULT_WAIT_DATA,
} from '../../constants';
import { v4 as uuidV4 } from 'uuid';
import produce from 'immer';
import ApiSelect from '../../api-select';
import { AddItemWrapper } from './style';

type Props = {
  value: ProcessItem;
  // index: number;
  onChange?: (newVal: ProcessItem) => void;
};
const AddItem: React.FC<Props> = (props) => {
  const { token } = theme.useToken();
  const { value, onChange } = props;
  const [open, setOpen] = useSafeState(false);
  const [showPicker, setShowPicker] = useSafeState(false);

  const { setNodeRef, isOver } = useDroppable({
    id: `${value.id}|chidren`,
  });

  const getDefaultData = (type) => {
    if (type === 'if') {
      return cloneDeep(DEFAULT_IF_DATA);
    }
    if (type === 'loop') {
      return cloneDeep(DEFAULT_LOOP_DATA);
    }
    if (type === 'wait') {
      return cloneDeep(DEFAULT_WAIT_DATA);
    }
    if (type === 'group') {
      return cloneDeep(DEFAULT_GROUP_DATA);
    }
    return null;
  };

  const handleCheck = (type) => {
    setOpen(false);
    if (type === 'api') {
      setShowPicker(true);
      return;
    }
    const data = getDefaultData(type);
    if (isNull(data)) {
      return;
    }
    data.id = uuidV4();
    const result = produce(value, (draft) => {
      draft.children.push(data);
    });
    onChange(result);
  };
  const handleChangeChildren = useMemoizedFn((newVal) => {
    const result = produce(value, (draft) => {
      draft.children = newVal;
    });
    onChange(result);
  });
  const handleClosePicker = useMemoizedFn(() => {
    setOpen(false);
    setShowPicker(false);
  });

  return (
    <>
      <ApiSelect
        parent_id={value.id}
        value={value?.children}
        onChange={handleChangeChildren}
        open={showPicker}
        onClose={handleClosePicker}
      />
      <AddItemWrapper
        token={token}
        ref={setNodeRef}
        className={cn({
          'is-over': isOver,
        })}
      >
        <Dropdown
          open={open}
          onOpenChange={setOpen}
          autoAdjustOverflow={true}
          placement="top"
          dropdownRender={() => <TypeSelect onCheck={handleCheck} />}
        >
          <div className="add-text">拖入或添加步骤</div>
        </Dropdown>
      </AddItemWrapper>
    </>
  );
};
export default AddItem;