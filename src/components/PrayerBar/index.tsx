import moment from "moment";
import momentHijri from "moment-hijri";
import { Button } from "react-daisyui";

const prayerTimes = [
  {
    index: 0,
    month: 1,
    day: 1,
    prayers: [
      {
        name: "imsak",
        time: "06:14",
      },
      {
        name: "fajr",
        time: "06:19",
      },
      {
        name: "sunrise",
        time: "07:52",
      },
      {
        name: "zuhr",
        time: "12:21",
      },
      {
        name: "sunset",
        time: "16:51",
      },
      {
        name: "maghrib",
        time: "17:06",
      },
    ],
  },
  {
    index: 1,
    month: 1,
    day: 2,
    prayers: [
      {
        name: "imsak",
        time: "06:15",
      },
      {
        name: "fajr",
        time: "06:20",
      },
      {
        name: "sunrise",
        time: "07:52",
      },
      {
        name: "zuhr",
        time: "12:22",
      },
      {
        name: "sunset",
        time: "16:52",
      },
      {
        name: "maghrib",
        time: "17:07",
      },
    ],
  },
  {
    index: 2,
    month: 1,
    day: 3,
    prayers: [
      {
        name: "imsak",
        time: "06:15",
      },
      {
        name: "fajr",
        time: "06:20",
      },
      {
        name: "sunrise",
        time: "07:52",
      },
      {
        name: "zuhr",
        time: "12:22",
      },
      {
        name: "sunset",
        time: "16:53",
      },
      {
        name: "maghrib",
        time: "17:08",
      },
    ],
  },
  {
    index: 3,
    month: 1,
    day: 4,
    prayers: [
      {
        name: "imsak",
        time: "06:15",
      },
      {
        name: "fajr",
        time: "06:20",
      },
      {
        name: "sunrise",
        time: "07:52",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "16:54",
      },
      {
        name: "maghrib",
        time: "17:09",
      },
    ],
  },
  {
    index: 4,
    month: 1,
    day: 5,
    prayers: [
      {
        name: "imsak",
        time: "06:15",
      },
      {
        name: "fajr",
        time: "06:20",
      },
      {
        name: "sunrise",
        time: "07:52",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "16:54",
      },
      {
        name: "maghrib",
        time: "17:09",
      },
    ],
  },
  {
    index: 5,
    month: 1,
    day: 6,
    prayers: [
      {
        name: "imsak",
        time: "06:15",
      },
      {
        name: "fajr",
        time: "06:20",
      },
      {
        name: "sunrise",
        time: "07:52",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "16:56",
      },
      {
        name: "maghrib",
        time: "17:11",
      },
    ],
  },
  {
    index: 6,
    month: 1,
    day: 7,
    prayers: [
      {
        name: "imsak",
        time: "06:15",
      },
      {
        name: "fajr",
        time: "06:20",
      },
      {
        name: "sunrise",
        time: "07:52",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "16:57",
      },
      {
        name: "maghrib",
        time: "17:12",
      },
    ],
  },
  {
    index: 7,
    month: 1,
    day: 8,
    prayers: [
      {
        name: "imsak",
        time: "06:15",
      },
      {
        name: "fajr",
        time: "06:20",
      },
      {
        name: "sunrise",
        time: "07:52",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "16:58",
      },
      {
        name: "maghrib",
        time: "17:13",
      },
    ],
  },
  {
    index: 8,
    month: 1,
    day: 9,
    prayers: [
      {
        name: "imsak",
        time: "06:15",
      },
      {
        name: "fajr",
        time: "06:20",
      },
      {
        name: "sunrise",
        time: "07:51",
      },
      {
        name: "zuhr",
        time: "12:25",
      },
      {
        name: "sunset",
        time: "16:59",
      },
      {
        name: "maghrib",
        time: "17:14",
      },
    ],
  },
  {
    index: 9,
    month: 1,
    day: 10,
    prayers: [
      {
        name: "imsak",
        time: "06:14",
      },
      {
        name: "fajr",
        time: "06:19",
      },
      {
        name: "sunrise",
        time: "07:51",
      },
      {
        name: "zuhr",
        time: "12:25",
      },
      {
        name: "sunset",
        time: "17:00",
      },
      {
        name: "maghrib",
        time: "17:15",
      },
    ],
  },
  {
    index: 10,
    month: 1,
    day: 11,
    prayers: [
      {
        name: "imsak",
        time: "06:14",
      },
      {
        name: "fajr",
        time: "06:19",
      },
      {
        name: "sunrise",
        time: "07:51",
      },
      {
        name: "zuhr",
        time: "12:26",
      },
      {
        name: "sunset",
        time: "17:01",
      },
      {
        name: "maghrib",
        time: "17:16",
      },
    ],
  },
  {
    index: 11,
    month: 1,
    day: 12,
    prayers: [
      {
        name: "imsak",
        time: "06:14",
      },
      {
        name: "fajr",
        time: "06:19",
      },
      {
        name: "sunrise",
        time: "07:50",
      },
      {
        name: "zuhr",
        time: "12:26",
      },
      {
        name: "sunset",
        time: "17:02",
      },
      {
        name: "maghrib",
        time: "17:17",
      },
    ],
  },
  {
    index: 12,
    month: 1,
    day: 13,
    prayers: [
      {
        name: "imsak",
        time: "06:14",
      },
      {
        name: "fajr",
        time: "06:19",
      },
      {
        name: "sunrise",
        time: "07:50",
      },
      {
        name: "zuhr",
        time: "12:26",
      },
      {
        name: "sunset",
        time: "17:03",
      },
      {
        name: "maghrib",
        time: "17:18",
      },
    ],
  },
  {
    index: 13,
    month: 1,
    day: 14,
    prayers: [
      {
        name: "imsak",
        time: "06:14",
      },
      {
        name: "fajr",
        time: "06:19",
      },
      {
        name: "sunrise",
        time: "07:50",
      },
      {
        name: "zuhr",
        time: "12:27",
      },
      {
        name: "sunset",
        time: "17:04",
      },
      {
        name: "maghrib",
        time: "17:19",
      },
    ],
  },
  {
    index: 14,
    month: 1,
    day: 15,
    prayers: [
      {
        name: "imsak",
        time: "06:13",
      },
      {
        name: "fajr",
        time: "06:18",
      },
      {
        name: "sunrise",
        time: "07:49",
      },
      {
        name: "zuhr",
        time: "12:27",
      },
      {
        name: "sunset",
        time: "17:06",
      },
      {
        name: "maghrib",
        time: "17:21",
      },
    ],
  },
  {
    index: 15,
    month: 1,
    day: 16,
    prayers: [
      {
        name: "imsak",
        time: "06:13",
      },
      {
        name: "fajr",
        time: "06:18",
      },
      {
        name: "sunrise",
        time: "07:49",
      },
      {
        name: "zuhr",
        time: "12:28",
      },
      {
        name: "sunset",
        time: "17:07",
      },
      {
        name: "maghrib",
        time: "17:22",
      },
    ],
  },
  {
    index: 16,
    month: 1,
    day: 17,
    prayers: [
      {
        name: "imsak",
        time: "06:12",
      },
      {
        name: "fajr",
        time: "06:17",
      },
      {
        name: "sunrise",
        time: "07:48",
      },
      {
        name: "zuhr",
        time: "12:28",
      },
      {
        name: "sunset",
        time: "17:08",
      },
      {
        name: "maghrib",
        time: "17:23",
      },
    ],
  },
  {
    index: 17,
    month: 1,
    day: 18,
    prayers: [
      {
        name: "imsak",
        time: "06:12",
      },
      {
        name: "fajr",
        time: "06:17",
      },
      {
        name: "sunrise",
        time: "07:47",
      },
      {
        name: "zuhr",
        time: "12:28",
      },
      {
        name: "sunset",
        time: "17:09",
      },
      {
        name: "maghrib",
        time: "17:24",
      },
    ],
  },
  {
    index: 18,
    month: 1,
    day: 19,
    prayers: [
      {
        name: "imsak",
        time: "06:12",
      },
      {
        name: "fajr",
        time: "06:17",
      },
      {
        name: "sunrise",
        time: "07:47",
      },
      {
        name: "zuhr",
        time: "12:29",
      },
      {
        name: "sunset",
        time: "17:11",
      },
      {
        name: "maghrib",
        time: "17:26",
      },
    ],
  },
  {
    index: 19,
    month: 1,
    day: 20,
    prayers: [
      {
        name: "imsak",
        time: "06:11",
      },
      {
        name: "fajr",
        time: "06:16",
      },
      {
        name: "sunrise",
        time: "07:46",
      },
      {
        name: "zuhr",
        time: "12:29",
      },
      {
        name: "sunset",
        time: "17:12",
      },
      {
        name: "maghrib",
        time: "17:27",
      },
    ],
  },
  {
    index: 20,
    month: 1,
    day: 21,
    prayers: [
      {
        name: "imsak",
        time: "06:11",
      },
      {
        name: "fajr",
        time: "06:16",
      },
      {
        name: "sunrise",
        time: "07:45",
      },
      {
        name: "zuhr",
        time: "12:29",
      },
      {
        name: "sunset",
        time: "17:13",
      },
      {
        name: "maghrib",
        time: "17:28",
      },
    ],
  },
  {
    index: 21,
    month: 1,
    day: 22,
    prayers: [
      {
        name: "imsak",
        time: "06:10",
      },
      {
        name: "fajr",
        time: "06:15",
      },
      {
        name: "sunrise",
        time: "07:45",
      },
      {
        name: "zuhr",
        time: "12:29",
      },
      {
        name: "sunset",
        time: "17:15",
      },
      {
        name: "maghrib",
        time: "17:30",
      },
    ],
  },
  {
    index: 22,
    month: 1,
    day: 23,
    prayers: [
      {
        name: "imsak",
        time: "06:09",
      },
      {
        name: "fajr",
        time: "06:14",
      },
      {
        name: "sunrise",
        time: "07:44",
      },
      {
        name: "zuhr",
        time: "12:30",
      },
      {
        name: "sunset",
        time: "17:16",
      },
      {
        name: "maghrib",
        time: "17:31",
      },
    ],
  },
  {
    index: 23,
    month: 1,
    day: 24,
    prayers: [
      {
        name: "imsak",
        time: "06:09",
      },
      {
        name: "fajr",
        time: "06:14",
      },
      {
        name: "sunrise",
        time: "07:43",
      },
      {
        name: "zuhr",
        time: "12:30",
      },
      {
        name: "sunset",
        time: "17:17",
      },
      {
        name: "maghrib",
        time: "17:32",
      },
    ],
  },
  {
    index: 24,
    month: 1,
    day: 25,
    prayers: [
      {
        name: "imsak",
        time: "06:08",
      },
      {
        name: "fajr",
        time: "06:13",
      },
      {
        name: "sunrise",
        time: "07:42",
      },
      {
        name: "zuhr",
        time: "12:30",
      },
      {
        name: "sunset",
        time: "17:19",
      },
      {
        name: "maghrib",
        time: "17:34",
      },
    ],
  },
  {
    index: 25,
    month: 1,
    day: 26,
    prayers: [
      {
        name: "imsak",
        time: "06:07",
      },
      {
        name: "fajr",
        time: "06:12",
      },
      {
        name: "sunrise",
        time: "07:41",
      },
      {
        name: "zuhr",
        time: "12:30",
      },
      {
        name: "sunset",
        time: "17:20",
      },
      {
        name: "maghrib",
        time: "17:35",
      },
    ],
  },
  {
    index: 26,
    month: 1,
    day: 27,
    prayers: [
      {
        name: "imsak",
        time: "06:07",
      },
      {
        name: "fajr",
        time: "06:12",
      },
      {
        name: "sunrise",
        time: "07:40",
      },
      {
        name: "zuhr",
        time: "12:31",
      },
      {
        name: "sunset",
        time: "17:21",
      },
      {
        name: "maghrib",
        time: "17:36",
      },
    ],
  },
  {
    index: 27,
    month: 1,
    day: 28,
    prayers: [
      {
        name: "imsak",
        time: "06:06",
      },
      {
        name: "fajr",
        time: "06:11",
      },
      {
        name: "sunrise",
        time: "07:39",
      },
      {
        name: "zuhr",
        time: "12:31",
      },
      {
        name: "sunset",
        time: "17:23",
      },
      {
        name: "maghrib",
        time: "17:38",
      },
    ],
  },
  {
    index: 28,
    month: 1,
    day: 29,
    prayers: [
      {
        name: "imsak",
        time: "06:05",
      },
      {
        name: "fajr",
        time: "06:10",
      },
      {
        name: "sunrise",
        time: "07:38",
      },
      {
        name: "zuhr",
        time: "12:31",
      },
      {
        name: "sunset",
        time: "17:24",
      },
      {
        name: "maghrib",
        time: "17:39",
      },
    ],
  },
  {
    index: 29,
    month: 1,
    day: 30,
    prayers: [
      {
        name: "imsak",
        time: "06:04",
      },
      {
        name: "fajr",
        time: "06:09",
      },
      {
        name: "sunrise",
        time: "07:37",
      },
      {
        name: "zuhr",
        time: "12:31",
      },
      {
        name: "sunset",
        time: "17:25",
      },
      {
        name: "maghrib",
        time: "17:40",
      },
    ],
  },
  {
    index: 30,
    month: 1,
    day: 31,
    prayers: [
      {
        name: "imsak",
        time: "06:03",
      },
      {
        name: "fajr",
        time: "06:08",
      },
      {
        name: "sunrise",
        time: "07:36",
      },
      {
        name: "zuhr",
        time: "12:31",
      },
      {
        name: "sunset",
        time: "17:27",
      },
      {
        name: "maghrib",
        time: "17:42",
      },
    ],
  },
  {
    index: 31,
    month: 2,
    day: 1,
    prayers: [
      {
        name: "imsak",
        time: "06:02",
      },
      {
        name: "fajr",
        time: "06:07",
      },
      {
        name: "sunrise",
        time: "07:35",
      },
      {
        name: "zuhr",
        time: "12:31",
      },
      {
        name: "sunset",
        time: "17:28",
      },
      {
        name: "maghrib",
        time: "17:43",
      },
    ],
  },
  {
    index: 32,
    month: 2,
    day: 2,
    prayers: [
      {
        name: "imsak",
        time: "06:01",
      },
      {
        name: "fajr",
        time: "06:06",
      },
      {
        name: "sunrise",
        time: "07:34",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:29",
      },
      {
        name: "maghrib",
        time: "17:44",
      },
    ],
  },
  {
    index: 33,
    month: 2,
    day: 3,
    prayers: [
      {
        name: "imsak",
        time: "06:01",
      },
      {
        name: "fajr",
        time: "06:06",
      },
      {
        name: "sunrise",
        time: "07:33",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:31",
      },
      {
        name: "maghrib",
        time: "17:46",
      },
    ],
  },
  {
    index: 34,
    month: 2,
    day: 4,
    prayers: [
      {
        name: "imsak",
        time: "06:00",
      },
      {
        name: "fajr",
        time: "06:05",
      },
      {
        name: "sunrise",
        time: "07:32",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:32",
      },
      {
        name: "maghrib",
        time: "17:47",
      },
    ],
  },
  {
    index: 35,
    month: 2,
    day: 5,
    prayers: [
      {
        name: "imsak",
        time: "05:58",
      },
      {
        name: "fajr",
        time: "06:03",
      },
      {
        name: "sunrise",
        time: "07:31",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:34",
      },
      {
        name: "maghrib",
        time: "17:49",
      },
    ],
  },
  {
    index: 36,
    month: 2,
    day: 6,
    prayers: [
      {
        name: "imsak",
        time: "05:57",
      },
      {
        name: "fajr",
        time: "06:02",
      },
      {
        name: "sunrise",
        time: "07:29",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:35",
      },
      {
        name: "maghrib",
        time: "17:50",
      },
    ],
  },
  {
    index: 37,
    month: 2,
    day: 7,
    prayers: [
      {
        name: "imsak",
        time: "05:56",
      },
      {
        name: "fajr",
        time: "06:01",
      },
      {
        name: "sunrise",
        time: "07:28",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:36",
      },
      {
        name: "maghrib",
        time: "17:51",
      },
    ],
  },
  {
    index: 38,
    month: 2,
    day: 8,
    prayers: [
      {
        name: "imsak",
        time: "05:55",
      },
      {
        name: "fajr",
        time: "06:00",
      },
      {
        name: "sunrise",
        time: "07:27",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:38",
      },
      {
        name: "maghrib",
        time: "17:53",
      },
    ],
  },
  {
    index: 39,
    month: 2,
    day: 9,
    prayers: [
      {
        name: "imsak",
        time: "05:54",
      },
      {
        name: "fajr",
        time: "05:59",
      },
      {
        name: "sunrise",
        time: "07:26",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:39",
      },
      {
        name: "maghrib",
        time: "17:54",
      },
    ],
  },
  {
    index: 40,
    month: 2,
    day: 10,
    prayers: [
      {
        name: "imsak",
        time: "05:53",
      },
      {
        name: "fajr",
        time: "05:58",
      },
      {
        name: "sunrise",
        time: "07:24",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:40",
      },
      {
        name: "maghrib",
        time: "17:55",
      },
    ],
  },
  {
    index: 41,
    month: 2,
    day: 11,
    prayers: [
      {
        name: "imsak",
        time: "05:52",
      },
      {
        name: "fajr",
        time: "05:57",
      },
      {
        name: "sunrise",
        time: "07:23",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:42",
      },
      {
        name: "maghrib",
        time: "17:57",
      },
    ],
  },
  {
    index: 42,
    month: 2,
    day: 12,
    prayers: [
      {
        name: "imsak",
        time: "05:50",
      },
      {
        name: "fajr",
        time: "05:55",
      },
      {
        name: "sunrise",
        time: "07:22",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:43",
      },
      {
        name: "maghrib",
        time: "17:58",
      },
    ],
  },
  {
    index: 43,
    month: 2,
    day: 13,
    prayers: [
      {
        name: "imsak",
        time: "05:49",
      },
      {
        name: "fajr",
        time: "05:54",
      },
      {
        name: "sunrise",
        time: "07:20",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:45",
      },
      {
        name: "maghrib",
        time: "18:00",
      },
    ],
  },
  {
    index: 44,
    month: 2,
    day: 14,
    prayers: [
      {
        name: "imsak",
        time: "05:48",
      },
      {
        name: "fajr",
        time: "05:53",
      },
      {
        name: "sunrise",
        time: "07:19",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:46",
      },
      {
        name: "maghrib",
        time: "18:01",
      },
    ],
  },
  {
    index: 45,
    month: 2,
    day: 15,
    prayers: [
      {
        name: "imsak",
        time: "05:47",
      },
      {
        name: "fajr",
        time: "05:52",
      },
      {
        name: "sunrise",
        time: "07:17",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:47",
      },
      {
        name: "maghrib",
        time: "18:02",
      },
    ],
  },
  {
    index: 46,
    month: 2,
    day: 16,
    prayers: [
      {
        name: "imsak",
        time: "05:45",
      },
      {
        name: "fajr",
        time: "05:50",
      },
      {
        name: "sunrise",
        time: "07:16",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:49",
      },
      {
        name: "maghrib",
        time: "18:04",
      },
    ],
  },
  {
    index: 47,
    month: 2,
    day: 17,
    prayers: [
      {
        name: "imsak",
        time: "05:44",
      },
      {
        name: "fajr",
        time: "05:49",
      },
      {
        name: "sunrise",
        time: "07:14",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:50",
      },
      {
        name: "maghrib",
        time: "18:05",
      },
    ],
  },
  {
    index: 48,
    month: 2,
    day: 18,
    prayers: [
      {
        name: "imsak",
        time: "05:42",
      },
      {
        name: "fajr",
        time: "05:47",
      },
      {
        name: "sunrise",
        time: "07:13",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:51",
      },
      {
        name: "maghrib",
        time: "18:06",
      },
    ],
  },
  {
    index: 49,
    month: 2,
    day: 19,
    prayers: [
      {
        name: "imsak",
        time: "05:41",
      },
      {
        name: "fajr",
        time: "05:46",
      },
      {
        name: "sunrise",
        time: "07:11",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:53",
      },
      {
        name: "maghrib",
        time: "18:08",
      },
    ],
  },
  {
    index: 50,
    month: 2,
    day: 20,
    prayers: [
      {
        name: "imsak",
        time: "05:40",
      },
      {
        name: "fajr",
        time: "05:45",
      },
      {
        name: "sunrise",
        time: "07:10",
      },
      {
        name: "zuhr",
        time: "12:32",
      },
      {
        name: "sunset",
        time: "17:54",
      },
      {
        name: "maghrib",
        time: "18:09",
      },
    ],
  },
  {
    index: 51,
    month: 2,
    day: 21,
    prayers: [
      {
        name: "imsak",
        time: "05:38",
      },
      {
        name: "fajr",
        time: "05:43",
      },
      {
        name: "sunrise",
        time: "07:08",
      },
      {
        name: "zuhr",
        time: "12:31",
      },
      {
        name: "sunset",
        time: "17:55",
      },
      {
        name: "maghrib",
        time: "18:10",
      },
    ],
  },
  {
    index: 52,
    month: 2,
    day: 22,
    prayers: [
      {
        name: "imsak",
        time: "05:37",
      },
      {
        name: "fajr",
        time: "05:42",
      },
      {
        name: "sunrise",
        time: "07:07",
      },
      {
        name: "zuhr",
        time: "12:31",
      },
      {
        name: "sunset",
        time: "17:57",
      },
      {
        name: "maghrib",
        time: "18:12",
      },
    ],
  },
  {
    index: 53,
    month: 2,
    day: 23,
    prayers: [
      {
        name: "imsak",
        time: "05:35",
      },
      {
        name: "fajr",
        time: "05:40",
      },
      {
        name: "sunrise",
        time: "07:05",
      },
      {
        name: "zuhr",
        time: "12:31",
      },
      {
        name: "sunset",
        time: "17:58",
      },
      {
        name: "maghrib",
        time: "18:13",
      },
    ],
  },
  {
    index: 54,
    month: 2,
    day: 24,
    prayers: [
      {
        name: "imsak",
        time: "05:33",
      },
      {
        name: "fajr",
        time: "05:38",
      },
      {
        name: "sunrise",
        time: "07:03",
      },
      {
        name: "zuhr",
        time: "12:31",
      },
      {
        name: "sunset",
        time: "17:59",
      },
      {
        name: "maghrib",
        time: "18:14",
      },
    ],
  },
  {
    index: 55,
    month: 2,
    day: 25,
    prayers: [
      {
        name: "imsak",
        time: "05:32",
      },
      {
        name: "fajr",
        time: "05:37",
      },
      {
        name: "sunrise",
        time: "07:02",
      },
      {
        name: "zuhr",
        time: "12:31",
      },
      {
        name: "sunset",
        time: "18:01",
      },
      {
        name: "maghrib",
        time: "18:16",
      },
    ],
  },
  {
    index: 56,
    month: 2,
    day: 26,
    prayers: [
      {
        name: "imsak",
        time: "05:30",
      },
      {
        name: "fajr",
        time: "05:35",
      },
      {
        name: "sunrise",
        time: "07:00",
      },
      {
        name: "zuhr",
        time: "12:31",
      },
      {
        name: "sunset",
        time: "18:02",
      },
      {
        name: "maghrib",
        time: "18:17",
      },
    ],
  },
  {
    index: 57,
    month: 2,
    day: 27,
    prayers: [
      {
        name: "imsak",
        time: "05:29",
      },
      {
        name: "fajr",
        time: "05:34",
      },
      {
        name: "sunrise",
        time: "06:59",
      },
      {
        name: "zuhr",
        time: "12:30",
      },
      {
        name: "sunset",
        time: "18:03",
      },
      {
        name: "maghrib",
        time: "18:18",
      },
    ],
  },
  {
    index: 58,
    month: 2,
    day: 28,
    prayers: [
      {
        name: "imsak",
        time: "05:27",
      },
      {
        name: "fajr",
        time: "05:32",
      },
      {
        name: "sunrise",
        time: "06:57",
      },
      {
        name: "zuhr",
        time: "12:30",
      },
      {
        name: "sunset",
        time: "18:05",
      },
      {
        name: "maghrib",
        time: "18:20",
      },
    ],
  },
  {
    index: 59,
    month: 3,
    day: 1,
    prayers: [
      {
        name: "imsak",
        time: "05:26",
      },
      {
        name: "fajr",
        time: "05:31",
      },
      {
        name: "sunrise",
        time: "06:55",
      },
      {
        name: "zuhr",
        time: "12:30",
      },
      {
        name: "sunset",
        time: "18:06",
      },
      {
        name: "maghrib",
        time: "18:21",
      },
    ],
  },
  {
    index: 60,
    month: 3,
    day: 2,
    prayers: [
      {
        name: "imsak",
        time: "05:24",
      },
      {
        name: "fajr",
        time: "05:29",
      },
      {
        name: "sunrise",
        time: "06:54",
      },
      {
        name: "zuhr",
        time: "12:30",
      },
      {
        name: "sunset",
        time: "18:07",
      },
      {
        name: "maghrib",
        time: "18:22",
      },
    ],
  },
  {
    index: 61,
    month: 3,
    day: 3,
    prayers: [
      {
        name: "imsak",
        time: "05:22",
      },
      {
        name: "fajr",
        time: "05:27",
      },
      {
        name: "sunrise",
        time: "06:52",
      },
      {
        name: "zuhr",
        time: "12:30",
      },
      {
        name: "sunset",
        time: "18:08",
      },
      {
        name: "maghrib",
        time: "18:23",
      },
    ],
  },
  {
    index: 62,
    month: 3,
    day: 4,
    prayers: [
      {
        name: "imsak",
        time: "05:21",
      },
      {
        name: "fajr",
        time: "05:26",
      },
      {
        name: "sunrise",
        time: "06:50",
      },
      {
        name: "zuhr",
        time: "12:30",
      },
      {
        name: "sunset",
        time: "18:10",
      },
      {
        name: "maghrib",
        time: "18:25",
      },
    ],
  },
  {
    index: 63,
    month: 3,
    day: 5,
    prayers: [
      {
        name: "imsak",
        time: "05:19",
      },
      {
        name: "fajr",
        time: "05:24",
      },
      {
        name: "sunrise",
        time: "06:48",
      },
      {
        name: "zuhr",
        time: "12:29",
      },
      {
        name: "sunset",
        time: "18:11",
      },
      {
        name: "maghrib",
        time: "18:26",
      },
    ],
  },
  {
    index: 64,
    month: 3,
    day: 6,
    prayers: [
      {
        name: "imsak",
        time: "05:17",
      },
      {
        name: "fajr",
        time: "05:22",
      },
      {
        name: "sunrise",
        time: "06:47",
      },
      {
        name: "zuhr",
        time: "12:29",
      },
      {
        name: "sunset",
        time: "18:12",
      },
      {
        name: "maghrib",
        time: "18:27",
      },
    ],
  },
  {
    index: 65,
    month: 3,
    day: 7,
    prayers: [
      {
        name: "imsak",
        time: "05:15",
      },
      {
        name: "fajr",
        time: "05:20",
      },
      {
        name: "sunrise",
        time: "06:45",
      },
      {
        name: "zuhr",
        time: "12:29",
      },
      {
        name: "sunset",
        time: "18:14",
      },
      {
        name: "maghrib",
        time: "18:29",
      },
    ],
  },
  {
    index: 66,
    month: 3,
    day: 8,
    prayers: [
      {
        name: "imsak",
        time: "05:14",
      },
      {
        name: "fajr",
        time: "05:19",
      },
      {
        name: "sunrise",
        time: "06:43",
      },
      {
        name: "zuhr",
        time: "12:29",
      },
      {
        name: "sunset",
        time: "18:15",
      },
      {
        name: "maghrib",
        time: "18:30",
      },
    ],
  },
  {
    index: 67,
    month: 3,
    day: 9,
    prayers: [
      {
        name: "imsak",
        time: "05:12",
      },
      {
        name: "fajr",
        time: "05:17",
      },
      {
        name: "sunrise",
        time: "06:41",
      },
      {
        name: "zuhr",
        time: "12:28",
      },
      {
        name: "sunset",
        time: "18:16",
      },
      {
        name: "maghrib",
        time: "18:31",
      },
    ],
  },
  {
    index: 68,
    month: 3,
    day: 10,
    prayers: [
      {
        name: "imsak",
        time: "05:10",
      },
      {
        name: "fajr",
        time: "05:15",
      },
      {
        name: "sunrise",
        time: "06:40",
      },
      {
        name: "zuhr",
        time: "12:28",
      },
      {
        name: "sunset",
        time: "18:17",
      },
      {
        name: "maghrib",
        time: "18:32",
      },
    ],
  },
  {
    index: 69,
    month: 3,
    day: 11,
    prayers: [
      {
        name: "imsak",
        time: "05:08",
      },
      {
        name: "fajr",
        time: "05:13",
      },
      {
        name: "sunrise",
        time: "06:38",
      },
      {
        name: "zuhr",
        time: "12:28",
      },
      {
        name: "sunset",
        time: "18:19",
      },
      {
        name: "maghrib",
        time: "18:34",
      },
    ],
  },
  {
    index: 70,
    month: 3,
    day: 12,
    prayers: [
      {
        name: "imsak",
        time: "05:06",
      },
      {
        name: "fajr",
        time: "05:11",
      },
      {
        name: "sunrise",
        time: "06:36",
      },
      {
        name: "zuhr",
        time: "12:28",
      },
      {
        name: "sunset",
        time: "18:20",
      },
      {
        name: "maghrib",
        time: "18:35",
      },
    ],
  },
  {
    index: 71,
    month: 3,
    day: 13,
    prayers: [
      {
        name: "imsak",
        time: "05:05",
      },
      {
        name: "fajr",
        time: "05:10",
      },
      {
        name: "sunrise",
        time: "06:34",
      },
      {
        name: "zuhr",
        time: "12:27",
      },
      {
        name: "sunset",
        time: "18:21",
      },
      {
        name: "maghrib",
        time: "18:36",
      },
    ],
  },
  {
    index: 72,
    month: 3,
    day: 14,
    prayers: [
      {
        name: "imsak",
        time: "05:03",
      },
      {
        name: "fajr",
        time: "05:08",
      },
      {
        name: "sunrise",
        time: "06:32",
      },
      {
        name: "zuhr",
        time: "12:27",
      },
      {
        name: "sunset",
        time: "18:22",
      },
      {
        name: "maghrib",
        time: "18:37",
      },
    ],
  },
  {
    index: 73,
    month: 3,
    day: 15,
    prayers: [
      {
        name: "imsak",
        time: "05:01",
      },
      {
        name: "fajr",
        time: "05:06",
      },
      {
        name: "sunrise",
        time: "06:31",
      },
      {
        name: "zuhr",
        time: "12:27",
      },
      {
        name: "sunset",
        time: "18:24",
      },
      {
        name: "maghrib",
        time: "18:39",
      },
    ],
  },
  {
    index: 74,
    month: 3,
    day: 16,
    prayers: [
      {
        name: "imsak",
        time: "04:59",
      },
      {
        name: "fajr",
        time: "05:04",
      },
      {
        name: "sunrise",
        time: "06:29",
      },
      {
        name: "zuhr",
        time: "12:26",
      },
      {
        name: "sunset",
        time: "18:25",
      },
      {
        name: "maghrib",
        time: "18:40",
      },
    ],
  },
  {
    index: 75,
    month: 3,
    day: 17,
    prayers: [
      {
        name: "imsak",
        time: "04:57",
      },
      {
        name: "fajr",
        time: "05:02",
      },
      {
        name: "sunrise",
        time: "06:27",
      },
      {
        name: "zuhr",
        time: "12:26",
      },
      {
        name: "sunset",
        time: "18:26",
      },
      {
        name: "maghrib",
        time: "18:41",
      },
    ],
  },
  {
    index: 76,
    month: 3,
    day: 18,
    prayers: [
      {
        name: "imsak",
        time: "04:55",
      },
      {
        name: "fajr",
        time: "05:00",
      },
      {
        name: "sunrise",
        time: "06:25",
      },
      {
        name: "zuhr",
        time: "12:26",
      },
      {
        name: "sunset",
        time: "18:27",
      },
      {
        name: "maghrib",
        time: "18:42",
      },
    ],
  },
  {
    index: 77,
    month: 3,
    day: 19,
    prayers: [
      {
        name: "imsak",
        time: "04:53",
      },
      {
        name: "fajr",
        time: "04:58",
      },
      {
        name: "sunrise",
        time: "06:23",
      },
      {
        name: "zuhr",
        time: "12:26",
      },
      {
        name: "sunset",
        time: "18:29",
      },
      {
        name: "maghrib",
        time: "18:44",
      },
    ],
  },
  {
    index: 78,
    month: 3,
    day: 20,
    prayers: [
      {
        name: "imsak",
        time: "04:51",
      },
      {
        name: "fajr",
        time: "04:56",
      },
      {
        name: "sunrise",
        time: "06:22",
      },
      {
        name: "zuhr",
        time: "12:25",
      },
      {
        name: "sunset",
        time: "18:30",
      },
      {
        name: "maghrib",
        time: "18:45",
      },
    ],
  },
  {
    index: 79,
    month: 3,
    day: 21,
    prayers: [
      {
        name: "imsak",
        time: "04:49",
      },
      {
        name: "fajr",
        time: "04:54",
      },
      {
        name: "sunrise",
        time: "06:20",
      },
      {
        name: "zuhr",
        time: "12:25",
      },
      {
        name: "sunset",
        time: "18:31",
      },
      {
        name: "maghrib",
        time: "18:46",
      },
    ],
  },
  {
    index: 80,
    month: 3,
    day: 22,
    prayers: [
      {
        name: "imsak",
        time: "04:47",
      },
      {
        name: "fajr",
        time: "04:52",
      },
      {
        name: "sunrise",
        time: "06:18",
      },
      {
        name: "zuhr",
        time: "12:25",
      },
      {
        name: "sunset",
        time: "18:32",
      },
      {
        name: "maghrib",
        time: "18:47",
      },
    ],
  },
  {
    index: 81,
    month: 3,
    day: 23,
    prayers: [
      {
        name: "imsak",
        time: "04:45",
      },
      {
        name: "fajr",
        time: "04:50",
      },
      {
        name: "sunrise",
        time: "06:16",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "18:33",
      },
      {
        name: "maghrib",
        time: "18:48",
      },
    ],
  },
  {
    index: 82,
    month: 3,
    day: 24,
    prayers: [
      {
        name: "imsak",
        time: "04:43",
      },
      {
        name: "fajr",
        time: "04:48",
      },
      {
        name: "sunrise",
        time: "06:14",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "18:35",
      },
      {
        name: "maghrib",
        time: "18:50",
      },
    ],
  },
  {
    index: 83,
    month: 3,
    day: 25,
    prayers: [
      {
        name: "imsak",
        time: "04:41",
      },
      {
        name: "fajr",
        time: "04:46",
      },
      {
        name: "sunrise",
        time: "06:13",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "18:36",
      },
      {
        name: "maghrib",
        time: "18:51",
      },
    ],
  },
  {
    index: 84,
    month: 3,
    day: 26,
    prayers: [
      {
        name: "imsak",
        time: "04:39",
      },
      {
        name: "fajr",
        time: "04:44",
      },
      {
        name: "sunrise",
        time: "06:11",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "18:37",
      },
      {
        name: "maghrib",
        time: "18:52",
      },
    ],
  },
  {
    index: 85,
    month: 3,
    day: 27,
    prayers: [
      {
        name: "imsak",
        time: "04:37",
      },
      {
        name: "fajr",
        time: "04:42",
      },
      {
        name: "sunrise",
        time: "06:09",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "18:38",
      },
      {
        name: "maghrib",
        time: "18:53",
      },
    ],
  },
  {
    index: 86,
    month: 3,
    day: 28,
    prayers: [
      {
        name: "imsak",
        time: "04:35",
      },
      {
        name: "fajr",
        time: "04:40",
      },
      {
        name: "sunrise",
        time: "06:07",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "18:39",
      },
      {
        name: "maghrib",
        time: "18:54",
      },
    ],
  },
  {
    index: 87,
    month: 3,
    day: 29,
    prayers: [
      {
        name: "imsak",
        time: "04:33",
      },
      {
        name: "fajr",
        time: "04:38",
      },
      {
        name: "sunrise",
        time: "06:05",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "18:41",
      },
      {
        name: "maghrib",
        time: "18:56",
      },
    ],
  },
  {
    index: 88,
    month: 3,
    day: 30,
    prayers: [
      {
        name: "imsak",
        time: "04:31",
      },
      {
        name: "fajr",
        time: "04:36",
      },
      {
        name: "sunrise",
        time: "06:03",
      },
      {
        name: "zuhr",
        time: "12:22",
      },
      {
        name: "sunset",
        time: "18:42",
      },
      {
        name: "maghrib",
        time: "18:57",
      },
    ],
  },
  {
    index: 89,
    month: 3,
    day: 31,
    prayers: [
      {
        name: "imsak",
        time: "04:29",
      },
      {
        name: "fajr",
        time: "04:34",
      },
      {
        name: "sunrise",
        time: "06:02",
      },
      {
        name: "zuhr",
        time: "12:22",
      },
      {
        name: "sunset",
        time: "18:43",
      },
      {
        name: "maghrib",
        time: "18:58",
      },
    ],
  },
  {
    index: 90,
    month: 4,
    day: 1,
    prayers: [
      {
        name: "imsak",
        time: "04:27",
      },
      {
        name: "fajr",
        time: "04:32",
      },
      {
        name: "sunrise",
        time: "06:00",
      },
      {
        name: "zuhr",
        time: "12:22",
      },
      {
        name: "sunset",
        time: "18:44",
      },
      {
        name: "maghrib",
        time: "18:59",
      },
    ],
  },
  {
    index: 91,
    month: 4,
    day: 2,
    prayers: [
      {
        name: "imsak",
        time: "04:25",
      },
      {
        name: "fajr",
        time: "04:30",
      },
      {
        name: "sunrise",
        time: "05:58",
      },
      {
        name: "zuhr",
        time: "12:21",
      },
      {
        name: "sunset",
        time: "18:45",
      },
      {
        name: "maghrib",
        time: "19:00",
      },
    ],
  },
  {
    index: 92,
    month: 4,
    day: 3,
    prayers: [
      {
        name: "imsak",
        time: "04:23",
      },
      {
        name: "fajr",
        time: "04:28",
      },
      {
        name: "sunrise",
        time: "05:56",
      },
      {
        name: "zuhr",
        time: "12:21",
      },
      {
        name: "sunset",
        time: "18:47",
      },
      {
        name: "maghrib",
        time: "19:02",
      },
    ],
  },
  {
    index: 93,
    month: 4,
    day: 4,
    prayers: [
      {
        name: "imsak",
        time: "04:21",
      },
      {
        name: "fajr",
        time: "04:26",
      },
      {
        name: "sunrise",
        time: "05:54",
      },
      {
        name: "zuhr",
        time: "12:21",
      },
      {
        name: "sunset",
        time: "18:48",
      },
      {
        name: "maghrib",
        time: "19:03",
      },
    ],
  },
  {
    index: 94,
    month: 4,
    day: 5,
    prayers: [
      {
        name: "imsak",
        time: "04:19",
      },
      {
        name: "fajr",
        time: "04:24",
      },
      {
        name: "sunrise",
        time: "05:53",
      },
      {
        name: "zuhr",
        time: "12:21",
      },
      {
        name: "sunset",
        time: "18:49",
      },
      {
        name: "maghrib",
        time: "19:04",
      },
    ],
  },
  {
    index: 95,
    month: 4,
    day: 6,
    prayers: [
      {
        name: "imsak",
        time: "04:17",
      },
      {
        name: "fajr",
        time: "04:22",
      },
      {
        name: "sunrise",
        time: "05:51",
      },
      {
        name: "zuhr",
        time: "12:20",
      },
      {
        name: "sunset",
        time: "18:50",
      },
      {
        name: "maghrib",
        time: "19:05",
      },
    ],
  },
  {
    index: 96,
    month: 4,
    day: 7,
    prayers: [
      {
        name: "imsak",
        time: "04:15",
      },
      {
        name: "fajr",
        time: "04:20",
      },
      {
        name: "sunrise",
        time: "05:49",
      },
      {
        name: "zuhr",
        time: "12:20",
      },
      {
        name: "sunset",
        time: "18:52",
      },
      {
        name: "maghrib",
        time: "19:07",
      },
    ],
  },
  {
    index: 97,
    month: 4,
    day: 8,
    prayers: [
      {
        name: "imsak",
        time: "04:13",
      },
      {
        name: "fajr",
        time: "04:18",
      },
      {
        name: "sunrise",
        time: "05:47",
      },
      {
        name: "zuhr",
        time: "12:20",
      },
      {
        name: "sunset",
        time: "18:53",
      },
      {
        name: "maghrib",
        time: "19:08",
      },
    ],
  },
  {
    index: 98,
    month: 4,
    day: 9,
    prayers: [
      {
        name: "imsak",
        time: "04:11",
      },
      {
        name: "fajr",
        time: "04:16",
      },
      {
        name: "sunrise",
        time: "05:46",
      },
      {
        name: "zuhr",
        time: "12:19",
      },
      {
        name: "sunset",
        time: "18:54",
      },
      {
        name: "maghrib",
        time: "19:09",
      },
    ],
  },
  {
    index: 99,
    month: 4,
    day: 10,
    prayers: [
      {
        name: "imsak",
        time: "04:09",
      },
      {
        name: "fajr",
        time: "04:14",
      },
      {
        name: "sunrise",
        time: "05:44",
      },
      {
        name: "zuhr",
        time: "12:19",
      },
      {
        name: "sunset",
        time: "18:55",
      },
      {
        name: "maghrib",
        time: "19:10",
      },
    ],
  },
  {
    index: 100,
    month: 4,
    day: 11,
    prayers: [
      {
        name: "imsak",
        time: "04:07",
      },
      {
        name: "fajr",
        time: "04:12",
      },
      {
        name: "sunrise",
        time: "05:42",
      },
      {
        name: "zuhr",
        time: "12:19",
      },
      {
        name: "sunset",
        time: "18:56",
      },
      {
        name: "maghrib",
        time: "19:11",
      },
    ],
  },
  {
    index: 101,
    month: 4,
    day: 12,
    prayers: [
      {
        name: "imsak",
        time: "04:05",
      },
      {
        name: "fajr",
        time: "04:10",
      },
      {
        name: "sunrise",
        time: "05:40",
      },
      {
        name: "zuhr",
        time: "12:19",
      },
      {
        name: "sunset",
        time: "18:58",
      },
      {
        name: "maghrib",
        time: "19:13",
      },
    ],
  },
  {
    index: 102,
    month: 4,
    day: 13,
    prayers: [
      {
        name: "imsak",
        time: "04:03",
      },
      {
        name: "fajr",
        time: "04:08",
      },
      {
        name: "sunrise",
        time: "05:39",
      },
      {
        name: "zuhr",
        time: "12:18",
      },
      {
        name: "sunset",
        time: "18:59",
      },
      {
        name: "maghrib",
        time: "19:14",
      },
    ],
  },
  {
    index: 103,
    month: 4,
    day: 14,
    prayers: [
      {
        name: "imsak",
        time: "04:01",
      },
      {
        name: "fajr",
        time: "04:06",
      },
      {
        name: "sunrise",
        time: "05:37",
      },
      {
        name: "zuhr",
        time: "12:18",
      },
      {
        name: "sunset",
        time: "19:00",
      },
      {
        name: "maghrib",
        time: "19:15",
      },
    ],
  },
  {
    index: 104,
    month: 4,
    day: 15,
    prayers: [
      {
        name: "imsak",
        time: "03:59",
      },
      {
        name: "fajr",
        time: "04:04",
      },
      {
        name: "sunrise",
        time: "05:35",
      },
      {
        name: "zuhr",
        time: "12:18",
      },
      {
        name: "sunset",
        time: "19:01",
      },
      {
        name: "maghrib",
        time: "19:16",
      },
    ],
  },
  {
    index: 105,
    month: 4,
    day: 16,
    prayers: [
      {
        name: "imsak",
        time: "03:57",
      },
      {
        name: "fajr",
        time: "04:02",
      },
      {
        name: "sunrise",
        time: "05:34",
      },
      {
        name: "zuhr",
        time: "12:18",
      },
      {
        name: "sunset",
        time: "19:02",
      },
      {
        name: "maghrib",
        time: "19:17",
      },
    ],
  },
  {
    index: 106,
    month: 4,
    day: 17,
    prayers: [
      {
        name: "imsak",
        time: "03:55",
      },
      {
        name: "fajr",
        time: "04:00",
      },
      {
        name: "sunrise",
        time: "05:32",
      },
      {
        name: "zuhr",
        time: "12:17",
      },
      {
        name: "sunset",
        time: "19:04",
      },
      {
        name: "maghrib",
        time: "19:19",
      },
    ],
  },
  {
    index: 107,
    month: 4,
    day: 18,
    prayers: [
      {
        name: "imsak",
        time: "03:52",
      },
      {
        name: "fajr",
        time: "03:57",
      },
      {
        name: "sunrise",
        time: "05:30",
      },
      {
        name: "zuhr",
        time: "12:17",
      },
      {
        name: "sunset",
        time: "19:05",
      },
      {
        name: "maghrib",
        time: "19:20",
      },
    ],
  },
  {
    index: 108,
    month: 4,
    day: 19,
    prayers: [
      {
        name: "imsak",
        time: "03:50",
      },
      {
        name: "fajr",
        time: "03:55",
      },
      {
        name: "sunrise",
        time: "05:29",
      },
      {
        name: "zuhr",
        time: "12:17",
      },
      {
        name: "sunset",
        time: "19:06",
      },
      {
        name: "maghrib",
        time: "19:21",
      },
    ],
  },
  {
    index: 109,
    month: 4,
    day: 20,
    prayers: [
      {
        name: "imsak",
        time: "03:48",
      },
      {
        name: "fajr",
        time: "03:53",
      },
      {
        name: "sunrise",
        time: "05:27",
      },
      {
        name: "zuhr",
        time: "12:17",
      },
      {
        name: "sunset",
        time: "19:07",
      },
      {
        name: "maghrib",
        time: "19:22",
      },
    ],
  },
  {
    index: 110,
    month: 4,
    day: 21,
    prayers: [
      {
        name: "imsak",
        time: "03:46",
      },
      {
        name: "fajr",
        time: "03:51",
      },
      {
        name: "sunrise",
        time: "05:25",
      },
      {
        name: "zuhr",
        time: "12:17",
      },
      {
        name: "sunset",
        time: "19:08",
      },
      {
        name: "maghrib",
        time: "19:23",
      },
    ],
  },
  {
    index: 111,
    month: 4,
    day: 22,
    prayers: [
      {
        name: "imsak",
        time: "03:44",
      },
      {
        name: "fajr",
        time: "03:49",
      },
      {
        name: "sunrise",
        time: "05:24",
      },
      {
        name: "zuhr",
        time: "12:16",
      },
      {
        name: "sunset",
        time: "19:10",
      },
      {
        name: "maghrib",
        time: "19:25",
      },
    ],
  },
  {
    index: 112,
    month: 4,
    day: 23,
    prayers: [
      {
        name: "imsak",
        time: "03:42",
      },
      {
        name: "fajr",
        time: "03:47",
      },
      {
        name: "sunrise",
        time: "05:22",
      },
      {
        name: "zuhr",
        time: "12:16",
      },
      {
        name: "sunset",
        time: "19:11",
      },
      {
        name: "maghrib",
        time: "19:26",
      },
    ],
  },
  {
    index: 113,
    month: 4,
    day: 24,
    prayers: [
      {
        name: "imsak",
        time: "03:40",
      },
      {
        name: "fajr",
        time: "03:45",
      },
      {
        name: "sunrise",
        time: "05:21",
      },
      {
        name: "zuhr",
        time: "12:16",
      },
      {
        name: "sunset",
        time: "19:12",
      },
      {
        name: "maghrib",
        time: "19:27",
      },
    ],
  },
  {
    index: 114,
    month: 4,
    day: 25,
    prayers: [
      {
        name: "imsak",
        time: "03:38",
      },
      {
        name: "fajr",
        time: "03:43",
      },
      {
        name: "sunrise",
        time: "05:19",
      },
      {
        name: "zuhr",
        time: "12:16",
      },
      {
        name: "sunset",
        time: "19:13",
      },
      {
        name: "maghrib",
        time: "19:28",
      },
    ],
  },
  {
    index: 115,
    month: 4,
    day: 26,
    prayers: [
      {
        name: "imsak",
        time: "03:36",
      },
      {
        name: "fajr",
        time: "03:41",
      },
      {
        name: "sunrise",
        time: "05:18",
      },
      {
        name: "zuhr",
        time: "12:16",
      },
      {
        name: "sunset",
        time: "19:14",
      },
      {
        name: "maghrib",
        time: "19:29",
      },
    ],
  },
  {
    index: 116,
    month: 4,
    day: 27,
    prayers: [
      {
        name: "imsak",
        time: "03:34",
      },
      {
        name: "fajr",
        time: "03:39",
      },
      {
        name: "sunrise",
        time: "05:16",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:16",
      },
      {
        name: "maghrib",
        time: "19:31",
      },
    ],
  },
  {
    index: 117,
    month: 4,
    day: 28,
    prayers: [
      {
        name: "imsak",
        time: "03:32",
      },
      {
        name: "fajr",
        time: "03:37",
      },
      {
        name: "sunrise",
        time: "05:15",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:17",
      },
      {
        name: "maghrib",
        time: "19:32",
      },
    ],
  },
  {
    index: 118,
    month: 4,
    day: 29,
    prayers: [
      {
        name: "imsak",
        time: "03:30",
      },
      {
        name: "fajr",
        time: "03:35",
      },
      {
        name: "sunrise",
        time: "05:13",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:18",
      },
      {
        name: "maghrib",
        time: "19:33",
      },
    ],
  },
  {
    index: 119,
    month: 4,
    day: 30,
    prayers: [
      {
        name: "imsak",
        time: "03:28",
      },
      {
        name: "fajr",
        time: "03:33",
      },
      {
        name: "sunrise",
        time: "05:12",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:19",
      },
      {
        name: "maghrib",
        time: "19:34",
      },
    ],
  },
  {
    index: 120,
    month: 5,
    day: 1,
    prayers: [
      {
        name: "imsak",
        time: "03:26",
      },
      {
        name: "fajr",
        time: "03:31",
      },
      {
        name: "sunrise",
        time: "05:10",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:20",
      },
      {
        name: "maghrib",
        time: "19:35",
      },
    ],
  },
  {
    index: 121,
    month: 5,
    day: 2,
    prayers: [
      {
        name: "imsak",
        time: "03:24",
      },
      {
        name: "fajr",
        time: "03:29",
      },
      {
        name: "sunrise",
        time: "05:09",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:21",
      },
      {
        name: "maghrib",
        time: "19:36",
      },
    ],
  },
  {
    index: 122,
    month: 5,
    day: 3,
    prayers: [
      {
        name: "imsak",
        time: "03:23",
      },
      {
        name: "fajr",
        time: "03:28",
      },
      {
        name: "sunrise",
        time: "05:07",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:23",
      },
      {
        name: "maghrib",
        time: "19:38",
      },
    ],
  },
  {
    index: 123,
    month: 5,
    day: 4,
    prayers: [
      {
        name: "imsak",
        time: "03:21",
      },
      {
        name: "fajr",
        time: "03:26",
      },
      {
        name: "sunrise",
        time: "05:06",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:24",
      },
      {
        name: "maghrib",
        time: "19:39",
      },
    ],
  },
  {
    index: 124,
    month: 5,
    day: 5,
    prayers: [
      {
        name: "imsak",
        time: "03:19",
      },
      {
        name: "fajr",
        time: "03:24",
      },
      {
        name: "sunrise",
        time: "05:05",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:25",
      },
      {
        name: "maghrib",
        time: "19:40",
      },
    ],
  },
  {
    index: 125,
    month: 5,
    day: 6,
    prayers: [
      {
        name: "imsak",
        time: "03:17",
      },
      {
        name: "fajr",
        time: "03:22",
      },
      {
        name: "sunrise",
        time: "05:03",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:26",
      },
      {
        name: "maghrib",
        time: "19:41",
      },
    ],
  },
  {
    index: 126,
    month: 5,
    day: 7,
    prayers: [
      {
        name: "imsak",
        time: "03:15",
      },
      {
        name: "fajr",
        time: "03:20",
      },
      {
        name: "sunrise",
        time: "05:02",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:27",
      },
      {
        name: "maghrib",
        time: "19:42",
      },
    ],
  },
  {
    index: 127,
    month: 5,
    day: 8,
    prayers: [
      {
        name: "imsak",
        time: "03:13",
      },
      {
        name: "fajr",
        time: "03:18",
      },
      {
        name: "sunrise",
        time: "05:01",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:28",
      },
      {
        name: "maghrib",
        time: "19:43",
      },
    ],
  },
  {
    index: 128,
    month: 5,
    day: 9,
    prayers: [
      {
        name: "imsak",
        time: "03:11",
      },
      {
        name: "fajr",
        time: "03:16",
      },
      {
        name: "sunrise",
        time: "04:59",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:30",
      },
      {
        name: "maghrib",
        time: "19:45",
      },
    ],
  },
  {
    index: 129,
    month: 5,
    day: 10,
    prayers: [
      {
        name: "imsak",
        time: "03:09",
      },
      {
        name: "fajr",
        time: "03:14",
      },
      {
        name: "sunrise",
        time: "04:58",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:31",
      },
      {
        name: "maghrib",
        time: "19:46",
      },
    ],
  },
  {
    index: 130,
    month: 5,
    day: 11,
    prayers: [
      {
        name: "imsak",
        time: "03:08",
      },
      {
        name: "fajr",
        time: "03:13",
      },
      {
        name: "sunrise",
        time: "04:57",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:32",
      },
      {
        name: "maghrib",
        time: "19:47",
      },
    ],
  },
  {
    index: 131,
    month: 5,
    day: 12,
    prayers: [
      {
        name: "imsak",
        time: "03:06",
      },
      {
        name: "fajr",
        time: "03:11",
      },
      {
        name: "sunrise",
        time: "04:56",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:33",
      },
      {
        name: "maghrib",
        time: "19:48",
      },
    ],
  },
  {
    index: 132,
    month: 5,
    day: 13,
    prayers: [
      {
        name: "imsak",
        time: "03:04",
      },
      {
        name: "fajr",
        time: "03:09",
      },
      {
        name: "sunrise",
        time: "04:55",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:34",
      },
      {
        name: "maghrib",
        time: "19:49",
      },
    ],
  },
  {
    index: 133,
    month: 5,
    day: 14,
    prayers: [
      {
        name: "imsak",
        time: "03:02",
      },
      {
        name: "fajr",
        time: "03:07",
      },
      {
        name: "sunrise",
        time: "04:54",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:35",
      },
      {
        name: "maghrib",
        time: "19:50",
      },
    ],
  },
  {
    index: 134,
    month: 5,
    day: 15,
    prayers: [
      {
        name: "imsak",
        time: "03:01",
      },
      {
        name: "fajr",
        time: "03:06",
      },
      {
        name: "sunrise",
        time: "04:52",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:36",
      },
      {
        name: "maghrib",
        time: "19:51",
      },
    ],
  },
  {
    index: 135,
    month: 5,
    day: 16,
    prayers: [
      {
        name: "imsak",
        time: "02:59",
      },
      {
        name: "fajr",
        time: "03:04",
      },
      {
        name: "sunrise",
        time: "04:51",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:37",
      },
      {
        name: "maghrib",
        time: "19:52",
      },
    ],
  },
  {
    index: 136,
    month: 5,
    day: 17,
    prayers: [
      {
        name: "imsak",
        time: "02:57",
      },
      {
        name: "fajr",
        time: "03:02",
      },
      {
        name: "sunrise",
        time: "04:50",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:39",
      },
      {
        name: "maghrib",
        time: "19:54",
      },
    ],
  },
  {
    index: 137,
    month: 5,
    day: 18,
    prayers: [
      {
        name: "imsak",
        time: "02:56",
      },
      {
        name: "fajr",
        time: "03:01",
      },
      {
        name: "sunrise",
        time: "04:49",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:40",
      },
      {
        name: "maghrib",
        time: "19:55",
      },
    ],
  },
  {
    index: 138,
    month: 5,
    day: 19,
    prayers: [
      {
        name: "imsak",
        time: "02:54",
      },
      {
        name: "fajr",
        time: "02:59",
      },
      {
        name: "sunrise",
        time: "04:48",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:41",
      },
      {
        name: "maghrib",
        time: "19:56",
      },
    ],
  },
  {
    index: 139,
    month: 5,
    day: 20,
    prayers: [
      {
        name: "imsak",
        time: "02:53",
      },
      {
        name: "fajr",
        time: "02:58",
      },
      {
        name: "sunrise",
        time: "04:47",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:42",
      },
      {
        name: "maghrib",
        time: "19:57",
      },
    ],
  },
  {
    index: 140,
    month: 5,
    day: 21,
    prayers: [
      {
        name: "imsak",
        time: "02:51",
      },
      {
        name: "fajr",
        time: "02:56",
      },
      {
        name: "sunrise",
        time: "04:46",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:43",
      },
      {
        name: "maghrib",
        time: "19:58",
      },
    ],
  },
  {
    index: 141,
    month: 5,
    day: 22,
    prayers: [
      {
        name: "imsak",
        time: "02:50",
      },
      {
        name: "fajr",
        time: "02:55",
      },
      {
        name: "sunrise",
        time: "04:46",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "19:44",
      },
      {
        name: "maghrib",
        time: "19:59",
      },
    ],
  },
  {
    index: 142,
    month: 5,
    day: 23,
    prayers: [
      {
        name: "imsak",
        time: "02:48",
      },
      {
        name: "fajr",
        time: "02:53",
      },
      {
        name: "sunrise",
        time: "04:45",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:45",
      },
      {
        name: "maghrib",
        time: "20:00",
      },
    ],
  },
  {
    index: 143,
    month: 5,
    day: 24,
    prayers: [
      {
        name: "imsak",
        time: "02:47",
      },
      {
        name: "fajr",
        time: "02:52",
      },
      {
        name: "sunrise",
        time: "04:44",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:46",
      },
      {
        name: "maghrib",
        time: "20:01",
      },
    ],
  },
  {
    index: 144,
    month: 5,
    day: 25,
    prayers: [
      {
        name: "imsak",
        time: "02:46",
      },
      {
        name: "fajr",
        time: "02:51",
      },
      {
        name: "sunrise",
        time: "04:43",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:47",
      },
      {
        name: "maghrib",
        time: "20:02",
      },
    ],
  },
  {
    index: 145,
    month: 5,
    day: 26,
    prayers: [
      {
        name: "imsak",
        time: "02:44",
      },
      {
        name: "fajr",
        time: "02:49",
      },
      {
        name: "sunrise",
        time: "04:42",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:48",
      },
      {
        name: "maghrib",
        time: "20:03",
      },
    ],
  },
  {
    index: 146,
    month: 5,
    day: 27,
    prayers: [
      {
        name: "imsak",
        time: "02:43",
      },
      {
        name: "fajr",
        time: "02:48",
      },
      {
        name: "sunrise",
        time: "04:42",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:49",
      },
      {
        name: "maghrib",
        time: "20:04",
      },
    ],
  },
  {
    index: 147,
    month: 5,
    day: 28,
    prayers: [
      {
        name: "imsak",
        time: "02:42",
      },
      {
        name: "fajr",
        time: "02:47",
      },
      {
        name: "sunrise",
        time: "04:41",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:50",
      },
      {
        name: "maghrib",
        time: "20:05",
      },
    ],
  },
  {
    index: 148,
    month: 5,
    day: 29,
    prayers: [
      {
        name: "imsak",
        time: "02:41",
      },
      {
        name: "fajr",
        time: "02:46",
      },
      {
        name: "sunrise",
        time: "04:40",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:50",
      },
      {
        name: "maghrib",
        time: "20:05",
      },
    ],
  },
  {
    index: 149,
    month: 5,
    day: 30,
    prayers: [
      {
        name: "imsak",
        time: "02:39",
      },
      {
        name: "fajr",
        time: "02:44",
      },
      {
        name: "sunrise",
        time: "04:40",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:51",
      },
      {
        name: "maghrib",
        time: "20:06",
      },
    ],
  },
  {
    index: 150,
    month: 5,
    day: 31,
    prayers: [
      {
        name: "imsak",
        time: "02:38",
      },
      {
        name: "fajr",
        time: "02:43",
      },
      {
        name: "sunrise",
        time: "04:39",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "19:52",
      },
      {
        name: "maghrib",
        time: "20:07",
      },
    ],
  },
  {
    index: 151,
    month: 6,
    day: 1,
    prayers: [
      {
        name: "imsak",
        time: "02:37",
      },
      {
        name: "fajr",
        time: "02:42",
      },
      {
        name: "sunrise",
        time: "04:39",
      },
      {
        name: "zuhr",
        time: "12:16",
      },
      {
        name: "sunset",
        time: "19:53",
      },
      {
        name: "maghrib",
        time: "20:08",
      },
    ],
  },
  {
    index: 152,
    month: 6,
    day: 2,
    prayers: [
      {
        name: "imsak",
        time: "02:36",
      },
      {
        name: "fajr",
        time: "02:41",
      },
      {
        name: "sunrise",
        time: "04:38",
      },
      {
        name: "zuhr",
        time: "12:16",
      },
      {
        name: "sunset",
        time: "19:54",
      },
      {
        name: "maghrib",
        time: "20:09",
      },
    ],
  },
  {
    index: 153,
    month: 6,
    day: 3,
    prayers: [
      {
        name: "imsak",
        time: "02:35",
      },
      {
        name: "fajr",
        time: "02:40",
      },
      {
        name: "sunrise",
        time: "04:38",
      },
      {
        name: "zuhr",
        time: "12:16",
      },
      {
        name: "sunset",
        time: "19:55",
      },
      {
        name: "maghrib",
        time: "20:10",
      },
    ],
  },
  {
    index: 154,
    month: 6,
    day: 4,
    prayers: [
      {
        name: "imsak",
        time: "02:34",
      },
      {
        name: "fajr",
        time: "02:39",
      },
      {
        name: "sunrise",
        time: "04:37",
      },
      {
        name: "zuhr",
        time: "12:16",
      },
      {
        name: "sunset",
        time: "19:55",
      },
      {
        name: "maghrib",
        time: "20:10",
      },
    ],
  },
  {
    index: 155,
    month: 6,
    day: 5,
    prayers: [
      {
        name: "imsak",
        time: "02:33",
      },
      {
        name: "fajr",
        time: "02:38",
      },
      {
        name: "sunrise",
        time: "04:37",
      },
      {
        name: "zuhr",
        time: "12:16",
      },
      {
        name: "sunset",
        time: "19:56",
      },
      {
        name: "maghrib",
        time: "20:11",
      },
    ],
  },
  {
    index: 156,
    month: 6,
    day: 6,
    prayers: [
      {
        name: "imsak",
        time: "02:33",
      },
      {
        name: "fajr",
        time: "02:38",
      },
      {
        name: "sunrise",
        time: "04:36",
      },
      {
        name: "zuhr",
        time: "12:16",
      },
      {
        name: "sunset",
        time: "19:57",
      },
      {
        name: "maghrib",
        time: "20:12",
      },
    ],
  },
  {
    index: 157,
    month: 6,
    day: 7,
    prayers: [
      {
        name: "imsak",
        time: "02:32",
      },
      {
        name: "fajr",
        time: "02:37",
      },
      {
        name: "sunrise",
        time: "04:36",
      },
      {
        name: "zuhr",
        time: "12:17",
      },
      {
        name: "sunset",
        time: "19:57",
      },
      {
        name: "maghrib",
        time: "20:12",
      },
    ],
  },
  {
    index: 158,
    month: 6,
    day: 8,
    prayers: [
      {
        name: "imsak",
        time: "02:31",
      },
      {
        name: "fajr",
        time: "02:36",
      },
      {
        name: "sunrise",
        time: "04:36",
      },
      {
        name: "zuhr",
        time: "12:17",
      },
      {
        name: "sunset",
        time: "19:58",
      },
      {
        name: "maghrib",
        time: "20:13",
      },
    ],
  },
  {
    index: 159,
    month: 6,
    day: 9,
    prayers: [
      {
        name: "imsak",
        time: "02:31",
      },
      {
        name: "fajr",
        time: "02:36",
      },
      {
        name: "sunrise",
        time: "04:36",
      },
      {
        name: "zuhr",
        time: "12:17",
      },
      {
        name: "sunset",
        time: "19:59",
      },
      {
        name: "maghrib",
        time: "20:14",
      },
    ],
  },
  {
    index: 160,
    month: 6,
    day: 10,
    prayers: [
      {
        name: "imsak",
        time: "02:30",
      },
      {
        name: "fajr",
        time: "02:35",
      },
      {
        name: "sunrise",
        time: "04:35",
      },
      {
        name: "zuhr",
        time: "12:17",
      },
      {
        name: "sunset",
        time: "19:59",
      },
      {
        name: "maghrib",
        time: "20:14",
      },
    ],
  },
  {
    index: 161,
    month: 6,
    day: 11,
    prayers: [
      {
        name: "imsak",
        time: "02:30",
      },
      {
        name: "fajr",
        time: "02:35",
      },
      {
        name: "sunrise",
        time: "04:35",
      },
      {
        name: "zuhr",
        time: "12:17",
      },
      {
        name: "sunset",
        time: "20:00",
      },
      {
        name: "maghrib",
        time: "20:15",
      },
    ],
  },
  {
    index: 162,
    month: 6,
    day: 12,
    prayers: [
      {
        name: "imsak",
        time: "02:29",
      },
      {
        name: "fajr",
        time: "02:34",
      },
      {
        name: "sunrise",
        time: "04:35",
      },
      {
        name: "zuhr",
        time: "12:18",
      },
      {
        name: "sunset",
        time: "20:00",
      },
      {
        name: "maghrib",
        time: "20:15",
      },
    ],
  },
  {
    index: 163,
    month: 6,
    day: 13,
    prayers: [
      {
        name: "imsak",
        time: "02:29",
      },
      {
        name: "fajr",
        time: "02:34",
      },
      {
        name: "sunrise",
        time: "04:35",
      },
      {
        name: "zuhr",
        time: "12:18",
      },
      {
        name: "sunset",
        time: "20:01",
      },
      {
        name: "maghrib",
        time: "20:16",
      },
    ],
  },
  {
    index: 164,
    month: 6,
    day: 14,
    prayers: [
      {
        name: "imsak",
        time: "02:29",
      },
      {
        name: "fajr",
        time: "02:34",
      },
      {
        name: "sunrise",
        time: "04:35",
      },
      {
        name: "zuhr",
        time: "12:18",
      },
      {
        name: "sunset",
        time: "20:01",
      },
      {
        name: "maghrib",
        time: "20:16",
      },
    ],
  },
  {
    index: 165,
    month: 6,
    day: 15,
    prayers: [
      {
        name: "imsak",
        time: "02:28",
      },
      {
        name: "fajr",
        time: "02:33",
      },
      {
        name: "sunrise",
        time: "04:35",
      },
      {
        name: "zuhr",
        time: "12:18",
      },
      {
        name: "sunset",
        time: "20:02",
      },
      {
        name: "maghrib",
        time: "20:17",
      },
    ],
  },
  {
    index: 166,
    month: 6,
    day: 16,
    prayers: [
      {
        name: "imsak",
        time: "02:28",
      },
      {
        name: "fajr",
        time: "02:33",
      },
      {
        name: "sunrise",
        time: "04:35",
      },
      {
        name: "zuhr",
        time: "12:18",
      },
      {
        name: "sunset",
        time: "20:02",
      },
      {
        name: "maghrib",
        time: "20:17",
      },
    ],
  },
  {
    index: 167,
    month: 6,
    day: 17,
    prayers: [
      {
        name: "imsak",
        time: "02:28",
      },
      {
        name: "fajr",
        time: "02:33",
      },
      {
        name: "sunrise",
        time: "04:35",
      },
      {
        name: "zuhr",
        time: "12:18",
      },
      {
        name: "sunset",
        time: "20:02",
      },
      {
        name: "maghrib",
        time: "20:17",
      },
    ],
  },
  {
    index: 168,
    month: 6,
    day: 18,
    prayers: [
      {
        name: "imsak",
        time: "02:28",
      },
      {
        name: "fajr",
        time: "02:33",
      },
      {
        name: "sunrise",
        time: "04:35",
      },
      {
        name: "zuhr",
        time: "12:19",
      },
      {
        name: "sunset",
        time: "20:03",
      },
      {
        name: "maghrib",
        time: "20:18",
      },
    ],
  },
  {
    index: 169,
    month: 6,
    day: 19,
    prayers: [
      {
        name: "imsak",
        time: "02:28",
      },
      {
        name: "fajr",
        time: "02:33",
      },
      {
        name: "sunrise",
        time: "04:35",
      },
      {
        name: "zuhr",
        time: "12:19",
      },
      {
        name: "sunset",
        time: "20:03",
      },
      {
        name: "maghrib",
        time: "20:18",
      },
    ],
  },
  {
    index: 170,
    month: 6,
    day: 20,
    prayers: [
      {
        name: "imsak",
        time: "02:28",
      },
      {
        name: "fajr",
        time: "02:33",
      },
      {
        name: "sunrise",
        time: "04:35",
      },
      {
        name: "zuhr",
        time: "12:19",
      },
      {
        name: "sunset",
        time: "20:03",
      },
      {
        name: "maghrib",
        time: "20:18",
      },
    ],
  },
  {
    index: 171,
    month: 6,
    day: 21,
    prayers: [
      {
        name: "imsak",
        time: "02:28",
      },
      {
        name: "fajr",
        time: "02:33",
      },
      {
        name: "sunrise",
        time: "04:35",
      },
      {
        name: "zuhr",
        time: "12:20",
      },
      {
        name: "sunset",
        time: "20:04",
      },
      {
        name: "maghrib",
        time: "20:19",
      },
    ],
  },
  {
    index: 172,
    month: 6,
    day: 22,
    prayers: [
      {
        name: "imsak",
        time: "02:29",
      },
      {
        name: "fajr",
        time: "02:34",
      },
      {
        name: "sunrise",
        time: "04:36",
      },
      {
        name: "zuhr",
        time: "12:20",
      },
      {
        name: "sunset",
        time: "20:04",
      },
      {
        name: "maghrib",
        time: "20:19",
      },
    ],
  },
  {
    index: 173,
    month: 6,
    day: 23,
    prayers: [
      {
        name: "imsak",
        time: "02:29",
      },
      {
        name: "fajr",
        time: "02:34",
      },
      {
        name: "sunrise",
        time: "04:36",
      },
      {
        name: "zuhr",
        time: "12:20",
      },
      {
        name: "sunset",
        time: "20:04",
      },
      {
        name: "maghrib",
        time: "20:19",
      },
    ],
  },
  {
    index: 174,
    month: 6,
    day: 24,
    prayers: [
      {
        name: "imsak",
        time: "02:29",
      },
      {
        name: "fajr",
        time: "02:34",
      },
      {
        name: "sunrise",
        time: "04:36",
      },
      {
        name: "zuhr",
        time: "12:20",
      },
      {
        name: "sunset",
        time: "20:04",
      },
      {
        name: "maghrib",
        time: "20:19",
      },
    ],
  },
  {
    index: 175,
    month: 6,
    day: 25,
    prayers: [
      {
        name: "imsak",
        time: "02:30",
      },
      {
        name: "fajr",
        time: "02:35",
      },
      {
        name: "sunrise",
        time: "04:36",
      },
      {
        name: "zuhr",
        time: "12:20",
      },
      {
        name: "sunset",
        time: "20:04",
      },
      {
        name: "maghrib",
        time: "20:19",
      },
    ],
  },
  {
    index: 176,
    month: 6,
    day: 26,
    prayers: [
      {
        name: "imsak",
        time: "02:30",
      },
      {
        name: "fajr",
        time: "02:35",
      },
      {
        name: "sunrise",
        time: "04:37",
      },
      {
        name: "zuhr",
        time: "12:21",
      },
      {
        name: "sunset",
        time: "20:04",
      },
      {
        name: "maghrib",
        time: "20:19",
      },
    ],
  },
  {
    index: 177,
    month: 6,
    day: 27,
    prayers: [
      {
        name: "imsak",
        time: "02:31",
      },
      {
        name: "fajr",
        time: "02:36",
      },
      {
        name: "sunrise",
        time: "04:37",
      },
      {
        name: "zuhr",
        time: "12:21",
      },
      {
        name: "sunset",
        time: "20:04",
      },
      {
        name: "maghrib",
        time: "20:19",
      },
    ],
  },
  {
    index: 178,
    month: 6,
    day: 28,
    prayers: [
      {
        name: "imsak",
        time: "02:31",
      },
      {
        name: "fajr",
        time: "02:36",
      },
      {
        name: "sunrise",
        time: "04:38",
      },
      {
        name: "zuhr",
        time: "12:21",
      },
      {
        name: "sunset",
        time: "20:04",
      },
      {
        name: "maghrib",
        time: "20:19",
      },
    ],
  },
  {
    index: 179,
    month: 6,
    day: 29,
    prayers: [
      {
        name: "imsak",
        time: "02:32",
      },
      {
        name: "fajr",
        time: "02:37",
      },
      {
        name: "sunrise",
        time: "04:38",
      },
      {
        name: "zuhr",
        time: "12:21",
      },
      {
        name: "sunset",
        time: "20:04",
      },
      {
        name: "maghrib",
        time: "20:19",
      },
    ],
  },
  {
    index: 180,
    month: 6,
    day: 30,
    prayers: [
      {
        name: "imsak",
        time: "02:33",
      },
      {
        name: "fajr",
        time: "02:38",
      },
      {
        name: "sunrise",
        time: "04:39",
      },
      {
        name: "zuhr",
        time: "12:21",
      },
      {
        name: "sunset",
        time: "20:04",
      },
      {
        name: "maghrib",
        time: "20:19",
      },
    ],
  },
  {
    index: 181,
    month: 7,
    day: 1,
    prayers: [
      {
        name: "imsak",
        time: "02:33",
      },
      {
        name: "fajr",
        time: "02:38",
      },
      {
        name: "sunrise",
        time: "04:39",
      },
      {
        name: "zuhr",
        time: "12:22",
      },
      {
        name: "sunset",
        time: "20:04",
      },
      {
        name: "maghrib",
        time: "20:19",
      },
    ],
  },
  {
    index: 182,
    month: 7,
    day: 2,
    prayers: [
      {
        name: "imsak",
        time: "02:34",
      },
      {
        name: "fajr",
        time: "02:39",
      },
      {
        name: "sunrise",
        time: "04:40",
      },
      {
        name: "zuhr",
        time: "12:22",
      },
      {
        name: "sunset",
        time: "20:04",
      },
      {
        name: "maghrib",
        time: "20:19",
      },
    ],
  },
  {
    index: 183,
    month: 7,
    day: 3,
    prayers: [
      {
        name: "imsak",
        time: "02:35",
      },
      {
        name: "fajr",
        time: "02:40",
      },
      {
        name: "sunrise",
        time: "04:40",
      },
      {
        name: "zuhr",
        time: "12:22",
      },
      {
        name: "sunset",
        time: "20:04",
      },
      {
        name: "maghrib",
        time: "20:19",
      },
    ],
  },
  {
    index: 184,
    month: 7,
    day: 4,
    prayers: [
      {
        name: "imsak",
        time: "02:36",
      },
      {
        name: "fajr",
        time: "02:41",
      },
      {
        name: "sunrise",
        time: "04:41",
      },
      {
        name: "zuhr",
        time: "12:22",
      },
      {
        name: "sunset",
        time: "20:03",
      },
      {
        name: "maghrib",
        time: "20:18",
      },
    ],
  },
  {
    index: 185,
    month: 7,
    day: 5,
    prayers: [
      {
        name: "imsak",
        time: "02:37",
      },
      {
        name: "fajr",
        time: "02:42",
      },
      {
        name: "sunrise",
        time: "04:41",
      },
      {
        name: "zuhr",
        time: "12:22",
      },
      {
        name: "sunset",
        time: "20:03",
      },
      {
        name: "maghrib",
        time: "20:18",
      },
    ],
  },
  {
    index: 186,
    month: 7,
    day: 6,
    prayers: [
      {
        name: "imsak",
        time: "02:38",
      },
      {
        name: "fajr",
        time: "02:43",
      },
      {
        name: "sunrise",
        time: "04:42",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "20:03",
      },
      {
        name: "maghrib",
        time: "20:18",
      },
    ],
  },
  {
    index: 187,
    month: 7,
    day: 7,
    prayers: [
      {
        name: "imsak",
        time: "02:39",
      },
      {
        name: "fajr",
        time: "02:44",
      },
      {
        name: "sunrise",
        time: "04:43",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "20:02",
      },
      {
        name: "maghrib",
        time: "20:17",
      },
    ],
  },
  {
    index: 188,
    month: 7,
    day: 8,
    prayers: [
      {
        name: "imsak",
        time: "02:40",
      },
      {
        name: "fajr",
        time: "02:45",
      },
      {
        name: "sunrise",
        time: "04:43",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "20:02",
      },
      {
        name: "maghrib",
        time: "20:17",
      },
    ],
  },
  {
    index: 189,
    month: 7,
    day: 9,
    prayers: [
      {
        name: "imsak",
        time: "02:42",
      },
      {
        name: "fajr",
        time: "02:47",
      },
      {
        name: "sunrise",
        time: "04:44",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "20:01",
      },
      {
        name: "maghrib",
        time: "20:16",
      },
    ],
  },
  {
    index: 190,
    month: 7,
    day: 10,
    prayers: [
      {
        name: "imsak",
        time: "02:43",
      },
      {
        name: "fajr",
        time: "02:48",
      },
      {
        name: "sunrise",
        time: "04:45",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "20:01",
      },
      {
        name: "maghrib",
        time: "20:16",
      },
    ],
  },
  {
    index: 191,
    month: 7,
    day: 11,
    prayers: [
      {
        name: "imsak",
        time: "02:44",
      },
      {
        name: "fajr",
        time: "02:49",
      },
      {
        name: "sunrise",
        time: "04:46",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "20:00",
      },
      {
        name: "maghrib",
        time: "20:15",
      },
    ],
  },
  {
    index: 192,
    month: 7,
    day: 12,
    prayers: [
      {
        name: "imsak",
        time: "02:45",
      },
      {
        name: "fajr",
        time: "02:50",
      },
      {
        name: "sunrise",
        time: "04:47",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "20:00",
      },
      {
        name: "maghrib",
        time: "20:15",
      },
    ],
  },
  {
    index: 193,
    month: 7,
    day: 13,
    prayers: [
      {
        name: "imsak",
        time: "02:47",
      },
      {
        name: "fajr",
        time: "02:52",
      },
      {
        name: "sunrise",
        time: "04:47",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:59",
      },
      {
        name: "maghrib",
        time: "20:14",
      },
    ],
  },
  {
    index: 194,
    month: 7,
    day: 14,
    prayers: [
      {
        name: "imsak",
        time: "02:48",
      },
      {
        name: "fajr",
        time: "02:53",
      },
      {
        name: "sunrise",
        time: "04:48",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:59",
      },
      {
        name: "maghrib",
        time: "20:14",
      },
    ],
  },
  {
    index: 195,
    month: 7,
    day: 15,
    prayers: [
      {
        name: "imsak",
        time: "02:49",
      },
      {
        name: "fajr",
        time: "02:54",
      },
      {
        name: "sunrise",
        time: "04:49",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:58",
      },
      {
        name: "maghrib",
        time: "20:13",
      },
    ],
  },
  {
    index: 196,
    month: 7,
    day: 16,
    prayers: [
      {
        name: "imsak",
        time: "02:51",
      },
      {
        name: "fajr",
        time: "02:56",
      },
      {
        name: "sunrise",
        time: "04:50",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:57",
      },
      {
        name: "maghrib",
        time: "20:12",
      },
    ],
  },
  {
    index: 197,
    month: 7,
    day: 17,
    prayers: [
      {
        name: "imsak",
        time: "02:52",
      },
      {
        name: "fajr",
        time: "02:57",
      },
      {
        name: "sunrise",
        time: "04:51",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:57",
      },
      {
        name: "maghrib",
        time: "20:12",
      },
    ],
  },
  {
    index: 198,
    month: 7,
    day: 18,
    prayers: [
      {
        name: "imsak",
        time: "02:54",
      },
      {
        name: "fajr",
        time: "02:59",
      },
      {
        name: "sunrise",
        time: "04:52",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:56",
      },
      {
        name: "maghrib",
        time: "20:11",
      },
    ],
  },
  {
    index: 199,
    month: 7,
    day: 19,
    prayers: [
      {
        name: "imsak",
        time: "02:55",
      },
      {
        name: "fajr",
        time: "03:00",
      },
      {
        name: "sunrise",
        time: "04:53",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:55",
      },
      {
        name: "maghrib",
        time: "20:10",
      },
    ],
  },
  {
    index: 200,
    month: 7,
    day: 20,
    prayers: [
      {
        name: "imsak",
        time: "02:57",
      },
      {
        name: "fajr",
        time: "03:02",
      },
      {
        name: "sunrise",
        time: "04:54",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:54",
      },
      {
        name: "maghrib",
        time: "20:09",
      },
    ],
  },
  {
    index: 201,
    month: 7,
    day: 21,
    prayers: [
      {
        name: "imsak",
        time: "02:58",
      },
      {
        name: "fajr",
        time: "03:03",
      },
      {
        name: "sunrise",
        time: "04:55",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:53",
      },
      {
        name: "maghrib",
        time: "20:08",
      },
    ],
  },
  {
    index: 202,
    month: 7,
    day: 22,
    prayers: [
      {
        name: "imsak",
        time: "03:00",
      },
      {
        name: "fajr",
        time: "03:05",
      },
      {
        name: "sunrise",
        time: "04:56",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:52",
      },
      {
        name: "maghrib",
        time: "20:07",
      },
    ],
  },
  {
    index: 203,
    month: 7,
    day: 23,
    prayers: [
      {
        name: "imsak",
        time: "03:01",
      },
      {
        name: "fajr",
        time: "03:06",
      },
      {
        name: "sunrise",
        time: "04:57",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:51",
      },
      {
        name: "maghrib",
        time: "20:06",
      },
    ],
  },
  {
    index: 204,
    month: 7,
    day: 24,
    prayers: [
      {
        name: "imsak",
        time: "03:03",
      },
      {
        name: "fajr",
        time: "03:08",
      },
      {
        name: "sunrise",
        time: "04:58",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:51",
      },
      {
        name: "maghrib",
        time: "20:06",
      },
    ],
  },
  {
    index: 205,
    month: 7,
    day: 25,
    prayers: [
      {
        name: "imsak",
        time: "03:05",
      },
      {
        name: "fajr",
        time: "03:10",
      },
      {
        name: "sunrise",
        time: "04:59",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:50",
      },
      {
        name: "maghrib",
        time: "20:05",
      },
    ],
  },
  {
    index: 206,
    month: 7,
    day: 26,
    prayers: [
      {
        name: "imsak",
        time: "03:06",
      },
      {
        name: "fajr",
        time: "03:11",
      },
      {
        name: "sunrise",
        time: "05:00",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:49",
      },
      {
        name: "maghrib",
        time: "20:04",
      },
    ],
  },
  {
    index: 207,
    month: 7,
    day: 27,
    prayers: [
      {
        name: "imsak",
        time: "03:08",
      },
      {
        name: "fajr",
        time: "03:13",
      },
      {
        name: "sunrise",
        time: "05:01",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:47",
      },
      {
        name: "maghrib",
        time: "20:02",
      },
    ],
  },
  {
    index: 208,
    month: 7,
    day: 28,
    prayers: [
      {
        name: "imsak",
        time: "03:10",
      },
      {
        name: "fajr",
        time: "03:15",
      },
      {
        name: "sunrise",
        time: "05:02",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:46",
      },
      {
        name: "maghrib",
        time: "20:01",
      },
    ],
  },
  {
    index: 209,
    month: 7,
    day: 29,
    prayers: [
      {
        name: "imsak",
        time: "03:11",
      },
      {
        name: "fajr",
        time: "03:16",
      },
      {
        name: "sunrise",
        time: "05:03",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:45",
      },
      {
        name: "maghrib",
        time: "20:00",
      },
    ],
  },
  {
    index: 210,
    month: 7,
    day: 30,
    prayers: [
      {
        name: "imsak",
        time: "03:13",
      },
      {
        name: "fajr",
        time: "03:18",
      },
      {
        name: "sunrise",
        time: "05:04",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:44",
      },
      {
        name: "maghrib",
        time: "19:59",
      },
    ],
  },
  {
    index: 211,
    month: 7,
    day: 31,
    prayers: [
      {
        name: "imsak",
        time: "03:14",
      },
      {
        name: "fajr",
        time: "03:19",
      },
      {
        name: "sunrise",
        time: "05:05",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:43",
      },
      {
        name: "maghrib",
        time: "19:58",
      },
    ],
  },
  {
    index: 212,
    month: 8,
    day: 1,
    prayers: [
      {
        name: "imsak",
        time: "03:16",
      },
      {
        name: "fajr",
        time: "03:21",
      },
      {
        name: "sunrise",
        time: "05:06",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:42",
      },
      {
        name: "maghrib",
        time: "19:57",
      },
    ],
  },
  {
    index: 213,
    month: 8,
    day: 2,
    prayers: [
      {
        name: "imsak",
        time: "03:18",
      },
      {
        name: "fajr",
        time: "03:23",
      },
      {
        name: "sunrise",
        time: "05:07",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:41",
      },
      {
        name: "maghrib",
        time: "19:56",
      },
    ],
  },
  {
    index: 214,
    month: 8,
    day: 3,
    prayers: [
      {
        name: "imsak",
        time: "03:19",
      },
      {
        name: "fajr",
        time: "03:24",
      },
      {
        name: "sunrise",
        time: "05:08",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:39",
      },
      {
        name: "maghrib",
        time: "19:54",
      },
    ],
  },
  {
    index: 215,
    month: 8,
    day: 4,
    prayers: [
      {
        name: "imsak",
        time: "03:21",
      },
      {
        name: "fajr",
        time: "03:26",
      },
      {
        name: "sunrise",
        time: "05:09",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:38",
      },
      {
        name: "maghrib",
        time: "19:53",
      },
    ],
  },
  {
    index: 216,
    month: 8,
    day: 5,
    prayers: [
      {
        name: "imsak",
        time: "03:23",
      },
      {
        name: "fajr",
        time: "03:28",
      },
      {
        name: "sunrise",
        time: "05:10",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:37",
      },
      {
        name: "maghrib",
        time: "19:52",
      },
    ],
  },
  {
    index: 217,
    month: 8,
    day: 6,
    prayers: [
      {
        name: "imsak",
        time: "03:24",
      },
      {
        name: "fajr",
        time: "03:29",
      },
      {
        name: "sunrise",
        time: "05:11",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:35",
      },
      {
        name: "maghrib",
        time: "19:50",
      },
    ],
  },
  {
    index: 218,
    month: 8,
    day: 7,
    prayers: [
      {
        name: "imsak",
        time: "03:26",
      },
      {
        name: "fajr",
        time: "03:31",
      },
      {
        name: "sunrise",
        time: "05:13",
      },
      {
        name: "zuhr",
        time: "12:24",
      },
      {
        name: "sunset",
        time: "19:34",
      },
      {
        name: "maghrib",
        time: "19:49",
      },
    ],
  },
  {
    index: 219,
    month: 8,
    day: 8,
    prayers: [
      {
        name: "imsak",
        time: "03:28",
      },
      {
        name: "fajr",
        time: "03:33",
      },
      {
        name: "sunrise",
        time: "05:14",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "19:33",
      },
      {
        name: "maghrib",
        time: "19:48",
      },
    ],
  },
  {
    index: 220,
    month: 8,
    day: 9,
    prayers: [
      {
        name: "imsak",
        time: "03:29",
      },
      {
        name: "fajr",
        time: "03:34",
      },
      {
        name: "sunrise",
        time: "05:15",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "19:31",
      },
      {
        name: "maghrib",
        time: "19:46",
      },
    ],
  },
  {
    index: 221,
    month: 8,
    day: 10,
    prayers: [
      {
        name: "imsak",
        time: "03:31",
      },
      {
        name: "fajr",
        time: "03:36",
      },
      {
        name: "sunrise",
        time: "05:16",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "19:30",
      },
      {
        name: "maghrib",
        time: "19:45",
      },
    ],
  },
  {
    index: 222,
    month: 8,
    day: 11,
    prayers: [
      {
        name: "imsak",
        time: "03:33",
      },
      {
        name: "fajr",
        time: "03:38",
      },
      {
        name: "sunrise",
        time: "05:17",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "19:28",
      },
      {
        name: "maghrib",
        time: "19:43",
      },
    ],
  },
  {
    index: 223,
    month: 8,
    day: 12,
    prayers: [
      {
        name: "imsak",
        time: "03:34",
      },
      {
        name: "fajr",
        time: "03:39",
      },
      {
        name: "sunrise",
        time: "05:18",
      },
      {
        name: "zuhr",
        time: "12:23",
      },
      {
        name: "sunset",
        time: "19:27",
      },
      {
        name: "maghrib",
        time: "19:42",
      },
    ],
  },
  {
    index: 224,
    month: 8,
    day: 13,
    prayers: [
      {
        name: "imsak",
        time: "03:36",
      },
      {
        name: "fajr",
        time: "03:41",
      },
      {
        name: "sunrise",
        time: "05:19",
      },
      {
        name: "zuhr",
        time: "12:25",
      },
      {
        name: "sunset",
        time: "19:25",
      },
      {
        name: "maghrib",
        time: "19:40",
      },
    ],
  },
  {
    index: 225,
    month: 8,
    day: 14,
    prayers: [
      {
        name: "imsak",
        time: "03:38",
      },
      {
        name: "fajr",
        time: "03:43",
      },
      {
        name: "sunrise",
        time: "05:20",
      },
      {
        name: "zuhr",
        time: "12:22",
      },
      {
        name: "sunset",
        time: "19:24",
      },
      {
        name: "maghrib",
        time: "19:39",
      },
    ],
  },
  {
    index: 226,
    month: 8,
    day: 15,
    prayers: [
      {
        name: "imsak",
        time: "03:39",
      },
      {
        name: "fajr",
        time: "03:44",
      },
      {
        name: "sunrise",
        time: "05:22",
      },
      {
        name: "zuhr",
        time: "12:22",
      },
      {
        name: "sunset",
        time: "19:22",
      },
      {
        name: "maghrib",
        time: "19:37",
      },
    ],
  },
  {
    index: 227,
    month: 8,
    day: 16,
    prayers: [
      {
        name: "imsak",
        time: "03:41",
      },
      {
        name: "fajr",
        time: "03:46",
      },
      {
        name: "sunrise",
        time: "05:23",
      },
      {
        name: "zuhr",
        time: "12:22",
      },
      {
        name: "sunset",
        time: "19:21",
      },
      {
        name: "maghrib",
        time: "19:36",
      },
    ],
  },
  {
    index: 228,
    month: 8,
    day: 17,
    prayers: [
      {
        name: "imsak",
        time: "03:42",
      },
      {
        name: "fajr",
        time: "03:47",
      },
      {
        name: "sunrise",
        time: "05:24",
      },
      {
        name: "zuhr",
        time: "12:22",
      },
      {
        name: "sunset",
        time: "19:19",
      },
      {
        name: "maghrib",
        time: "19:34",
      },
    ],
  },
  {
    index: 229,
    month: 8,
    day: 18,
    prayers: [
      {
        name: "imsak",
        time: "03:44",
      },
      {
        name: "fajr",
        time: "03:49",
      },
      {
        name: "sunrise",
        time: "05:25",
      },
      {
        name: "zuhr",
        time: "12:22",
      },
      {
        name: "sunset",
        time: "19:18",
      },
      {
        name: "maghrib",
        time: "19:33",
      },
    ],
  },
  {
    index: 230,
    month: 8,
    day: 19,
    prayers: [
      {
        name: "imsak",
        time: "03:46",
      },
      {
        name: "fajr",
        time: "03:51",
      },
      {
        name: "sunrise",
        time: "05:26",
      },
      {
        name: "zuhr",
        time: "12:21",
      },
      {
        name: "sunset",
        time: "19:16",
      },
      {
        name: "maghrib",
        time: "19:31",
      },
    ],
  },
  {
    index: 231,
    month: 8,
    day: 20,
    prayers: [
      {
        name: "imsak",
        time: "03:47",
      },
      {
        name: "fajr",
        time: "03:52",
      },
      {
        name: "sunrise",
        time: "05:27",
      },
      {
        name: "zuhr",
        time: "12:21",
      },
      {
        name: "sunset",
        time: "19:15",
      },
      {
        name: "maghrib",
        time: "19:30",
      },
    ],
  },
  {
    index: 232,
    month: 8,
    day: 21,
    prayers: [
      {
        name: "imsak",
        time: "03:49",
      },
      {
        name: "fajr",
        time: "03:54",
      },
      {
        name: "sunrise",
        time: "05:28",
      },
      {
        name: "zuhr",
        time: "12:21",
      },
      {
        name: "sunset",
        time: "19:13",
      },
      {
        name: "maghrib",
        time: "19:28",
      },
    ],
  },
  {
    index: 233,
    month: 8,
    day: 22,
    prayers: [
      {
        name: "imsak",
        time: "03:50",
      },
      {
        name: "fajr",
        time: "03:55",
      },
      {
        name: "sunrise",
        time: "05:29",
      },
      {
        name: "zuhr",
        time: "12:21",
      },
      {
        name: "sunset",
        time: "19:11",
      },
      {
        name: "maghrib",
        time: "19:26",
      },
    ],
  },
  {
    index: 234,
    month: 8,
    day: 23,
    prayers: [
      {
        name: "imsak",
        time: "03:52",
      },
      {
        name: "fajr",
        time: "03:57",
      },
      {
        name: "sunrise",
        time: "05:31",
      },
      {
        name: "zuhr",
        time: "12:20",
      },
      {
        name: "sunset",
        time: "19:10",
      },
      {
        name: "maghrib",
        time: "19:25",
      },
    ],
  },
  {
    index: 235,
    month: 8,
    day: 24,
    prayers: [
      {
        name: "imsak",
        time: "03:53",
      },
      {
        name: "fajr",
        time: "03:58",
      },
      {
        name: "sunrise",
        time: "05:32",
      },
      {
        name: "zuhr",
        time: "12:20",
      },
      {
        name: "sunset",
        time: "19:08",
      },
      {
        name: "maghrib",
        time: "19:23",
      },
    ],
  },
  {
    index: 236,
    month: 8,
    day: 25,
    prayers: [
      {
        name: "imsak",
        time: "03:55",
      },
      {
        name: "fajr",
        time: "04:00",
      },
      {
        name: "sunrise",
        time: "05:33",
      },
      {
        name: "zuhr",
        time: "12:20",
      },
      {
        name: "sunset",
        time: "19:06",
      },
      {
        name: "maghrib",
        time: "19:21",
      },
    ],
  },
  {
    index: 237,
    month: 8,
    day: 26,
    prayers: [
      {
        name: "imsak",
        time: "03:56",
      },
      {
        name: "fajr",
        time: "04:01",
      },
      {
        name: "sunrise",
        time: "05:34",
      },
      {
        name: "zuhr",
        time: "12:20",
      },
      {
        name: "sunset",
        time: "19:05",
      },
      {
        name: "maghrib",
        time: "19:20",
      },
    ],
  },
  {
    index: 238,
    month: 8,
    day: 27,
    prayers: [
      {
        name: "imsak",
        time: "03:58",
      },
      {
        name: "fajr",
        time: "04:03",
      },
      {
        name: "sunrise",
        time: "05:35",
      },
      {
        name: "zuhr",
        time: "12:19",
      },
      {
        name: "sunset",
        time: "19:03",
      },
      {
        name: "maghrib",
        time: "19:18",
      },
    ],
  },
  {
    index: 239,
    month: 8,
    day: 28,
    prayers: [
      {
        name: "imsak",
        time: "04:00",
      },
      {
        name: "fajr",
        time: "04:05",
      },
      {
        name: "sunrise",
        time: "05:36",
      },
      {
        name: "zuhr",
        time: "12:19",
      },
      {
        name: "sunset",
        time: "19:01",
      },
      {
        name: "maghrib",
        time: "19:16",
      },
    ],
  },
  {
    index: 240,
    month: 8,
    day: 29,
    prayers: [
      {
        name: "imsak",
        time: "04:01",
      },
      {
        name: "fajr",
        time: "04:06",
      },
      {
        name: "sunrise",
        time: "05:37",
      },
      {
        name: "zuhr",
        time: "12:19",
      },
      {
        name: "sunset",
        time: "18:59",
      },
      {
        name: "maghrib",
        time: "19:14",
      },
    ],
  },
  {
    index: 241,
    month: 8,
    day: 30,
    prayers: [
      {
        name: "imsak",
        time: "04:02",
      },
      {
        name: "fajr",
        time: "04:07",
      },
      {
        name: "sunrise",
        time: "05:39",
      },
      {
        name: "zuhr",
        time: "12:18",
      },
      {
        name: "sunset",
        time: "18:58",
      },
      {
        name: "maghrib",
        time: "19:13",
      },
    ],
  },
  {
    index: 242,
    month: 8,
    day: 31,
    prayers: [
      {
        name: "imsak",
        time: "04:04",
      },
      {
        name: "fajr",
        time: "04:09",
      },
      {
        name: "sunrise",
        time: "05:40",
      },
      {
        name: "zuhr",
        time: "12:18",
      },
      {
        name: "sunset",
        time: "18:56",
      },
      {
        name: "maghrib",
        time: "19:13",
      },
    ],
  },
  {
    index: 243,
    month: 9,
    day: 1,
    prayers: [
      {
        name: "imsak",
        time: "04:05",
      },
      {
        name: "fajr",
        time: "04:10",
      },
      {
        name: "sunrise",
        time: "05:41",
      },
      {
        name: "zuhr",
        time: "12:18",
      },
      {
        name: "sunset",
        time: "18:54",
      },
      {
        name: "maghrib",
        time: "19:09",
      },
    ],
  },
  {
    index: 244,
    month: 9,
    day: 2,
    prayers: [
      {
        name: "imsak",
        time: "04:07",
      },
      {
        name: "fajr",
        time: "04:12",
      },
      {
        name: "sunrise",
        time: "05:42",
      },
      {
        name: "zuhr",
        time: "12:18",
      },
      {
        name: "sunset",
        time: "18:52",
      },
      {
        name: "maghrib",
        time: "19:07",
      },
    ],
  },
  {
    index: 245,
    month: 9,
    day: 3,
    prayers: [
      {
        name: "imsak",
        time: "04:08",
      },
      {
        name: "fajr",
        time: "04:13",
      },
      {
        name: "sunrise",
        time: "05:43",
      },
      {
        name: "zuhr",
        time: "12:17",
      },
      {
        name: "sunset",
        time: "18:51",
      },
      {
        name: "maghrib",
        time: "19:06",
      },
    ],
  },
  {
    index: 246,
    month: 9,
    day: 4,
    prayers: [
      {
        name: "imsak",
        time: "04:10",
      },
      {
        name: "fajr",
        time: "04:15",
      },
      {
        name: "sunrise",
        time: "05:44",
      },
      {
        name: "zuhr",
        time: "12:17",
      },
      {
        name: "sunset",
        time: "18:49",
      },
      {
        name: "maghrib",
        time: "19:04",
      },
    ],
  },
  {
    index: 247,
    month: 9,
    day: 5,
    prayers: [
      {
        name: "imsak",
        time: "04:11",
      },
      {
        name: "fajr",
        time: "04:16",
      },
      {
        name: "sunrise",
        time: "05:45",
      },
      {
        name: "zuhr",
        time: "12:17",
      },
      {
        name: "sunset",
        time: "18:47",
      },
      {
        name: "maghrib",
        time: "19:02",
      },
    ],
  },
  {
    index: 248,
    month: 9,
    day: 6,
    prayers: [
      {
        name: "imsak",
        time: "04:13",
      },
      {
        name: "fajr",
        time: "04:18",
      },
      {
        name: "sunrise",
        time: "05:46",
      },
      {
        name: "zuhr",
        time: "12:16",
      },
      {
        name: "sunset",
        time: "18:45",
      },
      {
        name: "maghrib",
        time: "19:00",
      },
    ],
  },
  {
    index: 249,
    month: 9,
    day: 7,
    prayers: [
      {
        name: "imsak",
        time: "04:14",
      },
      {
        name: "fajr",
        time: "04:19",
      },
      {
        name: "sunrise",
        time: "05:48",
      },
      {
        name: "zuhr",
        time: "12:16",
      },
      {
        name: "sunset",
        time: "18:43",
      },
      {
        name: "maghrib",
        time: "18:58",
      },
    ],
  },
  {
    index: 250,
    month: 9,
    day: 8,
    prayers: [
      {
        name: "imsak",
        time: "04:15",
      },
      {
        name: "fajr",
        time: "04:20",
      },
      {
        name: "sunrise",
        time: "05:49",
      },
      {
        name: "zuhr",
        time: "12:16",
      },
      {
        name: "sunset",
        time: "18:42",
      },
      {
        name: "maghrib",
        time: "18:57",
      },
    ],
  },
  {
    index: 251,
    month: 9,
    day: 9,
    prayers: [
      {
        name: "imsak",
        time: "04:17",
      },
      {
        name: "fajr",
        time: "04:22",
      },
      {
        name: "sunrise",
        time: "05:50",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "18:40",
      },
      {
        name: "maghrib",
        time: "18:55",
      },
    ],
  },
  {
    index: 252,
    month: 9,
    day: 10,
    prayers: [
      {
        name: "imsak",
        time: "04:18",
      },
      {
        name: "fajr",
        time: "04:23",
      },
      {
        name: "sunrise",
        time: "05:51",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "18:38",
      },
      {
        name: "maghrib",
        time: "18:53",
      },
    ],
  },
  {
    index: 253,
    month: 9,
    day: 11,
    prayers: [
      {
        name: "imsak",
        time: "04:20",
      },
      {
        name: "fajr",
        time: "04:25",
      },
      {
        name: "sunrise",
        time: "05:52",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "18:36",
      },
      {
        name: "maghrib",
        time: "18:51",
      },
    ],
  },
  {
    index: 254,
    month: 9,
    day: 12,
    prayers: [
      {
        name: "imsak",
        time: "04:21",
      },
      {
        name: "fajr",
        time: "04:26",
      },
      {
        name: "sunrise",
        time: "05:53",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "18:34",
      },
      {
        name: "maghrib",
        time: "18:49",
      },
    ],
  },
  {
    index: 255,
    month: 9,
    day: 13,
    prayers: [
      {
        name: "imsak",
        time: "04:22",
      },
      {
        name: "fajr",
        time: "04:27",
      },
      {
        name: "sunrise",
        time: "05:54",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "18:33",
      },
      {
        name: "maghrib",
        time: "18:48",
      },
    ],
  },
  {
    index: 256,
    month: 9,
    day: 14,
    prayers: [
      {
        name: "imsak",
        time: "04:24",
      },
      {
        name: "fajr",
        time: "04:29",
      },
      {
        name: "sunrise",
        time: "05:55",
      },
      {
        name: "zuhr",
        time: "12:13",
      },
      {
        name: "sunset",
        time: "18:31",
      },
      {
        name: "maghrib",
        time: "18:46",
      },
    ],
  },
  {
    index: 257,
    month: 9,
    day: 15,
    prayers: [
      {
        name: "imsak",
        time: "04:25",
      },
      {
        name: "fajr",
        time: "04:30",
      },
      {
        name: "sunrise",
        time: "05:57",
      },
      {
        name: "zuhr",
        time: "12:13",
      },
      {
        name: "sunset",
        time: "18:29",
      },
      {
        name: "maghrib",
        time: "18:44",
      },
    ],
  },
  {
    index: 258,
    month: 9,
    day: 16,
    prayers: [
      {
        name: "imsak",
        time: "04:26",
      },
      {
        name: "fajr",
        time: "04:31",
      },
      {
        name: "sunrise",
        time: "05:58",
      },
      {
        name: "zuhr",
        time: "12:13",
      },
      {
        name: "sunset",
        time: "18:27",
      },
      {
        name: "maghrib",
        time: "18:42",
      },
    ],
  },
  {
    index: 259,
    month: 9,
    day: 17,
    prayers: [
      {
        name: "imsak",
        time: "04:28",
      },
      {
        name: "fajr",
        time: "04:33",
      },
      {
        name: "sunrise",
        time: "05:59",
      },
      {
        name: "zuhr",
        time: "12:12",
      },
      {
        name: "sunset",
        time: "18:25",
      },
      {
        name: "maghrib",
        time: "18:40",
      },
    ],
  },
  {
    index: 260,
    month: 9,
    day: 18,
    prayers: [
      {
        name: "imsak",
        time: "04:29",
      },
      {
        name: "fajr",
        time: "04:34",
      },
      {
        name: "sunrise",
        time: "06:00",
      },
      {
        name: "zuhr",
        time: "12:12",
      },
      {
        name: "sunset",
        time: "18:23",
      },
      {
        name: "maghrib",
        time: "18:38",
      },
    ],
  },
  {
    index: 261,
    month: 9,
    day: 19,
    prayers: [
      {
        name: "imsak",
        time: "04:30",
      },
      {
        name: "fajr",
        time: "04:35",
      },
      {
        name: "sunrise",
        time: "06:01",
      },
      {
        name: "zuhr",
        time: "12:12",
      },
      {
        name: "sunset",
        time: "18:21",
      },
      {
        name: "maghrib",
        time: "18:36",
      },
    ],
  },
  {
    index: 262,
    month: 9,
    day: 20,
    prayers: [
      {
        name: "imsak",
        time: "04:31",
      },
      {
        name: "fajr",
        time: "04:36",
      },
      {
        name: "sunrise",
        time: "06:02",
      },
      {
        name: "zuhr",
        time: "12:11",
      },
      {
        name: "sunset",
        time: "18:20",
      },
      {
        name: "maghrib",
        time: "18:35",
      },
    ],
  },
  {
    index: 263,
    month: 9,
    day: 21,
    prayers: [
      {
        name: "imsak",
        time: "04:33",
      },
      {
        name: "fajr",
        time: "04:38",
      },
      {
        name: "sunrise",
        time: "06:03",
      },
      {
        name: "zuhr",
        time: "12:11",
      },
      {
        name: "sunset",
        time: "18:18",
      },
      {
        name: "maghrib",
        time: "18:33",
      },
    ],
  },
  {
    index: 264,
    month: 9,
    day: 22,
    prayers: [
      {
        name: "imsak",
        time: "04:34",
      },
      {
        name: "fajr",
        time: "04:39",
      },
      {
        name: "sunrise",
        time: "06:05",
      },
      {
        name: "zuhr",
        time: "12:11",
      },
      {
        name: "sunset",
        time: "18:16",
      },
      {
        name: "maghrib",
        time: "18:31",
      },
    ],
  },
  {
    index: 265,
    month: 9,
    day: 23,
    prayers: [
      {
        name: "imsak",
        time: "04:35",
      },
      {
        name: "fajr",
        time: "04:40",
      },
      {
        name: "sunrise",
        time: "06:06",
      },
      {
        name: "zuhr",
        time: "12:10",
      },
      {
        name: "sunset",
        time: "18:14",
      },
      {
        name: "maghrib",
        time: "18:29",
      },
    ],
  },
  {
    index: 266,
    month: 9,
    day: 24,
    prayers: [
      {
        name: "imsak",
        time: "04:37",
      },
      {
        name: "fajr",
        time: "04:42",
      },
      {
        name: "sunrise",
        time: "06:07",
      },
      {
        name: "zuhr",
        time: "12:10",
      },
      {
        name: "sunset",
        time: "18:12",
      },
      {
        name: "maghrib",
        time: "18:27",
      },
    ],
  },
  {
    index: 267,
    month: 9,
    day: 25,
    prayers: [
      {
        name: "imsak",
        time: "04:38",
      },
      {
        name: "fajr",
        time: "04:43",
      },
      {
        name: "sunrise",
        time: "06:08",
      },
      {
        name: "zuhr",
        time: "12:10",
      },
      {
        name: "sunset",
        time: "18:10",
      },
      {
        name: "maghrib",
        time: "18:25",
      },
    ],
  },
  {
    index: 268,
    month: 9,
    day: 26,
    prayers: [
      {
        name: "imsak",
        time: "04:39",
      },
      {
        name: "fajr",
        time: "04:44",
      },
      {
        name: "sunrise",
        time: "06:09",
      },
      {
        name: "zuhr",
        time: "12:09",
      },
      {
        name: "sunset",
        time: "18:08",
      },
      {
        name: "maghrib",
        time: "18:23",
      },
    ],
  },
  {
    index: 269,
    month: 9,
    day: 27,
    prayers: [
      {
        name: "imsak",
        time: "04:40",
      },
      {
        name: "fajr",
        time: "04:45",
      },
      {
        name: "sunrise",
        time: "06:10",
      },
      {
        name: "zuhr",
        time: "12:09",
      },
      {
        name: "sunset",
        time: "18:07",
      },
      {
        name: "maghrib",
        time: "18:22",
      },
    ],
  },
  {
    index: 270,
    month: 9,
    day: 28,
    prayers: [
      {
        name: "imsak",
        time: "04:42",
      },
      {
        name: "fajr",
        time: "04:47",
      },
      {
        name: "sunrise",
        time: "06:11",
      },
      {
        name: "zuhr",
        time: "12:09",
      },
      {
        name: "sunset",
        time: "18:05",
      },
      {
        name: "maghrib",
        time: "18:20",
      },
    ],
  },
  {
    index: 271,
    month: 9,
    day: 29,
    prayers: [
      {
        name: "imsak",
        time: "04:43",
      },
      {
        name: "fajr",
        time: "04:48",
      },
      {
        name: "sunrise",
        time: "06:13",
      },
      {
        name: "zuhr",
        time: "12:08",
      },
      {
        name: "sunset",
        time: "18:03",
      },
      {
        name: "maghrib",
        time: "18:18",
      },
    ],
  },
  {
    index: 272,
    month: 9,
    day: 30,
    prayers: [
      {
        name: "imsak",
        time: "04:44",
      },
      {
        name: "fajr",
        time: "04:49",
      },
      {
        name: "sunrise",
        time: "06:14",
      },
      {
        name: "zuhr",
        time: "12:08",
      },
      {
        name: "sunset",
        time: "18:01",
      },
      {
        name: "maghrib",
        time: "18:16",
      },
    ],
  },
  {
    index: 273,
    month: 10,
    day: 1,
    prayers: [
      {
        name: "imsak",
        time: "04:45",
      },
      {
        name: "fajr",
        time: "04:50",
      },
      {
        name: "sunrise",
        time: "06:15",
      },
      {
        name: "zuhr",
        time: "12:08",
      },
      {
        name: "sunset",
        time: "17:59",
      },
      {
        name: "maghrib",
        time: "18:14",
      },
    ],
  },
  {
    index: 274,
    month: 10,
    day: 2,
    prayers: [
      {
        name: "imsak",
        time: "04:46",
      },
      {
        name: "fajr",
        time: "04:51",
      },
      {
        name: "sunrise",
        time: "06:16",
      },
      {
        name: "zuhr",
        time: "12:07",
      },
      {
        name: "sunset",
        time: "17:58",
      },
      {
        name: "maghrib",
        time: "18:13",
      },
    ],
  },
  {
    index: 275,
    month: 10,
    day: 3,
    prayers: [
      {
        name: "imsak",
        time: "04:48",
      },
      {
        name: "fajr",
        time: "04:53",
      },
      {
        name: "sunrise",
        time: "06:17",
      },
      {
        name: "zuhr",
        time: "12:07",
      },
      {
        name: "sunset",
        time: "17:56",
      },
      {
        name: "maghrib",
        time: "18:11",
      },
    ],
  },
  {
    index: 276,
    month: 10,
    day: 4,
    prayers: [
      {
        name: "imsak",
        time: "04:49",
      },
      {
        name: "fajr",
        time: "04:54",
      },
      {
        name: "sunrise",
        time: "06:19",
      },
      {
        name: "zuhr",
        time: "12:07",
      },
      {
        name: "sunset",
        time: "17:54",
      },
      {
        name: "maghrib",
        time: "18:09",
      },
    ],
  },
  {
    index: 277,
    month: 10,
    day: 5,
    prayers: [
      {
        name: "imsak",
        time: "04:50",
      },
      {
        name: "fajr",
        time: "04:55",
      },
      {
        name: "sunrise",
        time: "06:20",
      },
      {
        name: "zuhr",
        time: "12:06",
      },
      {
        name: "sunset",
        time: "17:52",
      },
      {
        name: "maghrib",
        time: "18:07",
      },
    ],
  },
  {
    index: 278,
    month: 10,
    day: 6,
    prayers: [
      {
        name: "imsak",
        time: "04:51",
      },
      {
        name: "fajr",
        time: "04:56",
      },
      {
        name: "sunrise",
        time: "06:21",
      },
      {
        name: "zuhr",
        time: "12:06",
      },
      {
        name: "sunset",
        time: "17:50",
      },
      {
        name: "maghrib",
        time: "18:05",
      },
    ],
  },
  {
    index: 279,
    month: 10,
    day: 7,
    prayers: [
      {
        name: "imsak",
        time: "04:53",
      },
      {
        name: "fajr",
        time: "04:58",
      },
      {
        name: "sunrise",
        time: "06:22",
      },
      {
        name: "zuhr",
        time: "12:06",
      },
      {
        name: "sunset",
        time: "17:49",
      },
      {
        name: "maghrib",
        time: "18:04",
      },
    ],
  },
  {
    index: 280,
    month: 10,
    day: 8,
    prayers: [
      {
        name: "imsak",
        time: "04:54",
      },
      {
        name: "fajr",
        time: "04:59",
      },
      {
        name: "sunrise",
        time: "06:23",
      },
      {
        name: "zuhr",
        time: "12:05",
      },
      {
        name: "sunset",
        time: "17:47",
      },
      {
        name: "maghrib",
        time: "18:02",
      },
    ],
  },
  {
    index: 281,
    month: 10,
    day: 9,
    prayers: [
      {
        name: "imsak",
        time: "04:55",
      },
      {
        name: "fajr",
        time: "05:00",
      },
      {
        name: "sunrise",
        time: "06:24",
      },
      {
        name: "zuhr",
        time: "12:05",
      },
      {
        name: "sunset",
        time: "17:45",
      },
      {
        name: "maghrib",
        time: "18:00",
      },
    ],
  },
  {
    index: 282,
    month: 10,
    day: 10,
    prayers: [
      {
        name: "imsak",
        time: "04:56",
      },
      {
        name: "fajr",
        time: "05:01",
      },
      {
        name: "sunrise",
        time: "06:26",
      },
      {
        name: "zuhr",
        time: "12:05",
      },
      {
        name: "sunset",
        time: "17:43",
      },
      {
        name: "maghrib",
        time: "17:58",
      },
    ],
  },
  {
    index: 283,
    month: 10,
    day: 11,
    prayers: [
      {
        name: "imsak",
        time: "04:57",
      },
      {
        name: "fajr",
        time: "05:02",
      },
      {
        name: "sunrise",
        time: "06:37",
      },
      {
        name: "zuhr",
        time: "12:05",
      },
      {
        name: "sunset",
        time: "17:42",
      },
      {
        name: "maghrib",
        time: "17:57",
      },
    ],
  },
  {
    index: 284,
    month: 10,
    day: 12,
    prayers: [
      {
        name: "imsak",
        time: "04:58",
      },
      {
        name: "fajr",
        time: "05:03",
      },
      {
        name: "sunrise",
        time: "06:28",
      },
      {
        name: "zuhr",
        time: "12:04",
      },
      {
        name: "sunset",
        time: "17:40",
      },
      {
        name: "maghrib",
        time: "17:55",
      },
    ],
  },
  {
    index: 285,
    month: 10,
    day: 13,
    prayers: [
      {
        name: "imsak",
        time: "05:00",
      },
      {
        name: "fajr",
        time: "05:05",
      },
      {
        name: "sunrise",
        time: "06:29",
      },
      {
        name: "zuhr",
        time: "12:04",
      },
      {
        name: "sunset",
        time: "17:38",
      },
      {
        name: "maghrib",
        time: "17:53",
      },
    ],
  },
  {
    index: 286,
    month: 10,
    day: 14,
    prayers: [
      {
        name: "imsak",
        time: "05:01",
      },
      {
        name: "fajr",
        time: "05:06",
      },
      {
        name: "sunrise",
        time: "06:31",
      },
      {
        name: "zuhr",
        time: "12:04",
      },
      {
        name: "sunset",
        time: "17:36",
      },
      {
        name: "maghrib",
        time: "17:51",
      },
    ],
  },
  {
    index: 287,
    month: 10,
    day: 15,
    prayers: [
      {
        name: "imsak",
        time: "05:02",
      },
      {
        name: "fajr",
        time: "05:07",
      },
      {
        name: "sunrise",
        time: "06:32",
      },
      {
        name: "zuhr",
        time: "12:04",
      },
      {
        name: "sunset",
        time: "17:35",
      },
      {
        name: "maghrib",
        time: "17:50",
      },
    ],
  },
  {
    index: 288,
    month: 10,
    day: 16,
    prayers: [
      {
        name: "imsak",
        time: "05:03",
      },
      {
        name: "fajr",
        time: "05:08",
      },
      {
        name: "sunrise",
        time: "06:33",
      },
      {
        name: "zuhr",
        time: "12:03",
      },
      {
        name: "sunset",
        time: "17:33",
      },
      {
        name: "maghrib",
        time: "17:48",
      },
    ],
  },
  {
    index: 289,
    month: 10,
    day: 17,
    prayers: [
      {
        name: "imsak",
        time: "05:04",
      },
      {
        name: "fajr",
        time: "05:09",
      },
      {
        name: "sunrise",
        time: "06:34",
      },
      {
        name: "zuhr",
        time: "12:03",
      },
      {
        name: "sunset",
        time: "17:31",
      },
      {
        name: "maghrib",
        time: "17:46",
      },
    ],
  },
  {
    index: 290,
    month: 10,
    day: 18,
    prayers: [
      {
        name: "imsak",
        time: "05:06",
      },
      {
        name: "fajr",
        time: "05:11",
      },
      {
        name: "sunrise",
        time: "06:36",
      },
      {
        name: "zuhr",
        time: "12:03",
      },
      {
        name: "sunset",
        time: "17:30",
      },
      {
        name: "maghrib",
        time: "17:45",
      },
    ],
  },
  {
    index: 291,
    month: 10,
    day: 19,
    prayers: [
      {
        name: "imsak",
        time: "05:07",
      },
      {
        name: "fajr",
        time: "05:12",
      },
      {
        name: "sunrise",
        time: "06:37",
      },
      {
        name: "zuhr",
        time: "12:03",
      },
      {
        name: "sunset",
        time: "17:28",
      },
      {
        name: "maghrib",
        time: "17:43",
      },
    ],
  },
  {
    index: 292,
    month: 10,
    day: 20,
    prayers: [
      {
        name: "imsak",
        time: "05:08",
      },
      {
        name: "fajr",
        time: "05:13",
      },
      {
        name: "sunrise",
        time: "06:38",
      },
      {
        name: "zuhr",
        time: "12:03",
      },
      {
        name: "sunset",
        time: "17:26",
      },
      {
        name: "maghrib",
        time: "17:41",
      },
    ],
  },
  {
    index: 293,
    month: 10,
    day: 21,
    prayers: [
      {
        name: "imsak",
        time: "05:09",
      },
      {
        name: "fajr",
        time: "05:14",
      },
      {
        name: "sunrise",
        time: "06:39",
      },
      {
        name: "zuhr",
        time: "12:02",
      },
      {
        name: "sunset",
        time: "17:25",
      },
      {
        name: "maghrib",
        time: "17:40",
      },
    ],
  },
  {
    index: 294,
    month: 10,
    day: 22,
    prayers: [
      {
        name: "imsak",
        time: "05:10",
      },
      {
        name: "fajr",
        time: "05:15",
      },
      {
        name: "sunrise",
        time: "06:41",
      },
      {
        name: "zuhr",
        time: "12:02",
      },
      {
        name: "sunset",
        time: "17:23",
      },
      {
        name: "maghrib",
        time: "17:38",
      },
    ],
  },
  {
    index: 295,
    month: 10,
    day: 23,
    prayers: [
      {
        name: "imsak",
        time: "05:11",
      },
      {
        name: "fajr",
        time: "05:16",
      },
      {
        name: "sunrise",
        time: "06:42",
      },
      {
        name: "zuhr",
        time: "12:02",
      },
      {
        name: "sunset",
        time: "17:22",
      },
      {
        name: "maghrib",
        time: "17:37",
      },
    ],
  },
  {
    index: 296,
    month: 10,
    day: 24,
    prayers: [
      {
        name: "imsak",
        time: "05:13",
      },
      {
        name: "fajr",
        time: "05:18",
      },
      {
        name: "sunrise",
        time: "06:43",
      },
      {
        name: "zuhr",
        time: "12:02",
      },
      {
        name: "sunset",
        time: "17:20",
      },
      {
        name: "maghrib",
        time: "17:35",
      },
    ],
  },
  {
    index: 297,
    month: 10,
    day: 25,
    prayers: [
      {
        name: "imsak",
        time: "05:14",
      },
      {
        name: "fajr",
        time: "05:19",
      },
      {
        name: "sunrise",
        time: "06:44",
      },
      {
        name: "zuhr",
        time: "12:02",
      },
      {
        name: "sunset",
        time: "17:19",
      },
      {
        name: "maghrib",
        time: "17:34",
      },
    ],
  },
  {
    index: 298,
    month: 10,
    day: 26,
    prayers: [
      {
        name: "imsak",
        time: "05:15",
      },
      {
        name: "fajr",
        time: "05:20",
      },
      {
        name: "sunrise",
        time: "06:46",
      },
      {
        name: "zuhr",
        time: "12:02",
      },
      {
        name: "sunset",
        time: "17:17",
      },
      {
        name: "maghrib",
        time: "17:32",
      },
    ],
  },
  {
    index: 299,
    month: 10,
    day: 27,
    prayers: [
      {
        name: "imsak",
        time: "05:16",
      },
      {
        name: "fajr",
        time: "05:21",
      },
      {
        name: "sunrise",
        time: "06:47",
      },
      {
        name: "zuhr",
        time: "12:02",
      },
      {
        name: "sunset",
        time: "17:16",
      },
      {
        name: "maghrib",
        time: "17:31",
      },
    ],
  },
  {
    index: 300,
    month: 10,
    day: 28,
    prayers: [
      {
        name: "imsak",
        time: "05:17",
      },
      {
        name: "fajr",
        time: "05:22",
      },
      {
        name: "sunrise",
        time: "06:48",
      },
      {
        name: "zuhr",
        time: "12:02",
      },
      {
        name: "sunset",
        time: "17:14",
      },
      {
        name: "maghrib",
        time: "17:29",
      },
    ],
  },
  {
    index: 301,
    month: 10,
    day: 29,
    prayers: [
      {
        name: "imsak",
        time: "05:19",
      },
      {
        name: "fajr",
        time: "05:24",
      },
      {
        name: "sunrise",
        time: "06:50",
      },
      {
        name: "zuhr",
        time: "12:01",
      },
      {
        name: "sunset",
        time: "17:13",
      },
      {
        name: "maghrib",
        time: "17:28",
      },
    ],
  },
  {
    index: 302,
    month: 10,
    day: 30,
    prayers: [
      {
        name: "imsak",
        time: "05:20",
      },
      {
        name: "fajr",
        time: "05:25",
      },
      {
        name: "sunrise",
        time: "06:51",
      },
      {
        name: "zuhr",
        time: "12:01",
      },
      {
        name: "sunset",
        time: "17:11",
      },
      {
        name: "maghrib",
        time: "17:26",
      },
    ],
  },
  {
    index: 303,
    month: 10,
    day: 31,
    prayers: [
      {
        name: "imsak",
        time: "05:21",
      },
      {
        name: "fajr",
        time: "05:26",
      },
      {
        name: "sunrise",
        time: "06:52",
      },
      {
        name: "zuhr",
        time: "12:01",
      },
      {
        name: "sunset",
        time: "17:10",
      },
      {
        name: "maghrib",
        time: "17:25",
      },
    ],
  },
  {
    index: 304,
    month: 11,
    day: 1,
    prayers: [
      {
        name: "imsak",
        time: "05:22",
      },
      {
        name: "fajr",
        time: "05:27",
      },
      {
        name: "sunrise",
        time: "06:53",
      },
      {
        name: "zuhr",
        time: "12:01",
      },
      {
        name: "sunset",
        time: "17:09",
      },
      {
        name: "maghrib",
        time: "17:24",
      },
    ],
  },
  {
    index: 305,
    month: 11,
    day: 2,
    prayers: [
      {
        name: "imsak",
        time: "05:23",
      },
      {
        name: "fajr",
        time: "05:28",
      },
      {
        name: "sunrise",
        time: "06:55",
      },
      {
        name: "zuhr",
        time: "12:01",
      },
      {
        name: "sunset",
        time: "17:07",
      },
      {
        name: "maghrib",
        time: "17:22",
      },
    ],
  },
  {
    index: 306,
    month: 11,
    day: 3,
    prayers: [
      {
        name: "imsak",
        time: "05:24",
      },
      {
        name: "fajr",
        time: "05:29",
      },
      {
        name: "sunrise",
        time: "06:56",
      },
      {
        name: "zuhr",
        time: "12:01",
      },
      {
        name: "sunset",
        time: "17:06",
      },
      {
        name: "maghrib",
        time: "17:21",
      },
    ],
  },
  {
    index: 307,
    month: 11,
    day: 4,
    prayers: [
      {
        name: "imsak",
        time: "05:26",
      },
      {
        name: "fajr",
        time: "05:31",
      },
      {
        name: "sunrise",
        time: "06:57",
      },
      {
        name: "zuhr",
        time: "12:01",
      },
      {
        name: "sunset",
        time: "17:05",
      },
      {
        name: "maghrib",
        time: "17:20",
      },
    ],
  },
  {
    index: 308,
    month: 11,
    day: 5,
    prayers: [
      {
        name: "imsak",
        time: "05:27",
      },
      {
        name: "fajr",
        time: "05:32",
      },
      {
        name: "sunrise",
        time: "06:59",
      },
      {
        name: "zuhr",
        time: "12:01",
      },
      {
        name: "sunset",
        time: "17:03",
      },
      {
        name: "maghrib",
        time: "17:18",
      },
    ],
  },
  {
    index: 309,
    month: 11,
    day: 6,
    prayers: [
      {
        name: "imsak",
        time: "05:28",
      },
      {
        name: "fajr",
        time: "05:33",
      },
      {
        name: "sunrise",
        time: "07:00",
      },
      {
        name: "zuhr",
        time: "12:01",
      },
      {
        name: "sunset",
        time: "17:02",
      },
      {
        name: "maghrib",
        time: "17:17",
      },
    ],
  },
  {
    index: 310,
    month: 11,
    day: 7,
    prayers: [
      {
        name: "imsak",
        time: "05:29",
      },
      {
        name: "fajr",
        time: "05:34",
      },
      {
        name: "sunrise",
        time: "07:02",
      },
      {
        name: "zuhr",
        time: "12:01",
      },
      {
        name: "sunset",
        time: "17:01",
      },
      {
        name: "maghrib",
        time: "17:16",
      },
    ],
  },
  {
    index: 311,
    month: 11,
    day: 8,
    prayers: [
      {
        name: "imsak",
        time: "05:30",
      },
      {
        name: "fajr",
        time: "05:35",
      },
      {
        name: "sunrise",
        time: "07:03",
      },
      {
        name: "zuhr",
        time: "12:02",
      },
      {
        name: "sunset",
        time: "16:59",
      },
      {
        name: "maghrib",
        time: "17:14",
      },
    ],
  },
  {
    index: 312,
    month: 11,
    day: 9,
    prayers: [
      {
        name: "imsak",
        time: "05:32",
      },
      {
        name: "fajr",
        time: "05:37",
      },
      {
        name: "sunrise",
        time: "07:04",
      },
      {
        name: "zuhr",
        time: "12:02",
      },
      {
        name: "sunset",
        time: "16:58",
      },
      {
        name: "maghrib",
        time: "17:13",
      },
    ],
  },
  {
    index: 313,
    month: 11,
    day: 10,
    prayers: [
      {
        name: "imsak",
        time: "05:33",
      },
      {
        name: "fajr",
        time: "05:38",
      },
      {
        name: "sunrise",
        time: "07:06",
      },
      {
        name: "zuhr",
        time: "12:02",
      },
      {
        name: "sunset",
        time: "16:57",
      },
      {
        name: "maghrib",
        time: "17:12",
      },
    ],
  },
  {
    index: 314,
    month: 11,
    day: 11,
    prayers: [
      {
        name: "imsak",
        time: "05:34",
      },
      {
        name: "fajr",
        time: "05:39",
      },
      {
        name: "sunrise",
        time: "07:07",
      },
      {
        name: "zuhr",
        time: "12:02",
      },
      {
        name: "sunset",
        time: "16:56",
      },
      {
        name: "maghrib",
        time: "17:11",
      },
    ],
  },
  {
    index: 315,
    month: 11,
    day: 12,
    prayers: [
      {
        name: "imsak",
        time: "05:35",
      },
      {
        name: "fajr",
        time: "05:40",
      },
      {
        name: "sunrise",
        time: "07:08",
      },
      {
        name: "zuhr",
        time: "12:02",
      },
      {
        name: "sunset",
        time: "16:55",
      },
      {
        name: "maghrib",
        time: "17:10",
      },
    ],
  },
  {
    index: 316,
    month: 11,
    day: 13,
    prayers: [
      {
        name: "imsak",
        time: "05:36",
      },
      {
        name: "fajr",
        time: "05:41",
      },
      {
        name: "sunrise",
        time: "07:10",
      },
      {
        name: "zuhr",
        time: "12:02",
      },
      {
        name: "sunset",
        time: "16:54",
      },
      {
        name: "maghrib",
        time: "17:09",
      },
    ],
  },
  {
    index: 317,
    month: 11,
    day: 14,
    prayers: [
      {
        name: "imsak",
        time: "05:37",
      },
      {
        name: "fajr",
        time: "05:42",
      },
      {
        name: "sunrise",
        time: "07:11",
      },
      {
        name: "zuhr",
        time: "12:02",
      },
      {
        name: "sunset",
        time: "16:53",
      },
      {
        name: "maghrib",
        time: "17:08",
      },
    ],
  },
  {
    index: 318,
    month: 11,
    day: 15,
    prayers: [
      {
        name: "imsak",
        time: "05:38",
      },
      {
        name: "fajr",
        time: "05:43",
      },
      {
        name: "sunrise",
        time: "07:12",
      },
      {
        name: "zuhr",
        time: "12:02",
      },
      {
        name: "sunset",
        time: "16:52",
      },
      {
        name: "maghrib",
        time: "17:07",
      },
    ],
  },
  {
    index: 319,
    month: 11,
    day: 16,
    prayers: [
      {
        name: "imsak",
        time: "05:40",
      },
      {
        name: "fajr",
        time: "05:45",
      },
      {
        name: "sunrise",
        time: "07:14",
      },
      {
        name: "zuhr",
        time: "12:03",
      },
      {
        name: "sunset",
        time: "16:51",
      },
      {
        name: "maghrib",
        time: "17:06",
      },
    ],
  },
  {
    index: 320,
    month: 11,
    day: 17,
    prayers: [
      {
        name: "imsak",
        time: "05:41",
      },
      {
        name: "fajr",
        time: "05:46",
      },
      {
        name: "sunrise",
        time: "07:15",
      },
      {
        name: "zuhr",
        time: "12:03",
      },
      {
        name: "sunset",
        time: "16:50",
      },
      {
        name: "maghrib",
        time: "17:05",
      },
    ],
  },
  {
    index: 321,
    month: 11,
    day: 18,
    prayers: [
      {
        name: "imsak",
        time: "05:42",
      },
      {
        name: "fajr",
        time: "05:47",
      },
      {
        name: "sunrise",
        time: "07:16",
      },
      {
        name: "zuhr",
        time: "12:03",
      },
      {
        name: "sunset",
        time: "16:49",
      },
      {
        name: "maghrib",
        time: "17:04",
      },
    ],
  },
  {
    index: 322,
    month: 11,
    day: 19,
    prayers: [
      {
        name: "imsak",
        time: "05:43",
      },
      {
        name: "fajr",
        time: "05:48",
      },
      {
        name: "sunrise",
        time: "07:17",
      },
      {
        name: "zuhr",
        time: "12:03",
      },
      {
        name: "sunset",
        time: "16:48",
      },
      {
        name: "maghrib",
        time: "17:03",
      },
    ],
  },
  {
    index: 323,
    month: 11,
    day: 20,
    prayers: [
      {
        name: "imsak",
        time: "05:44",
      },
      {
        name: "fajr",
        time: "05:49",
      },
      {
        name: "sunrise",
        time: "07:19",
      },
      {
        name: "zuhr",
        time: "12:03",
      },
      {
        name: "sunset",
        time: "16:48",
      },
      {
        name: "maghrib",
        time: "17:03",
      },
    ],
  },
  {
    index: 324,
    month: 11,
    day: 21,
    prayers: [
      {
        name: "imsak",
        time: "05:45",
      },
      {
        name: "fajr",
        time: "05:50",
      },
      {
        name: "sunrise",
        time: "07:20",
      },
      {
        name: "zuhr",
        time: "12:04",
      },
      {
        name: "sunset",
        time: "16:47",
      },
      {
        name: "maghrib",
        time: "17:02",
      },
    ],
  },
  {
    index: 325,
    month: 11,
    day: 22,
    prayers: [
      {
        name: "imsak",
        time: "05:46",
      },
      {
        name: "fajr",
        time: "05:51",
      },
      {
        name: "sunrise",
        time: "07:21",
      },
      {
        name: "zuhr",
        time: "12:04",
      },
      {
        name: "sunset",
        time: "16:46",
      },
      {
        name: "maghrib",
        time: "17:01",
      },
    ],
  },
  {
    index: 326,
    month: 11,
    day: 23,
    prayers: [
      {
        name: "imsak",
        time: "05:47",
      },
      {
        name: "fajr",
        time: "05:52",
      },
      {
        name: "sunrise",
        time: "07:22",
      },
      {
        name: "zuhr",
        time: "12:04",
      },
      {
        name: "sunset",
        time: "16:46",
      },
      {
        name: "maghrib",
        time: "17:01",
      },
    ],
  },
  {
    index: 327,
    month: 11,
    day: 24,
    prayers: [
      {
        name: "imsak",
        time: "05:48",
      },
      {
        name: "fajr",
        time: "05:53",
      },
      {
        name: "sunrise",
        time: "07:22",
      },
      {
        name: "zuhr",
        time: "12:05",
      },
      {
        name: "sunset",
        time: "16:45",
      },
      {
        name: "maghrib",
        time: "17:00",
      },
    ],
  },
  {
    index: 328,
    month: 11,
    day: 25,
    prayers: [
      {
        name: "imsak",
        time: "05:49",
      },
      {
        name: "fajr",
        time: "05:54",
      },
      {
        name: "sunrise",
        time: "07:25",
      },
      {
        name: "zuhr",
        time: "12:05",
      },
      {
        name: "sunset",
        time: "16:44",
      },
      {
        name: "maghrib",
        time: "16:59",
      },
    ],
  },
  {
    index: 329,
    month: 11,
    day: 26,
    prayers: [
      {
        name: "imsak",
        time: "05:50",
      },
      {
        name: "fajr",
        time: "05:55",
      },
      {
        name: "sunrise",
        time: "07:26",
      },
      {
        name: "zuhr",
        time: "12:05",
      },
      {
        name: "sunset",
        time: "16:44",
      },
      {
        name: "maghrib",
        time: "16:59",
      },
    ],
  },
  {
    index: 330,
    month: 11,
    day: 27,
    prayers: [
      {
        name: "imsak",
        time: "05:51",
      },
      {
        name: "fajr",
        time: "05:56",
      },
      {
        name: "sunrise",
        time: "07:27",
      },
      {
        name: "zuhr",
        time: "12:05",
      },
      {
        name: "sunset",
        time: "16:43",
      },
      {
        name: "maghrib",
        time: "16:58",
      },
    ],
  },
  {
    index: 331,
    month: 11,
    day: 28,
    prayers: [
      {
        name: "imsak",
        time: "05:52",
      },
      {
        name: "fajr",
        time: "05:57",
      },
      {
        name: "sunrise",
        time: "07:28",
      },
      {
        name: "zuhr",
        time: "12:06",
      },
      {
        name: "sunset",
        time: "16:43",
      },
      {
        name: "maghrib",
        time: "16:58",
      },
    ],
  },
  {
    index: 332,
    month: 11,
    day: 29,
    prayers: [
      {
        name: "imsak",
        time: "05:53",
      },
      {
        name: "fajr",
        time: "05:58",
      },
      {
        name: "sunrise",
        time: "07:30",
      },
      {
        name: "zuhr",
        time: "12:06",
      },
      {
        name: "sunset",
        time: "16:43",
      },
      {
        name: "maghrib",
        time: "16:58",
      },
    ],
  },
  {
    index: 333,
    month: 11,
    day: 30,
    prayers: [
      {
        name: "imsak",
        time: "05:54",
      },
      {
        name: "fajr",
        time: "05:59",
      },
      {
        name: "sunrise",
        time: "07:31",
      },
      {
        name: "zuhr",
        time: "12:07",
      },
      {
        name: "sunset",
        time: "16:42",
      },
      {
        name: "maghrib",
        time: "16:57",
      },
    ],
  },
  {
    index: 334,
    month: 12,
    day: 1,
    prayers: [
      {
        name: "imsak",
        time: "05:55",
      },
      {
        name: "fajr",
        time: "06:00",
      },
      {
        name: "sunrise",
        time: "07:32",
      },
      {
        name: "zuhr",
        time: "12:07",
      },
      {
        name: "sunset",
        time: "16:41",
      },
      {
        name: "maghrib",
        time: "16:56",
      },
    ],
  },
  {
    index: 335,
    month: 12,
    day: 2,
    prayers: [
      {
        name: "imsak",
        time: "05:56",
      },
      {
        name: "fajr",
        time: "06:01",
      },
      {
        name: "sunrise",
        time: "07:33",
      },
      {
        name: "zuhr",
        time: "12:07",
      },
      {
        name: "sunset",
        time: "16:41",
      },
      {
        name: "maghrib",
        time: "16:56",
      },
    ],
  },
  {
    index: 336,
    month: 12,
    day: 3,
    prayers: [
      {
        name: "imsak",
        time: "05:57",
      },
      {
        name: "fajr",
        time: "06:02",
      },
      {
        name: "sunrise",
        time: "07:32",
      },
      {
        name: "zuhr",
        time: "12:08",
      },
      {
        name: "sunset",
        time: "16:41",
      },
      {
        name: "maghrib",
        time: "16:56",
      },
    ],
  },
  {
    index: 337,
    month: 12,
    day: 4,
    prayers: [
      {
        name: "imsak",
        time: "05:58",
      },
      {
        name: "fajr",
        time: "06:03",
      },
      {
        name: "sunrise",
        time: "07:35",
      },
      {
        name: "zuhr",
        time: "12:08",
      },
      {
        name: "sunset",
        time: "16:41",
      },
      {
        name: "maghrib",
        time: "16:56",
      },
    ],
  },
  {
    index: 338,
    month: 12,
    day: 5,
    prayers: [
      {
        name: "imsak",
        time: "05:59",
      },
      {
        name: "fajr",
        time: "06:04",
      },
      {
        name: "sunrise",
        time: "07:36",
      },
      {
        name: "zuhr",
        time: "12:08",
      },
      {
        name: "sunset",
        time: "16:40",
      },
      {
        name: "maghrib",
        time: "16:55",
      },
    ],
  },
  {
    index: 339,
    month: 12,
    day: 6,
    prayers: [
      {
        name: "imsak",
        time: "06:00",
      },
      {
        name: "fajr",
        time: "06:05",
      },
      {
        name: "sunrise",
        time: "07:37",
      },
      {
        name: "zuhr",
        time: "12:09",
      },
      {
        name: "sunset",
        time: "16:40",
      },
      {
        name: "maghrib",
        time: "16:55",
      },
    ],
  },
  {
    index: 340,
    month: 12,
    day: 7,
    prayers: [
      {
        name: "imsak",
        time: "06:01",
      },
      {
        name: "fajr",
        time: "06:06",
      },
      {
        name: "sunrise",
        time: "07:38",
      },
      {
        name: "zuhr",
        time: "12:09",
      },
      {
        name: "sunset",
        time: "16:40",
      },
      {
        name: "maghrib",
        time: "16:55",
      },
    ],
  },
  {
    index: 341,
    month: 12,
    day: 8,
    prayers: [
      {
        name: "imsak",
        time: "06:02",
      },
      {
        name: "fajr",
        time: "06:07",
      },
      {
        name: "sunrise",
        time: "07:39",
      },
      {
        name: "zuhr",
        time: "12:10",
      },
      {
        name: "sunset",
        time: "16:40",
      },
      {
        name: "maghrib",
        time: "16:55",
      },
    ],
  },
  {
    index: 342,
    month: 12,
    day: 9,
    prayers: [
      {
        name: "imsak",
        time: "06:03",
      },
      {
        name: "fajr",
        time: "06:08",
      },
      {
        name: "sunrise",
        time: "07:40",
      },
      {
        name: "zuhr",
        time: "12:10",
      },
      {
        name: "sunset",
        time: "16:40",
      },
      {
        name: "maghrib",
        time: "16:55",
      },
    ],
  },
  {
    index: 343,
    month: 12,
    day: 10,
    prayers: [
      {
        name: "imsak",
        time: "06:03",
      },
      {
        name: "fajr",
        time: "06:08",
      },
      {
        name: "sunrise",
        time: "07:41",
      },
      {
        name: "zuhr",
        time: "12:11",
      },
      {
        name: "sunset",
        time: "16:40",
      },
      {
        name: "maghrib",
        time: "16:55",
      },
    ],
  },
  {
    index: 344,
    month: 12,
    day: 11,
    prayers: [
      {
        name: "imsak",
        time: "06:04",
      },
      {
        name: "fajr",
        time: "06:09",
      },
      {
        name: "sunrise",
        time: "07:42",
      },
      {
        name: "zuhr",
        time: "12:11",
      },
      {
        name: "sunset",
        time: "16:40",
      },
      {
        name: "maghrib",
        time: "16:55",
      },
    ],
  },
  {
    index: 345,
    month: 12,
    day: 12,
    prayers: [
      {
        name: "imsak",
        time: "06:05",
      },
      {
        name: "fajr",
        time: "06:10",
      },
      {
        name: "sunrise",
        time: "07:43",
      },
      {
        name: "zuhr",
        time: "12:12",
      },
      {
        name: "sunset",
        time: "16:40",
      },
      {
        name: "maghrib",
        time: "16:55",
      },
    ],
  },
  {
    index: 346,
    month: 12,
    day: 13,
    prayers: [
      {
        name: "imsak",
        time: "06:06",
      },
      {
        name: "fajr",
        time: "06:11",
      },
      {
        name: "sunrise",
        time: "07:44",
      },
      {
        name: "zuhr",
        time: "12:12",
      },
      {
        name: "sunset",
        time: "16:40",
      },
      {
        name: "maghrib",
        time: "16:55",
      },
    ],
  },
  {
    index: 347,
    month: 12,
    day: 14,
    prayers: [
      {
        name: "imsak",
        time: "06:06",
      },
      {
        name: "fajr",
        time: "06:11",
      },
      {
        name: "sunrise",
        time: "07:44",
      },
      {
        name: "zuhr",
        time: "12:13",
      },
      {
        name: "sunset",
        time: "16:41",
      },
      {
        name: "maghrib",
        time: "16:56",
      },
    ],
  },
  {
    index: 348,
    month: 12,
    day: 15,
    prayers: [
      {
        name: "imsak",
        time: "06:07",
      },
      {
        name: "fajr",
        time: "06:12",
      },
      {
        name: "sunrise",
        time: "07:45",
      },
      {
        name: "zuhr",
        time: "12:13",
      },
      {
        name: "sunset",
        time: "16:41",
      },
      {
        name: "maghrib",
        time: "16:56",
      },
    ],
  },
  {
    index: 349,
    month: 12,
    day: 16,
    prayers: [
      {
        name: "imsak",
        time: "06:08",
      },
      {
        name: "fajr",
        time: "06:13",
      },
      {
        name: "sunrise",
        time: "07:46",
      },
      {
        name: "zuhr",
        time: "12:13",
      },
      {
        name: "sunset",
        time: "16:41",
      },
      {
        name: "maghrib",
        time: "16:56",
      },
    ],
  },
  {
    index: 350,
    month: 12,
    day: 17,
    prayers: [
      {
        name: "imsak",
        time: "06:08",
      },
      {
        name: "fajr",
        time: "06:13",
      },
      {
        name: "sunrise",
        time: "07:46",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "16:41",
      },
      {
        name: "maghrib",
        time: "16:56",
      },
    ],
  },
  {
    index: 351,
    month: 12,
    day: 18,
    prayers: [
      {
        name: "imsak",
        time: "06:09",
      },
      {
        name: "fajr",
        time: "06:14",
      },
      {
        name: "sunrise",
        time: "07:47",
      },
      {
        name: "zuhr",
        time: "12:14",
      },
      {
        name: "sunset",
        time: "16:42",
      },
      {
        name: "maghrib",
        time: "16:57",
      },
    ],
  },
  {
    index: 352,
    month: 12,
    day: 19,
    prayers: [
      {
        name: "imsak",
        time: "06:10",
      },
      {
        name: "fajr",
        time: "06:15",
      },
      {
        name: "sunrise",
        time: "07:48",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "16:42",
      },
      {
        name: "maghrib",
        time: "16:57",
      },
    ],
  },
  {
    index: 353,
    month: 12,
    day: 20,
    prayers: [
      {
        name: "imsak",
        time: "06:10",
      },
      {
        name: "fajr",
        time: "06:15",
      },
      {
        name: "sunrise",
        time: "07:48",
      },
      {
        name: "zuhr",
        time: "12:15",
      },
      {
        name: "sunset",
        time: "16:43",
      },
      {
        name: "maghrib",
        time: "16:58",
      },
    ],
  },
  {
    index: 354,
    month: 12,
    day: 21,
    prayers: [
      {
        name: "imsak",
        time: "06:11",
      },
      {
        name: "fajr",
        time: "06:16",
      },
      {
        name: "sunrise",
        time: "07:49",
      },
      {
        name: "zuhr",
        time: "12:16",
      },
      {
        name: "sunset",
        time: "16:43",
      },
      {
        name: "maghrib",
        time: "16:58",
      },
    ],
  },
  {
    index: 355,
    month: 12,
    day: 22,
    prayers: [
      {
        name: "imsak",
        time: "06:11",
      },
      {
        name: "fajr",
        time: "06:16",
      },
      {
        name: "sunrise",
        time: "07:49",
      },
      {
        name: "zuhr",
        time: "12:16",
      },
      {
        name: "sunset",
        time: "16:44",
      },
      {
        name: "maghrib",
        time: "16:59",
      },
    ],
  },
  {
    index: 356,
    month: 12,
    day: 23,
    prayers: [
      {
        name: "imsak",
        time: "06:12",
      },
      {
        name: "fajr",
        time: "06:17",
      },
      {
        name: "sunrise",
        time: "07:50",
      },
      {
        name: "zuhr",
        time: "12:17",
      },
      {
        name: "sunset",
        time: "16:44",
      },
      {
        name: "maghrib",
        time: "16:59",
      },
    ],
  },
  {
    index: 357,
    month: 12,
    day: 24,
    prayers: [
      {
        name: "imsak",
        time: "06:12",
      },
      {
        name: "fajr",
        time: "06:17",
      },
      {
        name: "sunrise",
        time: "07:50",
      },
      {
        name: "zuhr",
        time: "12:17",
      },
      {
        name: "sunset",
        time: "16:45",
      },
      {
        name: "maghrib",
        time: "17:00",
      },
    ],
  },
  {
    index: 358,
    month: 12,
    day: 25,
    prayers: [
      {
        name: "imsak",
        time: "06:12",
      },
      {
        name: "fajr",
        time: "06:17",
      },
      {
        name: "sunrise",
        time: "07:51",
      },
      {
        name: "zuhr",
        time: "12:18",
      },
      {
        name: "sunset",
        time: "16:45",
      },
      {
        name: "maghrib",
        time: "17:00",
      },
    ],
  },
  {
    index: 359,
    month: 12,
    day: 26,
    prayers: [
      {
        name: "imsak",
        time: "06:13",
      },
      {
        name: "fajr",
        time: "06:18",
      },
      {
        name: "sunrise",
        time: "07:51",
      },
      {
        name: "zuhr",
        time: "12:18",
      },
      {
        name: "sunset",
        time: "16:46",
      },
      {
        name: "maghrib",
        time: "17:01",
      },
    ],
  },
  {
    index: 360,
    month: 12,
    day: 27,
    prayers: [
      {
        name: "imsak",
        time: "06:13",
      },
      {
        name: "fajr",
        time: "06:18",
      },
      {
        name: "sunrise",
        time: "07:51",
      },
      {
        name: "zuhr",
        time: "12:19",
      },
      {
        name: "sunset",
        time: "16:47",
      },
      {
        name: "maghrib",
        time: "17:02",
      },
    ],
  },
  {
    index: 361,
    month: 12,
    day: 28,
    prayers: [
      {
        name: "imsak",
        time: "06:13",
      },
      {
        name: "fajr",
        time: "06:18",
      },
      {
        name: "sunrise",
        time: "07:51",
      },
      {
        name: "zuhr",
        time: "12:19",
      },
      {
        name: "sunset",
        time: "16:47",
      },
      {
        name: "maghrib",
        time: "17:02",
      },
    ],
  },
  {
    index: 362,
    month: 12,
    day: 29,
    prayers: [
      {
        name: "imsak",
        time: "06:14",
      },
      {
        name: "fajr",
        time: "06:19",
      },
      {
        name: "sunrise",
        time: "07:52",
      },
      {
        name: "zuhr",
        time: "12:20",
      },
      {
        name: "sunset",
        time: "16:48",
      },
      {
        name: "maghrib",
        time: "17:03",
      },
    ],
  },
  {
    index: 363,
    month: 12,
    day: 30,
    prayers: [
      {
        name: "imsak",
        time: "06:14",
      },
      {
        name: "fajr",
        time: "06:19",
      },
      {
        name: "sunrise",
        time: "07:52",
      },
      {
        name: "zuhr",
        time: "12:20",
      },
      {
        name: "sunset",
        time: "16:49",
      },
      {
        name: "maghrib",
        time: "17:04",
      },
    ],
  },
  {
    index: 364,
    month: 12,
    day: 31,
    prayers: [
      {
        name: "imsak",
        time: "06:14",
      },
      {
        name: "fajr",
        time: "06:19",
      },
      {
        name: "sunrise",
        time: "07:52",
      },
      {
        name: "zuhr",
        time: "12:21",
      },
      {
        name: "sunset",
        time: "16:50",
      },
      {
        name: "maghrib",
        time: "17:05",
      },
    ],
  },
  {
    index: 365,
    month: 2,
    day: 29,
    prayers: [
      {
        name: "imsak",
        time: "05:27",
      },
      {
        name: "fajr",
        time: "05:32",
      },
      {
        name: "sunrise",
        time: "06:57",
      },
      {
        name: "zuhr",
        time: "12:30",
      },
      {
        name: "sunset",
        time: "18:05",
      },
      {
        name: "maghrib",
        time: "18:20",
      },
    ],
  },
];

