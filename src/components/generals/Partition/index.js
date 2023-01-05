import { styled } from "../../sititchesConfig";


const PartitionContainer = styled('div', {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '$Grey900',
    width: 2,
    height: 40
})

function Partition({left, right, height}) {
    return (
        <PartitionContainer css={{ marginLeft: left, marginRight: right, height: height }} />
    );
}

export default Partition;