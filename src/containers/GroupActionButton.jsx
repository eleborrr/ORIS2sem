import CustomButton from "../components/CustomButton"

const GroupActionButton = () => {
    return (
        <>
            <CustomButton value="test1" onClick={() => alert("ASDASD")}/>
            <CustomButton value="test1" onClick={() => alert("ASDASD")}/>
            <CustomButton value="test1" onClick={() => alert("ASDASD")}/>
            <CustomButton value="test1" onClick={() => alert("ASDASD")}/>
        </>
    )
}

export default GroupActionButton