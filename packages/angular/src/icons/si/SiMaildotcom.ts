import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-maildotcom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMaildotcom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.02-0.01H0V15.66c0 1.410.96 2.57 2.25 2.91L24 24.01V5.99c0.02-3.31-2.67-6-5.98-6zm3 15.67H18V8.79c0-0.67-0.22-2.23-2.21-2.23-1.32 0-2.280.91-2.28 2.23V15.66h-3.02V8.79c0-0.67-0.21-2.23-2.19-2.23-1.35 0-2.280.91-2.28 2.23V15.66H3V3.61h5.3c1.59 0 2.90.63 3.74 1.660.89-1.03 2.21-1.66 3.74-1.66 3.29 0 5.23 2.18 5.23 5.25l0.02 6.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMaildotcom;
