import React from 'react';
import socketIOClient from 'socket.io-client';

import CalendarChart from './CalendarChart';

class ScheduleManager extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            response: false,
            endPoint: 'http://144.212.3.4:4001'
        }
    }

    componentDidMount(){
        const { endPoint } = this.state;
       // const socket = socketIOClient(endPoint);
        //socket.on("FromAPI", data => this.setState({response: data }));
    }

    render(){
        const { response } = this.state;
        response ? console.log(response) : console.log("NO data")
        const data = [
            {
                "name": "Mahesh S",
                "address": "mahesh2684@outlook.com",
                "personal": {
                    "hours": 20,
                    "events": [
                        {
                            "subject": "doc appointment",
                            "duration": 3
                        },
                        {
                            "subject": "gym",
                            "duration": 1
                        }
                    ]
                },
                "work": {
                    "hours": 10,
                    "events": [
                        {
                            "subject": "1-1",
                            "duration": 2
                        },
                        {
                            "subject": "scrum",
                            "duration": 1
                        },
                        {
                            "subject": "code review",
                            "duration": 2
                        },
                        {
                            "subject": "design review",
                            "duration": 2
                        },
                        {
                            "subject": "book club",
                            "duration": 2
                        }
                    ]
                },
                "others": {
                    "hours": 10,
                    "events": [
                        {
                            "subject": "baasassdsd",
                            "duration": 3
                        },
                        {
                            "subject": "gsdsdym",
                            "duration": 1
                        }
                    ]
                }
            },
            {
                "name": "Vivek S",
                "address": "vivek123@outlook.com",
                "personal": {
                    "hours": 10,
                    "events": [
                        {
                            "subject": "soccer appointment",
                            "duration": 3
                        },
                        {
                            "subject": "dentsit",
                            "duration": 3
                        }
                    ]
                },
                "work": {
                    "hours": 20,
                    "events": [
                        {
                            "subject": "1-1",
                            "duration": 2
                        },
                        {
                            "subject": "scrum",
                            "duration": 1
                        },
                        {
                            "subject": "code review",
                            "duration": 2
                        },
                        {
                            "subject": "design review",
                            "duration": 2
                        },
                        {
                            "subject": "book club",
                            "duration": 2
                        }
                    ]
                },
                "others": {
                    "hours": 5,
                    "events": [
                        {
                            "subject": "gsdsdym",
                            "duration": 1
                        }
                    ]
                }
            },
            {
                "name": "Ning Ji",
                "address": "ninji123@outlook.com",
                "personal": {
                    "hours": 4,
                    "events": [
                        {
                            "subject": "doc appointment",
                            "duration": 4
                        }
                    ]
                },
                "work": {
                    "hours": 30,
                    "events": [
                        {
                            "subject": "UX",
                            "duration": 12
                        },
                        {
                            "subject": "scrum",
                            "duration": 4
                        },
                        {
                            "subject": "code review",
                            "duration": 3
                        },
                        {
                            "subject": "book club",
                            "duration": 2
                        }
                    ]
                },
                "others": {
                    "hours": 11,
                    "events": [
                        {
                            "subject": "baasassdsd",
                            "duration": 3
                        },
                        {
                            "subject": "gsdsdym",
                            "duration": 1
                        }
                    ]
                }
            },
            {
                "name": "Sundar V",
                "address": "sundar123@outlook.com",
                "personal": {
                    "hours": 10,
                    "events": [
                        {
                            "subject": "doc appointment",
                            "duration": 3
                        },
                        {
                            "subject": "gym",
                            "duration": 1
                        }
                    ]
                },
                "work": {
                    "hours": 18,
                    "events": [
                        {
                            "subject": "1-1",
                            "duration": 2
                        },
                        {
                            "subject": "code review",
                            "duration": 2
                        },
                        {
                            "subject": "design review",
                            "duration": 2
                        },
                        {
                            "subject": "book club",
                            "duration": 2
                        }
                    ]
                },
                "others": {
                    "hours": 10,
                    "events": [
                        {
                            "subject": "baasassdsd",
                            "duration": 3
                        },
                        {
                            "subject": "gsdsdym",
                            "duration": 1
                        }
                    ]
                }
            },
            {
                "name": "Aditya J",
                "address": "aditya123@outlook.com",
                "personal": {
                    "hours": 20,
                    "events": [
                        {
                            "subject": "doc appointment",
                            "duration": 3
                        },
                        {
                            "subject": "gym",
                            "duration": 1
                        }
                    ]
                },
                "work": {
                    "hours": 10,
                    "events": [
                        {
                            "subject": "1-1",
                            "duration": 2
                        },
                        {
                            "subject": "scrum",
                            "duration": 1
                        },
                        {
                            "subject": "code review",
                            "duration": 2
                        },
                        {
                            "subject": "design review",
                            "duration": 2
                        },
                        {
                            "subject": "book club",
                            "duration": 2
                        }
                    ]
                },
                "others": {
                    "hours": 10,
                    "events": [
                        {
                            "subject": "baasassdsd",
                            "duration": 3
                        },
                        {
                            "subject": "gsdsdym",
                            "duration": 1
                        }
                    ]
                }
            }
        ];
        return <CalendarChart data={data} value={this.props.value}/>
    }
}

export default ScheduleManager;