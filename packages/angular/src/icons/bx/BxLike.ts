import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-like",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxLike {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 8h-5.61l1.12-3.37c0.2-0.610.1-1.28-0.28-1.8S14.25 2 13.61 2H12c-0.3 0-0.580.13-0.770.36L6.53 8H4c-1.1 0-2 0.9-2 2v9c0 1.10.9 2 2 2h13.31a2.01 2.01 0 0 0 1.87-1.3l2.76-7.35A1 1 0 0 0 22 12v-2c0-1.1-0.9-2-2-2zM4 10h2v9H4v-9zm16 1.82L17.31 19H8V9.36L12.47 4h1.15l-1.56 4.68A11 0 0 0 13 10h7v1.82z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxLike;
