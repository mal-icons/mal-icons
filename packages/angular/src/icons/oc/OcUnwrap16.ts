import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-unwrap-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcUnwrap16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 2.75c0-0.20.08-0.390.22-0.53A0.750.75 0 0 1 1.75 2h12.5c0.2 0 0.390.080.530.22a0.750.75 0 0 1 0 1.060.750.75 0 0 1-0.530.22H1.75a0.750.75 0 0 1-0.53-0.220.750.75 0 0 1-0.22-0.53Zm0 5c0-0.20.08-0.390.22-0.53A0.750.75 0 0 1 1.75 7h12.5c0.2 0 0.390.080.530.22a0.750.75 0 0 1 0 1.060.750.75 0 0 1-0.530.22H1.75a0.750.75 0 0 1-0.53-0.220.750.75 0 0 1-0.22-0.53ZM1.75 12h3.5c0.2 0 0.390.080.530.22a0.750.75 0 0 1 0 1.060.750.75 0 0 1-0.530.22h-3.5a0.750.75 0 0 1-0.53-0.220.750.75 0 0 1 0-1.060.750.75 0 0 1 0.53-0.22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcUnwrap16;
