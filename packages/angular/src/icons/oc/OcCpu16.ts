import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-cpu-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcCpu16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.50.75V2h3V0.75a0.750.75 0 0 1 1.5 0V2h1.25c0.97 0 1.750.78 1.75 1.75V5h1.25a0.750.75 0 0 1 0 1.5H14v3h1.25a0.750.75 0 0 1 0 1.5H14v1.25A1.75 1.75 0 0 1 12.25 14H11v1.25a0.750.75 0 0 1-1.5 0V14h-3v1.25a0.750.75 0 0 1-1.5 0V14H3.75A1.75 1.75 0 0 1 2 12.25V11H0.75a0.750.75 0 0 1 0-1.5H2v-3H0.75a0.750.75 0 0 1 0-1.5H2V3.75C2 2.78 2.78 2 3.75 2H5V0.75a0.750.75 0 0 1 1.5 0Zm5.75 11.75a0.250.25 0 0 0 0.25-0.25v-8.5a0.250.25 0 0 0-0.25-0.25h-8.5a0.250.25 0 0 0-0.250.25v8.5c0 0.140.110.250.250.25ZM5.75 5h4.5a0.750.75 0 0 1 0.750.75v4.5a0.750.75 0 0 1-0.750.75h-4.5a0.750.75 0 0 1-0.75-0.75v-4.5A0.750.75 0 0 1 5.75 5Zm0.75 4.5h3v-3h-3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcCpu16;
