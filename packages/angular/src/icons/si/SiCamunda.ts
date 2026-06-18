import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-camunda",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCamunda {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.33 0A3.33 3.33 0 0 0 0 3.33v17.35A3.33 3.33 0 0 0 3.33 24h17.35A3.33 3.33 0 0 0 24 20.67V3.33A3.33 3.33 0 0 0 20.67 0H3.33Zm8.69 3.31c1.88 0 2.84 1.11 2.84 3.05v1.18H13.05V6.23c0-0.87-0.39-1.2-0.99-1.2-0.61-0.01-0.990.32-0.99 1.19v6.56c0 0.870.39 1.180.99 1.180.62 0 0.99-0.310.99-1.17v-1.73h1.8v1.61c-0.01 1.95-0.98 3.05-2.85 3.05-1.87 0-2.84-1.12-2.84-3.03V6.36c0.01-1.940.98-3.05 2.85-3.05ZM9.16 17.48h5.69v3.22H9.16v-3.22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCamunda;
