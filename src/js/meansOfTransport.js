export const meansOfTransportList = {
    1935:{
        vechicles:{
                truck:{
                        renaultTTD6:{
                            payLoad: 15,
                            cost: 1,
                            speed: 20
                        },
                        renaultABG:{
                            payLoad: 10,
                            cost: 0.77,
                            speed: 23
                        },
                        renaultYGDD:{
                            payLoad: 6,
                            cost: 0.47,
                            speed: 21
                        },
                        VolvoLV80:{
                            payLoad: 5,
                            cost: 0.43,
                            speed: 19
                        }
                    },
                bus:{
                    AECtypeQ:{
                        passengers: 30,
                        cost: 0.9,
                        speed: 22
                    },
                    AMO4:{
                        passengers: 22,
                        cost: 0.8,
                        speed: 20
                    },
                    LeylandTitan:{
                        passengers: 51,
                        cost: 1,
                        speed: 20
                    }
                }  
        },
        maritime:{
            passangerShips:{
                    steamer:{
                        passengers: 700,
                        cost: 30,
                        speed: 12
                    },
                    internalCombustion:{
                        passengers: 1000,
                        cost: 50,
                        speed: 15
                    }
                },
            loadShips:{
                    steamer:{
                        payLoad: 150,
                        cost: 30,
                        speed: 25
                    },
                    internalCombustion:{
                        payLoad: 170,
                        cost: 50,
                        speed: 30
                    }
                }
            },
        trains:{
                passengerTrains:{
                    Mat34:{
                        passengers: 150,
                        cost: 30,
                        speed: 50
                    },
                    LNERClassA4:{
                        passengers: 140,
                        cost: 29,
                        speed: 48
                    },
                    DRGClassSVT137:{
                        passengers: 130,
                        cost: 28,
                        speed: 46
                    }

                }, 
                loadTrains:{
                    DRGClassSVT877:{
                        payLoad: 300,
                        cost: 50,
                        speed: 30
                    },
                    DRGClass05:{
                        payLoad: 250,
                        cost: 45,
                        speed: 25
                    },
                    Pm2:{
                        payLoad: 220,
                        cost: 44,
                        speed: 15
                    }
                }
            }
    }
}

export let additionalTransportCost = {
    trucks: 0.3,
    bus: 0.3,
    passengerTrains: 10,
    loadTrains: 10,
    passangerShips: 150,
    loadShips: 150
}