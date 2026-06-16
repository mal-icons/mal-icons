import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-flip-camera-ios",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFlipCameraIos {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m657-539-99 99 36 35 40-40q-7 72-50 117t-104 45q-17 0-29.5-2.5T427-293l-37 36q21 13 42.5 18.5T480-233q85 0 141.5-59T683-443l38 38 36-35-100-99ZM305-334l99-99-36-35-40 40q7-72 50-117t104-45q17 0 29.5 2.5T535-580l37-36q-21-13-42.5-18.5T482-640q-85 0-141.5 59T279-430l-38-38-36 35 100 99ZM80-120v-633h207l73-87h240l73 87h207v633H80Zm60-60h680v-513H140v513Zm340-257Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFlipCameraIos;
