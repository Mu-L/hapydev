import { Button, theme } from 'antd';
import { AboutWrapper } from './style';
import SvgLogo from '@assets/logo.png';
import SvgZhengshu from '@assets/icons/certificate.svg?react';
import { getWebsiteHelpHost } from '@utils/path';

const About = () => {
  const { token } = theme.useToken();

  const baseUrl = getWebsiteHelpHost();

  return (
    <AboutWrapper token={token}>
      <div className="case-item">
        <div className="item-name">
          <img className="img-logo" src={SvgLogo} />
        </div>
        <div className="item-values img-item ">
          <dd>Hapydev-for-Web</dd>
          <dl>version:1.0.0</dl>
        </div>
      </div>
      <div className="info-panel">
        <div className="info-item">其他信息</div>
        <div className="info-item">
          <SvgZhengshu className="svg-icon" />
          &nbsp;本产品已经通过 ISO 27001 信息安全管理体系认证
        </div>
        <div className="info-item">
          商务热线：136-1709-2915&nbsp;&nbsp;&nbsp;&nbsp;Email：turenquan@hapydev.com
        </div>
        <div className="info-item">
          <Button href={`${baseUrl}`} target="_blank" type="link">
            帮助中心
          </Button>
          <Button href={`${baseUrl}/overview/changelog`} target="_blank" type="link">
            更新日志
          </Button>
          <Button href={`${baseUrl}/service-conditions/service`} target="_blank" type="link">
            服务协议
          </Button>
          <Button href={`${baseUrl}/service-conditions/private`} target="_blank" type="link">
            隐私协议
          </Button>
        </div>
      </div>
    </AboutWrapper>
  );
};
export default About;
