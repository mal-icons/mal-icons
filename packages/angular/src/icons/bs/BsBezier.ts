import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-bezier",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBezier {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5zm1.5-0.5a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zm10.50.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-0.5a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5zM7.5 4a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5z"}],["path",{"d":"M6 4.5H1.87a1 1 0 1 0 0 1h2.67A6.52 6.52 0 0 0 1.81 9H2.5q0.19 0 0.360.04a5.52 5.52 0 0 1 3.19-3.18A1.5 1.5 0 0 1 6 5.5zm3.96 1.36A1.5 1.5 0 0 0 10 5.5v-1h4.13a1 1 0 1 1 0 1h-2.67a6.52 6.52 0 0 1 2.72 3.5H13.5q-0.18 0-0.360.04a5.52 5.52 0 0 0-3.18-3.18"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBezier;
