import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-mask",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxMask {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 6H5C3.35 6 2 7.35 2 9v5c0 2.21 1.79 4 4 4h1.64c1.17 0 2.28-0.56 2.98-1.490.66-0.88 2.1-0.88 2.760A3.74 3.74 0 0 0 16.36 18H18c2.21 0 4-1.79 4-4V9c0-1.65-1.35-3-3-3zm1 8c0 1.1-0.9 2-2 2h-1.64c-0.54 0-1.06-0.26-1.38-0.69-0.71-0.95-1.8-1.49-2.98-1.49s-2.270.54-2.98 1.49A1.74 1.74 0 0 1 7.64 16H6c-1.1 0-2-0.9-2-2V9c0-0.550.45-1 1-1h14c0.55 0 1 0.45 1 1v5z"}],["ellipse",{"cx":"7.5","cy":"11.5","rx":"2.5","ry":"1.5"}],["ellipse",{"cx":"16.5","cy":"11.5","rx":"2.5","ry":"1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxMask;
