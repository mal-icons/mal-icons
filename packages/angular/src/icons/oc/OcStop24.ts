import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-stop-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcStop24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 7a0.750.75 0 0 1 0.750.75v4.5a0.750.75 0 0 1-1.5 0v-4.5A0.750.75 0 0 1 12 7Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"}],["path",{"d":"M7.33 1.47a0.750.75 0 0 1 0.53-0.22h8.28c0.2 0 0.390.080.530.22l5.86 5.86c0.140.140.220.330.220.53v8.28a0.750.75 0 0 1-0.220.53l-5.86 5.86a0.750.75 0 0 1-0.530.22H7.86a0.750.75 0 0 1-0.53-0.22L1.47 16.67a0.750.75 0 0 1-0.22-0.53V7.86c0-0.20.08-0.390.22-0.53Zm0.84 1.28L2.75 8.17v7.66l5.42 5.42h7.66l5.42-5.42V8.17L15.83 2.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcStop24;
