export interface SubscriptionAndPropertyDetailsDTO{
    
    //SubscriptionPerUser

        subscriptionPerUserId:number;
        subscriptionTypeId:number;
        areaId:number;
        userId:number;
        startDate:number;
        endDate:number;
       
        //SubscriberPropertyDetail    
        subscriberPropertyDetailId:number;
        propertyTypeId:number;
        cityId:number;
        neighborhoodId:number;
        statusId:number;
        roomNumber:number;
        floor:number;
        maximumPrice:number;
        entryDate:Date;
        squareMeter:number;
        severalDirectionsOfAir:number;
        elevators:boolean;
        renovated:boolean;
        accessForDisabled:boolean;
        furnished:boolean;
        parking:boolean;
        storage:boolean;
        airConditioning:boolean;
        yard:boolean;
        porch:boolean;
        distance:number;
}