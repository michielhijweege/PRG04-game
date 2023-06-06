import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import playerImage from '../images/player.png'
import wallImage from '../images/wall.png'
import gotoImage from '../images/goto.png'
import emptyImage from '../images/empty.png'
import backgroundImage from '../images/background.png'
import borderImage1 from '../images/walldark1.png'
import borderImage2 from '../images/walldark2.png'
import borderImage3 from '../images/walldark3.png'
import borderImage4 from '../images/walldark4.png'
import borderImage5 from '../images/walldark5.png'
import borderImage6 from '../images/walldark6.png'
import borderImage7 from '../images/walldark7.png'
import borderImage8 from '../images/walldark8.png'
import oreImage1 from '../images/ore1.png'
import oreImage2 from '../images/ore2.png'
import oreImage3 from '../images/ore3.png'
import attackswordImage from '../images/attacksword.png'
import attackspearImage from '../images/attackspear.png'
import exitopenImage from '../images/exitopen.png'
import exitcloseImage from '../images/exitclose.png'
import startbuttonImage from '../images/startbutton.png'
import beginbackgrounImage from '../images/backgroundmenu.png'
import endbackgrounImage from '../images/deadbackground.png'
import menuImage from '../images/menu.png'
import retryImage from '../images/Retry.png'

const Resources = {
    Player: new ImageSource(playerImage),
    Wall: new ImageSource(wallImage),
    Go: new ImageSource(gotoImage),
    Empty: new ImageSource(emptyImage),
    Background: new ImageSource(backgroundImage),
    Border1: new ImageSource(borderImage1),
    Border2: new ImageSource(borderImage2),
    Border3: new ImageSource(borderImage3),
    Border4: new ImageSource(borderImage4),
    Border5: new ImageSource(borderImage5),
    Border6: new ImageSource(borderImage6),
    Border7: new ImageSource(borderImage7),
    Border8: new ImageSource(borderImage8),
    Ore1: new ImageSource(oreImage1),
    Ore2: new ImageSource(oreImage2),
    Ore3: new ImageSource(oreImage3),
    AttackSword: new ImageSource(attackswordImage),
    AttackSpear: new ImageSource(attackspearImage),
    Exitopen: new ImageSource(exitopenImage),
    Exitclose: new ImageSource(exitcloseImage),
    Startbutton: new ImageSource(startbuttonImage),
    Beginackground: new ImageSource(beginbackgrounImage),
    Endbackground: new ImageSource(endbackgrounImage),
    Menu: new ImageSource(menuImage),
    Retry: new ImageSource(retryImage)
}
const ResourceLoader = new Loader([
    Resources.Player,
    Resources.Wall,
    Resources.Go,
    Resources.Empty,
    Resources.Background,
    Resources.Border1,
    Resources.Border2,
    Resources.Border3,
    Resources.Border4,
    Resources.Border5,
    Resources.Border6,
    Resources.Border7,
    Resources.Border8,
    Resources.Ore1,
    Resources.Ore2,
    Resources.Ore3,
    Resources.AttackSword,
    Resources.AttackSpear,
    Resources.Exitopen,
    Resources.Exitclose,
    Resources.Startbutton,
    Resources.Beginackground,
    Resources.Endbackground,
    Resources.Menu,
    Resources.Retry
])

export { Resources, ResourceLoader }