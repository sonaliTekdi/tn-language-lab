import { MenuItem } from './menu.model';

// export const MENU: MenuItem[] = [
//   {
//     label: 'Home',
//     icon: 'home',
//     link: '/dashboard'
//   },
//   {
//     label: 'Statistics',
//     icon: 'trending-up',
//     link: '/pviot-table'
//   },
//   // {
//   //   label: 'Department',
//   //   icon: 'feather',
//   //   isMegaMenu: true,
//   //   subMenus: [
//   //     {
//   //       subMenuItems: [
//   //         {
//   //           label: 'School Department',
//   //           isTitle: true,
//   //         },
//   //         {
//   //           label: 'DSE',
//   //           link: '/ui-components/accordion',
//   //         },
//   //         {
//   //           label: 'DEE',
//   //           link: '/ui-components/alerts',
//   //         },
//   //         {
//   //           label: 'SS',
//   //           link: '/ui-components/badges',
//   //         },
//   //         {
//   //           label: 'SCERT',
//   //           link: '/ui-components/breadcrumbs',
//   //         },
//   //         {
//   //           label: 'DGE',
//   //           link: '/ui-components/buttons',
//   //         },
//   //         {
//   //           label: 'DMS',
//   //           link: '/ui-components/button-group',
//   //         },
//   //       ]
//   //     },
//   //     {
//   //       subMenuItems: [
//   //         {
//   //           label: 'Corporation',
//   //           isTitle: true,
//   //         },
//   //         {
//   //           label: 'GCC',
//   //           link: '/ui-components/datepicker',
//   //         },
//   //         {
//   //           label: 'Coimbatore',
//   //           link: '/ui-components/dropdowns',
//   //         },
//   //         {
//   //           label: 'Trichy',
//   //           link: '/ui-components/list-group',
//   //         },
//   //         {
//   //           label: 'Madurai',
//   //           link: '/ui-components/media-object',
//   //         },
//   //       ]
//   //     },
//   //     {
//   //       subMenuItems: [
//   //         {
//   //           label: 'Other Departments',
//   //           isTitle: true,
//   //         },
//   //         {
//   //           label: 'Health',
//   //           link: '/ui-components/popovers',
//   //         },
//   //         {
//   //           label: 'DOTE',
//   //           link: '/ui-components/progress',
//   //         },
//   //         {
//   //           label: 'Social Welfare',
//   //           link: '/ui-components/rating',
//   //         },
//   //         {
//   //           label: 'Adi Dravidar',
//   //           link: '/ui-components/scrollbar',
//   //         },
//   //       ]
//   //     },
//   //   ]
//   // },
//   {
//     label: 'Component',
//     icon: 'settings',
//     isMegaMenu: true,
//     subMenus: [
//       {
//         subMenuItems: [
//           {
//             label: 'Student',
//             isTitle: true,
//           },
//           {
//             label: 'Attendance',
//             link: '/apps/email/inbox'
//           },
//           {
//             label: 'OoSc',
//             link: '/dashboard/oosc-dashboard'
//           },
//           {
//             label: 'CWSN',
//             link: '/apps/email/compose'
//           },
//           {
//             label: 'Health',
//             link: '/apps/email/inbox'
//           },
//           {
//             label: 'Student',
//             link: '/apps/email/read'
//           },
//           {
//             label: 'Safety',
//             link: '/apps/email/compose'
//           },
//           {
//             label: 'Welfare Schemes',
//             link: '/apps/email/inbox'
//           },
//           {
//             label: 'Scholarships',
//             link: '/apps/email/read'
//           },
//           {
//             label: 'Special Cash Incentives',
//             link: '/apps/email/compose'
//           },
//           {
//             label: 'Assessments',
//             link: '/apps/email/inbox'
//           },
//           {
//             label: 'RTE',
//             link: '/apps/email/compose'
//           },
//           {
//             label: 'Vocational Education',
//             link: '/apps/email/compose'
//           },
//         ]
//       },
//       {
//         subMenuItems: [
//           {
//             label: 'Staff',
//             isTitle: true,
//           },
//           {
//             label: 'Teacher Transfers',
//             link: '/apps/chat',
//           },
//           {
//             label: 'Teacher Training',
//             link: '/apps/calendar',
//           },
//           {
//             label: 'TNTP',
//             link: '/apps/calendar',
//           },
//         ]
//       },
//       {
//         subMenuItems: [
//           {
//             label: 'School',
//             isTitle: true,
//           },
//           {
//             label: 'Grants',
//             link: '/apps/chat',
//           },
//           {
//             label: 'SMC',
//             link: '/apps/calendar',
//           },
//           {
//             label: 'Library',
//             link: '/apps/calendar',
//           },
//           {
//             label: 'RTE',
//             link: '/apps/chat',
//           },
//           {
//             label: 'Reconciliation',
//             link: '/apps/calendar',
//           },
//           {
//             label: 'CSR',
//             link: '/apps/calendar',
//           },
//           {
//             label: 'NGO Partnerships',
//             link: '/apps/chat',
//           },
//           {
//             label: 'Residential Schools',
//             link: '/apps/calendar',
//           },
//           {
//             label: 'Civil',
//             link: '/dashboard/civil',
//           },
//           {
//             label: 'Model School',
//             link: '/dashboard/model-school',
//           },
//           {
//             label: 'Health',
//             link: '/component/health',
//           },
//           {
//             label: 'CRC Training',
//             link: '/component/crc-training',
//           },
//         ]
//       },
//       {
//         subMenuItems: [
//           {
//             label: 'Others',
//             isTitle: true,
//           },
//           {
//             label: 'ITK',
//             link: '/dashboard/itk-dashboard',
//           },
//           {
//             label: 'Content',
//             link: '/apps/calendar',
//           },
//           {
//             label: ' Data Cleaning',
//             link: '/apps/calendar',
//           },
//           {
//             label: 'Non Formal',
//             link: '/apps/chat',
//           },

//         ]
//       }
//     ]
//   },
//   {
//     label: 'Approvals',
//     icon: '',
//     isMegaMenu: true,
//     subMenus: [
//       {
//         subMenuItems: [
//           {
//             label: 'Student',
//             isTitle: true,
//           },
//           {
//             label: '7.5% Reservation',
//             link: '/approval/academicverification'
//           },
//           {
//             label: 'Pending Student Request',
//             link: '/approval/pendingstudentrequest'
//           },
//           {
//             label: 'Student Admission Approval',
//             link: '/approval/admissionapproval'
//           },
//           {
//             label: 'Student Updation Details',
//             link: '/approval/student-updation'
//           },
//         ]
//       },
//       {
//         subMenuItems: [
//           {
//             label: 'Staff',
//             isTitle: true,
//           },
//           {
//             label: 'CRC Mapping',
//             link: '/approval/crc_mapping'
//           },
//           {
//             label: 'RTE Application Status',
//             link: '/approval/rteapplicantstatus'
//           },
//           {
//             label: 'Resultant Vacancy',
//             link: '/approval/resultant-vacancy/'
//           },
//         ]
//       },
//       {
//         subMenuItems: [
//           {
//             label: 'Others',
//             isTitle: true,
//           },
//           {
//             label: 'Volunteer Update',
//             link: '/approval/volunteer_update'
//           },
//           {
//             label: 'TN Sports',
//             link: '/approval/sports',
//           },
//           {
//             label: 'School Support',
//             link: '/approval/school-support',
//           },
//           {
//             label: 'Add Bank Branch',
//             link: '/approval/add_bank_branch',
//           },
//         ]
//       },
//     ]
//   },
//   {
//     label: 'Search',
//     icon: 'search',
//     isMegaMenu: false,
//     subMenus: [
//       {
//         subMenuItems: [
//           {
//             label: 'Student',
//             link: '/search/student',
//           },
//         ]
//       },
//       {
//         subMenuItems: [
//           {
//             label: 'Staff',
//             link: '/search/staff',
//           },
//         ]
//       },
//       {
//         subMenuItems: [
//           {
//             label: 'School',
//             link: '/search/school',
//           },
//         ]
//       },
//     ]
//   },
//   {
//     label: 'Downloads',
//     icon: 'download',
//     link: '/downloads'
//   },
//   {
//     label: 'Inbox',
//     icon: 'mail',
//     link: '/inbox'
//   },
// ];


