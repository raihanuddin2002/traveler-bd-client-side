import React, { useRef } from 'react';

const AddService = () => {
    return (
        <div className="container">
            <div className="row p-md-5">
                <h2 className="text-white py-4 mt-3 mt-lg-5 display-3 bg-dark text-center">ADD SERVICE</h2>
                <form className="border border-warning p-5">
                    <div class="mb-3">
                        <label for="exampleInputText1" class="form-label">Title</label>
                        <input type="text" class="form-control" id="exampleInputText1" aria-describedby="Text1Help" required/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputDesc" class="form-label">Description</label>
                        <textarea name="" id="" rows="10" className="w-100 border border-muted rounded" required></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputText2" class="form-label">Price</label>
                        <input type="text" class="form-control"  placeholder="$" id="exampleInputText2" aria-describedby="Text2Help" required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Rating</label>
                        <input type="text" class="form-control" placeholder="Out of 5" id="exampleInputPassword1" required/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputText3" class="form-label">People count</label>
                        <input type="text" class="form-control" id="exampleInputText3" aria-describedby="Text3Help" required/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputFile" class="form-label">Image</label>
                        <input type="file" class="form-control" id="exampleInputFile" aria-describedby="FileHelp" required/>
                    </div>

                    <button type="submit" class="btn btn-warning">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;