import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-print",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPrint {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M658-648v-132H302v132h-60v-162q0-12.75 8.63-21.37T272-840h416q12.75 0 21.38 8.63T718-810v162h-60Zm-518 60h680-680Zm599 95q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9ZM302-180h356v-192H302v192Zm0 60q-24.75 0-42.37-17.62T242-180v-116H110q-12.75 0-21.37-8.62T80-326v-216q0-45.05 30.5-75.53Q141-648 186-648h588q45.05 0 75.53 30.48Q880-587.05 880-542v216q0 12.75-8.62 21.38T850-296H718v116q0 24.75-17.62 42.38T658-120H302Zm518-236v-186.21Q820-562 806.78-575 793.55-588 774-588H186q-19.55 0-32.77 13.23Q140-561.55 140-542v186h102v-76h476v76h102Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPrint;
