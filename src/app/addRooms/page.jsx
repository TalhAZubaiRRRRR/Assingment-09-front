'use client';

import {
    Button,
    Input,
    TextArea,
    Select,
    SelectTrigger,
    SelectValue,
    SelectIndicator,
    SelectPopover,
    ListBox,
    ListBoxItem,
} from '@heroui/react';

import { CiBoxList } from 'react-icons/ci';
import { FaDollarSign, FaImage, FaRegClock } from 'react-icons/fa';
import { LuBookPlus } from 'react-icons/lu';

const CATEGORIES = ['Silent', 'Group', 'Presentation'];

const AddRoomsPage = () => {
    return (
        <div className=" px-4 py-16 bg-[#1E2937]">
            <div className="max-w-4xl  mx-auto bg-[#0F766E] p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-2xl space-y-10">
                <div className="space-y-2 text-center">
                    <div className="mx-auto w-16 h-16 bg-[#13b8aa] border  rounded-2xl flex items-center justify-center  mb-4">
                        <LuBookPlus className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-black text-white">
                        Create New{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#dcdee1] to-[#13b8aa]">
                            Room
                        </span>
                    </h1>
                    <p className="text-slate-300 font-medium">Add a study or meeting space</p>
                </div>

                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Room Name */}
                        <div className="md:col-span-2 space-y-2">
                            <label htmlFor="title" className="text-sm font-bold text-slate-200 ml-1">
                                Room Name
                            </label>
                            <Input
                                id="title"
                                required
                                placeholder="e.g. Silent Haven A-101"
                                className="w-full h-14 border-2 border-slate-200 hover:border-[#1E2937] "
                            />
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2 space-y-2">
                            <label htmlFor="description" className="text-sm font-bold text-slate-200 ml-1">
                                Description
                            </label>
                            <TextArea
                                id="description"
                                required
                                placeholder="Describe the room purpose and features"
                                className="w-full h-32 border-2 border-slate-200 hover:border-[#1E2937]"
                            />
                        </div>

                        {/* Thumbnail */}
                        <div className="space-y-2">
                            <label htmlFor="thumbnail" className="text-sm font-bold text-slate-200 ml-1">
                                Thumbnail URL
                            </label>
                            <Input
                                id="thumbnail"
                                required
                                type="url"
                                placeholder="https://i.ibb.co.com/..."
                                startContent={<FaImage className="w-5 h-5 text-slate-200" />}
                                className="w-full h-14 border-2 border-slate-200 hover:border-[#1E2937] "
                            />
                        </div>

                        {/* Category */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-100 ml-1">Category</label>
                            <Select id="category" required placeholder="Select a category" className="w-full">
                                <SelectTrigger className="h-14 border-2 border-slate-200 hover:border-[#1E2937] data-[focus-within=true]:border-[#13b8aa] rounded-2xl bg-white transition-all duration-300 flex items-center px-4 shadow-none outline-none group">
                                    <div className="flex items-center gap-3 w-full">
                                        <CiBoxList className="w-5 h-5 text-slate-400 group-data-[focus-within=true]:text-[#13b8aa] transition-colors" />
                                        <SelectValue className="font-medium text-slate-600" />
                                    </div>
                                    <SelectIndicator className="ml-auto">
                                        <div className="text-slate-400 group-data-[focus-within=true]:text-[#13b8aa] transition-colors">
                                            <CiBoxList className="w-4 h-4" />
                                        </div>
                                    </SelectIndicator>
                                </SelectTrigger>
                                <SelectPopover className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-2 mt-2">
                                    <ListBox>
                                        {CATEGORIES.map((cat) => (
                                            <ListBoxItem
                                                key={cat}
                                                id={cat}
                                                className="px-4 py-2 text-slate-600 hover:bg-green-50 hover:text-[#13b8aa] rounded-xl cursor-pointer transition-colors font-medium"
                                            >
                                                {cat}
                                            </ListBoxItem>
                                        ))}
                                    </ListBox>
                                </SelectPopover>
                            </Select>
                        </div>

                        {/* Capacity */}
                        <div className="space-y-2">
                            <label htmlFor="capacity" className="text-sm font-bold text-slate-100 ml-1">
                                Capacity
                            </label>
                            <Input
                                id="capacity"
                                required
                                type="number"
                                placeholder="e.g. 4"
                                className="w-full h-14 border-2 border-slate-200 hover:border-green-600/50 focus-within:border-green-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
                            />
                        </div>

                        {/* Price */}
                        <div className="space-y-2">
                            <label htmlFor="price" className="text-sm font-bold text-slate-100 ml-1">
                                Price per Hour ($)
                            </label>
                            <Input
                                id="price"
                                required
                                type="number"
                                placeholder="0.00"
                                startContent={<FaDollarSign className="w-5 h-5 text-slate-400" />}
                                className="w-full h-14 border-2 border-slate-200 hover:border-green-600/50 focus-within:border-green-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
                            />
                        </div>

                        {/* Duration */}
                        <div className="space-y-2">
                            <label htmlFor="duration" className="text-sm font-bold text-slate-100 ml-1">
                                Duration
                            </label>
                            <Input
                                id="duration"
                                required
                                type="text"
                                placeholder="e.g. 2h 30m"
                                startContent={<FaRegClock className="w-5 h-5 text-slate-400" />}
                                className="w-full h-14 border-2 border-slate-200 hover:border-green-600/50 focus-within:border-green-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="pt-4 flex gap-4">
                        <Button variant="flat" size="lg" className="flex-1 font-bold rounded-2xl h-14 text-red-300 hover:bg-red-500">
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                            type="submit"
                            size="lg"
                            className="flex-2 font-black rounded-2xl h-14 bg-[#13b8aa]"
                        >
                            Publish Room
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRoomsPage;
