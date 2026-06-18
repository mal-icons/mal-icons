import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-shadow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiShadow {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.37 0 0 5.37 0 12c0 3.51 1.51 6.68 3.92 8.87a4.46 4.46 0 1-0.2-1.32c0-2.46 1.99-4.45 4.45-4.45 2.46 0 4.45 1.99 4.45 4.45 0 1.96-1.26 3.62-3.02 4.22C10.38 23.92 11.18 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiShadow;
