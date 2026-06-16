import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-stack-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoStackOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m880-166-60-60v-354H466l-60-60h414q24.75 0 42.38 17.63T880-580v414ZM580-700v-120H226l-60-60h414q24.75 0 42.38 17.63T640-820v120h-60Zm63 297ZM380-140h354L380-494v354ZM837-37l-43-43H380q-25.5 0-42.75-17.25T320-140v-414L140-734v354h120v60H140q-25.5 0-42.75-17.25T80-380v-414l-43-43 43-43L880-80l-43 43ZM557-317Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoStackOff;
