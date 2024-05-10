import { Result } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => {

  return (
    <>
      <Result
        status={404}
        title={'page is not found'}
        theme="primary"
        subTitle="sorry an error has occurred"
        extra={<Link to="/" type="primary">Back Home</Link>}
      />
    </>
  );
};
export default NotFound;