export const OSD_MENU: MenuItem[] = [
  {
    label: 'Home',
    icon: 'home',
    link: '/component/itk-dashboard'
  },
  {
    label: 'Daily Word',
    icon: 'trending-up',
    link: '/osd-dashboard/daily-word'
  },
  {
    label: 'ITK Support',
    icon: 'feather',
    isMegaMenu: true,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'ITK Centre Support',
            link: '/itk-support/center-support',
          },
          {
            label: 'Inbox',
            link: '/itk-support/inbox-message',
          },
          {
            label: 'Feedback & Queries',
            link: '/itk-support/feedback-queries',
          },
          {
            label: 'ITK Grievance Bank Verification',
            link: '/itk-support/itk-grievance-bank-verification',
          },
        ]
      },
    ]
  },
  {
    label: 'Downloads',
    icon: 'download',
    link: '/downloads'
  },
  {
    label: 'Search',
    icon: 'search',
    link: '/osd-dashboard/search'
  },
  {
    label: 'Gallery',
    icon: 'image',
    link: '/osd-dashboard/gallery'
  },
];

export const BLK_MENU: MenuItem[] = [
  {
    label: 'Home',
    icon: 'home',
    link: '/dashboard'
  },
  // {
  //   label: 'Department',
  //   icon: 'feather',
  //   isMegaMenu: true,
  //   subMenus: [
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'School Department',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'DSE',
  //           link: '/ui-components/accordion',
  //         },
  //         {
  //           label: 'DEE',
  //           link: '/ui-components/alerts',
  //         },
  //         {
  //           label: 'SS',
  //           link: '/ui-components/badges',
  //         },
  //         {
  //           label: 'SCERT',
  //           link: '/ui-components/breadcrumbs',
  //         },
  //         {
  //           label: 'DGE',
  //           link: '/ui-components/buttons',
  //         },
  //         {
  //           label: 'DMS',
  //           link: '/ui-components/button-group',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Corporation',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'GCC',
  //           link: '/ui-components/datepicker',
  //         },
  //         {
  //           label: 'Coimbatore',
  //           link: '/ui-components/dropdowns',
  //         },
  //         {
  //           label: 'Trichy',
  //           link: '/ui-components/list-group',
  //         },
  //         {
  //           label: 'Madurai',
  //           link: '/ui-components/media-object',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Other Departments',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'Health',
  //           link: '/ui-components/popovers',
  //         },
  //         {
  //           label: 'DOTE',
  //           link: '/ui-components/progress',
  //         },
  //         {
  //           label: 'Social Welfare',
  //           link: '/ui-components/rating',
  //         },
  //         {
  //           label: 'Adi Dravidar',
  //           link: '/ui-components/scrollbar',
  //         },
  //       ]
  //     },
  //   ]
  // },
  // {
  //   label: 'Component',
  //   icon: 'settings',
  //   isMegaMenu: true,
  //   subMenus: [
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Student',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'Attendance',
  //           link: '/apps/email/inbox'
  //         },
  //         {
  //           label: 'OoSc',
  //           link: '/dashboard/oosc-dashboard'
  //         },
  //         {
  //           label: 'CWSN',
  //           link: '/apps/email/compose'
  //         },
  //         {
  //           label: 'Health',
  //           link: '/apps/email/inbox'
  //         },
  //         {
  //           label: 'Student',
  //           link: '/apps/email/read'
  //         },
  //         {
  //           label: 'Safety',
  //           link: '/apps/email/compose'
  //         },
  //         {
  //           label: 'Welfare Schemes',
  //           link: '/apps/email/inbox'
  //         },
  //         {
  //           label: 'Scholarships',
  //           link: '/apps/email/read'
  //         },
  //         {
  //           label: 'Special Cash Incentives',
  //           link: '/apps/email/compose'
  //         },
  //         {
  //           label: 'Assessments',
  //           link: '/apps/email/inbox'
  //         },
  //         {
  //           label: 'RTE',
  //           link: '/apps/email/compose'
  //         },
  //         {
  //           label: 'Vocational Education',
  //           link: '/apps/email/compose'
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Staff',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'Teacher Transfers',
  //           link: '/apps/chat',
  //         },
  //         {
  //           label: 'Teacher Training',
  //           link: '/apps/calendar',
  //         },
  //         {
  //           label: 'TNTP',
  //           link: '/apps/calendar',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'School',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'Grants',
  //           link: '/apps/chat',
  //         },
  //         {
  //           label: 'SMC',
  //           link: '/apps/calendar',
  //         },
  //         {
  //           label: 'Library',
  //           link: '/apps/calendar',
  //         },
  //         {
  //           label: 'RTE',
  //           link: '/apps/chat',
  //         },
  //         {
  //           label: 'Reconciliation',
  //           link: '/apps/calendar',
  //         },
  //         {
  //           label: 'CSR',
  //           link: '/apps/calendar',
  //         },
  //         {
  //           label: 'NGO Partnerships',
  //           link: '/apps/chat',
  //         },
  //         {
  //           label: 'Residential Schools',
  //           link: '/apps/calendar',
  //         },
  //         {
  //           label: 'Civil',
  //           link: '/dashboard/civil',
  //         },
  //         {
  //           label: 'Model School',
  //           link: '/dashboard/model-school',
  //         },
  //         {
  //           label: 'Health',
  //           link: '/component/health',
  //         },
  //         {
  //           label: 'CRC Training',
  //           link: '/component/crc-training',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Others',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'ITK',
  //           link: '/dashboard/itk-dashboard',
  //         },
  //         {
  //           label: 'Content',
  //           link: '/apps/calendar',
  //         },
  //         {
  //           label: ' Data Cleaning',
  //           link: '/apps/calendar',
  //         },
  //         {
  //           label: 'Non Formal',
  //           link: '/apps/chat',
  //         },

  //       ]
  //     }
  //   ]
  // },
  {
    label: 'Approvals',
    icon: '',
    isMegaMenu: true,
    subMenus: [
      {

        subMenuItems: [

          {
            label: 'Student',
            isTitle: true,
          },
          // {
          //   label: '7.5% Reservation',
          //   link: '/approval/academicverification'
          // },
          {
            label: 'CWSN Details',
            link: '/approval/cwsn_details'
          },
          {
            label: 'SNA A/C INFO',
            link: 'approval/SnaBankAccount',
            // visible:(this.schooltypeId == 1) ?  false : true
          }
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Staff',
            isTitle: true,
          },
          {
            label: 'CRC Mapping',
            link: '/approval/crc_mapping'
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Others',
            isTitle: true,
          },
          {
            label: 'Forgotten Password Approval',
            link: '/approval/forgot-password-approve'
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'ITK',
            isTitle: true,
          },
          {
            label: 'Feedback & Queries',
            link: '/itk-support/feedback-queries',
          },
          {
            label: 'ITK Bank Verification',
            link:'/approval/itk_bankdetails'
          },
          {
            label: 'ITK Grievance Bank Verification',
            link: '/itk-support/itk-grievance-bank-verification',
          },
        ]
      },
      // {
      //   subMenuItems: [
      //     {
      //       label: 'Others',
      //       isTitle: true,
      //     },
      //   ]
      // },
    ]
  },
  {
    label: 'Search',
    icon: 'search',
    isMegaMenu: false,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Student',
            link: '/search/student',
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Staff',
            link: '/search/staff',
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'School',
            link: '/search/school',
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'ITK Student mapping',
            link: '/search/itk-student-map',
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'ITK Student mapping Details',
            link: '/search/itk_student_mappingdetails',
          },
        ]
      },
    ]
  },
  {
    label: 'Downloads',
    icon: 'download',
    link: '/downloads'
  },
  {
    label: 'Competition',
    icon: '',
    isMegaMenu: true,
    subMenus: [
      {

        subMenuItems: [

          {
            label: 'Competition',
            isTitle: true,
          },
          {
            label: 'Programs',
            link: 'competition/kalai_thiruvizha'
          }
        ]
      }
    ]
  }

];

