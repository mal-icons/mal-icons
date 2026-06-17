import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-brightness-alt-low-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBrightnessAltLowFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.5 5.5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0m5 6a0.50.5 0 1 1 0-1 0.50.5 0 0 1 0 1M2 11a0.50.5 0 1 0 1 0 0.50.5 0 0 0-1 0m10.24-3.54a0.50.5 0 1 1-0.71-0.710.50.5 0 0 1 0.710.71m-8.49-0.71a0.50.5 0 1 0 0.710.710.50.5 0 0 0-0.71-0.71M8 7a4 4 0 0 0-4 4 0.50.5 0 0 0 0.50.5h7a0.50.5 0 0 0 0.5-0.5 4 4 0 0 0-4-4"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBrightnessAltLowFill;
