import {firebaseApp} from './firebaseConfig'
import {isEmpty} from 'lodash'

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

export const getTables = () => {
    const db = firebaseApp.database()
    return new Promise((resolve, reject) => {
        db.ref('Bookings').once('value', bookings => {
            const bookingJSON = bookings.toJSON()
            db.ref('Tables').once('value', tables => {
                const tableJSON = tables.toJSON()
                if(tableJSON && !isEmpty(tableJSON)){
                    if(bookings && !isEmpty(bookings)){
                        const tablesWithStatus = getTablesWithStatus(tableJSON, bookingJSON)
                        resolve(tablesWithStatus)
                    }else{
                        const tablesWithStatus = getTablesWithStatus(tableJSON, {})
                        resolve(tablesWithStatus)
                    }
                }else{
                    resolve([])
                }
            })
        })
    })
}

const getTablesWithStatus = (tables, bookings) => {
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
            tablesWithStatus.push({...table, status: !!bookingStatus[table.id]})
        }
    }
    return tablesWithStatus
}