export const BEO_MENU: MenuItem[] = [
  {
    label: 'Home',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Approvals',
    icon: '',
    isMegaMenu: true,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Student',
            isTitle: true,
          },
          {
            label: 'Student Updation Details',
            link: '/approval/student-updation'
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Staff',
            isTitle: true,
          },
          // {
          //   label: 'Post Sanctioned to BEO Office',
          //   link: '/approval/post_santioined'
          // },
          // {
          //   label: 'Post Sanctioned',
          //   link: '/approval/post_santioined/schoolId'
          // },
          {
            label: 'Post Sanctioned to Schools',
            link: '/approval/post_santioined_schools'
          },
          {
            label: 'Staff List',
            link: '/approval/staff_details'
          },
          {
            label: 'Leave Account Approval',
            link: '/approval/leave-balance'
          },
          // {
          //   label: 'TET',
          //   link: '/approval/tet'
          // },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Schools',
            isTitle: true,
          },
          {
            label: 'Monthly Reports',
            link: '/approval/sclmonthlyreports'
          },
        ]
      },
      // {
      //   subMenuItems: [
      //     {
      //       label: 'Others',
      //       isTitle: true,
      //     },
      //   ]
      // },
    ]
  },
  {
    label: 'Search',
    icon: 'search',
    isMegaMenu: false,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Student',
            link: '/search/student',
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Staff',
            link: '/search/staff',
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'School',
            link: '/search/school',
          },
        ]
      },
    ]
  },
  {
    label: 'Downloads',
    icon: 'download',
    link: '/downloads'
  },
  {
    label: 'Inbox',
    icon: 'mail',
    link: '/inbox/state-message'
  },

];

