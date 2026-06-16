import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-masked-transitions",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssMaskedTransitions {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M360-80q-115 0-197.5-82.5T80-360q0-115 82.5-197.5T360-640q115 0 197.5 82.5T640-360q0 115-82.5 197.5T360-80Zm-0.21-60Q451-140 515.5-204.29q64.5-64.29 64.5-155.5T515.71-515.5q-64.29-64.5-155.5-64.5T204.5-515.71q-64.5 64.29-64.5 155.5T204.29-204.5q64.29 64.5 155.5 64.5ZM668-328q1-7 1.5-15.5t0.5-16.16Q670-487 578.5-578.5T359.66-670q-7.66 0-15.660.5t-15 1.5q22-90 98-151t172.55-61Q715-880 797.5-797.5 880-715 880-599.54 880-503 819.5-427.5 759-352 668-328Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssMaskedTransitions;
