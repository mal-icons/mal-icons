import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-thumb-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoThumbDown {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M242-840h444v512L408-40l-39-31q-6-5-9-14t-3-22v-10l45-211H103q-24 0-42-18t-18-42v-81.84Q43-477 41.5-484.5T43-499l126-290q8.88-21.25 29.6-36.12Q219.31-840 242-840Zm384 60H229L103-481v93h373l-53 249 203-214v-427Zm0 427v-427 427Zm60 25v-60h133v-392H686v-60h193v512H686Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoThumbDown;
