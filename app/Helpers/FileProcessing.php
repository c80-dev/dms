<?php
 namespace App\Helpers;
 use Image;

 class FileProcessing
 {

    //file processing
   public function file_processing($request, $file)
   {
      if ($request->hasFile("$file")) {
           $filenameWithExt = $request->file("$file")->getClientOriginalName();
           $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME );
           $extension = $request->file("$file")->getClientOriginalExtension();
           $fileNameToStore = $filename  .'_'.time().'.'.$extension;
           $path = $request->file("$file")->storeAs('public/uploads', $fileNameToStore);
      }
      return $path;
   }

 }
