import React from "react";
import {useQuery} from "react-query";

export default function Home() {
    const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

    const {isLoading, error, data} = useQuery(
        'repoData',
        () =>
            fetch(
                url
            ).then((response) => response.json())
    );

    if (isLoading) return <p>Загрузка...</p>;

    if (error) return <p>Ошибка: {error.message}</p>;

    return (
        <table style={
            {
                width: '100%'
            }
        }>
            <thead>
            <tr>
                <th style={ { textAlign: 'left' } }>Name</th>
                <th style={ { textAlign: 'left' } }>Rate</th>
                <th style={ { textAlign: 'left' } }>Exchange Date</th>
            </tr>
            </thead>
            <tbody>
            {
                data?.map(item => (
                    <tr key={item.r030}>
                        <td>{item.txt}</td>
                        <td>{item.rate}</td>
                        <td>{item.exchangedate}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>

    );
}
