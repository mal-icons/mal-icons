import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-springsecurity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSpringsecurity {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.59 2.07 11.99 0 3.41 2.07v6.61h4.56a3.8 3.8 0 0 0 0 0.95H3.41v3.11C3.41 19.87 11.99 24 11.99 24s8.58-4.13 8.58-11.26V9.64h-4.54a3.62 3.62 0 0 0 0-0.95h4.56zM12 12.26h-0.01a3.11 3.11 0 1 1 0.01 0zm-0.01-4.58a0.80.8 0 0 0-0.37 1.52v0.21l0.240.24v0.16l0.160.16v0.16l-0.140.140.150.25v0.16l-0.160.190.220.220.25-0.25V9.22a0.80.8 0 0 0-0.35-1.53zm0 0.84a0.30.3 0 1 1 0.3-0.30.30.3 0 0 1-0.30.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSpringsecurity;
