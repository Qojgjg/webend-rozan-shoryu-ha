import Image from 'next/image'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { languageSet, scrollHeightSet, userLanguage, userScrollHeight, userSearchMatch } from '../../../features/usersetup/usersetupSlice';
import { langOpts, metaChannal, metaMenu } from '../../../assets/option/navOption';
import { navLangData } from '../../../assets/data/languageData';
import { AiOutlineSearch } from 'react-icons/ai'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SearchResult from '../../search/SearchResult'
import { useState } from 'react';

const style = {
  wrapper: `bg-black relative w-screen border-b border-b-orange-500`,
  container: `pr-9 pl-4 sm:pl-6 sm:pr-11`,
  subContainer: `flex py-2 justify-between items-center justify-start space-x-10`,
  langSelector: `pl-2 flex justify-start items-center`,
  searchArea: `hidden md:flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchBar: `hidden md:flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-8 w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headUserArea: `text-gray-200 flex items-center justify-end`,
}


function TechMeta() {
  const dispatch = useAppDispatch();
  const lang = useAppSelector(userLanguage);
  let langFlag = lang.replace("-", "")

  const isMatched = useAppSelector(userSearchMatch);

  const handleChangeLang = (e) => {
    dispatch(languageSet(e.target?.value))
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.subContainer}>
          <div className={style.langSelector}>
            <FormControl>
              <Select
                sx={{ maxWidth: 80, height: 30, fontSize: 16, fontWeight: 500, color: "white", bgcolor: 'primary.main' }}
                value={lang}
                onChange={handleChangeLang}
                autoWidth
                renderValue={(value) => `${value}`}
              >
                {langOpts.map((item) => (
                  <MenuItem key={item.id} value={item.code}>{item.langName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className={style.searchBar}>
            <div className={style.searchIcon}>
              <AiOutlineSearch />
            </div>
            <input
              className={style.searchInput}
              placeholder="Search items, collections, and accounts"
            />
          </div>
          {isMatched && (
            <div className={"absolute z-10 top-[3rem] left-[6rem] rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden transform w-screen max-w-[18rem]"}>
              <SearchResult />
            </div>
          )}

          <div className={style.headUserArea}>
            {metaMenu.map((item) => (
              <div key={item.id} className="hidden md:flex mr-[1rem]">
                <Link href={item.path} target="_blank">
                  <a target="_blank">
                    {navLangData[item.name][langFlag]}
                  </a>
                </Link>
              </div>
            ))}

            {metaChannal.map((item) => (
              <Link key={item.id} href={item.link} target="_blank">
                <a target="_blank">
                  <div className='pl-[0.15rem] ml-2 flex w-9 h-9 rounded-full justify-between items-center border border-white'>
                    <Image src={item.icon} height={30} width={30} />
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechMeta