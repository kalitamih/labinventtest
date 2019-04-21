import formObj from './formObj';
import CIDR from './CIDR';

export { formObj, CIDR };
export const amountOctestsInIPv4 = 4;
export const ethH = 'Ethernet Settings';
export const wifiH = 'Wireless Settings';
export const radioOne = 'Obtain an IP address automatically (DHCP/BootP)';
export const radioTwo = 'Use the following IP address:';
export const radioThree = 'Obtain DNS server address automatically';
export const radioFour = 'Use the following DNS server address:';
export const enableWiFi = 'Enable wifi:';
export const enableSec = 'Enable Wireless Security:';

export const reqmts = [/[a-z]/, /[A-Z]/, /\d/, /[!@#$&*]/];

export const errIP = {
  'en-EN': 'You filled in an incorrect IP-address',
  'ru-RU': 'Вы ввели некорректный IP-адрес',
};
export const errMask = {
  'en-EN': 'You filled in an incorrect mask',
  'ru-RU': 'Вы ввели некорректную маску',
};
export const emptyMask = {
  'en-EN': 'You have to filled in a mask',
  'ru-RU': 'Вы должны ввести маску',
};
export const errGtw = {
  'en-EN': 'Gateway and host aren\'t in the same subnet',
  'ru-RU': 'Шлюз и хост не в одной подсети',
};
export const errSel = {
  'en-EN': 'Select wireless network',
  'ru-RU': 'Выберите беспроводную сеть',
};
export const wrongPswd = {
  'en-EN': 'Password does not meet the requirements',
  'ru-RU': 'Пароль не соответствует требованиям',
};
export const setPswd = {
  'en-EN': 'You have to set a password',
  'ru-RU': 'Вы должны ввести пароль',
};