export const CEO_MENU: MenuItem[] = [
  {
    label: 'Home',
    icon: 'home',
    link: '/dashboard'
  },
  // {
  //   label: 'Department',
  //   icon: 'feather',
  //   isMegaMenu: true,
  //   subMenus: [
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'School Department',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'DSE',
  //           link: '/ui-components/accordion',
  //         },
  //         {
  //           label: 'DEE',
  //           link: '/ui-components/alerts',
  //         },
  //         {
  //           label: 'SS',
  //           link: '/ui-components/badges',
  //         },
  //         {
  //           label: 'SCERT',
  //           link: '/ui-components/breadcrumbs',
  //         },
  //         {
  //           label: 'DGE',
  //           link: '/ui-components/buttons',
  //         },
  //         {
  //           label: 'DMS',
  //           link: '/ui-components/button-group',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Corporation',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'GCC',
  //           link: '/ui-components/datepicker',
  //         },
  //         {
  //           label: 'Coimbatore',
  //           link: '/ui-components/dropdowns',
  //         },
  //         {
  //           label: 'Trichy',
  //           link: '/ui-components/list-group',
  //         },
  //         {
  //           label: 'Madurai',
  //           link: '/ui-components/media-object',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Other Departments',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'Health',
  //           link: '/ui-components/popovers',
  //         },
  //         {
  //           label: 'DOTE',
  //           link: '/ui-components/progress',
  //         },
  //         {
  //           label: 'Social Welfare',
  //           link: '/ui-components/rating',
  //         },
  //         {
  //           label: 'Adi Dravidar',
  //           link: '/ui-components/scrollbar',
  //         },
  //       ]
  //     },
  //   ]
  // },
  {
    label: 'Component',
    icon: 'settings',
    isMegaMenu: true,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Student',
            isTitle: true,
          },
          // {
          //   label: 'Attendance',
          //   link: ''
          // },
          {
            label: 'OoSc',
            link: '/component/oosc'
          },
          // {
          //   label: 'CWSN',
          //   link: ''
          // },
          {
            label: 'Health',
            link: '/component/health'
          },
          // {
          //   label: 'Student',
          //   link: ''
          // },
          // {
          //   label: 'Safety',
          //   link: ''
          // },
          // {
          //   label: 'Welfare Schemes',
          //   link: ''
          // },
          // {
          //   label: 'Scholarships',
          //   link: ''
          // },
          // {
          //   label: 'Special Cash Incentives',
          //   link: ''
          // },
          // {
          //   label: 'Assessments',
          //   link: ''
          // },
          // {
          //   label: 'RTE',
          //   link: ''
          // },
          // {
          //   label: 'Vocational Education',
          //   link: ''
          // },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Staff',
            isTitle: true,
          },
          // {
          //   label: 'Teacher Transfers',
          //   link: '',
          // },
          {
            label: 'Teacher Training',
            link: '/component/crc-training',
          },
          // {
          //   label: 'TNTP',
          //   link: '',
          // },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'School',
            isTitle: true,
          },
          //     // {
          //     //   label: 'Grants',
          //     //   link: '',
          //     // },
          //     // {
          //     //   label: 'SMC',
          //     //   link: '',
          //     // },
          {
            label: 'Library',
            link: '/component/library',
          },
          //     // {
          //     //   label: 'RTE',
          //     //   link: '',
          //     // },
          //     // {
          //     //   label: 'Reconciliation',
          //     //   link: '',
          //     // },
          //     // {
          //     //   label: 'CSR',
          //     //   link: '',
          //     // },
          //     // {
          //     //   label: 'NGO Partnerships',
          //     //   link: '',
          //     // },
          //     // {
          //     //   label: 'Residential Schools',
          //     //   link: '',
          //     // },
          {
            label: 'Civil',
            link: '/component/buildings',
          },
          //     {
          //       label: 'Model School',
          //       link: '/component/model-school',
          //     },
          //     {
          //       label: 'Palli Parvai',
          //       link: '/palli-parvai/observation-target-achievement',
          //     },
          {
            label: 'Sports',
            link: '/component/sports',
          },
          {
            label: 'Regulatory Compliance',
            link: '/component/rc_dashboard'
          }
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Others',
            isTitle: true,
          },
          {
            label: 'ITK',
            link: '/component/itk-dashboard',
          },
          {
            label: 'G2C',
            link: '/component/G2C',
          },
          // {
          //   label: 'Content',
          //   link: '',
          // },
          // {
          //   label: ' Data Cleaning',
          //   link: '',
          // },
          // {
          //   label: 'Non Formal',
          //   link: '',
          // },

        ]
      }
    ]
  },
  {
    label: 'Approvals',
    icon: '',
    isMegaMenu: true,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Student',
            isTitle: true,
          },
          {
            label: '7.5% Reservation',
            link: '/approval/academicverification'
          },
          {
            label: 'CWSN Details',
            link: '/approval/cwsn_details'
          },

        ]
      },
      {
        subMenuItems: [
          {
            label: 'Staff',
            isTitle: true,
          },
          {
            label: 'CRC Mapping',
            link: '/approval/crc_mapping'
          },
          // {
          //   label: 'GEO Mapping',
          //   link: '/approval/crc-mapping-clusters'
          // },
          {
            label: 'Clubbed Cluster Mapping',
            link: '/approval/crc-mapping-view'
          },
          // {
          //   label: 'Post Sanctioned to CEO Office',
          //   link: '/approval/post_santioined'
          // },
          {
            label: 'Staff List',
            link: '/approval/staff_details'
          },
          // {
          //   label: 'Working Status',
          //   link: '/approval/sch-working-status'
          // },
          {
            label: 'Deputation Transfer',
            link: '/approval/deputation-transfer'
          },
          {
            label: 'Leave Account Approval',
            link: '/approval/leave-balance'
          }
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Staff Transfers',
            isTitle: true
          },
          {
            label: 'Resultant Vacancy',
            link: '/approval/resultant-vacancy/'
          },
          {
            label: 'Unit Transfer Approval',
            link: '/approval/unittransfer-approval/'
          },
          {
            label: 'Surplus Candidate',
            link: '/approval/surplus-survey'
          },
          {
            label: 'Vacancy and Need',
            link: '/approval/needAndVacancy'
          },
          {
            label: 'Mutual Transfer',
            link: '/approval/mutual_transfer'
          }
        ]
      },
      {
        subMenuItems: [
          {
            label: 'School',
            isTitle: true,
          },
          {
            label: 'School Profile',
            link: '/approval/edit_school_profile'
          },
          {
            label: 'RTE Fee Fixation',
            link: '/approval/rte-fee-fixation'
          },
          {
            label: 'RTE Claim Approval',
            link: '/approval/rte_claim_approval'
          },
          {
            label: 'SNA A/C INFO',
            link: '/approval/SnaBankAccount',
          },
          // {
          //   label: 'UDISE Approval',
          //   link: '/approval/udise-approval',
          // }
        ]
      },
      {
        subMenuItems: [
          {
            label: 'ITK',
            isTitle: true,
          },
          {
            label: 'Feedback & Queries',
            link: '/itk-support/feedback-queries',
          },
        ]
      },
    ]
  },
  {
    label: 'Search',
    icon: 'search',
    isMegaMenu: false,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Student',
            link: '/search/student',
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Staff',
            link: '/search/staff',
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'School',
            link: '/search/school',
          },
        ]
      },
    ]
  },
  {
    label: 'Downloads',
    icon: 'download',
    link: '/downloads'
  },
  {
    label: 'Inbox',
    icon: 'mail',
    link: '/inbox/state-message'
  },

];

