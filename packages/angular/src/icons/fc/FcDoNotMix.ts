import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-do-not-mix",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcDoNotMix {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#00BCD4","points":"26.9,42 17,42 17,32.1"}],["polygon",{"fill":"#00BCD4","points":"30,6 30,26.2 19.8,36.4 22.6,39.2 34,27.8 34,6"}],["polygon",{"fill":"#2196F3","points":"15.9,31 6,31 6,21.1"}],["polygon",{"fill":"#2196F3","points":"20.2,14 8.8,25.4 11.6,28.2 21.8,18 41,18 41,14"}],["rect",{"x":"22","y":"-2.9","transform":"matrix(.707 -.707 .707 .707 -9.941 24)","fill":"#37474F","width":"4","height":"53.7"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcDoNotMix;
