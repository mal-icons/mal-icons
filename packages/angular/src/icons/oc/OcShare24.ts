import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-share-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcShare24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.5 9.75v10.5c0 0.140.110.250.250.25h12.5a0.250.25 0 0 0 0.25-0.25V9.75a0.250.25 0 0 0-0.25-0.25h-2.5a0.750.75 0 0 1 0-1.5h2.5c0.97 0 1.750.78 1.75 1.75v10.5A1.75 1.75 0 0 1 18.25 22H5.75A1.75 1.75 0 0 1 4 20.25V9.75C4 8.78 4.78 8 5.75 8h2.5a0.750.75 0 0 1 0 1.5h-2.5a0.250.25 0 0 0-0.250.25Zm7.03-8.53 3.25 3.25a0.750.75 0 0 1-0.33 1.270.750.75 0 0 1-0.73-0.21l-1.97-1.97v10.69a0.750.75 0 0 1-1.5 0V3.56L9.28 5.53a0.750.75 0 0 1-1.04-0.020.750.75 0 0 1-0.02-1.04l3.25-3.25a0.750.75 0 0 1 1.06 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcShare24;
