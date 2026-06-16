import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-video-camera-front",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssVideoCameraFront {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M232-318h336v-21q0-63-59-81t-109-18q-50 0-109 18t-59 81v21Zm168-175q35 0 57.5-22.5T480-573q0-35-22.5-57.5T400-653q-35 0-57.5 22.5T320-573q0 35 22.5 57.5T400-493ZM80-160v-640h640v275l160-160v410L720-435v275H80Zm60-60h520v-520H140v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssVideoCameraFront;
