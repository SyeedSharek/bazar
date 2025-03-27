<?php

namespace App\Http\Controllers;

use App\Http\Requests\Slider\StoreSliderRequest;
use App\Models\Slider;
use App\Traits\UploadImageTrait;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SliderController extends Controller
{
    use UploadImageTrait;
    /**
     * Display a listing of the resource.
     */
    public function all_slider()
    {
        $data = Slider::latest()->get();
        return Response::success($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSliderRequest $request)
    {
        $image = $this->uploadImage($request,'image','sliders');
        $data = Slider::create(array_merge($request->validated(),['image'=>$image]));
        return Response::created($data);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
