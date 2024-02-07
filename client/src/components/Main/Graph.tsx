import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { useAppSelector } from '../../redux/hooks'
import moment from 'moment'
import { Spinner } from 'flowbite-react'

const Graph = ({currentRepo, loading}:any) => {

    const queriesCreated = useAppSelector((state:any) => state.queries.queries)
    const [series, setSeries] = useState<any>({})
    const [options, setOptions] = useState<any>({
        options: {
            chart: {
                height: 350,
                type: 'bar',
            },
            colors: '#08d09d',
            plotOptions: {
                bar: {
                columnWidth: '45%',
                distributed: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: [
                ['John', 'Doe'],
                ['Joe', 'Smith'],
                ['Jake', 'Williams'],
                'Amber',
                ['Peter', 'Brown'],
                ['Mary', 'Evans'],
                ['David', 'Wilson'],
                ['Lily', 'Roberts'], 
                ],
                labels: {
                style: {
                    colors: '#08d09d',
                    fontSize: '12px'
                }
                }
            }
        },
    })


    const prepareData = () => {
        const dates = queriesCreated.filter((q:any) => q.repo === currentRepo.repo)[0]?.commits.map((c:any) => moment(c.date).format('MM-DD-YY'))
        let commitsByDate = {}

        dates && dates.forEach((d:any) => {
            if (commitsByDate[d]) {
                commitsByDate[d] += 1
            } else {
                commitsByDate[d] = 1
            }
          })

        setSeries({
            series: [{
                data: Object.values(commitsByDate)
            }],
        })
        setOptions({
            ...options,
            options: {
                colors: '#9e57ff',
                yaxis: {
                    labels: {
                        style: {
                            colors: '#FFFFFF',
                            fontSize: '12px'
                        }
                    }
                },
                xaxis: {
                    categories: Object.keys(commitsByDate),
                    labels: {
                        style: {
                            colors: '#FFFFFF',
                            fontSize: '12px'
                        }
                    }
                }
            }
        })
    }

    useEffect(() => {
        if(queriesCreated.filter((q:any) => q.repo === currentRepo.repo)[0]?.commits){
            prepareData()
        }
    }, [queriesCreated])
    


  return (
    <div id="chart" className='w-full h-[70%] flex flex-col items-center justify-center'>
        <h3 className='text-[#9e57ff] sm:text-sm 2xl:text-lg font-semibold'>Daily commits</h3>
        <div className='2xl:w-[80%] sm:w-[450px] h-full'>
            {
                loading ?
                <div className='w-full h-full flex items-center justify-center'>
                    <Spinner
                        aria-label="Extra small spinner example"
                        size="xl"
                        color="purple"
                    />
                </div>
                :
                <ReactApexChart options={options.options} series={series.series} type="bar" height={window?.innerWidth < 1300 ? 300 : 400} />
            }
        </div>
    </div>
  )
}

export default Graph
