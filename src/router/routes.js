import LoginScreen from '@/components/auth/login_page.vue';
import RegisterScreen from '@/components/auth/register_page.vue';
import MainScreen from '@/components/public/main_public_screen.vue';

//pubic page
import HomePage from '@/components/public/home_page.vue';
import NewLoanPage from '@/components/public/new_loan_page.vue';
import DiligenceView from '@/components/public/diligence_page.vue';


const routes = [{
        path: '/',
        component: LoginScreen,
        name: 'login'
    },

    {
        path: '/creation/compte',
        component: RegisterScreen,
        name: 'register'
    },

    {
        path: '/home',
        component: MainScreen,
        name: 'main',
        children: [{
                path: '',
                component: HomePage,
                name: 'home'
            },
            {
                path: '/creation/diligence',
                component: NewLoanPage,
                name: 'new-loan'
            },
            {
                path: '/diligences/view',
                component: DiligenceView,
                name: 'loan-view'
            }
        ]

    }
];
export default routes;