export const DISTRICT_MENU: MenuItem[] = [
  {
    label: 'Home',
    icon: 'home',
    link: '/dashboard',
  },
  // {
  //   label: 'Department',
  //   icon: 'feather',
  //   isMegaMenu: true,
  //   subMenus: [
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'School Department',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'DSE',
  //           link: '/ui-components/accordion',
  //         },
  //         {
  //           label: 'DEE',
  //           link: '/ui-components/alerts',
  //         },
  //         {
  //           label: 'SS',
  //           link: '/ui-components/badges',
  //         },
  //         {
  //           label: 'SCERT',
  //           link: '/ui-components/breadcrumbs',
  //         },
  //         {
  //           label: 'DGE',
  //           link: '/ui-components/buttons',
  //         },
  //         {
  //           label: 'DMS',
  //           link: '/ui-components/button-group',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Corporation',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'GCC',
  //           link: '/ui-components/datepicker',
  //         },
  //         {
  //           label: 'Coimbatore',
  //           link: '/ui-components/dropdowns',
  //         },
  //         {
  //           label: 'Trichy',
  //           link: '/ui-components/list-group',
  //         },
  //         {
  //           label: 'Madurai',
  //           link: '/ui-components/media-object',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Other Departments',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'Health',
  //           link: '/ui-components/popovers',
  //         },
  //         {
  //           label: 'DOTE',
  //           link: '/ui-components/progress',
  //         },
  //         {
  //           label: 'Social Welfare',
  //           link: '/ui-components/rating',
  //         },
  //         {
  //           label: 'Adi Dravidar',
  //           link: '/ui-components/scrollbar',
  //         },
  //       ]
  //     },
  //   ]
  // },
  {
    label: 'Component',
    icon: 'settings',
    isMegaMenu: true,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Student',
            isTitle: true,
          },
          // {
          //   label: 'Attendance',
          //   link: ''
          // },
          {
            label: 'OoSc',
            link: '/component/oosc'
          },
          // {
          //   label: 'CWSN',
          //   link: ''
          // },
          {
            label: 'Health',
            link: '/component/health'
          },
          // {
          //   label: 'Student',
          //   link: ''
          // },
          // {
          //   label: 'Safety',
          //   link: ''
          // },
          // {
          //   label: 'Welfare Schemes',
          //   link: ''
          // },
          // {
          //   label: 'Scholarships',
          //   link: ''
          // },
          // {
          //   label: 'Special Cash Incentives',
          //   link: ''
          // },
          // {
          //   label: 'Assessments',
          //   link: ''
          // },
          // {
          //   label: 'RTE',
          //   link: ''
          // },
          // {
          //   label: 'Vocational Education',
          //   link: ''
          // },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Staff',
            isTitle: true,
          },
          // {
          //   label: 'Teacher Transfers',
          //   link: '',
          // },
          {
            label: 'Teacher Training',
            link: '/component/crc-training',
          },
          // {
          //   label: 'TNTP',
          //   link: '',
          // },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'School',
            isTitle: true,
          },
          //     // {
          //     //   label: 'Grants',
          //     //   link: '',
          //     // },
          //     // {
          //     //   label: 'SMC',
          //     //   link: '',
          //     // },
          {
            label: 'Library',
            link: '/component/library',
          },
          //     // {
          //     //   label: 'RTE',
          //     //   link: '',
          //     // },
          //     // {
          //     //   label: 'Reconciliation',
          //     //   link: '',
          //     // },
          //     // {
          //     //   label: 'CSR',
          //     //   link: '',
          //     // },
          //     // {
          //     //   label: 'NGO Partnerships',
          //     //   link: '',
          //     // },
          //     // {
          //     //   label: 'Residential Schools',
          //     //   link: '',
          //     // },
          {
            label: 'Civil',
            link: '/component/buildings',
          },
          //     {
          //       label: 'Model School',
          //       link: '/component/model-school',
          //     },
          {
            label: 'Palli Parvai',
            link: '/palli-parvai/observation-target-achievement',
          },
          {
            label: 'Sports',
            link: '/component/sports',
          },
          {
            label: 'Regulatory Compliance',
            link: '/component/rc_dashboard'
          }
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Others',
            isTitle: true,
          },
          {
            label: 'ITK',
            link: '/component/itk-dashboard',
          },
          {
            label: 'G2C',
            link: '/component/G2C',
          },
          // {
          //   label: 'Content',
          //   link: '',
          // },
          // {
          //   label: ' Data Cleaning',
          //   link: '',
          // },
          // {
          //   label: 'Non Formal',
          //   link: '',
          // },

        ]
      }
    ]
  },
  {
    label: 'Approvals',
    icon: '',
    isMegaMenu: true,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Student',
            isTitle: true,
          },
          {
            label: '7.5% Reservation',
            link: '/approval/academicverification'
          },
          {
            label: 'Pending Student Request',
            link: '/approval/pendingstudentrequest'
          },
          {
            label: 'Student Admission Approval',
            link: '/approval/admissionapproval'
          },
          {
            label: 'Potential Dropout Students',
            link: '/approval/potential-dropout',
          },
          {
            label: 'Nominal Roll Reset',
            link: '/approval/nominal-updation'
          }
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Staff',
            isTitle: true,
          },
          {
            label: 'RTE Application Status',
            link: '/approval/rteapplicantstatus'
          }
        ]
      },
      {
        subMenuItems: [
          {
            label: 'School',
            isTitle: true,
          },
          {
            label: 'School Profile',
            link: '/approval/edit_school_profile'
          }
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Others',
            isTitle: true,
          },
          {
            label: 'Volunteer Update',
            link: '/approval/volunteer_update'
          },
          {
            label: 'School Support',
            link: '/approval/school-support',
          },
          {
            label: 'Add Bank Branch',
            link: '/approval/add_bank_branch',
          },
          {
            label: 'TN Sports',
            link: '/approval/sports',
          },
        ]
      },
    ]
  },
  {
    label: 'Search',
    icon: 'search',
    isMegaMenu: false,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Student',
            link: '/search/student',
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Staff',
            link: '/search/staff',
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'School',
            link: '/search/school',
          },
        ]
      },
    ]
  },
  {
    label: 'Downloads',
    icon: 'download',
    link: '/downloads'
  },
  {
    label: 'Competition',
    icon: '',
    isMegaMenu: true,
    subMenus: [
      {

        subMenuItems: [

          {
            label: 'Competition',
            isTitle: true,
          },
          {
            label: 'Programs',
            link: 'competition/Art_Culture_district'
          }
        ]
      }
    ]
  }
];

export const DISTRICT_MENU_SPORT: MenuItem[] = [
  {
    label: 'Home',
    icon: 'home',
    link: '/dashboard',
  },
  {
    label: 'Approvals',
    icon: 'check-square',
    isMegaMenu: true,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'TN Sports',
            link: '/approval/sports',
          },
        ]
      },
    ]
  },
  {
    label: 'Downloads',
    icon: 'download',
    link: '/downloads'
  },
];

