import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-browser-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcBrowser24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 3.75C0 2.780.78 2 1.75 2h20.5c0.97 0 1.750.78 1.75 1.75v16.5A1.75 1.75 0 0 1 22.25 22H1.75A1.75 1.75 0 0 1 0 20.25ZM22.5 7h-21v13.25c0 0.140.110.250.250.25h20.5a0.250.25 0 0 0 0.25-0.25Zm-10-3.5v2h10V3.75a0.250.25 0 0 0-0.25-0.25ZM7 3.5v2h4v-2Zm-5.25 0a0.250.25 0 0 0-0.250.25V5.5h4v-2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcBrowser24;
