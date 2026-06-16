import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-17mp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Msr_17mp {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M336-700v165q0 10.83 7.12 17.92 7.12 7.08 18 7.08Q372-510 379-517.08q7-7.08 7-17.92v-190q0-10.83-7.08-17.92Q371.83-750 361-750h-63q-10.83 0-17.92 7.12-7.08 7.12-7.08 18Q273-714 280.08-707q7.08 7 17.92 7h38Zm265 0-46 157q-4 13 4 23t21.53 10q8.76 0 15.92-4.87Q603.61-519.75 606-528l55-174q7-18-3.36-33-10.36-15-27.64-15H511q-10.83 0-17.92 7.12-7.08 7.12-7.08 18Q486-714 493.08-707q7.08 7 17.92 7h90ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Zm103 380h53v102q0 10.83 7.12 17.92 7.12 7.08 18 7.08Q372-273 379-280.08q7-7.08 7-17.92v-102h60v165q0 10.83 7.12 17.92 7.12 7.08 18 7.08Q482-210 489-217.08q7-7.08 7-17.92v-175q0-14-13-27t-27-13H273q-14 0-27 13t-13 27v175q0 10.83 7.12 17.92 7.12 7.08 18 7.08Q269-210 276-217.08q7-7.08 7-17.92v-165Zm323 127h80q14 0 27-13t13-27v-97q0-14-13-27t-27-13H581q-10.83 0-17.92 7.08Q556-435.83 556-425v190q0 10.83 7.12 17.92 7.12 7.08 18 7.08Q592-210 599-217.08q7-7.08 7-17.92v-38Zm0-50v-77h70v77h-70Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Msr_17mp;
