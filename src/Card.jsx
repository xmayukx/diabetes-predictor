import React from 'react';

function Card({ data }) {
    return (
        <div className="card">
            <div className="card lg:w-1/3 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head */}
                            <tbody>
                                {/* row 1 */}
                                <tr className="hover">
                                    <th>1</th>
                                    <td>Prediction Result</td>
                                    <td>{data.data.message}</td>
                                </tr>
                                {/* row 2 */}
                                <tr className="hover">
                                    <th>2</th>
                                    <td>Prediction Probability</td>
                                    <td>{data.data.prediction}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>




    );
}

export default Card;