export const PrayerBar = () => {
  const today = moment();
  const dayOfYear = today.dayOfYear() - 1;
  const prayers = prayerTimes[dayOfYear]?.prayers;
  const isDst = today.isDST() ? 60 : 0;

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-2xl justify-center px-4">
        <div className="flex w-full flex-col place-items-center justify-center gap-2 rounded-md bg-secondary py-6 text-white">
          <p className="font-semibold">
            {momentHijri().locale("en-US").format("iDo iMMMM iYYYY ")}
          </p>
          <div className="mb-2 grid max-w-md grid-cols-4 gap-8">
            {prayers &&
              prayers.map((prayer) => {
                if (
                  prayer.name === "fajr" ||
                  prayer.name === "sunset" ||
                  prayer.name === "zuhr" ||
                  prayer.name === "maghrib"
                ) {
                  return (
                    <div key={prayer.name} className="grid grid-rows-2">
                      <div className="text-center font-semibold">
                        {prayer.name}
                      </div>
                      <div className="text-center">
                        {moment(prayer.time, "h:mm")
                          .add(isDst, "minutes")
                          .format("h:mm")}
                      </div>
                    </div>
                  );
                }
                return <></>;
              })}
          </div>
          <div className="flex gap-2">
            <label htmlFor="my-modal-3" className="btn-primary btn flex gap-1">
              <p>Jamaat Salaat</p>
            </label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative text-black">
                <label
                  htmlFor="my-modal-3"
                  className="btn-sm btn-circle btn absolute right-2 top-2 bg-slate-900"
                >
                  ✕
                </label>
                <h3 className="pb-2 text-lg font-bold uppercase">
                  Jamaat Salaat At JCC
                </h3>
                <p className="py-0.5">FAJR: 6:30 AM</p>
                <p className="py-0.5">
                  ZUHR: 1:30 PM on weekdays and 1:15 PM on weekends
                </p>
                <p className="py-0.5">MAGHRIB: Prime Time Everyday</p>
              </div>
            </div>
            <Button color="accent">More Times</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
