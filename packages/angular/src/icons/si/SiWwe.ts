import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-wwe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWwe {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 1.05L15.67 18.08l-3.47-8.53-3.47 8.53L0.39 1.05l3.23 8.98 3.29 8.5C3.87 19.33 1.33 20.46 0 21.75c0.44-0.17 3.47-1.24 7.41-1.93l1.21 3.13 1.55-3.52a36.77 36.77 0 0 1 3.96-0.2l1.64 3.72 1.4-3.62c2.130.14 3.860.43 4.680.69 0 0 0.92-1.96 1.34-2.87a54.84 54.84 0 0 0-5.14-0.09l2.72-7.04zm-21.840.03L8.64 13.86l3.57-9.15 3.57 9.15 6.48-12.79-6.43 8.45-3.61-8.22-3.61 8.22zm10.04 13.78l1.12 2.52a42.48 42.48 0 0 0-2.360.31Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWwe;
