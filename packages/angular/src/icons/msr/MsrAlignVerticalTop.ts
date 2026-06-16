import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-align-vertical-top",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAlignVerticalTop {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M110-820q-12.75 0-21.37-8.68Q80-837.35 80-850.17 80-863 88.63-871.5T110-880h740q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-820H110ZM339.88-80Q319-80 304.5-94.58 290-109.17 290-130v-540q0-20.83 14.62-35.42Q319.24-720 340.12-720 361-720 375.5-705.42 390-690.83 390-670v540q0 20.83-14.62 35.42Q360.77-80 339.88-80Zm280-240Q599-320 584.5-334.58 570-349.17 570-370v-300q0-20.83 14.62-35.42Q599.24-720 620.12-720 641-720 655.5-705.42 670-690.83 670-670v300q0 20.83-14.62 35.42Q640.77-320 619.88-320Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAlignVerticalTop;
