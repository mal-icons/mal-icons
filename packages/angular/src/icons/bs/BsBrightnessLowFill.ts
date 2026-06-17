import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-brightness-low-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBrightnessLowFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8.5 2.5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0m0 11a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0m5-5a0.50.5 0 1 1 0-1 0.50.5 0 0 1 0 1m-11 0a0.50.5 0 1 1 0-1 0.50.5 0 0 1 0 1m9.74-4.04a0.50.5 0 1 1-0.71-0.710.50.5 0 0 1 0.710.71m-7.78 7.78a0.50.5 0 1 1-0.71-0.710.50.5 0 0 1 0.710.71m7.07 0a0.50.5 0 1 1 0.71-0.710.50.5 0 0 1-0.710.71M3.76 4.46a0.50.5 0 1 1 0.71-0.710.50.5 0 0 1-0.710.71"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBrightnessLowFill;
