import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-transform",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTransform {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 16H9c-0.55 0-1-0.45-1-1V4h0.79c0.45 0 0.67-0.540.35-0.85l-1.79-1.8c-0.2-0.2-0.51-0.2-0.71 0l-1.79 1.8a0.50.5 0 0 0 0.360.85H6v2H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h3v8c0 1.10.9 2 2 2h8v2h-0.79c-0.45 0-0.670.54-0.350.85l1.79 1.79c0.20.20.510.20.71 0l1.79-1.79c0.32-0.310.09-0.85-0.35-0.85H18v-2h3c0.55 0 1-0.45 1-1s-0.45-1-1-1zm-5-2h2V8c0-1.1-0.9-2-2-2h-6v2h5c0.55 0 1 0.45 1 1v5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTransform;
