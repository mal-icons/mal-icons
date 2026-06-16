import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-tools-installation-kit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrToolsInstallationKit {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M360-160q-134 0-227-93T40-480q0-134 93-227t227-93h240q134 0 227 93t93 227q0 134-93 227t-227 93H360Zm0-60h240q108.33 0 184.17-75.76Q860-371.53 860-479.76 860-588 784.17-664 708.33-740 600-740H360q-108.33 0-184.17 75.77Q100-588.47 100-480.23 100-372 175.83-296 251.67-220 360-220Zm120.09-190Q509-410 529.5-430.59q20.5-20.59 20.5-49.5Q550-509 529.41-529.5q-20.59-20.5-49.5-20.5Q451-550 430.5-529.41q-20.5 20.59-20.5 49.5Q410-451 430.59-430.5q20.59 20.5 49.5 20.5ZM440-610h80q12.75 0 21.38-9T550-640.5q0-12.5-8.62-21T520-670h-80q-12 0-21 8.63T410-640q0 12 9 21t21 9Zm0 320h80q12.75 0 21.38-9T550-320.5q0-12.5-8.62-21T520-350h-80q-12 0-21 8.63T410-320q0 12 9 21t21 9Zm200.5-120q12.5 0 21-9t8.5-21v-80q0-12.75-8.62-21.37T640-550q-12 0-21 8.63T610-520v80q0 12 9 21t21.5 9Zm-320 0q12.5 0 21-9t8.5-21v-80q0-12.75-8.62-21.37T320-550q-12 0-21 8.63T290-520v80q0 12 9 21t21.5 9ZM480-480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrToolsInstallationKit;
