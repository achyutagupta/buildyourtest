import React , {useState} from 'react'

const Subjects = ({onChangeQnindex}) => {
    const [isOpen, setIsopen] = useState(true);
    const [activeSub, setActiveSub] = useState('P');

    const handleClick = (subject) => {
        setActiveSub(subject);
        onChangeQnindex(1);
    }

    const ToggleSidebar = () => {
        isOpen === false ? setIsopen(true) : setIsopen(false);
    }
    return (
        <aside className="bg-gray-800 text-white w-auto h-[90vh]">
          <nav>
            <ul>
              <li className="flex items-center px-2 py-3" onClick={ToggleSidebar}>
                <i className="w-6 h-6 text-xl fas fa-bars mr-2"></i>
                <span className={`${isOpen === false? 'flex':'hidden'}`}>Menu</span>
              </li>
              <li className={`flex items-center px-2 py-3 ${activeSub ==='P'?'bg-slate-300 text-gray-800':''}`} onClick={() => handleClick('P')}>
                <i className="w-6 h-6 text-xl fas fa-money-bill-wave mr-2"></i>
                <span className={isOpen === false? 'flex':'hidden'}>Physics</span>
              </li>
              <li className={`flex items-center px-2 py-3 ${activeSub ==='C'?'bg-slate-300 text-gray-800':''}`} onClick={() => handleClick('C')}>
                <i className="w-6 h-6 text-xl fas fa-flask mr-2"></i>
                <span className={isOpen === false? 'flex':'hidden'}>Chemistry</span>
              </li>
              <li className={`flex items-center px-2 py-3 ${activeSub ==='M'?'bg-slate-300 text-gray-800':''}`} onClick={() => handleClick('M')}>
                <i className="w-6 h-6 text-xl fas fa-calculator mr-2"></i>
                <span className={isOpen === false? 'flex':'hidden'}>Mathematics</span>
              </li>
            </ul>
          </nav>
        </aside>
    );
}

export default Subjects
