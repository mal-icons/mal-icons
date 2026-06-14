import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-fiscal-host-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFiscalHost24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 3.75C2 2.78 2.78 2 3.75 2h16.5c0.97 0 1.750.78 1.75 1.75v14.5A1.75 1.75 0 0 1 20.25 20H19v0.25a1 1 0 1 1-2 0V20H7v0.25a1 1 0 1 1-2 0V20H3.75A1.75 1.75 0 0 1 2 18.25V3.75Zm1.75-0.25a0.250.25 0 0 0-0.250.25v14.5c0 0.140.110.250.250.25h16.5a0.250.25 0 0 0 0.25-0.25V3.75a0.250.25 0 0 0-0.25-0.25H3.75ZM14.32 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8.5A0.750.75 0 1 0 6 10h1.5v2H6a0.750.75 0 0 0 0 1.5h1.5V15A1.5 1.5 0 0 0 9 16.5h8a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 17 5.5H9A1.5 1.5 0 0 0 7.5 7v1.5H6ZM9 10a0.750.75 0 0 0 0-1.5V7h8v8H9v-1.5A0.750.75 0 0 0 9 12v-2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFiscalHost24;
