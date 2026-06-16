import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-lda",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoLda {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M450-80v-133L200-318v-202h250v-120h-70q-24.75 0-42.37-17.62T320-700v-120q0-24.75 17.63-42.37T380-880h200q24.75 0 42.38 17.63T640-820v120q0 24.75-17.62 42.38T580-640h-70v120h250v202L510-213v133h-60Zm-70-620h200v-120H380v120Zm70 422v-182H260v102l190 80Zm60 0 190-80v-102H510v182ZM380-700v-120 120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoLda;
