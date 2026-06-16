import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-corporate-fare",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCorporateFare {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-120q-24.75 0-42.37-17.62T80-180v-600q0-24.75 17.63-42.37T140-840h270q24.75 0 42.38 17.63T470-780v105h350q24.75 0 42.38 17.63T880-615v435q0 24.75-17.62 42.38T820-120H140Zm0-60h270v-105H140v105Zm0-165h270v-105H140v105Zm0-165h270v-105H140v105Zm0-165h270v-105H140v105Zm330 495h350v-435H470v435Zm80-270v-60h165v60H550Zm0 165v-60h165v60H550Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCorporateFare;
