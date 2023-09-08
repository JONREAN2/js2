# !/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time    : 2023/9/8 18:33
# @Author  : ziyou
from datetime import datetime

import requests


def get_coupon1():
    cookies = {}

    headers = {}

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