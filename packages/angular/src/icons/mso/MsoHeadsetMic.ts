import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-headset-mic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoHeadsetMic {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M482-40v-60h298v-54H632v-296h148v-68q0-124-87-213.5T482-821q-124 0-213 89.5T180-518v68h148v296H180q-24 0-42-18t-18-42v-304q0-74.73 28.5-140.88Q177-725.03 226-774.51T341.2-852.5q66.21-28.5 141-28.5Q557-881 622.5-852.5 688-824 736.05-774.51q48.05 49.49 76 115.63Q840-592.73 840-518v418q0 24-18 42t-42 18H482ZM180-214h88v-176h-88v176Zm512 0h88v-176h-88v176Zm88 0h-88 88Zm-512 0h-88 88Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoHeadsetMic;
