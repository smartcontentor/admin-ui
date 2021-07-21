export const state = () => ({
  items: [
    {
      icon: "mdi-apps",
      title: "داشبورد",
      to: "/"
    },
    {
      icon: "mdi-pin",
      title: "نوشته ها",
      to: "/posts"
    },
    {
      icon: "mdi-archive",
      title: "محصولات",
      to: "/products"
    },
    {
      icon: "mdi-calendar-check",
      title: "وظایف",
      to: "/tasks"
    },
    {
      icon: "mdi-account",
      title: "کاربران",
      to: "/users"
    },
    {
      icon: "mdi-cog",
      title: "تنظیمات",
      to: "/settings"
    }
  ],
  lists: [
    {
      id: 0,
      title: "انجام دادن",
      tasks: [
        {
          id: 0,
          title: "عنوان وظیفه شماره ‍1"
        },
        {
          id: 1,
          title: "عنوان وظیفه شماره ‍2"
        },
        {
          id: 2,
          title: "عنوان وظیفه شماره ‍3"
        },
        {
          id: 3,
          title: "عنوان وظیفه شماره ‍4"
        },
        {
          id: 4,
          title: "عنوان وظیفه شماره ‍5"
        }
      ]
    },
    {
      id: 1,
      title: "در حال انجام",
      tasks: [
        {
          id: 0,
          title: "عنوان وظیفه شماره ‍6"
        },
        {
          id: 1,
          title: "عنوان وظیفه شماره ‍7"
        },
        {
          id: 2,
          title: "عنوان وظیفه شماره ‍8"
        },
        {
          id: 3,
          title: "عنوان وظیفه شماره ‍9"
        },
        {
          id: 4,
          title: "عنوان وظیفه شماره ‍10"
        }
      ]
    },
    {
      id: 2,
      title: "پایان یافته",
      tasks: [
        {
          id: 0,
          title: "عنوان وظیفه شماره ‍11"
        },
        {
          id: 1,
          title: "عنوان وظیفه شماره 12"
        },
        {
          id: 2,
          title: "عنوان وظیفه شماره ‍13"
        },
        {
          id: 3,
          title: "عنوان وظیفه شماره 14"
        },
        {
          id: 4,
          title: "عنوان وظیفه شماره ‍15"
        }
      ]
    },
    {
      id: 3,
      title: "کارهای مهم و ضروری",
      tasks: [
        {
          id: 0,
          title: "عنوان وظیفه شماره ‍16"
        },
        {
          id: 1,
          title: "عنوان وظیفه شماره ‍17"
        },
        {
          id: 2,
          title: "عنوان وظیفه شماره ‍18"
        },
        {
          id: 3,
          title: "عنوان وظیفه شماره ‍19"
        },
        {
          id: 4,
          title: "عنوان وظیفه شماره ‍20"
        }
      ]
    },
    {
      id: 4,
      title: "کارهای غیر مهم",
      tasks: [
        {
          id: 0,
          title: "عنوان وظیفه شماره ‍21"
        },
        {
          id: 1,
          title: "عنوان وظیفه شماره ‍22"
        },
        {
          id: 2,
          title: "عنوان وظیفه شماره ‍23"
        },
        {
          id: 3,
          title: "عنوان وظیفه شماره ‍24"
        },
        {
          id: 4,
          title: "عنوان وظیفه شماره ‍25"
        }
      ]
    }
  ]
});
