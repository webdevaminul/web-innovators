import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import DashBroadInfo from './DashBroadInfo';

const NAVIGATION = [
  { kind: 'header', title: 'Main items' },
  { segment: '/userDashboard', title: 'Dashboard', icon: <DashboardIcon /> },  
  { segment: 'blogPost', title: 'BlogPostForm', icon: <ShoppingCartIcon /> },
  { segment: 'orders', title: 'Orders', icon: <ShoppingCartIcon /> },
  { kind: 'divider' },
  { kind: 'header', title: 'Analytics' },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      { segment: 'sales', title: 'Sales', icon: <DescriptionIcon /> },
      { segment: 'traffic', title: 'Traffic', icon: <DescriptionIcon /> },
    ],
  },
  { segment: 'integrations', title: 'Integrations', icon: <LayersIcon /> },
];

const demoTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DashboardLayoutBasic() {
  const navigate = useNavigate();

  const handleNavigation = (segment) => {
    const fullPath = segment.startsWith("/") ? segment : `/userDashboard/${segment}`; // Corrected path here
    navigate(fullPath);
  };

  return (
    <ThemeProvider theme={demoTheme}>
      <AppProvider 
        navigation={NAVIGATION.map(item => ({
          ...item,
          onClick: () => handleNavigation(item.segment),
        }))} 
        theme={demoTheme}
        branding={{
          logo: <img src="/favicon.png" alt="LearnUp" />,
          title: 'LearnUp',
        }}
      >
        <DashboardLayout>
          <DashBroadInfo />
        </DashboardLayout>
      </AppProvider>
    </ThemeProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