export const STATE_MENU: MenuItem[] = [
  {
    label: 'Home',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Statistics',
    icon: 'trending-up',
    link: '/pviot-table'
  },
  // {
  //   label: 'Department',
  //   icon: 'feather',
  //   isMegaMenu: true,
  //   subMenus: [
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'School Department',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'DSE',
  //           link: '/ui-components/accordion',
  //         },
  //         {
  //           label: 'DEE',
  //           link: '/ui-components/alerts',
  //         },
  //         {
  //           label: 'SS',
  //           link: '/ui-components/badges',
  //         },
  //         {
  //           label: 'SCERT',
  //           link: '/ui-components/breadcrumbs',
  //         },
  //         {
  //           label: 'DGE',
  //           link: '/ui-components/buttons',
  //         },
  //         {
  //           label: 'DMS',
  //           link: '/ui-components/button-group',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Corporation',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'GCC',
  //           link: '/ui-components/datepicker',
  //         },
  //         {
  //           label: 'Coimbatore',
  //           link: '/ui-components/dropdowns',
  //         },
  //         {
  //           label: 'Trichy',
  //           link: '/ui-components/list-group',
  //         },
  //         {
  //           label: 'Madurai',
  //           link: '/ui-components/media-object',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Other Departments',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'Health',
  //           link: '/ui-components/popovers',
  //         },
  //         {
  //           label: 'DOTE',
  //           link: '/ui-components/progress',
  //         },
  //         {
  //           label: 'Social Welfare',
  //           link: '/ui-components/rating',
  //         },
  //         {
  //           label: 'Adi Dravidar',
  //           link: '/ui-components/scrollbar',
  //         },
  //       ]
  //     },
  //   ]
  // // },
  {
    label: 'Component',
    icon: 'settings',
    isMegaMenu: true,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Student',
            isTitle: true,
          },
          // {
          //   label: 'Attendance',
          //   link: ''
          // },
          {
            label: 'OoSc',
            link: '/component/oosc'
          },
          // {
          //   label: 'CWSN',
          //   link: ''
          // },
          {
            label: 'Health',
            link: '/component/health'
          },
          // {
          //   label: 'Student',
          //   link: ''
          // },
          // {
          //   label: 'Safety',
          //   link: ''
          // },
          // {
          //   label: 'Welfare Schemes',
          //   link: ''
          // },
          // {
          //   label: 'Scholarships',
          //   link: ''
          // },
          // {
          //   label: 'Special Cash Incentives',
          //   link: ''
          // },
          // {
          //   label: 'Assessments',
          //   link: ''
          // },
          // {
          //   label: 'RTE',
          //   link: ''
          // },
          // {
          //   label: 'Vocational Education',
          //   link: ''
          // },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Staff',
            isTitle: true,
          },
          //     // {
          //     //   label: 'Teacher Transfers',
          //     //   link: '',
          //     // },
          {
            label: 'Teacher Training',
            link: '/component/crc-training',
          },
          //     // {
          //     //   label: 'TNTP',
          //     //   link: '',
          //     // },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'School',
            isTitle: true,
          },
          //     // {
          //     //   label: 'Grants',
          //     //   link: '',
          //     // },
          //     // {
          //     //   label: 'SMC',
          //     //   link: '',
          //     // },
          {
            label: 'Library',
            link: '/component/library',
          },
          //     // {
          //     //   label: 'RTE',
          //     //   link: '',
          //     // },
          //     // {
          //     //   label: 'Reconciliation',
          //     //   link: '',
          //     // },
          //     // {
          //     //   label: 'CSR',
          //     //   link: '',
          //     // },
          //     // {
          //     //   label: 'NGO Partnerships',
          //     //   link: '',
          //     // },
          //     // {
          //     //   label: 'Residential Schools',
          //     //   link: '',
          //     // },
          {
            label: 'Civil',
            link: '/component/buildings',
          },
          //     {
          //       label: 'Model School',
          //       link: '/component/model-school',
          //     },
          {
            label: 'Palli Parvai',
            link: '/palli-parvai/observation-target-achievement',
          },
          {
            label: 'Sports',
            link: '/component/sports',
          },
          {
            label: 'Regulatory Compliance',
            link: '/component/rc_dashboard'
          }
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Others',
            isTitle: true,
          },
          {
            label: 'ITK',
            link: '/component/itk-dashboard',
          },
          {
            label: 'G2C',
            link: '/component/G2C',
          },
          // {
          //   label: 'Content',
          //   link: '',
          // },
          // {
          //   label: ' Data Cleaning',
          //   link: '',
          // },
          // {
          //   label: 'Non Formal',
          //   link: '',
          // },

        ]
      }
    ]
  },
  {
    label: 'CEO Review',
    icon: 'tag',
    isMegaMenu: true,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Enrolment',
            isTitle: true,
          },
          {
            label: 'Total Enrollment',
            link: '/dashboard/dashboard#totalEnrollOverTime'
          },
          {
            label: 'Total Enrollment Over Time',
            link: '/dashboard/dashboard#totalEnrollOverTimeByGroup'
          },
          {
            label: 'Student Enrollment',
            link: '/dashboard/dashboard#studentEnrollClass1'
          },
          {
            label: 'Class-Wise Enrollment',
            link: '/dashboard/dashboard#classWiseEnrollOverTime'
          },
          {
            label: 'Transition',
            link: '/dashboard/dashboard#transitionacrossSchoolLevels'
          }]
      },
      {
        subMenuItems: [
          {
            label: 'Attendance',
            isTitle: true,
          },
          {
            label: 'Teacher Attendance-Marking Status',
            link: '/student-attendance/teacher-marked'
          },
          {
            label: 'Teacher Attendance-Attendance Status',
            link: '/student-attendance/teacher-attendance'
          },
          {
            label: 'Student Attendance-Marking Status',
            link: '/student-attendance/marking'
          },
          {
            label: 'Student Attendance-Attendance Status',
            link: '/student-attendance/attendance'
          },
          // {
          //   label: 'Teacher Attendance Report',
          //   link: '/student-attendance/crc-training#Conducted'
          // },
          // {
          //   label: '% of Sections Marking Students Attendance',
          //   link: '/student-attendance/crc-training#Conducted'
          // },
          // {
          //   label: 'Students Attendance Report',
          //   link: '/student-attendance/crc-training#Conducted'
          // },
          // {
          //   label: 'CRC Attendance % Report',
          //   link: '/student-attendance/crc-training#Conducted'
          // }
        ]
      },
      {
        subMenuItems: [
          {
            label: 'CRC',
            isTitle: true,
          },
          {
            label: 'Event Conducted',
            link: '/component/crc-training#Conducted'
          },
          {
            label: 'Event Facilitators Status',
            link: '/component/crc-training#Facilitators'
          },
          {
            label: 'Attendance Status',
            link: '/component/crc-training#Attendance'
          }]
      },
      {
        subMenuItems: [
          {
            label: 'G2C',
            isTitle: true,
          },
          {
            label: 'Status of Pending Application',
            link: '/component/G2C#ApplicationPending'
          },
          {
            label: 'Status of Application',
            link: '/component/G2C#StatusApplication'
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Library',
            isTitle: true,
          },
          {
            label: 'Shelf Created',
            link: '/component/library#shelfCreated'
          },
          {
            label: 'Book Inventory',
            link: '/component/library#bookInventory'
          },
          {
            label: 'Book Shuffling',
            link: '/component/library#bookShuffling'
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'RC',
            isTitle: true,
          },
          {
            label: 'Status of Pending Application',
            link: '/component/rc_dashboard#ApplicationPending'
          },
          {
            label: 'Status of Application',
            link: '/component/rc_dashboard#StatusApplication'
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'OoSC',
            isTitle: true,
          },
          {
            label: 'Today Admission',
            link: '/component/oosc#todayAdmission'
          },
          {
            label: 'Student Status',
            link: '/component/oosc#studentStatus'
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Health',
            isTitle: true,
          },
          {
            label: 'School Screening Status',
            link: '/component/health'
          },
          // {
          //   label: 'Screening Completion- Students Completed',
          //   link: '/component/crc-training#Conducted'
          // }
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Palli Paarvai',
            isTitle: true,
          },
          {
            label: 'Observation Target Achievement',
            link: '/palli-parvai/observation-target-achievement'
          }]
      },
      {
        subMenuItems: [
          {
            label: 'Sports',
            isTitle: true,
          },
          {
            label: 'Students Battery Tests',
            link: '/component/sports'
          },
          // {
          //   label: 'Battery Tests Completion By Students',
          //   link: '/component/crc-training#Conducted'
          // }
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Civil',
            isTitle: true,
          },
          {
            label: 'Buildings',
            link: '/component/buildings'
          },
          {
            label: 'Room',
            link: '/component/rooms'
          },
          {
            label: 'Demolition',
            link: '/component/demolition'
          },
          {
            label: 'Repairs',
            link: '/component/repairs'
          }]
      }
    ],
  },
  {
    label: 'Approvals',
    icon: 'check-square',
    isMegaMenu: true,
    subMenus: [

      {
        subMenuItems: [
          {
            label: 'Staff',
            isTitle: true,
          },
          {
            label: 'Resultant Vacancy',
            link: '/approval/resultant-vacancy'
          },
          {
            label: 'Mutual Transfer',
            link: '/approval/mutual_transfer'
          },
          {
            label: 'G2C',
            link: '/approval/g2c_form'
          },
          {
            label: 'Regulatory Compliance',
            link: '/approval/rcform'
          },
          // {
          //   label: 'Department Staff List',
          // },
          // {
          //   label: 'Staff List',
          //   // link: '/approval/staff_details'
          //   link: '/approval/department-staff-list'
          // },
          // {
          //   label: 'TET Student Profile',
          //   link: '/approval/tet-student-profile'
          // },
          {
            label: 'Staff List',
            // link: '/approval/staff_details'
            link: '/approval/department-staff-list'
          },
          {
            label: 'Deputation Transfer',
            link: '/approval/deputation-transfer'
          }
        ]
      },
      // {
      //   subMenuItems: [
      //     {
      //       label: 'Student',
      //       isTitle: true,
      //     },
      //     {
      //       label: '7.5% Reservation',
      //       link: '/approval/academicverification'
      //     },
      //     {
      //       label: 'Pending Student Request',
      //       link: '/approval/pendingstudentrequest'
      //     },
      //     {
      //       label: 'Student Admission Approval',
      //       link: '/approval/admissionapproval'
      //     },
      //     {
      //       label: 'Student Updation Details',
      //       link: '/approval/student-updation'
      //     },
      //   ]
      // },
      //   {
      //     subMenuItems: [
      //       {
      //         label: 'School',
      //         isTitle: true,
      //       },
      //       {
      //         label: 'UDISE Approval',
      //         link: '/approval/udise-approval',
      //       }
      //     ]
      // },
      // {
      //   subMenuItems: [
      //     {
      //       label: 'Others',
      //       isTitle: true,
      //     },
      //     {
      //       label: 'Volunteer Update',
      //       link: '/approval/volunteer_update'
      //     },
      //     {
      //       label: 'TN Sports',
      //       link: '/approval/sports',
      //     },
      //     {
      //       label: 'School Support',
      //       link: '/approval/school-support',
      //     },
      //     {
      //       label: 'Add Bank Branch',
      //       link: '/approval/add_bank_branch',
      //     },
      //   ]
      // },
    ]
  },
  {
    label: 'Search',
    icon: 'search',
    isMegaMenu: false,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Student',
            link: '/search/student',
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Staff',
            link: '/search/staff',
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'School',
            link: '/search/school',
          },
        ]
      },
    ]
  },
  {
    label: 'Downloads',
    icon: 'download',
    link: '/downloads'
  },
  {
    label: 'Competition',
    icon: 'shield',
    isMegaMenu: true,
    subMenus: [
      {

        subMenuItems: [

          {
            label: 'Competition',
            isTitle: true,
          },
          {
            label: 'Programs',
            link: 'competition/Art_Culture_state'
          }
        ]
      }
    ]
  },
  {
    label: 'Inbox',
    icon: 'mail',
    link: '/inbox/state-message'
  },
  // Only For NammaSchool
  {
    label: 'Namma School',
    icon: 'home',
    link: '/admin'
  }
];

