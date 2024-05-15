import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import './style';

dayjs.extend(relativeTime);
dayjs.locale('zh-cn');
dayjs.extend(duration);

console.log('EVN:%s VERSION:%s BUILD:%s', process.env.UMI_ENV, VERSION, BUILD);
