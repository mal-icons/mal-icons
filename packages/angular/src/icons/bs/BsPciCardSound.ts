import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-pci-card-sound",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPciCardSound {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.56 7.39 8 7.04v1.92l-0.44-0.35a0.50.5 0 0 0-0.31-0.11H6.5v-1h0.75a0.50.5 0 0 0 0.31-0.11"}],["path",{"d":"M0.5 1a0.50.5 0 0 0 0 1H1v12.5a0.50.5 0 0 0 1 0V12h13.5a0.50.5 0 0 0 0.5-0.5v-7a0.50.5 0 0 0-0.5-0.5H2V1.5a0.50.5 0 0 0-0.5-0.5zm11.62 3.88q0.150.170.280.37c0.480.730.77 1.70.77 2.75s-0.28 2.03-0.77 2.75q-0.130.2-0.280.37l-0.71-0.71q0.08-0.10.16-0.21c0.36-0.540.6-1.310.6-2.2s-0.24-1.66-0.6-2.2a3 3 0 0 0-0.16-0.21zm-1.37 4.86L10 9c0.06 0 0.17-0.040.29-0.220.12-0.180.21-0.450.21-0.78 0-0.33-0.09-0.6-0.21-0.78C10.17 7.04 10.06 7 10 7l0.74-0.74c0.150.110.280.250.380.410.240.360.380.840.38 1.34s-0.130.97-0.38 1.34a1.7 1.7 0 0 1-0.380.41M9 6v4a0.50.5 0 0 1-0.810.39L7.08 9.5H6a0.50.5 0 0 1-0.5-0.5V7a0.50.5 0 0 1 0.5-0.5h1.08l1.11-0.89A0.50.5 0 0 1 9 6"}],["path",{"d":"M6.5 12.5H3v1a0.50.5 0 0 0 0.50.5H6a0.50.5 0 0 0 0.5-0.5zm0.5 1v-1h4v1a0.50.5 0 0 1-0.50.5h-3a0.50.5 0 0 1-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPciCardSound;
