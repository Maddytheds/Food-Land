import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import './foodDetail.css';

export default function ItemDetailPage() {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios(`http://localhost:8000/food/${id}`);
        console.log(response);
        setItem(response.data);
      } catch (error) {
        console.error(
          'Error fetching item:',
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchItem();
  }, [id]);

  const sendEmail = () => {
    const templateParams = {
      from_name: item.name,
      from_desc: item.description,
      from_ids: item.id,
    };

    emailjs
      .send(
        'service_427qaji',
        'template_pyeknq9',
        templateParams,
        'JMmb3izo1Q_u5qjgf'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.error('FAILED...', error);
        }
      );
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-slate-500">
      <div className="overflow-hidden max-w-[300px] rounded-lg bg-white shadow-2xl border border-transparent">
        <div className="w-full h-[150px] bg-[rgb(239,205,255)]">
          <img
            src={item.img}
            alt="img ha"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-[1.1rem]">
          <span className="text-[#111827] text-[1.125rem] leading-[1.75rem] font-semibold">
            {item.name}
          </span>
          <p className="mt-2 text-[#6B7280] text-xs leading-[1.25rem]">
            {item.description}
          </p>
          <a
            className="inline-flex mt-4 text-white text-sm leading-[1.25rem] font-medium items-center gap-[0.25rem] bg-[#FFCC17] px-2 py-1 rounded cursor-pointer"
            onClick={sendEmail}
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}
