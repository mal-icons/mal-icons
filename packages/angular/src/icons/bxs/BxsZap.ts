import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-zap",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsZap {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.98 11.8a11 0 0 0-0.74-0.77l-6.86-1.72 2.54-5.92a11 0 0 0-0.32-1.1911 0 0 0-1.230.02l-11 9a1 1 0 0 0 0.39 1.74l6.72 1.68-3.34 5.85A1 1 0 0 0 8 22a11 0 0 0 0.6-0.2l12-9a1 1 0 0 0 0.38-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsZap;
