import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-brightness-5",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBrightness5 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M346.16-160H220q-24.75 0-42.37-17.62T160-220v-125.59L68-438q-17-17.32-17-42.16Q51-505 68-522l92-92.41V-740q0-24.75 17.63-42.37T220-800h125.59L438-892q17-18 42-17t43 18l91 91h126q24.75 0 42.38 17.63T800-740v125.59L892-522q17 17.32 17 42.16Q909-455 892-438l-92 92.41V-220q0 24.75-17.62 42.38T740-160H614l-91 90q-17.32 17-42.16 17Q456-53 439-70l-92.84-90ZM480.5-286Q398-286 342-342t-56-138.5q0-82.5 56-139T480.5-676q82.5 0 139 56.5t56.5 139q0 82.5-56.5 138.5t-139 56Zm0.5-60q54 0 94.5-40.5T616-481q0-54-40.5-94.5T481-616q-54 0-94.5 40.5T346-481q0 54 40.5 94.5T481-346Zm0 233 107.92-107H740v-151l109-109-109-109v-151H589L481-849 371-740H220v151L111-480l109 109v151h150l111 107Zm0-368Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBrightness5;
