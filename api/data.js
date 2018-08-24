const datas = [
    {
        recommend:{
            imgbx:{
                tipsImg:'/images/tips.png',
                situation:{
                    one:'/images/station-4.png',
                    two:'/images/station-3.png',
                }
            },
            lpInfo:{
                urlImg:'http://img2.imgtn.bdimg.com/it/u=234547529,4156186303&fm=23&gp=0.jpg',
                name:'中展瑞景',
                price:'2000-3000元/月'
            },
            custInfo:{
                rent:{
                    persent:87,
                    desc:'为月收入低于5K的屌丝'
                },
                area:{
                    persent:64  ,
                    desc:'为大龄单身男青年'
                }
            }
        },
        station:{
            topImg:'/images/p2-top.png',
            averagePrice:'3500',
            averagePriceInfo:'低于松江平均一居室租金200元',
            renttype:{
                full:'15%',
                group:'85%'
            },
            finish:{
                simp:'21%',
                norml:'76%',
                higth:'3%'
            },
            expend:{
                totl:'1726',
                desc:'低于松江平均月支出'
            }
        },
        traffic:{
            pay:'360',
            taxi:{
                time:'24',
                pret:'13%'
            },
            bus:{
                time:'32',
                pret:'21%'
            },
            subway:{
                time:'26',
                pret:'66%'
            },
            distance:14,
            longitude:121.436434,
            latitude:31.195109,
            scale:13,
            markers:[{
                iconPath: "/images/mapStart.png",
                id: 0,
                latitude: 31.186959,
                longitude: 121.424117,
                width: 30,
                height: 30
            },{
                iconPath: "/images/mapEnd.png",
                id: 1,
                latitude: 31.195109,
                longitude: 121.436434,
                width: 30,
                height: 30
            }]
        },
        around:{
            business:{
                desc:'最近商圈距小区767米',
                time:'10min',
                trafficaffic:"步行仅需10分钟"
            },
            hospital:{
                desc:'最近三医院居距小区4687米',
                time:'12min',
                trafficaffic:"驱车仅需12分钟"
            },
            superMarket:{
                desc:'最近大型超市距小区869米',
                time:'15min',
                trafficaffic:"步行仅需15分钟"
            },
            foodMarket:{
                desc:'最近菜场距小区437米',
                time:'6min',
                trafficaffic:"步行仅需6分钟"
            },
            longitude:121.436434,
            latitude:31.195109,
            scale:13,
            markers:[{
                iconPath: "/images/min-bd.png",
                id: 2,
                latitude: 31.186959,
                longitude: 121.424117,
                width: 30,
                height: 30
            },{
                iconPath: "/images/min-hos.png",
                id: 3,
                latitude: 31.195109,
                longitude: 121.436434,
                width: 30,
                height: 30
            },{
                iconPath: "/images/min-sm.png",
                id:4,
                latitude: 31.185894,
                longitude: 121.440768,
                width: 30,
                height: 30
            },{
                iconPath: "/images/min-vm.png",
                id: 5,
                latitude: 31.189639,
                longitude: 121.434031,
                width: 30,
                height: 30
            }]

        },
        order:{
            security:[
                '一位尽职的守门老大爷',
                '360度无死角监控'
            ],
            steal:[
                '小区盗窃率仅3%',
                '远低于全市平均盗窃率'
            ],
            starLv:3
        }
    },
    {
        recommend:{
            imgbx:{
                tipsImg:'/images/tips.png',
                situation:{
                    one:'/images/station-2.png',
                    two:'/images/station-1.png',
                }
            },
            lpInfo:{
                urlImg:'http://img2.imgtn.bdimg.com/it/u=234547529,4156186303&fm=23&gp=0.jpg',
                name:'中展瑞景',
                price:'1700元/月'
            },
            custInfo:{
                rent:{
                    persent:63,
                    desc:'为拖家带口的劳苦大众'
                },
                area:{
                    persent:49  ,
                    desc:'为农民工兄弟'
                }
            }
        },
        station:{
            topImg:'/images/p2-top.png',
            averagePrice:'3300',
            averagePriceInfo:'低于松江平均一居室租金400元',
            renttype:{
                full:'37%',
                group:'63%'
            },
            finish:{
                simp:'54%',
                norml:'43%',
                higth:'1%'
            },
            expend:{
                totl:'2249',
                desc:'低于松江平均月支出'
            }
        },
        traffic:{
            pay:'170',
            taxi:{
                time:'19',
                pret:'34%'
            },
            bus:{
                time:'40',
                pret:'19%'
            },
            subway:{
                time:'27',
                pret:'17%'
            },
            distance:16,
            longitude:121.436434,
            latitude:31.195109,
            scale:13,
            markers:[{
                iconPath: "/images/mapStart.png",
                id: 0,
                latitude: 31.186959,
                longitude: 121.424117,
                width: 30,
                height: 30
            },{
                iconPath: "/images/mapEnd.png",
                id: 1,
                latitude: 31.195109,
                longitude: 121.436434,
                width: 30,
                height: 30
            }]
        },
        around:{
            business:{
                desc:'最近商圈距小区3475米',
                time:'13min',
                trafficaffic:"驱车仅需13分钟"
            },
            hospital:{
                desc:'最近三医院居距小区5375米',
                time:'17min',
                trafficaffic:"驱车仅需17分钟"
            },
            superMarket:{
                desc:'最近大型超市距小区2585米',
                time:'15min',
                trafficaffic:"步行仅需15分钟"
            },
            foodMarket:{
                desc:'最近菜场距小区1793米',
                time:'10min',
                trafficaffic:"步行仅需10分钟"
            },
            longitude:121.436434,
            latitude:31.195109,
            scale:13,
            markers:[{
                iconPath: "/images/min-bd.png",
                id: 2,
                latitude: 31.186959,
                longitude: 121.424117,
                width: 30,
                height: 30
            },{
                iconPath: "/images/min-hos.png",
                id: 3,
                latitude: 31.195109,
                longitude: 121.436434,
                width: 30,
                height: 30
            },{
                iconPath: "/images/min-sm.png",
                id:4,
                latitude: 31.185894,
                longitude: 121.440768,
                width: 30,
                height: 30
            },{
                iconPath: "/images/min-vm.png",
                id: 5,
                latitude: 31.189639,
                longitude: 121.434031,
                width: 30,
                height: 30
            }]

        },
        order:{
            security:[
                '小区大门向南开',
                '门卫保安无踪影'
            ],
            steal:[
                '小区盗窃率高于5%',
                '别想太多，洗洗睡吧'
            ],
            starLv:1
        }
    },
    {
        recommend:{
            imgbx:{
                tipsImg:'/images/tips.png',
                situation:{
                    one:'/images/station-6.png',
                    two:'/images/station-5.png',
                }
            },
            lpInfo:{
                urlImg:'http://img2.imgtn.bdimg.com/it/u=234547529,4156186303&fm=23&gp=0.jpg',
                name:'中展瑞景',
                price:'1800元/月'
            },
            custInfo:{
                rent:{
                    persent:81,
                    desc:'为月收入高于1W的单身白领'
                },
                area:{
                    persent:78 ,
                    desc:'为白领上班族'
                }
            }
        },
        station:{
            topImg:'/images/p2-top.png',
            averagePrice:'4100',
            averagePriceInfo:'高于松江平均一居室租金600元',
            renttype:{
                full:'74%',
                group:'26%'
            },
            finish:{
                simp:'0%',
                norml:'13%',
                higth:'87%'
            },
            expend:{
                totl:'4378',
                desc:'高于松江平均月支出'
            }
        },
        traffic:{
            pay:'570',
            taxi:{
                time:'22',
                pret:'46%'
            },
            bus:{
                time:'38',
                pret:'13%'
            },
            subway:{
                time:'26',
                pret:'41%'
            },
            distance:21,
            longitude:121.436434,
            latitude:31.195109,
            scale:13,
            markers:[{
                iconPath: "/images/mapStart.png",
                id: 0,
                latitude: 31.186959,
                longitude: 121.424117,
                width: 30,
                height: 30
            },{
                iconPath: "/images/mapEnd.png",
                id: 1,
                latitude: 31.195109,
                longitude: 121.436434,
                width: 30,
                height: 30
            }]
        },
        around:{
            business:{
                desc:'最近商圈距小区567米',
                time:'4min',
                trafficaffic:"驱车仅需4分钟"
            },
            hospital:{
                desc:'最近三医院居距小区896米',
                time:'6min',
                trafficaffic:"步行仅需6分钟"
            },
            superMarket:{
                desc:'最近大型超市距小区641米',
                time:'5min',
                trafficaffic:"步行仅需5分钟"
            },
            foodMarket:{
                desc:'最近菜场距小区1421米',
                time:'8min',
                trafficaffic:"步行仅需8分钟"
            },
            longitude:121.436434,
            latitude:31.195109,
            scale:13,
            markers:[{
                iconPath: "/images/min-bd.png",
                id: 2,
                latitude: 31.186959,
                longitude: 121.424117,
                width: 30,
                height: 30
            },{
                iconPath: "/images/min-hos.png",
                id: 3,
                latitude: 31.195109,
                longitude: 121.436434,
                width: 30,
                height: 30
            },{
                iconPath: "/images/min-sm.png",
                id:4,
                latitude: 31.185894,
                longitude: 121.440768,
                width: 30,
                height: 30
            },{
                iconPath: "/images/min-vm.png",
                id: 5,
                latitude: 31.189639,
                longitude: 121.434031,
                width: 30,
                height: 30
            }]

        },
        order:{
            security:[
                '门卫+保安',
                '小偷进得去出不来'
            ],
            steal:[
                '上次发生盗窃',
                '还要追溯明朝道光年间'
            ],
            starLv:4
        }
    },
    {
        recommend:{
            imgbx:{
                tipsImg:'/images/tips.png',
                situation:{
                    one:'/images/station-6.png',
                    two:'/images/station-5.png',
                }
            },
            lpInfo:{
                urlImg:'http://img2.imgtn.bdimg.com/it/u=234547529,4156186303&fm=23&gp=0.jpg',
                name:'中展瑞景',
                price:'4700元/月'
            },
            custInfo:{
                rent:{
                    persent:93,
                    desc:'为月收入高于1W的单身白领'
                },
                area:{
                    persent:82 ,
                    desc:'为白领上班族'
                }
            }
        },
        station:{
            topImg:'/images/p2-top.png',
            averagePrice:'4700',
            averagePriceInfo:'高于松江平均一居室租金1200元',
            renttype:{
                full:'83%',
                group:'17%'
            },
            finish:{
                simp:'0%',
                norml:'11%',
                higth:'89%'
            },
            expend:{
                totl:'3946',
                desc:'高于松江平均月支出'
            }
        },
        traffic:{
            pay:'490',
            taxi:{
                time:'30',
                pret:'32%'
            },
            bus:{
                time:'52',
                pret:'17%'
            },
            subway:{
                time:'36',
                pret:'51%'
            },
            distance:28,
            longitude:121.436434,
            latitude:31.195109,
            scale:13,
            markers:[{
                iconPath: "/images/mapStart.png",
                id: 0,
                latitude: 31.186959,
                longitude: 121.424117,
                width: 30,
                height: 30
            },{
                iconPath: "/images/mapEnd.png",
                id: 1,
                latitude: 31.195109,
                longitude: 121.436434,
                width: 30,
                height: 30
            }]
        },
        around:{
            business:{
                desc:'最近商圈距小区648米',
                time:'5min',
                trafficaffic:"步行仅需5分钟"
            },
            hospital:{
                desc:'最近三医院居距小区985米',
                time:'7min',
                trafficaffic:"步行仅需7分钟"
            },
            superMarket:{
                desc:'最近大型超市距小区831米',
                time:'6min',
                trafficaffic:"步行仅需6分钟"
            },
            foodMarket:{
                desc:'最近菜场距小区1245米',
                time:'9min',
                trafficaffic:"步行仅需9分钟"
            },
            longitude:121.436434,
            latitude:31.195109,
            scale:13,
            markers:[{
                iconPath: "/images/min-bd.png",
                id: 2,
                latitude: 31.186959,
                longitude: 121.424117,
                width: 30,
                height: 30
            },{
                iconPath: "/images/min-hos.png",
                id: 3,
                latitude: 31.195109,
                longitude: 121.436434,
                width: 30,
                height: 30
            },{
                iconPath: "/images/min-sm.png",
                id:4,
                latitude: 31.185894,
                longitude: 121.440768,
                width: 30,
                height: 30
            },{
                iconPath: "/images/min-vm.png",
                id: 5,
                latitude: 31.189639,
                longitude: 121.434031,
                width: 30,
                height: 30
            }]
        },
        order:{
            security:[
                '有门卫有保安',
                '360度无死角监控'
            ],
            steal:[
                '盗窃率低于1%',
                '远低于全市平均盗窃率'
            ],
            starLv:4
        }
    }
];

module.exports= {datas:datas};