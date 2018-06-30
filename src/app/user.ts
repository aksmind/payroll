export interface User{
    error: boolean,
    message: string,
    token: string,
    payload?: {
        id?: string,
        designation?: string,
        name?: string,
        email?: string,
        isAdmin?: boolean
    }
}

export interface Userdetails {
    error: boolean,
    user: {
        _id:    string,
        email:  string,
        designation: string,
        casualLeave: number,
        privilledgeLeaves: number,
        baseSalary: number,
        address: string,
        password: string,
        __v:    number,
        userSince: string,
        isActive: boolean,
        isAdmin: boolean,
        name: {
            first: string,
            last: string,
            full: string
        },
        id:string
    }
}

export interface CreateUser{
    name?: {
        first?: string,
        last?: string
    },
    email?: string,
    designation?: string,
    casualLeave?: number,
    privilledgeLeaves?: number,
    baseSalary?: number,
    address?: string 
}



export interface Allmyleave {
    error?:string,
    leaves?:[
        {
        endDate?: string,
        id?: string,
        isApproved?: boolean,
        isRejected?: boolean,
        leaveType?: string,
        noOfDays?: number,
        reason?: string,
        requestDate?:string,
        startDate?:string,
        __v?:number,
        _id?:string,
        _userId?: {
            address?:string,
            baseSalary?:number,
            casualLeave?:number,
            designation?:string,
            email?: string,
            id?: string,
            isActive?: boolean,
            isAdmin?: boolean,
            name?:{
                first?: string,
                full?: string,
                last?: string,
            }
        }
        password?:string,
        privilledgeLeaves?:number,
        userSince?:string
        _v?:number
    }]
}

export interface AllPayslip{
    error?: boolean,
    payslips?: [{
        _id?: string,
        month?: string,
        _userId?: {
            _id?: string,
            email?: string,
            designation?:string,
            casualLeave?:number,
            privilledgeLeaves?: number,
            baseSalary?: number,
            address?: string,
            password?:string,
            _v?:string,
            userSince?:string,
            isActive?:string,
            isAdmin?:string,
            name?:{
                first?:string,
                last?:string,
                full?:string
            },
            id?:string
        },
        transactionId?: string,
        da?: number,
        hra?:number,
        pf?:number,
        totalAmount?:number,
        _v?:number,
        isPaid?:boolean,
        bonus?:number,
        deduction?:number,
        medical?:number,
        id?: string
    }]
}

export interface alluserdata {
    
    error?:boolean
    users?: [{
        address?:string,
        baseSalary?:number,
        casualLeave?:number,
        designation?:string,
        email?:string,
        id?:string,
        isActive?:string,
        isAdmin?:string,
        name?: {
            first?:string,
            last?:string,
            full?:string
        }
        privilledgeLeaves?:string,
        userSince?:string,
        __v?:string,
        _id?:string
    }]
}