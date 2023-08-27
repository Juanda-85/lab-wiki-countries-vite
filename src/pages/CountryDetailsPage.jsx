import { useParams, Link } from "react-router-dom"
import "./CountryDetailsPage.css"

function CountryDetails(props) {

    

    const {countryId} = useParams()

    const foundCountry = props.countries.find((country)=>{
        return country.alpha3code === countryId
    })

    return (
        <div classname="container">
            <p>Country Details</p>

            <h1>{foundCountry.name.common}</h1>

            <table className="table">
                <thead></thead>
                <tbody>
                <tr>
                    <td>Capital</td>
                    <td>{foundCountry.capital}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>
                    {foundCountry.area}
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {foundCountry.borders.map((border)=>{
                               return <li><Link to={`/${border}`}>{border}</Link></li>
                            })}
                       
                        </ul>
                    </td>
                    </tr>
                </tbody>


            </table>


        </div>
    )

}


export default CountryDetails;
