import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-type-h6",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTypeH6 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.6 5.18H14.3c-0.11-0.44-0.62-1.07-1.71-1.07-1.33 0-2.33 1.27-2.33 3.95h0.07c0.27-0.67 1.04-1.44 2.44-1.44 1.49 0 3.02 1.06 3.02 3.07C15.8 11.8 14.37 13 12.48 13c-1.04 0-2.09-0.36-2.77-1.45C9.28 10.84 9 9.81 9 8.37 9 4.66 10.49 3 12.64 3c1.81 0 2.88 1.11 2.96 2.18m-5.15 4.57c0 1.370.94 2.15 2.04 2.15 1.13 0 2.04-0.68 2.04-2.14 0-1.41-1-2.06-2.03-2.06-1.19 0-2.050.85-2.05 2.05M7.5 13V3.2H6.17v4.15H1.32V3.2H0V13h1.32V8.51h4.85V13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTypeH6;
