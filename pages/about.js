import React from "react";
import {useFetcher} from "react-router-dom";
import {useQuery} from "react-query";

export default function About() {
    const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

    const { isLoading, error, data } = useQuery(
        'repoData',
        () =>
            fetch(
                'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
            ).then((response) => response.json()).then(console.log)
    );

    return (
        <table>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
            <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
            </tr>
            <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
            </tr>
            <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
            </tr>
            <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
            </tr>
        </table>

    );
}
