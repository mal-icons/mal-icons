import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-fcc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFcc {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.41 17.59A7.89 7.89 0 0 1 10.27 6.41a7.87 7.87 0 0 1 11.14 0 8 8 0 0 1 0.841L24 6.12a10.03 10.03 0 0 0-8.16-4.2c-5.19 0-9.46 3.94-10 9h-3.82V4.33H6.78L8.51 1.92H0v20.16l2.02-1.49V13.08h3.82c0.54 5.06 4.81 9 10 9A10.03 10.03 0 0 0 24 17.88l-1.75-1.3a8 8 0 0 1-0.841m-5.57-9.2a3.61 3.61 0 0 1 2.97 1.57l1.75-1.3a5.77 5.77 0 0 0-4.72-2.46c-3.19 0-5.78 2.6-5.78 5.8s2.59 5.8 5.78 5.8a5.77 5.77 0 0 0 4.72-2.45l-1.75-1.3a3.61 3.61 0 1 1-2.97-5.66"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFcc;
