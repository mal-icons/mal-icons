import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-charging",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCharging {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M322 25l-10 30h103l-10-30h-83zM66.5 32v55h-23v18h128V87h-23V32h-18v55h-46V32h-18zm210 41v302h174V73h-174zm-208 48v51.3L95.23 199h24.57l26.7-26.7V121h-78zm222 62h146v50h-146v-50zm-192 34v167c0 31.4 18.6 55.7 44.5 70.8 25.8 15.1 59.2 22.2 92.5 22.2s66.7-7.1 92.5-22.2c23.4-13.6 40.8-34.7 44-61.8h-18.1c-2.9 20-15.6 34.9-34.9 46.2-22.2 12.9-52.8 19.8-83.5 19.8-30.7 0-61.3-6.9-83.5-19.8-22.1-12.9-35.5-30.6-35.5-55.2V217h-18zm192 30h146v50h-146v-50zm0 64h146v50h-146v-50z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCharging;
