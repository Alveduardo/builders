export const getCurrentDate = (): string => {
  return new Date().toISOString().slice(0, 10).replace(/-/g, '/').split('/').reverse().join('/');
};

export const getFormatedDate = (): string => {
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  const newDate = new Date();

  const hour = `${newDate.getHours().toString().padStart(2, '0')}:${newDate.getMinutes().toString().padStart(2, '0')}`;
  const date = `${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`;

  return `${hour} - ${date}`;
};

export const getDateFromUnix = (unix: number) => {
  const date = new Date(unix * 1000);

  const hour = date.getHours().toString().padStart(2, '0');
  const min = date.getMinutes().toString().padStart(2, '0');

  return `${hour}:${min}`;
};
