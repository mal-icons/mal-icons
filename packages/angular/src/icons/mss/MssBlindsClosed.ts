import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-blinds-closed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssBlindsClosed {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M604.9-60Q580-60 562.5-77.57 545-95.14 545-120H80v-60h80v-660h640v660h80v60H665q0 24.86-17.6 42.43Q629.8-60 604.9-60ZM220-675h355v-105H220v105Zm415 0h105v-105H635v105ZM220-510h355v-105H220v105Zm415 0h105v-105H635v105ZM220-345h355v-105H220v105Zm415 0h105v-105H635v105ZM220-180h355v-105H220v105Zm415 0h105v-105H635v105Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssBlindsClosed;
