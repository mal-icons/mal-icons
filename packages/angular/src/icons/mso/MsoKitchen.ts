import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-kitchen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoKitchen {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M309-650v-118h60v118h-60Zm0 361v-196h60v196h-60ZM220-80q-24.75 0-42.37-17.62T160-140v-680q0-24.75 17.63-42.37T220-880h520q24.75 0 42.38 17.63T800-820v680q0 24.75-17.62 42.38T740-80H220Zm0-60h520v-398H220v398Zm0-458h520v-222H220v222Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoKitchen;
