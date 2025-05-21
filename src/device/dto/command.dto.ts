export class CommandDto {
    command: string;
    value?: any;
}
export class CommandPushDto{
    deviceId: number;
    command: string;
    value: string
}