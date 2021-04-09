import { connect } from 'react-redux'
import CustomerList from './../components/customer/List'
import { onFetchCustomerData } from './../actions/customerAction'

const mapStateToProps = state => {
    return {
        id: 1,
        fname: 'Deep Shrestha'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchDataFromContainer: () => {
            dispatch(
                onGetDataHandler()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList)