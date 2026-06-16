import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-align-horizontal-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAlignHorizontalRight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M849.83-80Q837-80 828.5-88.62T820-110v-740q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T880-850v740q0 12.75-8.68 21.38Q862.65-80 849.83-80ZM130-570q-20.83 0-35.42-14.62Q80-599.23 80-620.12 80-641 94.58-655.5 109.17-670 130-670h540q20.83 0 35.42 14.62Q720-640.76 720-619.88 720-599 705.42-584.5 690.83-570 670-570H130Zm240 280q-20.83 0-35.42-14.62Q320-319.23 320-340.12 320-361 334.58-375.5 349.17-390 370-390h300q20.83 0 35.42 14.62Q720-360.76 720-339.88 720-319 705.42-304.5 690.83-290 670-290H370Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAlignHorizontalRight;
