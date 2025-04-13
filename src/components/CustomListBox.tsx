import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
// import { useState } from 'react'
import clsx from 'clsx'
import { ItemProps } from '../types'

interface ListBoxPros<T extends ItemProps> {
    items: T[];
    selected: T;
    onChange: (item: T) => void;
}

const CustomListBox = <T extends ItemProps> ({ items, selected, onChange }: ListBoxPros<T>) => {
    return (
        <div className="w-40 bg-white rounded-md">
            <Listbox value={selected} onChange={onChange}>
                <ListboxButton
                    className={clsx(
                        'relative block w-full rounded-lg bg-gray py-1.5 pr-8 pl-3 text-left text-sm/6',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray'
                    )}
                >
                    {selected.name}
                    <ChevronDownIcon
                        className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black"
                        aria-hidden="true"
                    />
                </ListboxButton>
                <ListboxOptions
                    anchor="bottom"
                    transition
                    className={clsx(
                        'w-[var(--button-width)] rounded-xl border border-white bg-white p-1 mt-2 cursor-pointer [--anchor-gap:var(--spacing-1)] focus:outline-none',
                        'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                    )}
                >
                    {items.map((item) => (
                        <ListboxOption
                            key={item.name}
                            value={item}
                            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-gray hover:bg-blue-700 hover:text-white"
                        >
                            <CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
                            <div className="text-sm/6">{item.name}</div>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </div>
    )
}

export default CustomListBox;