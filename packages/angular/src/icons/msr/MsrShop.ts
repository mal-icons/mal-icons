import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-shop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrShop {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m430-275 182-119q14-8.79 14-24.89T612-444L431-564q-15-10-31-1.63-16 8.37-16 26.63v239q0 18.26 15.5 26.63Q415-265 430-275ZM140-120q-24 0-42-18t-18-42v-510q0-12.75 8.63-21.37T110-720h210v-100q0-24 18-42t42-18h200q24 0 42 18t18 42v100h210q12.75 0 21.38 8.63T880-690v510q0 24-18 42t-42 18H140Zm0-60h680v-480H140v480Zm240-540h200v-100H380v100ZM140-180v-480 480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrShop;
