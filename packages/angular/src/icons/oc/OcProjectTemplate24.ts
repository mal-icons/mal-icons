import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-project-template-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcProjectTemplate24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.75 3.5a0.250.25 0 0 0-0.250.25v2.06a0.750.75 0 1 1-1.5 0V3.75C2 2.78 2.78 2 3.75 2h2.06a0.750.75 0 1 1 0 1.5Zm13.69-0.75a0.750.75 0 0 1 0.75-0.75h2.06c0.97 0 1.750.78 1.75 1.75v2.06a0.750.75 0 1 1-1.5 0V3.75a0.250.25 0 0 0-0.25-0.25h-2.06a0.750.75 0 0 1-0.75-0.75ZM2.75 17.44a0.750.75 0 0 1 0.750.75v2.06c0 0.140.110.250.250.25h2.06a0.750.75 0 1 1 0 1.5H3.75A1.75 1.75 0 0 1 2 20.25v-2.06a0.750.75 0 0 1 0.75-0.75Zm18.5 0a0.750.75 0 0 1 0.750.75v2.06A1.75 1.75 0 0 1 20.25 22h-2.06a0.750.75 0 1 1 0-1.5h2.06a0.250.25 0 0 0 0.25-0.25v-2.06a0.750.75 0 0 1 0.75-0.75Zm-18.5-8.25a0.750.75 0 0 1 0.750.75v4.12a0.750.75 0 1 1-1.5 0V9.94a0.750.75 0 0 1 0.75-0.75ZM9.19 2.75a0.750.75 0 0 1 0.75-0.75h4.12a0.750.75 0 1 1 0 1.5H9.94a0.750.75 0 0 1-0.75-0.75Zm0 18.5a0.750.75 0 0 1 0.75-0.75h4.12a0.750.75 0 1 1 0 1.5H9.94a0.750.75 0 0 1-0.75-0.75ZM21.25 9.19a0.750.75 0 0 1 0.750.75v4.12a0.750.75 0 1 1-1.5 0V9.94a0.750.75 0 0 1 0.75-0.75ZM3.75 8.25a0.750.75 0 0 1 0.75-0.75h2a0.750.75 0 0 1 0 1.5h-2a0.750.75 0 0 1-0.75-0.75Zm5.5 0A0.750.75 0 0 1 10 7.5h2A0.750.75 0 0 1 12 9h-2a0.750.75 0 0 1-0.75-0.75Zm-1-4.5A0.750.75 0 0 1 9 4.5v2a0.750.75 0 0 1-1.5 0v-2a0.750.75 0 0 1 0.75-0.75Zm0 5.5A0.750.75 0 0 1 9 10v2a0.750.75 0 0 1-1.5 0v-2a0.750.75 0 0 1 0.75-0.75Zm0 4.75a0.750.75 0 0 1 0.750.75v4a0.750.75 0 0 1-1.5 0v-4a0.750.75 0 0 1 0.75-0.75ZM14 8.25a0.750.75 0 0 1 0.75-0.75h4a0.750.75 0 0 1 0 1.5h-4a0.750.75 0 0 1-0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcProjectTemplate24;
