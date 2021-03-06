import {firebaseApp} from './firebaseConfig'
import {isEmpty} from 'lodash'
import moment from 'moment'

/**
 * Makes an entry to firebase authentication for an anonymous user logged In..
 * Returns a promise..
 */
export const loginAnonymously = () => {
    return new Promise((resolve, reject) => {
        firebaseApp.auth().signInAnonymously()
        .then(data => {
            resolve(data)
        })
        .catch(error => {
            reject(error)
        });
    })
}

/**
 * Observer that gets callback for when user logs in or logs out..
 */
export const registerFirebaseAuthChanged = () => {
    return new Promise((resolve, reject) => {
        firebaseApp.auth().onAuthStateChanged(user => {
            if(user){
                resolve('loggedIn')
            }else{
                reject('loggedOut')
            }
        })
    })
}

/**
 * Retrives users from the firebase database and checks for user trying to get logged in into..
 * Returns a promise..
 * @param {String} email 
 * @param {String} password 
 */
export const checkForLogin = (email, password) => {
    const db = firebaseApp.database()
    return new Promise((resolve, reject) => {
        db.ref('Users').once('value', data => {
            if(data){
                const dataJSON = data.toJSON()
                for(key in dataJSON){
                    const user = dataJSON[key]
                    if(user.email && user.email == email){
                        if(user.password){
                            const dbPassword = user.password
                            if(dbPassword == password){
                                resolve({
                                    status: 'Success',
                                    message: 'Login Success'
                                })
                            }else{
                                reject({
                                    status: 'Failure',
                                    message: 'Wrong Password'
                                })
                            }
                        }else{
                            reject({
                                status: 'Failure',
                                message: 'Wrong Password'
                            })
                        }
                    }
                }
                reject({
                    status: 'Failure',
                    message: 'Wrong Email'
                })
            }
        })
    })
} 

/**
 * Fetch tables from the firebase database..
 * Filters the tables according to the from date timestamp and to date timestamp..
 * Returns the the array of tables with booking status true if booked and false otherwise..
 * @param {String} from 
 * @param {String} to 
 */
export const getTables = (from, to) => {
    const db = firebaseApp.database()
    return new Promise((resolve, reject) => {
        db.ref('Bookings').once('value', bookings => {
            const bookingJSON = bookings.toJSON()
            db.ref('Tables').once('value', tables => {
                const tableJSON = tables.toJSON()
                if(tableJSON && !isEmpty(tableJSON)){
                    if(bookings && !isEmpty(bookings)){
                        const tablesWithStatus = getTablesWithStatus(tableJSON, bookingJSON, from, to)
                        resolve(tablesWithStatus)
                    }else{
                        const tablesWithStatus = getTablesWithStatus(tableJSON, {}, from, to)
                        resolve(tablesWithStatus)
                    }
                }else{
                    resolve([])
                }
            })
        })
    })
}

export const getBookings = () => {
    const db = firebaseApp.database()
    return new Promise((resolve, reject) => {
        db.ref('Bookings').once('value', bookings => {
            const bookingsJSON = bookings.toJSON()
            if(bookingsJSON && !isEmpty(bookingsJSON)){
                resolve(Object.values(bookingsJSON))
            }else{
                resolve([])
            }
        })
    })
}

/**
 * Compares the tables and bookings so that tables with their booking status can be returned..
 * Filters the tables for making it easy to determine the booking status of tables..
 * @param {Object} tables 
 * @param {Object} bookings 
 * @param {String} from 
 * @param {String} to 
 */
const getTablesWithStatus = (tables, bookings, from, to) => {
    let tablesWithStatus = []
    let bookingStatus = {}
    for(let key in bookings){
        if(bookings.hasOwnProperty(key)){
            const booking = bookings[key]
            bookingStatus[booking.tableId] = booking
        }
    }
    for(let key in tables){
        if(tables.hasOwnProperty(key)){
            const table = tables[key]
            if(bookingStatus[table.id]){
                if(bookingStatus[table.id].startTime && bookingStatus[table.id].endTime){
                    let overlap = dateRangeOverlaps(from, to, bookingStatus[table.id].startTime, bookingStatus[table.id].endTime)
                    if(overlap > 0){
                        tablesWithStatus.push({...table, status: true})
                    }else{
                        tablesWithStatus.push({...table, status: false})
                    }
                }
            }else{
                tablesWithStatus.push({...table, status: false})
            }
        }
    }
    return tablesWithStatus
}

/**
 * Compares 2 sets of timestamps to check whether they overlap..
 * @param {String} a_start 
 * @param {String} a_end 
 * @param {String} b_start 
 * @param {String} b_end 
 */
const dateRangeOverlaps = (a_start, a_end, b_start, b_end) => {
    if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
    if (a_start <= b_end   && b_end   <= a_end) return true; // b ends in a
    if (b_start <  a_start && a_end   <  b_end) return true; // a in b
    return false;
}