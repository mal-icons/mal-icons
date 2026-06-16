import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-21mp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Msr_21mp {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M346-560v-53h80q14 0 27-13t13-27v-57q0-14-13-27t-27-13H321q-10.83 0-17.92 7.12-7.08 7.12-7.08 18Q296-714 303.08-707q7.08 7 17.92 7h95v54h-80q-14 0-27 13t-13 27v71q0 10.83 7.08 17.92Q310.17-510 321-510h120q10.83 0 17.92-7.12 7.08-7.12 7.08-18Q466-546 458.92-553q-7.08-7-17.92-7h-95Zm250-140v165q0 10.83 7.12 17.92 7.12 7.08 18 7.08Q632-510 639-517.08q7-7.08 7-17.92v-190q0-10.83-7.08-17.92Q631.83-750 621-750h-63q-10.83 0-17.92 7.12-7.08 7.12-7.08 18Q533-714 540.08-707q7.08 7 17.92 7h38ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Zm103 380h53v102q0 10.83 7.12 17.92 7.12 7.08 18 7.08Q372-273 379-280.08q7-7.08 7-17.92v-102h60v165q0 10.83 7.12 17.92 7.12 7.08 18 7.08Q482-210 489-217.08q7-7.08 7-17.92v-175q0-14-13-27t-27-13H273q-14 0-27 13t-13 27v175q0 10.83 7.12 17.92 7.12 7.08 18 7.08Q269-210 276-217.08q7-7.08 7-17.92v-165Zm323 127h80q14 0 27-13t13-27v-97q0-14-13-27t-27-13H581q-10.83 0-17.92 7.08Q556-435.83 556-425v190q0 10.83 7.12 17.92 7.12 7.08 18 7.08Q592-210 599-217.08q7-7.08 7-17.92v-38Zm0-50v-77h70v77h-70Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Msr_21mp;
