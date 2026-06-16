import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-24mp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mso_24mp {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M250-510h170v-50H300v-53h80q14 0 27-13t13-27v-57q0-14-13-27t-27-13H250v50h120v54h-80q-14 0-27 13t-13 27v96Zm370 0h50v-63h46v-50h-46v-127h-50v127h-57v-127h-50v177h107v63ZM233-210h50v-190h53v127h50v-127h60v190h50v-200q0-14-13-27t-27-13H273q-14 0-27 13t-13 27v200Zm323 0h50v-63h80q14 0 27-13t13-27v-97q0-14-13-27t-27-13H556v240Zm50-113v-77h70v77h-70ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mso_24mp;
