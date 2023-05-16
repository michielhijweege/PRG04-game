import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import wallImage from '../images/wall.png'
import gotoImage from '../images/goto.png'

const Resources = {
    Fish: new ImageSource(fishImage),
    Wall: new ImageSource(wallImage),
    Go: new ImageSource(gotoImage)
}
const ResourceLoader = new Loader([Resources.Fish, Resources.Wall, Resources.Go])

export { Resources, ResourceLoader }