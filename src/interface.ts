export interface SnipeItData {
    id: number
    icon: string
    file: boolean | null
    item: {
        id: number
        name: string
        type: string
    }
    location: boolean | null
    created_at: {
        datetime: string
        formatted: string
    }
    updated_at: {
        datetime: string
        formatted: string
    }
    action_type: string
    admin: {
        id: number
        name: string
        first_name: string
        lastname: string
    }
    target: {
        id: number
        name: string
        type: string
    }


}
