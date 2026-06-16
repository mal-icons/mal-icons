import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-print-connect",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPrintConnect {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-588h680-680Zm102 438v-146H110q-12.75 0-21.37-8.62T80-326v-216q0-45.05 30.5-75.53Q141-648 186-648h588q45.05 0 75.53 30.48Q880-587.05 880-542v87q-14-9-28.5-15.5T820-482v-60q0-19.55-13.22-32.77Q793.55-588 774-588H186q-19.55 0-32.77 13.23Q140-561.55 140-542v186h102v-46q0-12.75 8.63-21.37T272-432h346q-14.09 12.83-25.55 27.91Q581-389 572-372H302v192h267q8 17 18.5 32t24.5 28H272q-12.75 0-21.37-8.62T242-150Zm476-102 120-120q9-9 21.16-9 12.16 0 21 8.61Q889-363 889-350.53q0 12.47-9 21.53L739-188q-9 9-21 9t-21-9l-57-57q-9-9-9-21t9-20.87q9-8.13 21-8.13t21 8l36 35ZM242-648v-132q0-24.75 17.63-42.37T302-840h356q24.75 0 42.38 17.63T718-780v132h-60v-132H302v132h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPrintConnect;
