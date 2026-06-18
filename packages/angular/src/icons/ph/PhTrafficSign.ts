import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-traffic-sign",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhTrafficSign {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M243.15,116.29,139.71,12.85a16.56,16.56,0,0,0-23.42,0L12.85,116.29a16.56,16.56,0,0,0,0,23.42L116.29,243.15h0a16.56,16.56,0,0,0,23.42,0L243.15,139.71a16.56,16.56,0,0,0,0-23.42Zm-11.31,12.1L128.4,231.84a0.580.58,0,0,1-0.8,0h0L24.16,128.39a0.560.56,0,0,1,0-0.78L127.6,24.16a0.580.58,0,0,1,0.8,0L231.84,127.61a0.560.56,0,0,1,0,0.78Zm-58.18-14a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L148.69,128H112a16,16,0,0,0-16,16v8a8,8,0,0,1-16,0v-8a32,32,0,0,1,32-32h36.69l-10.35-10.34a8,8,0,0,1,11.32-11.32Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhTrafficSign;
