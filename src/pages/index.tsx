import { Button } from 'antd';

export default function Home() {
  return (
    <div
      style={{
        height: `100vh`,
        width: `100vw`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <Button>Hello i am button</Button>
    </div>
  );
}
