import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-ruler",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxRuler {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.88 7H3.13C1.95 7 1 7.9 1 9v6c0 1.10.95 2 2.13 2h17.75C22.05 17 23 16.1 23 15V9c0-1.1-0.95-2-2.12-2zm0 8H3.13c-0.06 0-0.1-0.02-0.11-0.02-0.01 0-0.010-0.010.01l-0.01-5.95c0.01-0.010.05-0.050.14-0.05H5v3h2V9h2v4h2V9h2v3h2V9h2v4h2V9h1.88c0.0800.120.030.130.01l0.01 5.95c-0.010.01-0.050.05-0.140.05z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxRuler;
