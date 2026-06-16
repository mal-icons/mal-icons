import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-door-back",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDoorBack {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-120v-60h80v-660h560v660h80v60H120Zm140-60h440v-600H260v600Zm133-269q14.45 0 24.23-9.77Q427-468.55 427-483q0-14.45-9.77-24.22Q407.45-517 393-517q-14.45 0-24.22 9.78Q359-497.45 359-483q0 14.45 9.78 24.23Q378.55-449 393-449ZM260-780v600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDoorBack;
