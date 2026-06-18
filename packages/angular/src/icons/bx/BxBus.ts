import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-bus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 7.98V6c0-2.21-1.79-4-4-4h-10c-2.21 0-4 1.79-4 4v2l-0.080A1 1 0 0 0 2 9v2a1 1 0 0 0 1 1h0v6c0 0.740.4 1.371 1.72V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.28A1.99 1.99 0 0 0 21 18v-6a1 1 0 0 0 1-1V9.06a1.01 1.01 0 0 0-0.07-0.45c-0.2-0.49-0.63-0.6-0.93-0.63zM19.01 18H5v-5h14l0 5zM11 7v4h-6V7h6zm8 0v4h-6V7h6zm-12-3h10c0.74 0 1.380.41 1.72 1H5.28c0.35-0.590.99-1 1.72-1z"}],["circle",{"cx":"7.5","cy":"15.5","r":"1.5"}],["circle",{"cx":"16.5","cy":"15.5","r":"1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBus;
