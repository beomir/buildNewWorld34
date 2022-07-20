export const meansOfTransportList = {
    1935:{
        vechicles:{
                truck:{
                        renaultTTD6:{
                            payLoad: 15,
                            cost: 2.5,
                            speed: 21
                        },
                        renaultABG:{
                            payLoad: 10,
                            cost: 1.6,
                            speed: 23
                        },
                        renaultYGDD:{
                            payLoad: 6,
                            cost: 1,
                            speed: 21
                        },
                        VolvoLV80:{
                            payLoad: 5,
                            cost: 0.8,
                            speed: 19
                        }
                    },
                bus:{
                    AECtypeQ:{
                        passengers: 30,
                        cost: 2.5,
                        speed: 22
                    },
                    AMO4:{
                        passengers: 22,
                        cost: 1.8,
                        speed: 20
                    },
                    LeylandTitan:{
                        passengers: 51,
                        cost: 4.3,
                        speed: 20
                    }
                }  
        },
        maritime:{
            passangerShips:{
                    steamer:{
                        passengers: 700,
                        cost: 70,
                        speed: 12
                    },
                    internalCombustion:{
                        passengers: 1000,
                        cost: 90,
                        speed: 15
                    }
                },
            loadShips:{
                    steamer:{
                        payLoad: 450,
                        cost: 70,
                        speed: 25
                    },
                    internalCombustion:{
                        payLoad: 500,
                        cost: 90,
                        speed: 30
                    }
                }
            },
        trains:{
                passengerTrains:{
                    Mat34:{
                        passengers: 150,
                        cost: 40,
                        speed: 50
                    },
                    LNERClassA4:{
                        passengers: 140,
                        cost: 39,
                        speed: 48
                    },
                    DRGClassSVT137:{
                        passengers: 130,
                        cost: 38,
                        speed: 46
                    }
                }, 
                loadTrains:{
                    DRGClassSVT877:{
                        payLoad: 200,
                        cost: 40,
                        speed: 30
                    },
                    DRGClass05:{
                        payLoad: 150,
                        cost: 35,
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
        rent:{
            trucks: 20,
            bus: 20,
            passengerTrains: 300,
            loadTrains: 300,
            passangerShips: 100,
            loadShips: 1000
        },
        duty:{
            trucks: 20,
            bus: 20,
            passengerTrains: 50,
            loadTrains: 50,
            passangerShips: 350,
            loadShips: 350
        },
        operatingCosts:{
            trucks: 50,
            bus: 50,
            passengerTrains: 100,
            loadTrains: 100,
            passangerShips: 500,
            loadShips: 500
        },
        transportToEndPoint:{
            trucks: 10,
            bus: 10,
            passengerTrains: 30,
            loadTrains: 30,
            passangerShips: 100,
            loadShips: 100
        }
    
}