export const DEO_MENU: MenuItem[] = [
  {
    label: 'Home',
    icon: 'home',
    link: '/dashboard'
  },
  // {
  //   label: 'Department',
  //   icon: 'feather',
  //   isMegaMenu: true,
  //   subMenus: [
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'School Department',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'DSE',
  //           link: '/ui-components/accordion',
  //         },
  //         {
  //           label: 'DEE',
  //           link: '/ui-components/alerts',
  //         },
  //         {
  //           label: 'SS',
  //           link: '/ui-components/badges',
  //         },
  //         {
  //           label: 'SCERT',
  //           link: '/ui-components/breadcrumbs',
  //         },
  //         {
  //           label: 'DGE',
  //           link: '/ui-components/buttons',
  //         },
  //         {
  //           label: 'DMS',
  //           link: '/ui-components/button-group',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Corporation',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'GCC',
  //           link: '/ui-components/datepicker',
  //         },
  //         {
  //           label: 'Coimbatore',
  //           link: '/ui-components/dropdowns',
  //         },
  //         {
  //           label: 'Trichy',
  //           link: '/ui-components/list-group',
  //         },
  //         {
  //           label: 'Madurai',
  //           link: '/ui-components/media-object',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Other Departments',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'Health',
  //           link: '/ui-components/popovers',
  //         },
  //         {
  //           label: 'DOTE',
  //           link: '/ui-components/progress',
  //         },
  //         {
  //           label: 'Social Welfare',
  //           link: '/ui-components/rating',
  //         },
  //         {
  //           label: 'Adi Dravidar',
  //           link: '/ui-components/scrollbar',
  //         },
  //       ]
  //     },
  //   ]
  // },
  // {
  //   label: 'Component',
  //   icon: 'settings',
  //   isMegaMenu: true,
  //   subMenus: [
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Student',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'Attendance',
  //           link: '/apps/email/inbox'
  //         },
  //         {
  //           label: 'OoSc',
  //           link: '/dashboard/oosc-dashboard'
  //         },
  //         {
  //           label: 'CWSN',
  //           link: '/apps/email/compose'
  //         },
  //         {
  //           label: 'Health',
  //           link: '/apps/email/inbox'
  //         },
  //         {
  //           label: 'Student',
  //           link: '/apps/email/read'
  //         },
  //         {
  //           label: 'Safety',
  //           link: '/apps/email/compose'
  //         },
  //         {
  //           label: 'Welfare Schemes',
  //           link: '/apps/email/inbox'
  //         },
  //         {
  //           label: 'Scholarships',
  //           link: '/apps/email/read'
  //         },
  //         {
  //           label: 'Special Cash Incentives',
  //           link: '/apps/email/compose'
  //         },
  //         {
  //           label: 'Assessments',
  //           link: '/apps/email/inbox'
  //         },
  //         {
  //           label: 'RTE',
  //           link: '/apps/email/compose'
  //         },
  //         {
  //           label: 'Vocational Education',
  //           link: '/apps/email/compose'
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Staff',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'Teacher Transfers',
  //           link: '/apps/chat',
  //         },
  //         {
  //           label: 'Teacher Training',
  //           link: '/apps/calendar',
  //         },
  //         {
  //           label: 'TNTP',
  //           link: '/apps/calendar',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'School',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'Grants',
  //           link: '/apps/chat',
  //         },
  //         {
  //           label: 'SMC',
  //           link: '/apps/calendar',
  //         },
  //         {
  //           label: 'Library',
  //           link: '/apps/calendar',
  //         },
  //         {
  //           label: 'RTE',
  //           link: '/apps/chat',
  //         },
  //         {
  //           label: 'Reconciliation',
  //           link: '/apps/calendar',
  //         },
  //         {
  //           label: 'CSR',
  //           link: '/apps/calendar',
  //         },
  //         {
  //           label: 'NGO Partnerships',
  //           link: '/apps/chat',
  //         },
  //         {
  //           label: 'Residential Schools',
  //           link: '/apps/calendar',
  //         },
  //         {
  //           label: 'Civil',
  //           link: '/dashboard/civil',
  //         },
  //         {
  //           label: 'Model School',
  //           link: '/dashboard/model-school',
  //         },
  //         {
  //           label: 'Health',
  //           link: '/component/health',
  //         },
  //         {
  //           label: 'CRC Training',
  //           link: '/component/crc-training',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Others',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'ITK',
  //           link: '/dashboard/itk-dashboard',
  //         },
  //         {
  //           label: 'Content',
  //           link: '/apps/calendar',
  //         },
  //         {
  //           label: ' Data Cleaning',
  //           link: '/apps/calendar',
  //         },
  //         {
  //           label: 'Non Formal',
  //           link: '/apps/chat',
  //         },

  //       ]
  //     }
  //   ]
  // },
  {
    label: 'Approvals',
    icon: '',
    isMegaMenu: true,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Student',
            isTitle: true,
          },
          {
            label: 'Student Updation Details',
            link: '/approval/student-updation'
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Staff',
            isTitle: true,
          },
          // {
          //   label: 'Post Sanctioned to DEO Office',
          //   link: '/approval/post_santioined'
          // },
          // {
          //   label: 'Post Sanctioned',
          //   link: '/approval/deo_post_santioined/schoolId'
          // },
          {
            label: 'Post Sanctioned to Aided HS/HSS',
            link: '/approval/post_santioined_deoschools'
          },
          // {
          //   label: 'Edit No of Post Sanctioned',
          //   link: '/approval/edit-schoolsdeo'
          // },
          {
            label: 'Staff List',
            link: '/approval/staff_details'
          },
          {
            label: 'Leave Account Approval',
            link: '/approval/leave-balance'
          }
        ]
      },
      // {
      //   subMenuItems: [
      //     {
      //       label: 'School',
      //       isTitle: true,
      //     },
      //     {
      //       label: 'UDISE Approval',
      //       link: '/approval/udise-approval',
      //     }
      //   ]
      // },
    ]
  },
  {
    label: 'Search',
    icon: 'search',
    isMegaMenu: false,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Student',
            link: '/search/student',
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'Staff',
            link: '/search/staff',
          },
        ]
      },
      {
        subMenuItems: [
          {
            label: 'School',
            link: '/search/school',
          },
        ]
      },
    ]
  },
  {
    label: 'Staff',
    icon: 'staff',
    isMegaMenu: false,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Mutual Transfer',
            link: '/approval/mutual_transfer/'
          },
        ]
      },
    ]
  },
  {
    label: 'Downloads',
    icon: 'download',
    link: '/downloads'
  },
  {
    label: 'Inbox',
    icon: 'mail',
    link: '/inbox/state-message'
  },

];

