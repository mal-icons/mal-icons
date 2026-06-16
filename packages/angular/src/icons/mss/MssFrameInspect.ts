import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-frame-inspect",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFrameInspect {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M449.84-410Q492-410 521-438.84q29-28.84 29-71T521.16-581q-28.84-29-71-29T379-581.16q-29 28.84-29 71T378.84-439q28.84 29 71 29ZM643-274 539-378q-22 14-44.5 21t-44.03 7Q384-350 337-397t-47-113q0-66 47-113t113-47q66 0 113 47t47 113.47q0 21.53-7.5 44.03Q595-443 581-421l105 105-43 42ZM120-120v-232h60v172h172v60H120Zm488 0v-60h172v-172h60v232H608ZM120-608v-232h232v60H180v172h-60Zm660 0v-172H608v-60h232v232h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFrameInspect;
