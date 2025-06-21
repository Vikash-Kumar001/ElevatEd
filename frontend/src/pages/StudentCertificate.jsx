import React, { useEffect, useState } from 'react';

const StudentCertificate = () => {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        setCertificates([
            {
                id: 1,
                course: 'JavaScript for Beginners',
                date: '2025-06-15',
                downloadUrl: '/certificates/js-beginners.pdf'
            },
            {
                id: 2,
                course: 'React Mastery',
                date: '2025-06-19',
                downloadUrl: '/certificates/react-mastery.pdf'
            }
        ]);
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">My Certificates</h1>
            <ul className="space-y-4">
                {certificates.map(cert => (
                    <li key={cert.id} className="bg-white rounded shadow p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div>
                            <h2 className="text-lg font-semibold">{cert.course}</h2>
                            <p className="text-sm text-gray-600">Completed on {cert.date}</p>
                        </div>
                        <a href={cert.downloadUrl} target="_blank" rel="noopener noreferrer" className="mt-4 sm:mt-0 text-indigo-600 font-medium hover:underline">
                            Download Certificate
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentCertificate;
