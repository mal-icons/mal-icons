import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-align-space-between",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAlignSpaceBetween {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M110-80q-12.75 0-21.37-8.68Q80-97.35 80-110.17 80-123 88.63-131.5T110-140h180v-70q0-12.75 8.63-21.37T320-240h320q12.75 0 21.38 8.63T670-210v70h180q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5Q880-97 871.38-88.5T850-80H110Zm210-640q-12.75 0-21.37-8.62T290-750v-70H110q-12.75 0-21.37-8.68Q80-837.35 80-850.17 80-863 88.63-871.5T110-880h740q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-820H670v70q0 12.75-8.62 21.38T640-720H320Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAlignSpaceBetween;
