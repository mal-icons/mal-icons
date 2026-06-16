import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-stop-screen-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrStopScreenShare {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M552-485 444-593h86v-52q0-5.25 4.5-7.12t8.75 2.38l75.65 75.65q5.1 5.1 5.1 11.28T619-552l-67 67Zm253 254-60-60h69v-483H262l-60-60h612q24 0 42 18t18 42v483q0 26-20 44t-49 16Zm-65 106H70q-12.75 0-21.37-8.68Q40-142.35 40-155.18 40-168 48.63-176.5T70-185h610l-46-46H147q-24 0-42-18t-18-42v-487l-34-34q-9-9.27-9-21.64Q44-846 53-855t21.5-9q12.5 0 21.5 9L859-92q9 9 9 21t-9 21q-9 9-21.5 9T816-50l-76-75ZM393-472v55q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T333-417v-60q0-10 2-22.5t7-23.03L147-718v427h427L393-472Zm111-61Zm-143 28Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrStopScreenShare;
