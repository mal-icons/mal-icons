import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-backpack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBackpack {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-80q-24.75 0-42.37-17.62T160-140v-510q0-55 34-95.5t86-50.5v-84h100v80h200v-80h100v84q52 10 86 50.5t34 95.5v510q0 24.75-17.62 42.38T740-80H220Zm0-60h520v-510q0-38-26-64t-64-26H310q-37.12 0-63.56 26Q220-688 220-650v510Zm400-190h60v-140H280v60h340v80ZM220-140h520-520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBackpack;
