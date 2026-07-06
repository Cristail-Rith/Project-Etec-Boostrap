function navbars(){
    return `<nav class="navbar navbar-expand-lg bg-black p-1 ">
        <div class="header container-fluid ">
            <div class="logo1">
                <img src=".//image/image10.png" alt="">
            </div>
            <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-5  mb-2 mb-lg-0 ">
                    <li class="li1">
                        <a class="a1" aria-current="page" href="#">PRODUCT</a>
                    </li>
                    <li class="li1">
                        <a class="a1" href="#">INNOVATION</a>
                    </li>
                    <li class="li1">
                        <a class="a1" aria-disabled="true">DOWNLOADS</a>
                    </li>
                    <li class="li1">
                        <a class="a1" aria-disabled="true">COMMUNITY</a>
                    </li>
                    <li class="li1">
                        <a class="a1" aria-disabled="true">WHAT'S SHOT</a>
                    </li>
                    <li class="li1">
                        <a class="a1" aria-disabled="true">SUPPORT</a>
                    </li>

                </ul>
                <div class="logo2 d-flex align-items-center">
                    <img style="border: 1px solid white; border-bottom: none; border-top: none; border-left: none; width: 140px; height: 30px;"
                         src="./image/image9.png" alt="">
                    <span class="icob"><ion-icon name="search-outline" data-bs-toggle="modal"
                            data-bs-target="#exampleModal"></ion-icon></span>
                    <div class="icon-login">
                        <a href="./second-web-page/login-form.html"><ion-icon
                                name="person-circle-outline"></ion-icon></a>
                    </div>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Research Product</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <input type="search" class="form-control" placeholder="Search">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Button trigger modal -->


                    <!-- Modal -->

                </div>
            </div>
        </div>
    </nav>`
}

const nav = document.getElementById("navbars")
nav.innerHTML = navbars()