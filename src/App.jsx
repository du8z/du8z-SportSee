import './App.css';
import MainLayout from './layout/MainLayout';
import LabelList from './components/LabelList/LabelList';
import NavVertical from './components/NavVertical/NavVertical';

export default function App() {
  return (
    <div>
      
     <MainLayout>
    <LabelList/>
    <NavVertical/>
    </MainLayout> 

    </div>
  );
}

