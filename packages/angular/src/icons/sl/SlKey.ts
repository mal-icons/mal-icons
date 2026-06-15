import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-key",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlKey {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M655.7 0C496.64 0 367.69 129.15 367.69 288.47c0 71.41 26.03 136.62 68.94 187.01-8.83-0.54-17.84 2.43-24.59 9.18L89.66 809.04c-12.48 12.5-12.48 32.77 0 45.250.240.240.510.380.770.620.080.080.130.180.210.26l156.91 159.9c12.48 12.5 32.75 12.5 45.25 0s12.5-32.77 0-45.25L157.33 831.76l82.5-83.01 135.73 138.32c12.48 12.5 32.75 12.5 45.25 0s12.48-32.77 0-45.25L284.94 703.38l172.38-173.47c6.67-6.67 9.66-15.54 9.22-24.27 50.62 44.29 116.67 71.31 189.17 71.31 159.06 0 288-129.15 288-288.48C943.7 129.15 814.77 0 655.7 0zm0 512c-123.25 0-224-100.27-224-224 0-123.74 100.75-224 224-224s224 100.26 224 224c0 123.73-100.74 224-224 224z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlKey;
