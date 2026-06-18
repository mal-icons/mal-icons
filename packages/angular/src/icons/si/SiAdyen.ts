import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-adyen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAdyen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.65 9.88v2.93c0 0.130.110.240.240.24h0.46V9.88h1.76v5.15c0 0.47-0.380.85-0.850.85H9.94v-1.24h2.41v-0.53h-1.62c-0.47 0-0.85-0.38-0.85-0.85V9.88h1.76Zm-8.260c0.47 0 0.850.380.850.85v3.39H0.85c-0.47 0-0.85-0.38-0.85-0.85v-0.95c0-0.470.38-0.850.85-0.85h0.92v1.35c0 0.130.110.240.240.24h0.46V11.18c0-0.13-0.11-0.24-0.24-0.24l-2.170V9.88Zm5.79-1.76v6H5.79c-0.47 0-0.85-0.38-0.85-0.85v-2.54c0-0.470.38-0.850.85-0.85h0.92v2.93c0 0.130.110.240.240.24h0.46l0-4.94h1.76Zm9.03 1.76a0.850.85 0 0 1 0.850.85v0.95c0 0.47-0.380.85-0.850.85h-0.92v-1.35c0-0.13-0.11-0.24-0.24-0.24h-0.46v1.87c0 0.130.110.240.240.24h2.17v1.06h-3.33c-0.47 0-0.85-0.38-0.85-0.85v-3.39Zm4.94 0c0.47 0 0.850.380.850.85v3.39h-1.76V11.18c0-0.13-0.11-0.24-0.24-0.24h-0.46v3.18H19.76V9.88Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAdyen;
