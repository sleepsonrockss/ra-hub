function DeadlineItem({ deadline }) {

    return (<li>You have {deadline.title} due at {deadline.dueDate}</li>)
}
export default DeadlineItem