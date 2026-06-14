import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-comment-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcComment16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 2.75C1 1.78 1.78 1 2.75 1h10.5c0.97 0 1.750.78 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.57 2.57A1.46 1.46 0 0 1 4 13.54V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-0.25a0.250.25 0 0 0-0.250.25v7.5c0 0.140.110.250.250.25h2a0.750.75 0 0 1 0.750.75v2.19l2.72-2.72a0.750.75 0 0 1 0.53-0.22h4.5a0.250.25 0 0 0 0.25-0.25v-7.5a0.250.25 0 0 0-0.25-0.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcComment16;
