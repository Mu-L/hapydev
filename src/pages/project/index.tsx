import { Panel, PanelGroup, PanelProps } from 'react-resizable-panels';
import RightPanel from './RightPanel';
import ResizeBar from '@components/bus/ResizeBar';
import { Suspense, useEffect, useLayoutEffect, useRef } from 'react';
import { useMemoizedFn, useSafeState } from 'ahooks';
import { useGlobalSubject } from '@hooks/useSubject';
import LazyLoading from '@components/bus/LazyLoading';
import React from 'react';
import { ProjectWrapper } from './style';
import { isNumber } from 'lodash';

const LeftPanel = React.lazy(() => import('./LeftPanel'));

const Apis = () => {
  const [showMenu, setShowMenu] = useSafeState(true);
  const [defaultSize, setDefaultSize] = useSafeState<PanelProps['defaultSize']>();
  const [minSize, setMinSize] = useSafeState<PanelProps['minSize']>();

  const [page, setPage] = useSafeState('base');

  const refContainer = useRef(null);
  const refPanel = useRef(null);

  const handleCollapse = useMemoizedFn(() => {
    setShowMenu(false);
  });

  const handleExpand = useMemoizedFn(() => {
    setShowMenu(true);
  });

  const handleToggleShowLeftPanel = useMemoizedFn(() => {
    setShowMenu((val) => !val);
  });

  useLayoutEffect(() => {
    const panelGroup = refContainer.current;
    if (panelGroup instanceof HTMLElement) {
      setDefaultSize((320 / panelGroup.offsetWidth) * 100);
      setMinSize((200 / panelGroup.offsetWidth) * 100);
    }
  }, []);

  useEffect(() => {
    if (showMenu && !refPanel?.current?.isExpanded()) {
      refPanel.current?.resize(defaultSize);
    }
    if (showMenu !== true && !refPanel?.current?.isCollapsed()) {
      refPanel.current?.collapse();
    }
  }, [showMenu]);

  useGlobalSubject(`USER_EVENT/toggleShowLeftPanel`, handleToggleShowLeftPanel, []);
  useGlobalSubject('PROJECT/updateActivePage', setPage, []);

  return (
    <ProjectWrapper ref={refContainer}>
      <PanelGroup direction="horizontal" style={{ height: '100%' }}>
        {isNumber(defaultSize) && (
          <Panel
            onCollapse={handleCollapse}
            onExpand={handleExpand}
            ref={refPanel}
            defaultSize={defaultSize}
            minSize={minSize}
            maxSize={35}
            collapsible
            order={1}
          >
            <Suspense fallback={<LazyLoading />}>
              <LeftPanel value={page} onChange={setPage} />
            </Suspense>
          </Panel>
        )}

        <ResizeBar direction="horizontal" />
        <Panel order={2}>
          <RightPanel page={page} />
        </Panel>
      </PanelGroup>
    </ProjectWrapper>
  );
};

export default Apis;