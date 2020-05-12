import React from "react";
import ChatBot from 'react-simple-chatbot';

export default function Chatting() {
    const handleEnd = values => {
        window.location.assign('/donateForm');
    };
    return(
        <ChatBot
            handleEnd={handleEnd}
            floating={true}
            steps={[
                {
                    id: '1',
                    message:
                        'Hello! I am here to provide you very usable tips and tricks about your travelling plans! :)',
                    trigger: 'ask'
                },
                {
                    id: 'ask',
                    message: 'What is your name?',
                    trigger: 'name'
                },
                {
                    id: 'name',
                    user: true,
                    trigger: '3'
                },
                {
                    id: '3',
                    message: '{previousValue} which one of the following destinations is the most interesting to you?',
                    trigger: 'gender'
                },
                {
                    id: 'gender',
                    options: [
                        { value: 'Spain', label: 'Ibiza', trigger: '5' },
                        { value: 'Italy', label: 'Amalfi Coast', trigger: '5' },
                        { value: 'Neatherlands', label: 'Amsterdam', trigger: '5' },
                        { value: 'Portugal', label: 'Lisbon', trigger: '5' },
                        { value: 'Germany', label: 'Berlin', trigger: '5' }
                    ]
                },
                {
                    id: '5',
                    message: 'How old are you?',
                    trigger: 'age'
                },
                {
                    id: 'age',
                    user: true,
                    trigger: '7',
                    validator: value => {
                        if (isNaN(value)) {
                            return 'You should enter a number';
                        } else if (value < 0) {
                            return 'Years can only be a positive number :D';
                        } else if (value > 120) {
                            return `${value}? Really???`;
                        }

                        return true;
                    }
                },
                {
                    id: '7',
                    message: 'Great! ;)',
                    trigger: 'update'
                },

                {
                    id: 'update',
                    message: 'Also we are open to any destination recommendations from your side:)) Fill in the form so we can send you some reviews on your e-mail.',
                    trigger: 'update-question'
                },
                {
                    id: 'update-question',
                    options: [
                        { value: 'yes', label: 'Yes', trigger: 'yes-clicked' },
                        { value: 'no', label: 'No', trigger: 'end-message' }
                    ]
                },
                {
                    id: 'end-message',
                    message: 'Okay, thank you!',
                    end: false
                },
                {
                    id: 'yes-clicked',
                    message: 'Great! ',
                    end: true
                }
            ]}
        />
    );
}