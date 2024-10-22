import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

export default function BestBrands() {

    const [isShowMoreParagrapg, setIsShowMoreParagrapg] = useState(false)

    return (
        <div className='mt-12 font-DanaMedium flex justify-center'>
            <div className='w-full md:w-[750px] lg:w-[950px] xl:w-[1150px]'>
                <div className='border-b pb-10 px-8 md:px-0'>
                    {/* title */}
                    <p className='text-2xl text-center font-DanaDemiBold'> برند های برتر</p>
                    {/* items */}
                    <div className='itemTitle border rounded-[10px] p-4 flex overflow-x-auto justify-around mt-6 gap-3 md:gap-0'>
                        <img src="/src/assets/images/brands/1.png" alt="1" />
                        <img src="/src/assets/images/brands/1.png" alt="1" />
                        <img src="/src/assets/images/brands/1.png" alt="1" />
                        <img src="/src/assets/images/brands/1.png" alt="1" />
                        <img src="/src/assets/images/brands/1.png" alt="1" />
                    </div>
                </div>
                {/* paragrapg */}
                <div className='pt-6 px-3 md:px-0'>
                    <p className='text-xs/[13px] text-[#4D4D4D]'>موبایل 140 فروشگاه آنلاین خرید گوشی موبایل</p>
                    <p className='text-justify text-sm/[30px] mt-2 text-[#4D4D4D] font-Dana'>
                        فروشگاهی با 25 سال سابقه فعالیت در زمینه فروش کالاهای دیجیتال. ما بهترین قیمت را در اکثر محصولات ارائه می‌دهیم و به عنوان یکی از به‌روزترین فروشگاه‌های کشور، با افتخار به مشتریان خود خدمات ارزشمندی ارائه می‌دهیم. در موبایل 140، می‌توانید از تنوع گسترده‌ای از محصولات دیجیتال مانند تلفن همراه‌ها، تبلت‌ها، لوازم جانبی و بسیاری محصولات دیجیتال دیگر بهره‌برداری کنید. با تیم ما از تخصص و تجربه طولانی ما اطمینان حاصل کنید که بهترین کیفیت را با بهترین قیمت به شما ارائه می‌دهیم. ما در موبایل 140 به دنبال رضایت شما هستیم. به همین دلیل، تلاش می‌کنیم تا تجربه خریدی آسان، سریع و امن را برای شما فراهم کنیم.
                    </p>
                    {isShowMoreParagrapg && (
                        <p className='text-justify text-sm/[30px] mt-2 text-[#4D4D4D] font-Dana'>خرید گوشی موبایل
                        در حال حاضر، خرید موبایل به یک نیاز ضروری برای همه‌ی افراد جامعه تبدیل شده؛ به‌طوری که افراد با هر سن و سالی و فارغ از جنسیت از انواع گوشی استفاده می‌کنند. مهمترین عاملی که در خرید گوشی مورد توجه قرار می‌گیرد، قیمت گوشی موبایل است.
                        در لیست قیمت گوشی، قیمت گوشی ها معمولا از حدود 500 هزار تومان شروع می‌شود تا گوشی های پرچم دار که قیمتی بسیار بالاتر دارند.
                        یکی از عواملی که در تعیین قيمت موبايل نقش مهمی دارد برند تولیدکننده گوشی همراه است. به‌طور مثال، می توان گفت کمپانی‌هایی مانند اپل و سامسونگ بهترین گوشی های بازار را تولید می‌کنند. قیمت گوشی های آیفون همیشه نسبت به سایر برندها گرانتر بوده و برای خرید گوشی اپل حداقل باید 50 میلیون تومان هزینه کنید. حتی قیمت گوشی های سامسونگ نسبت به هم‌رده‌های ساخته شده توسط کمپانی‌های دیگر نیز گران‌تر است. قیمت گوشی های شیائومی و قیمت گوشی هواوی و قیمت گوشی آنر در رده‌های بعدی قرار دارند.  قیمت ناتینگ فون هم روندی مشابه قیمت گوشی های اپل را در پیش گرفته است.
                        خرید گوشی اینترنتی
                        خرید آنلاین گوشی راحت‌ترین روش خرید تلفن همراه است. بدون اینکه وقت زیادی را صرف مراجعه به فروشگاه‌های حضوری کنید، می‌توانید سفارش خود را در چند ثانیه ثبت کنید. در واقع، پیداکردن یک سایت خرید گوشی مطمئن برای هر فرد امری ضروری است؛ چرا که امکان دارد بسیاری از افراد فرصت لازم را برای مراجعه حضوری به بازار و خرید و مشاهده قيمت روز گوشي  نداشته باشند. در این حالت، بهترین کار این است که از یک سایت خرید موبایل کمک بگیرند. مشاهده مشخصات گوشی به‌طور دقیق یکی دیگر از دلایل قابل قبول برای خرید گوشی آنلاین است. در این روش، شما می‌توانید اطلاعات کامل و عکس گوشی را با جزئیات، رنگ‌بندی و حتی انباکس گوشی مشاهده کرده و به‌راحتی بهترین گوشی موبایل را برای خود انتخاب کنید.</p>
                    )}
                    {/* btn show more */}
                    <button onClick={() => setIsShowMoreParagrapg(prev => !prev)} className='text-mainBlue text-lg mt-4 flex items-center gap-1'>
                        <span>{isShowMoreParagrapg ? "بستن" : "نمایش بیشتر"}</span>
                        <div className={`text-sm ${isShowMoreParagrapg ? 'rotate-180' : 'rotate-0'}`}>
                            <IoIosArrowDown />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
