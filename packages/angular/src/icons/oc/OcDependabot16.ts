import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-dependabot-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcDependabot16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.75 7.5a0.750.75 0 0 1 0.750.75v1.5a0.750.75 0 0 1-1.5 0v-1.5a0.750.75 0 0 1 0.75-0.75Zm5.250.75a0.750.75 0 0 0-1.5 0v1.5a0.750.75 0 0 0 1.5 0v-1.5Z"}],["path",{"d":"M6.25 0h2A0.750.75 0 0 1 9 0.75V3.5h3.25a2.25 2.25 0 0 1 2.25 2.25V8h0.75a0.750.75 0 0 1 0 1.5h-0.75v2.75a2.25 2.25 0 0 1-2.25 2.25h-8.5a2.25 2.25 0 0 1-2.25-2.25V9.5H0.75a0.750.75 0 0 1 0-1.5h0.75V5.75A2.25 2.25 0 0 1 3.75 3.5H7.5v-2H6.25a0.750.75 0 0 1 0-1.5ZM3 5.75v6.5c0 0.410.340.750.750.75h8.5a0.750.75 0 0 0 0.75-0.75v-6.5a0.750.75 0 0 0-0.75-0.75h-8.5a0.750.75 0 0 0-0.750.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcDependabot16;
