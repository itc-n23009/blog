import {client} from 'lib/api'

const Schdule = () =>{
  return <h1>記事のタイトル</h1>
}
export default Schedule

export async function getStaticProps()  {
  const resPromise = client.get({
    endpoint: 'blogs',
  })
  
  try {
    const res = await resPromise
    console.log(res)
  } catch (err) {
    console.log(err)
  }

  return {
    props: {},
  }
}
