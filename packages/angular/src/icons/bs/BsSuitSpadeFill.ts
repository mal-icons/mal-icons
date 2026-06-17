import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-suit-spade-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSuitSpadeFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.18 11.25A3.5 3.5 0 0 1 1 9c0-1.6 1.14-2.63 2.66-4.01C4.99 3.79 6.6 2.33 8 0c1.4 2.33 3.01 3.79 4.34 4.99C13.86 6.37 15 7.4 15 9a3.5 3.5 0 0 1-6.18 2.25 20 20 0 0 0 1.58 2.91c0.230.35-0.020.85-0.440.85H6.04c-0.42 0-0.67-0.5-0.44-0.85a20 20 0 0 0 1.58-2.91"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSuitSpadeFill;
