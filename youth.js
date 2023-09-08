# !/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time    : 2023/9/8 18:33
# @Author  : ziyou
from datetime import datetime

import requests


def get_coupon1():
    cookies = {}

    headers = {
'Origin' : 'https://market.waimai.meituan.com',
#'Cookie' : `_lxsdk_s=18a756d5635-5-50-9b6%7C2426246373%7C508; isUuidUnion=true; iuuid=1157506248112017408; WEBDFPID=uuzyuvu3v07951w117y6001x678x682381z245vx0w597958vx3y9500-2009545212299-1694185212299IKQWIWG868c0ee73ab28e1d0b03bc83148500063492; _lx_utm=utm_source%3Dwxshare%26utm_term%3D512946; isid=AgG9HARjLwdVWH0AHs4P_0UQTlrEEkP6H1DjudV1zH58-jS5jIRHdHIcB9XO31lMMwTySO4RYkPrSgAAAACvGgAAbxrcrhu4UAizllywiw-DWJi0PZnsAR6nl9pYGWFoeggJtWEFHwaoRwFSry4Og52T; mt_c_token=AgG9HARjLwdVWH0AHs4P_0UQTlrEEkP6H1DjudV1zH58-jS5jIRHdHIcB9XO31lMMwTySO4RYkPrSgAAAACvGgAAbxrcrhu4UAizllywiw-DWJi0PZnsAR6nl9pYGWFoeggJtWEFHwaoRwFSry4Og52T; oops=AgG9HARjLwdVWH0AHs4P_0UQTlrEEkP6H1DjudV1zH58-jS5jIRHdHIcB9XO31lMMwTySO4RYkPrSgAAAACvGgAAbxrcrhu4UAizllywiw-DWJi0PZnsAR6nl9pYGWFoeggJtWEFHwaoRwFSry4Og52T; thirdlogin_token=AgG9HARjLwdVWH0AHs4P_0UQTlrEEkP6H1DjudV1zH58-jS5jIRHdHIcB9XO31lMMwTySO4RYkPrSgAAAACvGgAAbxrcrhu4UAizllywiw-DWJi0PZnsAR6nl9pYGWFoeggJtWEFHwaoRwFSry4Og52T; u=2426246373; userId=2426246373; openid=; token=AgFfIunT11zPv_5Kwc4Dh8KpG8OQIyzhvuCZ4IqVFqG_Gdnjh3jaYr8GeXqjLNgJyZ2VzkxB9UsBcAAAAABeGgAANo8h-kKrzH9t2wehqQt0voA7EV7TGO6NtcsuIosGPIw3vc1NfJQS-qjas-yTk8Jh; userid=2426246373; unpl=v1_Dp-bnwKXZ38231Akse1v8F3Dz1XR1t8Pr8PGZKyhE8dA4vpers-QlFTzNKeWXTOT; userInfo=%7B%22avatarUrl%22%3A%22https%3A%2F%2Fimg.meituan.net%2Favatar%2Fe7cfe8759a4eb6c7e43b807c1d9741a7105054.jpg%22%2C%22nickName%22%3A%22Thamas7%22%2C%22source%22%3A%22mtInfo%22%7D; _lxsdk=1157506248112017408; ta.uuid=1700162107276607548; _lxsdk_cuid=18a754eae8bc8-0f348b73f59fe48-564d2652-5a900-18a754eae8b15`,
'Connection' : 'keep-alive',
'Accept' : 'application/json, text/plain, */*',
'Referer' : 'https://market.waimai.meituan.com/',
'Host' : 'promotion.waimai.meituan.com',
'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.32(0x18002038) NetType/WIFI Language/zh_CN',
'Accept-Encoding' : 'gzip, deflate, br',
'Accept-Language' : 'zh-CN,zh-Hans;q=0.9'
}
    now_time2 = datetime.now()
    sj = now_time2.strftime("%H:%M")
    if '09:50' <= sj <= '10:10':
        name = '10点25-12'
        qid = '419967B3A4064140BA78E6A046DF0FC1'
        gid = '513833'
        pid = '516533'
        iid = '16890429573560.08766758935246644'
        qsj = '09:59:58'
    elif '10:20' <= sj <= '10:40':
        name = '10点半25-10'
        qid = '4E6F59AC6B7847208E5DA36BD28F0BBC'
        gid = '366584'
        pid = '366094'
        iid = '16891628959150.8747576442856331'
        qsj = '10:29:58'
    elif '10:50' <= sj < '11:10':
        name = '11点38-16'
        qid = 'D8956E2373F84916A84269C10B1CA9E6'
        gid = '515804'
        pid = '518733'
        iid = '16940579580180.49177438780298455'
        qsj = '10:59:58'
    elif '15:20' <= sj <= '15:40':
        name = '15点半25-10'
        qid = '8A47D37B70C64675B7290A2F6FBA9447'
        gid = '366584'
        pid = '366094'
        iid = '16891628959150.8747576442856331'
        qsj = '15:29:58'
    elif '16:50' <= sj <= '17:10':
        name = '17点25-12'
        qid = '35D2E964BB334BEF9239151847DACC02'
        gid = '513833'
        pid = '516533'
        iid = '16890429573560.08766758935246644'
        qsj = '16:59:58'
    elif '19:20' <= sj < '19:40':
        name = '19点半25-10'
        qid = '31B94A06456647E294813E465EE08452'
        gid = '366584'
        pid = '366094'
        iid = '16891628959150.8747576442856331'
        qsj = '19:29:58'
    else:
        print('不在设置的抢券时间段')
        return
    print(f'开始抢 {name}')
    params = {
        'couponReferId': qid,
        'componentId': iid,
        'actualLng': '112.90293',
        'actualLat': '28.134224',
        'geoType': '2',
        'gdPageId': gid,
        'pageId': pid,
        'version': '1',
        'instanceId': iid,
        'yodaReady': 'h5',
        'csecplatform': '4',
        'csecversion': '2.1.2',
    }
    _json = {}

    for i in range(15):
        response = requests.post(
            'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon',
            params=params,
            cookies=cookies,
            headers=headers,
            json=_json
        )
        response_dict = response.json()
        print(response_dict)
        if response_dict.get('code') == 1:
            break
        if response_dict.get('code') == 0:
            break


get_coupon1()