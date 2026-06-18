import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-basicattentiontoken",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBasicattentiontoken {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m23.92 21.890.06-0.12v-0.04c0-0.040.02-0.080.02-0.1v-0.04c0-0.04 0-0.1-0.02-0.14l-0.06-0.12v-0.02L12.54 2.13A0.620.62 0 0 0 12 1.82c-0.23 0-0.410.12-0.540.31L0.08 21.27v0.02l-0.060.12C0 21.45 0 21.51 0 21.55v0.04c0 0.04 0 0.080.020.1v0.04c0.020.040.020.080.060.12l0.020.02c0.020.040.040.080.080.1l0.060.06c0.020.020.040.040.060.040.020.020.060.020.080.040.02 0 0.040.020.060.020.060.020.10.020.170.02h22.74c0.06 0 0.1 0 0.17-0.020.02 0 0.04-0.020.06-0.020.04-0.020.06-0.020.1-0.040.02-0.020.04-0.020.06-0.04l0.06-0.06a0.360.36 0 0 0 0.08-0.1h0.02ZM12 11.32l3.63 5.85H8.37L12 11.32Zm-0.62-1.35-4.56 7.36-4.45 2.55 9.02-15.15v5.24ZM7.42 18.43h9.14l4.46 2.55H2.96l4.46-2.55Zm9.76-1.1-4.56-7.36V4.72l9.02 15.15-4.46-2.55Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBasicattentiontoken;
