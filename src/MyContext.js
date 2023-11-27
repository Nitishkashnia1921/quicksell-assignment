import { createContext, useState, useContext, useEffect, useMemo } from 'react';
import fetchData from './api';
import { getGroupedTickets, getGroupedUsers } from './helper';
import { orderingOptions } from './constants';

const MyContext = createContext();
export const useMyContext = () => {
  return useContext(MyContext);
};

export const MyProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("title");
  const [isOpen, setIsOpen] = useState(false);

  const tmp_ord = localStorage.getItem("ordering");
  const tmp_grp = localStorage.getItem("grouping");

  useEffect(() => {
    setLoading(true);
    const apicall = async () => {
      const jsonData = await fetchData();
      setTickets(jsonData.tickets);
      setUsers(jsonData.users);
      if (tmp_ord) setOrdering(tmp_ord);
      if (tmp_grp) setGrouping(tmp_grp);
      setLoading(false);
    }
    apicall();
  }, []);

  const groupedTickets = useMemo(() => getGroupedTickets({
    tickets,
    option: grouping,
    sortAttr: ordering
  }), [tickets, grouping, ordering]);

  const groupedUsers = useMemo(() => getGroupedUsers(users), [users]);

  const value = {
    tickets, setTickets,
    users, setUsers,
    loading, setLoading,
    grouping, setGrouping,
    ordering, setOrdering,
    orderingOptions,
    groupedTickets, groupedUsers,
    isOpen, setIsOpen,
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

