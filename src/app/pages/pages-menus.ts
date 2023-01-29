import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Αρχική',
    icon: 'home-outline',
    link: '/pages/home',
    home:true
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Αγορά',
    //icon: 'layout-outline',
    icon: 'hash-outline',
    children: [
      {
        title: 'Κατοικία',
        link: '/pages/buy/house',
      },
      {
        title: 'Επαγγελματική Στέγη',
        link: '/pages/buy/business',
      },
      {
        title: 'Οικόπεδα',
        link: '/pages/buy/land',
      },
      {
        title: 'Τελευταίες Πωλήσεις',
        link: '/pages/buy/latestSales',
      },
      {
        title: 'Προσεχώς',
        link: '/pages/buy/comingSoon',
      },
      {
        title: 'Οδηγός Αγοράς Ακινήτου',
        link: '/pages/buy/guide',
      },
    ],
  },
  {
    title: 'Ενοικίαση',
    icon: 'hash-outline',
    children: [
      {
        title: 'Κατοικία',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Επαγγελματική Στέγη',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Προσεχώς',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Οδηγός Ενοικίασης Ακινήτου',
        link: '/pages/layout/accordion',
      },
    ],
  },
  {
    title: 'Πώληση',
    icon: 'hash-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Κατοικία',
        link: '/pages/layout/stepper',
        
      },
      {
        title: 'Επαγγελματική Στέγη',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Οικόπεδα',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Οδηγός Πώλησης Ακινήτου',
        link: '/pages/layout/accordion',
      },
    ],
  },
  {
    title: 'Δάνεια',
    icon: 'hash-outline',
  },
  {
    title: 'Το γραφείο μας',
    icon: 'hash-outline',
  },
  {
    title: 'Επικοινωνία',
    icon: 'hash-outline',
  },
];