import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-currency-dollar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCurrencyDollar {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 10.78c0.15 1.67 1.51 2.85 3.59 3V15h1.04v-1.22c2.27-0.18 3.68-1.44 3.68-3.3 0-1.59-0.95-2.51-2.96-3.03l-0.72-0.19V3.47c1.120.11 1.880.71 2.07 1.62h1.47c-0.17-1.6-1.54-2.75-3.54-2.87V1H7.59v1.23c-1.940.23-3.27 1.47-3.27 3.16 0 1.450.97 2.48 2.66 2.92l0.610.16v4.03c-1.15-0.17-1.94-0.8-2.13-1.72zm3.39-3.84c-1.04-0.26-1.6-0.82-1.6-1.62 0-0.940.7-1.64 1.8-1.83v3.5l-0.2-0.05zm1.59 1.87c1.290.32 1.850.86 1.85 1.77 0 1.1-0.83 1.83-2.2 1.94V8.73z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCurrencyDollar;
