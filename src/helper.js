import * as Icons from "@mui/icons-material"

export const getGroupedTickets = ({ tickets, option, sortAttr }) => {
  const sortOrder = sortAttr==="priority" ? "dsc" : "asc";
  const groupByOption = (ticket) => {
    switch (option) {
      case 'priority':
        return ticket.priority;
      case 'user':
        return ticket.userId;
      case 'status':
        return ticket.status;
      default:
        return '';
    }
  };

  const grouped = tickets.reduce((grouped, ticket) => {
    const key = groupByOption(ticket);
    if (!grouped[key]) grouped[key] = [ticket];
    else grouped[key].push(ticket);
    return grouped;
  }, {});

  Object.keys(grouped).forEach(groupKey => {
    const sortedTickets = grouped[groupKey].sort((a, b) => {
      const sortA = a[sortAttr];
      const sortB = b[sortAttr];
      if (sortOrder === 'asc') return String(sortA).localeCompare(String(sortB))
      else return String(sortB).localeCompare(String(sortA));
    });
    grouped[groupKey] = sortedTickets;
  });

  return grouped;
};


export const getGroupedUsers = (users) => {
  return users.reduce((grouped, user) => {
    const _user = user.id;
    grouped[_user] = user;
    return grouped;
  }, {});
};


export const StringToMuiIcon = ({iconName,style}) => {
  const SelectedIcon = Icons[iconName] || Icons.Error;
  return <SelectedIcon className='list-header-icon' style={style} />;
};


export const TruncatedText = ({ text, maxLength }) => {
  const displayText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return <span className="title">{displayText}</span>;
};
