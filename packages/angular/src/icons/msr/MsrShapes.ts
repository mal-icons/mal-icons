import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-shapes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrShapes {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M600-360Zm-280 98q10 2 19.5 2H360q5.5 0 10.25-0.25T380-261v121h440v-440H699q0.5-5 0.75-9.75T700-600v-20.5q0-9.5-2-19.5h122q24.75 0 42.38 17.63T880-580v440q0 24.75-17.62 42.38T820-80H380q-24.75 0-42.37-17.62T320-140v-122Zm40-58q-117 0-198.5-81.5T80-600q0-117 81.5-198.5T360-880q117 0 198.5 81.5T640-600q0 117-81.5 198.5T360-320Zm-0.21-60Q451-380 515.5-444.29q64.5-64.29 64.5-155.5T515.71-755.5q-64.29-64.5-155.5-64.5T204.5-755.71q-64.5 64.29-64.5 155.5T204.29-444.5q64.29 64.5 155.5 64.5ZM360-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrShapes;
