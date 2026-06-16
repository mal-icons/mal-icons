import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-fire-truck",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdFireTruck {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m22.9 10.69-1.44-4.32A2.01 2.01 0 0 0 19.56 5H19V4c0-0.55-0.45-1-1-1h-1c-0.55 0-1 0.45-1 1v1h-2c-1.1 0-2 0.9-2 2v4H1v5c0 1.10.9 2 2 2h1c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h3v-6.68c0-0.21-0.03-0.42-0.1-0.63zM14 7h5.56l1.33 4H14V7zM7 19c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm5-3H9.22c-0.55-0.61-1.33-1-2.22-1s-1.670.39-2.22 1H3v-3h9v3zm5 3c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm2.22-3c-0.55-0.61-1.34-1-2.22-1s-1.670.39-2.22 1H14v-3h7v3h-1.78z"}],["path",{"d":"M11 8.5h-1v-2h1V5H1v1.5h1v2H1V10h10V8.5zm-2.5 0H6.75v-2H8.5v2zm-5-2h1.75v2H3.5v-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdFireTruck;
