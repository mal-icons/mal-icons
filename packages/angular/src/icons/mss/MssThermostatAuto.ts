import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-thermostat-auto",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssThermostatAuto {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m527-434 150-385h53l150 385h-56l-43-112H626l-43 112h-56Zm115-159h123l-54-148h-15l-54 148ZM296-121q-76 0-129-53t-53-129q0-48 24-90.5t66-68.5v-286q0-38 27-65t65-27q38 0 65 27t27 65v286q42 26 66 68.5t24 90.5q0 76-53 129t-129 53ZM174-303h244q0-40-19-71.5T348-420l-20-9v-319q0-14-9-23t-23-9q-14 0-23 9t-9 23v319l-20 9q-32 14-51 46t-19 71Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssThermostatAuto;
