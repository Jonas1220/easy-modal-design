
import './App.css';
import { useState } from "react";
import Slider from '@mui/material/Slider';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {createTheme,ThemeProvider} from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import {Stripe} from 'stripe';
// const stripe = Stripe('sk_test_51NPT4wIDg5lCMJRBAXalOyqsipxOSggg9jtim3xHpJSD8J9kGDyroZ3YJPE12TWTh9jeyLTXoVrud3vAGw5VJbcK00VO0Qaaqm');

function App() {
    const [btnText, setBtnText] = useState('copy');
    // SECTION: Basics
    const [modalWidth, setModalWidth] = useState(50);
    const [colorBackground, setColorBackground] = useState("#ffffff");
    const [borderRadius, setBorderRadius] = useState(0);
    const [borderThickness, setBorderThickness] = useState(1);
    const [colorBorder, setColorBorder] = useState("#888888");
    const [padding, setPadding] = useState(20);
    // SECTION: Head
    const [colorHead, setColorHead] = useState("#000000");
    const [marginBottom, setMarginBottom] = useState(10);
    // SECTION: Body
    const [colorBody, setColorBody] = useState("#000000");
    const [fontSize, setFontSize] = useState(16);
    const [alignment, setAlignment] = useState('start');

    const theme=createTheme({
        palette:{
            neutral:{
                main:'#fff',
                contrastText:'#fff',
                text:'#fff'
            },
            test:{
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            }
        },
    });

    const arr = [
        '👍 Done. Go for it.',
        '🙌 Very well, sir',
        '👌 Excellent Choice! It\'ll look amazing!',
        '👊 You got it! Go make something awesome!',
        '🤙 Nice one! You have good taste.',
        '🚀 Wow so easy!'
    ];

    // SECTION: Handle value updates
    function handleChangeWidth(event,val){
        setModalWidth(val);
    }
    function handleChangeBorderThickness(event,val){
        setBorderThickness(val);
    }
    function handleChangeBorderRadius(event,val){
        setBorderRadius(val);
    }
    function handleChangePadding(event,val){
        setPadding(val);
    }
    function handleChangeMarginBottom(event,val){
        setMarginBottom(val);
    }
    function handleChangeColorBackground(event,val){
        setColorBackground(event.target.value);
    }
    function handleChangeColorBorder(event,val){
        setColorBorder(event.target.value);
    }
    function handleChangeColorHead(event,val){
        setColorHead(event.target.value);
    }
    function handleChangeColorBody(event,val){
        setColorBody(event.target.value);
    }
    function handleChangeFontSize(event,val){
        setFontSize(event.target.value);
    }
    function handleChangeAlignment(event,val){
        // setAlignment(val);
        if (val !== null) {
            setAlignment(val);
        }
        // console.log(val);
    }
    // SECTION: Handle value updates


    function copyCode() {
        let code = `
<style>
    .modal_container {
        display:none;
        position:fixed;
        z-index:1000;
        left:0;
        top:0;
        width:100%;
        height:100%;
        overflow:auto;
        background-color:rgba(0,0,0,0.4);
        font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        box-sizing:border-box;
    }
    .modal_content {
        background-color:${colorBackground} !important;
        margin:10% auto;
        padding:${padding} !important;
        border:${borderThickness}px solid ${colorBorder} !important;
        border-radius:${borderRadius}px !important;
        width:50%;
    }
    .modal_head {
        display:flex;
        /* flex-direction:row !important; */
        justify-content:space-between;
        color:${colorHead} !important;
        margin-bottom:${marginBottom}px !important;
    }
    .modal_title {
        margin-top:0;
        margin-bottom:0.5rem;
        font-weight:500;
        line-height:1.2;
        font-size:2rem;
    }
    .modal_body {
        color:${colorBody} !important;
        font-size:${fontSize} !important;
        text-align:${alignment} !important;
    }
    .margin_text_content {
        margin-top:0;
        margin-bottom:1rem;
        line-height:1.5;
    }
    .close {
        color:#aaa;
        float:right;
        font-size:28px;
        font-weight:bold;
        cursor:pointer;
    }
    .close:hover, .close:focus {
        color:black;
        text-decoration:none;
        cursor:pointer;
    }
</style>`;
        code+=`
<button id="openModalBtn">Open Modal</button>
<div id="modal_container" class="modal_container">
    <div id="modal_content" class="modal_content">
        <div id="modal_head" class="modal_head">
            <h2 class="modal_title">Modal Title</h2>
            <span id="closeModalBtn" class="close">&times;</span>
        </div>
        <div id="modal_body" class="modal_body">
            <p class="margin_text_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Praesent semper feugiat nibh sed pulvinar. Sit amet consectetur adipiscing elit. Cursus vitae congue mauris rhoncus aenean vel. Lorem sed risus ultricies tristique nulla aliquet. Semper quis lectus nulla at volutpat diam. Lobortis scelerisque fermentum dui faucibus. Volutpat blandit aliquam etiam erat velit. Sed faucibus turpis in eu mi bibendum. Mollis aliquam ut porttitor leo. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent.</p>
        </div>
    </div>
</div>`;
        code+=`
<script>
    document.addEventListener("DOMContentLoaded",()=>{
        document.getElementById("openModalBtn").addEventListener("click",function() {
            document.getElementById("modal_container").style.display="block";
        });
        document.getElementById("closeModalBtn").addEventListener("click",function() {
            document.getElementById("modal_container").style.display="none";
        });
        document.getElementById("modal_container").addEventListener("click",function(event) {
            if (event.target===this) {
                document.getElementById("modal_container").style.display="none";
            }
        });
    });
</script>`;

    navigator.clipboard.writeText(code);
    setBtnText('copied ✅');
    setTimeout(() => {
        setBtnText('copy');
    }, 2000);

    let rand=Math.floor(Math.random() * 5);
    toast(arr[rand], {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    }
    function resetForm() {
        console.log('reset form');
        // // SECTION: Basics
        setModalWidth(50)
        setColorBackground("#ffffff")
        setBorderRadius(0)
        setBorderThickness(1)
        setColorBorder("#888888")
        setPadding(20)
        // // SECTION: Head
        setColorHead("#000000")
        setMarginBottom(10)
        // // SECTION: Body
        setColorBody("#000000")
        setFontSize(16)
        setAlignment('start')

        setTimeout(() => {
            setBtnText('copy');
        }, 2000);
    }

    // SECTION: update styles
    const styleBasics = {
        backgroundColor:colorBackground,
        width:modalWidth+'%',
        borderRadius:borderRadius,
        borderWidth:borderThickness,
        borderColor:colorBorder,
        padding:padding
    };
    const styleHead = {
        color:colorHead,
        marginBottom:marginBottom
    };
    const styleBody = {
        color:colorBody,
        fontSize:fontSize+'px',
        textAlign: alignment
    };
    // SECTION: update styles

    return (
        <div className='App font_change'>
            <ToastContainer position="bottom-right"/>
            <div className="d-flex flex-column flex-xxl-row">
                <div className='col-12 col-xxl-10 modal_background'>
                    <h1 className="display-1 text-center">Easy Modal Design</h1>
                        <div style={styleBasics} id="modal_content" className="modal_content">
                            <div style={styleHead} id="modal_head" className="modal_head">
                                <h2>Modal Design Made Easy</h2>
                                <span id="closeModalBtn" className="close">&times;</span>
                            </div>
                            <div style={styleBody} id="modal_body" className="modal_body">
                                <p>Express Your Unique Style: Create Stunning Modals Online! Unleash your design potential with our Online Modal Designer. From elegant minimalism to vibrant creations, our platform empowers you to showcase your unique style effortlessly.<br /><br />
                                Say goodbye to tedious coding and hello to effortless modal window creation. Easy Modal Design empowers you to create modals in minutes. With a user-friendly interface, you'll have complete control over your designs.<br/><br/>
                                1. Limitless Customization: Possibilities are endless.<br />
                                2. Seamless Integration: Copy and paste, and you're ready to go.<br />
                                3. Responsive Brilliance: Ensure your designs shine on all devices.<br /><br />
                                Start creating now!</p>
                            </div>
                        </div>
                </div>
                <div className="d-flex col-12 justify-content-center align-self-center col-xxl-2 full_height p-2">
                    <form className="col-12 col-xl-10 col-xxl-12 rounded rounded-xxl-0 rounded-bottom cssForm">
                        <div className="d-flex flex-column flex-md-row flex-xxl-column h-scroll">
                            {/* SECTION: GENERAL */}
                            <div className="col-12 col-md-4 col-xxl-12 p-3">
                                <div className="d-flex flex-row align-items-center">
                                    <h2 className="col">Basics</h2>
                                </div>
                                <div id="collapse_basics" className="">
                                    <div className="mb-2">
                                        <label className="form-label" htmlFor="modalWidth">Width</label>
                                        <Slider aria-label="Width" value={modalWidth} valueLabelDisplay="auto" step={1} min={25} max={100} onChange={handleChangeWidth}/>
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label" htmlFor="backgroundColorInput">Background</label>
                                        <input type="color" className="form-control form-control-color" value={colorBackground} onChange={handleChangeColorBackground}/>
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label" htmlFor="borderRadiusInput">Round corners</label>
                                        <Slider aria-label="Width" value={borderRadius} valueLabelDisplay="auto" step={1} min={0} max={100} onChange={handleChangeBorderRadius}/>
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label" htmlFor="borderPixelInput">Border thickness</label>
                                        <Slider aria-label="Width" value={borderThickness} valueLabelDisplay="auto" step={1} min={0} max={30} onChange={handleChangeBorderThickness}/>
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label" htmlFor="colorBorder">Border color</label>
                                        <input type="color" className="form-control form-control-color" value={colorBorder} onChange={handleChangeColorBorder}/>
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label" htmlFor="paddingInput">Padding</label>
                                        <Slider aria-label="Width" value={padding} valueLabelDisplay="auto" step={1} min={0} max={200} onChange={handleChangePadding}/>
                                    </div>
                                </div>
                            </div>
                            {/* SECTION: HEADER */}
                            <div className="col-12 col-md-4 col-xxl-12 p-3">
                                <div className="d-flex flex-row align-items-center">
                                    <h2 className="col">Header</h2>
                                </div>
                                <div id="collapse_header" className="">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="colorHead">Text color</label>
                                        <input type="color" className="form-control form-control-color" value={colorHead} onChange={handleChangeColorHead}/>
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label" htmlFor="marginBottomHead">margin bottom</label>
                                        <Slider aria-label="Width" value={marginBottom} valueLabelDisplay="auto" step={1} min={0} max={100} onChange={handleChangeMarginBottom}/>
                                    </div>
                                </div>
                            </div>
                            {/* SECTION: BODY */}
                            <div className="col-12 col-md-4 col-xxl-12 p-3 mbs-1">
                                <div className="d-flex flex-row align-items-center">
                                    <h2 className="col">Body</h2>
                                </div>
                                <div id="collapse_body" className="">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="colorBody">Text color</label>
                                        <input type="color" className="form-control form-control-color" value={colorBody} onChange={handleChangeColorBody}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="fontSizeBody">Font size</label>
                                        <input type="number" className="form-control" id="fontSizeBody" name="fontSizeBody" min={1} max={100} value={fontSize} onChange={handleChangeFontSize}/>
                                    </div>
                                    <div>
                                        <label className="form-label" htmlFor="fontAlign">Text align</label><br/>
                                        <ThemeProvider theme={theme}>
                                            <ToggleButtonGroup className="text_align_input col-12" value={alignment} exclusive color="neutral" onChange={handleChangeAlignment} aria-label="text alignment">
                                                <ToggleButton className="col-3" value="start" aria-label="left aligned"><FormatAlignLeftIcon /></ToggleButton>
                                                <ToggleButton className="col-3" value="center" aria-label="centered"><FormatAlignCenterIcon /></ToggleButton>
                                                <ToggleButton className="col-3" value="end" aria-label="right aligned"><FormatAlignRightIcon /></ToggleButton>
                                                <ToggleButton className="col-3" value="justify" aria-label="justified"><FormatAlignJustifyIcon /></ToggleButton>
                                            </ToggleButtonGroup>
                                        </ThemeProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between text-center m-3">
                            <button id="copy_btn" type="button" onClick={copyCode} className="btn btn-success">{btnText}</button>
                            <input type="reset" value="Reset" onClick={resetForm} className="btn btn-danger" />
                        </div>
                        <div className="d-flex justify-content-center text-center mb-3 ">
                            <a href="https://donate.stripe.com/dR66q0b9D3A4g8MfZ0" rel="noreferrer" target='_blank' className="btn btn-primary w-xxl-100">Support me 🙌</a>
                        </div>

                    </form>
                </div>
            </div>
            <footer className="footer mt-auto">
                <div className="d-flex flex-column align-items-center flex-wrap rounded-top footer_background p-1">
                    <p className='col-10 col-md-6 col-lg-5 col-xl-4 col-xxl-3 text-center footer_text'>Disclaimer: All functions are subject to copyright and may not be redistributed without the written consent of <a className="footer_link" href="https://twitter.com/jonaskaatz" rel="noreferrer" target='_blank'>@jonaskaatz</a></p>
                </div>
            </footer>
            <a className="p-2 twitter_tag footer_text" href="https://twitter.com/jonaskaatz" rel="noreferrer" target='_blank'>@jonaskaatz</a>
        </div>
    );
}

export default App;
