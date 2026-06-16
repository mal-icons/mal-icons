import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-on-device-training",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfOnDeviceTraining {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 16h2v1h-2zm1-5c-1.1 0-2 0.9-2 2 0 0.740.4 1.38 1 1.72v0.78h2v-0.78c0.6-0.35 1-0.98 1-1.72 0-1.1-0.9-2-2-2z"}],["path",{"d":"M18 1.01 6 1c-1.1 0-2 0.9-2 2v18c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V3c0-1.1-0.9-1.99-2-1.99zM18 18H6V6h12v12z"}],["path",{"d":"M16.01 15.95c0.62-0.830.99-1.840.99-2.95s-0.37-2.12-0.99-2.95l-1.07 1.07c0.350.540.56 1.190.56 1.88s-0.21 1.34-0.56 1.88l1.07 1.07zm-6.95-1.07c-0.35-0.54-0.56-1.19-0.56-1.88 0-1.93 1.57-3.5 3.5-3.5v1.25l2.25-2-2.25-2V8c-2.76 0-5 2.24-5 5 0 1.110.37 2.120.99 2.95l1.07-1.07z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfOnDeviceTraining;