export const BRTE_MENU: MenuItem[] = [
  {
    label: 'Home',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Potential Dropout',
    icon: 'feather',
    isMegaMenu: true,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Absentees',
            link: '/approval/potential-dropout',
          },
          // {
          //   label: 'Dote Verification',
          //   link: '/approval/dote-verification',
          // }
        ]
      },
    ]
  },
  // {
  //   label: 'Approvals',
  //   isMegaMenu: false,
  //   subMenus: [
  //     {
  //         subMenuItems: [
  //           {
  //             label: 'School',
  //             isTitle: true,
  //           },
  //           {
  //             label: 'UDISE Approval',
  //             link: '/approval/udise-approval',
  //           }
  //         ]
  //     }
  //   ]
  // }

];

export const JD_SCERT_MENU: MenuItem[] = [
  {
    label: 'Home',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Digital Content',
    icon: 'feather',
    isMegaMenu: true,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Video Upload',
            link: '/Digital/video-upload',
          },
          {
            label: 'Video Mapping Assign',
            link: '/Digital/addvideomapping',
          },
          {
            label: 'Video Rating Assign',
            link: '/Digital/videorating',
          },
          {
            label: 'RBC Mapping Assign',
            link: '/Digital/AssignRBCMapping',
            // },
            // {
            //   label: 'RBC Approver Assign',
            //   link: '/Digital/AssignRBCapprover',
          },
          {
            label: 'QR Code',
            link: '/student-elearn',
          },
        ]
      },
    ]
  },
  {
    label: 'Question Bank',
    icon: 'book-open',
    isMegaMenu: true,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Assign Curator',
            link: '/Digital/assign-curator'
          }
        ]
      }
    ]
  },
  {
    label: 'Others',
    icon: 'feather',
    isMegaMenu: true,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'EE Taxonomy Update',
            link: '/approval/EETaxonomyAdd',
          },
          // {
          //   label: 'Excel Upload',
          //   link: '/approval/excelupload',
          // }
        ]
      },
    ]
  },
  {
    label: 'Downloads',
    icon: 'download',
    link: '/downloads'
  },
];

export const HEALTH_LOGIN: MenuItem[] = [
  {
    label: 'Add Vendors',
    icon: 'user',
    link: '/health/add-vendor'
  },
  {
    label: 'View Vendors',
    icon: 'file-text',
    link: '/health/view-vendor'
  },
  {
    label: 'Assign Vendors',
    icon: 'user-check',
    link: '/health/assign-vendor'
  },
  {
    label: 'MHT Scheduling',
    icon: 'layers',
    link: '/health/mht-scheduling',
  },
  {
    label: 'Vendor Management',
    icon: 'layers',
    link: '/health/vendor-management'
  },
  {
    label: 'Downloads',
    icon: 'download',
    link: '/downloads'
  },
  // {
  //   label: 'Downloads',
  //   icon: 'layers',
  //   link: '/health/vendor-management'
  // },
];

export const SWO_MENU: MenuItem[] = [

  {
    label: 'Home',
    icon: 'home',
    link: '/approval/swd-bmi-noonmeal'
  },
  {
    label: 'Downloads',
    icon: 'download',
    link: '/downloads'
  },
  {
    label: 'BMI Status',
    icon: 'bar-chart',
    link: '/approval/new-block-noonmeal'
  }

];

export const STATE_HEALTH: MenuItem[] = [
  {
    label: 'Health Dashboard',
    icon: 'home',
    link: '/component/health',
  },
  {
    label: 'MHT Scheduling',
    icon: 'layers',
    link: '/health/mht-scheduling',
  },
  {
    label: 'TNMSC',
    icon: 'home',
    isMegaMenu: true,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Add Vendors',
            link: '/health/add-vendor'
          },
          {
            label: 'View Vendors',
            link: '/health/view-vendor'
          },
          {
            label: 'Assign Vendors',
            link: '/health/assign-vendor'
          }
        ]
      },
    ]
  },
  {
    label: 'Downloads',
    icon: 'download',
    link: '/downloads'
  },
]

export const RTE_VERIFY_MENU: MenuItem[] = [
  {
    label: 'RTE Verification',
    icon: 'home',
    link: '/approval/rte-std-verification',
  },
];

export const DEIC_MENU: MenuItem[] = [
  {
    label: 'Student Search',
    icon: 'search',
    isMegaMenu: true,
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'DEIC Consultation',
            link: '/search/deic-consultation'
          },
        ],
      },
    ],
  }
];

export const DOTE_MENU: MenuItem[] = [
  {
    label: 'Potential Dropout',
    icon: 'home',
    link: '/approval/dote-verification'
  },
  // {
  //   label: 'Potential Dropout',
  //   icon: 'feather',
  //   isMegaMenu: true,
  //   subMenus: [
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Dote Verification',
  //           link: '/approval/dote-verification',
  //         }
  //       ]
  //     },
  //   ]
  // }

];

export const DET_MENU: MenuItem[] = [
  {
    label: 'Potential Dropout',
    icon: 'home',
    link: '/approval/det-verification'
  },
  // {
  //   label: 'Potential Dropout',
  //   icon: 'feather',
  //   isMegaMenu: true,
  //   subMenus: [
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Det Verification',
  //           link: '/approval/det-verification',
  //         }
  //       ]
  //     },
  //   ]
  // }

];

export const STATE_MENU_TEMP: MenuItem[] = [
  // {
  //   label: 'Competition',
  //   icon: '',
  //   isMegaMenu: true,
  //   subMenus: [
  //     {

  //       subMenuItems: [

  //         {
  //           label: 'Competition',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'Programs',
  //           link:'competition/Art_Culture_state'
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    label: 'Programs',
    icon: 'home',
    link: '/competition/Art_Culture_state'
  },
];


export const NAMMASCHOOL: MenuItem[] = [
  {
    label: 'Namma School',
    icon: 'home',
    link: '/admin',
  },
];


