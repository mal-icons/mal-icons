import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-code-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcCode24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.22 4.97a0.750.75 0 0 1 1.06 0l6.5 6.5a0.750.75 0 0 1 0 1.06l-6.5 6.5a0.750.75 0 0 1-1.27-0.330.750.75 0 0 1 0.22-0.73L21.19 12l-5.97-5.97a0.750.75 0 0 1 0-1.06Zm-6.44 0a0.750.75 0 0 1 0 1.06L2.81 12l5.97 5.97a0.750.75 0 0 1-0.33 1.270.750.75 0 0 1-0.73-0.21l-6.5-6.5a0.750.75 0 0 1 0-1.06l6.5-6.5a0.750.75 0 0 1 1.06 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcCode24;
