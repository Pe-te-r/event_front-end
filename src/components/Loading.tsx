import { DNA } from 'react-loader-spinner'

export default function LoadingComponent() {
  return (
    <div className="flex justify-center items-center h-64">
      <DNA
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  )
}
