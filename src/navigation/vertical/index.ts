// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import CogOutline from 'mdi-material-ui/CogOutline'
import {
  AccountSupervisorOutline,
  AnimationOutline,
  BriefcaseDownloadOutline,
  BriefcaseOutline,
  BriefcaseUploadOutline,
  CalendarOutline,
  ChartBoxOutline,
  DatabaseOutline,
  FileOutline
} from 'mdi-material-ui'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Transactions',
      icon: CreditCardOutline,
      path: '/transactions'
    },
    {
      sectionTitle: 'Claims'
    },
    {
      title: 'Created Claims',
      icon: BriefcaseUploadOutline,
      path: '/created-claims'
    },
    {
      title: 'Received Claims',
      icon: BriefcaseDownloadOutline,
      path: '/received-claims'
    },
    {
      title: 'Other Claims',
      icon: FileOutline,
      path: '/other-claims'
    },
    {
      title: 'Service Provider',
      icon: AccountSupervisorOutline,
      path: '/service-provider-claim'
    },
    {
      sectionTitle: 'Miscelanous'
    },
    {
      title: 'Reports',
      icon: ChartBoxOutline,
      path: '/reports'
    },
    {
      title: 'Activity Logs',
      icon: AnimationOutline,
      path: '/activity-logs'
    },
    {
      title: 'Calendar',
      icon: CalendarOutline,
      path: '/calendar'
    },
    {
      title: 'Contact Person',
      icon: AccountCogOutline,
      path: '/calendar'
    },
    {
      sectionTitle: 'Administraion Panel'
    },
    {
      title: 'Administration',
      icon: CogOutline,
      path: '/account-settings'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation
