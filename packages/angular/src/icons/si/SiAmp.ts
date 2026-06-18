import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-amp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAmp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0c6.63 0 12 5.37 12 12s-5.37 12-12 12C5.37 24 0 18.63 0 12S5.37 0 12 0zm-0.92 19.28l5.03-8.38a0.440.44 0 0.1-0.270.460.46 0 0-0.45-0.45l-2.8500.92-5.47-0.930-5.02 8.37s-0.10.18-0.10.29c0 0.250.20.460.460.46l2.830-0.9 5.46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAmp;
