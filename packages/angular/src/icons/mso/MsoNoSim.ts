import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-no-sim",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoNoSim {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m800-237-60-60v-523H427L322-715l-44-44 121-121h341q24.75 0 42.38 18T800-820v583Zm46 215L242-627l-22 22v465h520v-72l60 60v12q0 24-18 42t-42 18H220q-24 0-42-18t-18-42v-495l37-36L39-829l42-42L888-64l-42 42ZM535-502Zm-46 122Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoNoSim;
