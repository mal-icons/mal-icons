import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-format-line-spacing",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFormatLineSpacing {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.29 7c0.45 0 0.67-0.540.35-0.85l-2.29-2.3c-0.2-0.2-0.51-0.2-0.71 0l-2.29 2.3a0.50.5 0 0 0 0.360.85H4v10H2.71c-0.45 0-0.670.54-0.350.85l2.29 2.29c0.20.20.510.20.71 0l2.29-2.29a0.50.5 0 0 0-0.36-0.85H6V7h1.29zM11 7h10c0.55 0 1-0.45 1-1s-0.45-1-1-1H11c-0.55 0-1 0.45-1 1s0.45 1 1 1zm10 10H11c-0.55 0-1 0.45-1 1s0.45 1 1 1h10c0.55 0 1-0.45 1-1s-0.45-1-1-1zm0-6H11c-0.55 0-1 0.45-1 1s0.45 1 1 1h10c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFormatLineSpacing;
