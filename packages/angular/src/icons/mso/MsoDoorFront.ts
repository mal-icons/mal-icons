import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-door-front",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDoorFront {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-120v-60h80v-600q0-24 18-42t42-18h440q24 0 42 18t18 42v600h80v60H120Zm580-60v-600H260v600h440ZM567-449q14.45 0 24.23-9.77Q601-468.55 601-483q0-14.45-9.77-24.22Q581.45-517 567-517q-14.45 0-24.22 9.78Q533-497.45 533-483q0 14.45 9.78 24.23Q552.55-449 567-449ZM260-780v600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDoorFront;
