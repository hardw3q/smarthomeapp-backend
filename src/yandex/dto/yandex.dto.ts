export class YandexRequestDTO {
    request: {
        type: 'IntentRequest' | 'SimpleUtterance';
        command?: string;
        payload?: any;
    };

    session: {
        session_id: string;
        user_id: string;
    };

    version: string;
}