import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-keepassxc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiKeepassxc {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.38 0 0 5.38 0 12c0 6.62 5.38 12 12 12 6.62 0 12-5.38 12-12 0-6.62-5.38-12-12-12zm0 0.79a11.2 11.2 0 0 1 11.21 11.21A11.2 11.2 0 0 1 12 23.21 11.2 11.2 0 0 1 0.79 12 11.2 11.2 0 0 1 120.79zm0 1.87a9.36 9.36 0 0 0-1.70.16A1.75 1.75 0 0 0 12 4.95a1.75 1.75 0 0 0 1.71-2.13A9.34 9.34 0 0 0 12 2.66zM7.2 4a9.34 9.34 0 0 0-4.54 8 9.34 9.34 0 0 0 18.68 0 9.34 9.34 0 0 0-4.54-8 4.89 4.89 0 0 1-2.7 5.37l-0.12 2.07 1.48 1.48-1.48 1.480.990.99-0.990.990.12 1.86L12 20.33l-2.1-2.1V9.37A4.89 4.89 0 0 1 7.2 4zm3.4 6.54v6.99h0.7v-6.99z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiKeepassxc;
