import './App.css';
import { useState, useEffect } from "react";
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
/*
'sm': '640px',
'md': '768px',
'lg': '1024px',
*/

function App() {
    const [btnText,setBtnText]=useState('copy');
    // SECTION: Basics
    const [chooseBreakpoint,setChooseBreakpoint]=useState(1024);
    const [modalWidthSmall,setModalWidthSmall]=useState(90);
    const [modalWidthMedium,setModalWidthMedium]=useState(70);
    const [modalWidthLarge,setModalWidthLarge]=useState(50);
    const [colorBackground,setColorBackground]=useState("#ffffff");
    const [borderRadius,setBorderRadius]=useState(0);
    const [borderThickness,setBorderThickness]=useState(1);
    const [colorBorder,setColorBorder]=useState("#888888");
    const [padding,setPadding]=useState(20);
    // SECTION: Head
    const [colorHead,setColorHead]=useState("#000000");
    const [marginBottom,setMarginBottom]=useState(10);
    // SECTION: Body
    const [colorBody,setColorBody]=useState("#000000");
    const [fontSize,setFontSize]=useState(16);
    const [alignment,setAlignment]=useState('start');

    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [addStyle, setAddStyle] = useState();


    useEffect(() => {
        const updateDimension = () => {setScreenSize(window.innerWidth)}
        window.addEventListener('resize', updateDimension);
        if (screenSize>=1024){
            setAddStyle({width:modalWidthLarge+'%'});
        }
        else if (screenSize>=768){
            setAddStyle({width:modalWidthMedium+'%'});
        }
        else {
            setAddStyle({width:modalWidthSmall+'%'});
        }
        return(() => {window.removeEventListener('resize', updateDimension);})
    }, [screenSize,modalWidthLarge,modalWidthMedium,modalWidthSmall])






    const theme=createTheme({
        palette:{
            neutral:{
                main:'#fff',
                contrastText:'#fff',
                text:'#fff'
            },
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
    function handleChangeBreakpoint(event,val) { if (val !== null) setChooseBreakpoint(val); }
    function handleChangeWidthLarge(event,val) { setModalWidthLarge(val); }
    function handleChangeWidthMedium(event,val) { setModalWidthMedium(val); }
    function handleChangeWidthSmall(event,val) { setModalWidthSmall(val); }
    function handleChangeBorderThickness(event,val) { setBorderThickness(val); }
    function handleChangeBorderRadius(event,val) { setBorderRadius(val); }
    function handleChangePadding(event,val) { setPadding(val); }
    function handleChangeMarginBottom(event,val) {setMarginBottom(val); }
    // NOTE: color
    function handleChangeColorBackground(event,val) { setColorBackground(event.target.value); }
    function handleChangeColorBorder(event,val) { setColorBorder(event.target.value); }
    function handleChangeColorHead(event,val) { setColorHead(event.target.value); }
    function handleChangeColorBody(event,val) { setColorBody(event.target.value); }
    function handleChangeFontSize(event,val) { setFontSize(event.target.value); }
    function handleChangeAlignment(event,val) { if (val !== null) setAlignment(val); }
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
        width:${modalWidthLarge}%;
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
    @media only screen and (max-width: 767px) {
        .modal_content {
            width:${modalWidthSmall}%;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        .modal_content {
            width:${modalWidthMedium}%;
        }
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
        // // SECTION: Basics
        setModalWidthLarge(50);
        setModalWidthSmall(90);
        setModalWidthMedium(70);
        setColorBackground("#ffffff");
        setBorderRadius(0);
        setBorderThickness(1);
        setColorBorder("#888888");
        setPadding(20);
        // // SECTION: Head
        setColorHead("#000000");
        setMarginBottom(10);
        // // SECTION: Body
        setColorBody("#000000");
        setFontSize(16);
        setAlignment('start');

        setTimeout(() => {
            setBtnText('copy');
        }, 2000);
    }

    // SECTION: update styles
    const styleBasics = {
        backgroundColor:colorBackground,
        width:modalWidthLarge+'%',
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
    
    
    // SECTION: breakpoints
    let breakpointSettings;
    switch (chooseBreakpoint) {
        case 1024:
            breakpointSettings = 
            <div className="flex flex-col mb-2 gap-2">
                <label className="" htmlFor="modalWidth">Width &#8805; 1024px</label>
                <Slider aria-label="Width" value={modalWidthLarge} valueLabelDisplay="auto" step={1} min={25} max={100} onChange={handleChangeWidthLarge}/>
            </div>;
            break;
        case 768:
            breakpointSettings = <div className="flex flex-col mb-2 gap-2">
                <label className="" htmlFor="modalWidth">Width &#8805; 768px</label>
                <Slider aria-label="Width" value={modalWidthMedium} valueLabelDisplay="auto" step={1} min={25} max={100} onChange={handleChangeWidthMedium}/>
            </div>;
            break;
        case 640:
            breakpointSettings = <div className="flex flex-col mb-2 gap-2">
                <label className="" htmlFor="modalWidth">Width &#8805; 640px</label>
                <Slider aria-label="Width" value={modalWidthSmall} valueLabelDisplay="auto" step={1} min={25} max={100} onChange={handleChangeWidthSmall}/>
            </div>;
            break;
        default:
            breakpointSettings = <p>Choose width</p>;
            break;
    }
    // SECTION: breakpoints

    return (
        <div className="App flex flex-col h-screen">
            <ToastContainer position="bottom-right"/>
            <div className="flex flex-col 2xl:flex-row bsasis-full">
                <div className="flex flex-col w-full 2xl:w-5/6 modal_background">
                    <h1 className="text-6xl mt-4 self-center font_change">Easy Modal Design</h1>
                        <div style={{...styleBasics,...addStyle}} id="modal_content" className="modal_content">
                            <div style={styleHead} id="modal_head" className="modal_head">
                                <h2 className="text-3xl font-medium mb-2">Modal Design Made Easy</h2>
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
                <div className="flex flex-col _items-center w-full xl:w-5/6 2xl:w-1/6 self-center p-2 font_change">
                    <form className="w-full rounded cssForm">
                        <div className="flex flex-col md:flex-row 2xl:flex-col overflow-x-auto">
                            {/* SECTION: GENERAL */}
                            <div className="w-full md:w-1/3 2xl:w-full p-5">
                                <div className="mb-1">
                                    <h2 className="text-2xl">Basics</h2>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col mb-2 gap-2">
                                        <label className="" htmlFor="modalWidth">Breakpoint</label>
                                        <ThemeProvider theme={theme}>
                                        <ToggleButtonGroup className="text_align_input w-full" value={chooseBreakpoint} exclusive color="neutral" onChange={handleChangeBreakpoint} aria-label="breakpoint" size="small">
                                            <ToggleButton className="w-1/3 text-xs" value={1024} aria-label="right aligned">large</ToggleButton>
                                            <ToggleButton className="w-1/3" value={768} aria-label="centered">medium</ToggleButton>
                                            <ToggleButton className="w-1/3" value={640} aria-label="left alsigned">small</ToggleButton>
                                        </ToggleButtonGroup>
                                        </ThemeProvider>
                                    </div>
                                    {breakpointSettings}
                                    {/* <div className="flex flex-col mb-2 gap-2">
                                        <label className="" htmlFor="modalWidth">Width</label>
                                        <Slider aria-label="Width" value={modalWidthLarge} valueLabelDisplay="auto" step={1} min={25} max={100} onChange={handleChangeWidthLarge}/>
                                    </div> */}
                                    <div className="flex flex-col mb-2 gap-2">
                                        <label className="" htmlFor="backgroundColorInput">Background</label>
                                        <input type="color" className="rounded h-8" value={colorBackground} onChange={handleChangeColorBackground}/>
                                    </div>
                                    <div className="flex flex-col mb-2 gap-2">
                                        <label className="form-label" htmlFor="borderRadiusInput">Round corners</label>
                                        <Slider aria-label="Width" value={borderRadius} valueLabelDisplay="auto" step={1} min={0} max={100} onChange={handleChangeBorderRadius}/>
                                    </div>
                                    <div className="flex flex-col mb-2 gap-2">
                                        <label className="form-label" htmlFor="borderPixelInput">Border thickness</label>
                                        <Slider aria-label="Width" value={borderThickness} valueLabelDisplay="auto" step={1} min={0} max={30} onChange={handleChangeBorderThickness}/>
                                    </div>
                                    <div className="flex flex-col mb-2 gap-2">
                                        <label className="form-label" htmlFor="colorBorder">Border color</label>
                                        <input type="color" className="rounded h-8" value={colorBorder} onChange={handleChangeColorBorder} />
                                    </div>
                                    <div className="flex flex-col mb-2 gap-2">
                                        <label className="form-label" htmlFor="paddingInput">Padding</label>
                                        <Slider aria-label="Width" value={padding} valueLabelDisplay="auto" step={1} min={0} max={200} onChange={handleChangePadding} />
                                    </div>
                                </div>
                            </div>
                            {/* SECTION: HEADER */}
                            <div className="w-full md:w-1/3 2xl:w-full p-5">
                                <div className="mb-1">
                                    <h2 className="text-2xl">Header</h2>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col mb-2 gap-2">
                                        <label className="form-label" htmlFor="colorHead">Text color</label>
                                        <input type="color" className="rounded h-8" value={colorHead} onChange={handleChangeColorHead} />
                                    </div>
                                    <div className="flex flex-col mb-2 gap-2">
                                        <label className="form-label" htmlFor="marginBottomHead">margin bottom</label>
                                        <Slider aria-label="Width" value={marginBottom} valueLabelDisplay="auto" step={1} min={0} max={100} onChange={handleChangeMarginBottom} />
                                    </div>
                                </div>
                            </div>
                            {/* SECTION: BODY */}
                            <div className="w-full md:w-1/3 2xl:w-full p-5">
                                <div className="mb-1">
                                    <h2 className="text-2xl">Body</h2>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col mb-2 gap-2">
                                        <label className="form-label" htmlFor="colorBody">Text color</label>
                                        <input type="color" className="rounded h-8" value={colorBody} onChange={handleChangeColorBody} />
                                    </div>
                                    <div className="flex flex-col mb-2 gap-2">
                                        <label className="form-label" htmlFor="fontSizeBody">Font size</label>
                                        <input type="number" className="p-2 rounded text-black" id="fontSizeBody" name="fontSizeBody" min={1} max={100} value={fontSize} onChange={handleChangeFontSize} />
                                    </div>
                                    <div>
                                        <label className="form-label" htmlFor="fontAlign">Text align</label><br />
                                        <ThemeProvider theme={theme}>
                                        <ToggleButtonGroup className="text_align_input w-full" value={alignment} exclusive color="neutral" onChange={handleChangeAlignment} aria-label="text alignment" size="small">
                                            <ToggleButton className="w-full" value="start" aria-label="left aligned"><FormatAlignLeftIcon /></ToggleButton>
                                            <ToggleButton className="w-full" value="center" aria-label="centered"><FormatAlignCenterIcon /></ToggleButton>
                                            <ToggleButton className="w-full" value="end" aria-label="right aligned"><FormatAlignRightIcon /></ToggleButton>
                                            <ToggleButton className="w-full" value="justify" aria-label="justified"><FormatAlignJustifyIcon /></ToggleButton>
                                        </ToggleButtonGroup>
                                        </ThemeProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-center m-3">
                            <button type="button" onClick={copyCode} className="text-green-500 border border-green-500 rounded px-4 py-2 hover:bg-green-500 hover:text-white transition duration-150 ease-linear">{btnText}</button>
                            <button type="button" onClick={resetForm} className="text-red-500 border border-red-500 rounded px-4 py-2 hover:bg-red-500 hover:text-white transition duration-150 ease-linear">Reset</button>
                        </div>
                        <div className="flex justify-center items-center mb-3 ">
                            <a href="https://donate.stripe.com/dR66q0b9D3A4g8MfZ0" rel="noreferrer" target='_blank' className="text-white border border-blue-500 rounded px-4 py-2 bg-blue-500">Support me 🙌</a>
                        </div>
                    </form>
                </div>
            </div>

            <footer className="mt-auto">
                <div className="flex flex-col items-center flex-wrap rounded-t footer_background p-4">
                    <p className='col-10 col-md-6 col-lg-5 col-xl-4 col-xxl-3 text-center footer_text'>Disclaimer: All functions are subject to copyright and may not be redistributed without the written consent of <a className="footer_link" href="https://twitter.com/jonaskaatz" rel="noreferrer" target='_blank'>@jonaskaatz</a></p>
                </div>
            </footer>

            <a className="p-2 twitter_tag footer_text" href="https://twitter.com/jonaskaatz" rel="noreferrer" target='_blank'>@jonaskaatz</a>
        </div>
    );
}

export default App;
