import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-conveyor-belt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoConveyorBelt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M201-120q-50 0-85-35t-35-85q0-50 35-85t85-35h560q50 0 85 35t35 85q0 50-35 85t-85 35H201Zm0-60h560q25.5 0 42.75-17.25T821-240q0-25.5-17.25-42.75T761-300H201q-25.5 0-42.75 17.25T141-240q0 25.5 17.25 42.75T201-180Zm190-260q-12.75 0-21.37-8.62T361-470v-340q0-12.75 8.63-21.37T391-840h340q12.75 0 21.38 8.63T761-810v340q0 12.75-8.62 21.38T731-440H391Zm30-60h280v-280H421v280ZM79-530v-60h221v60H79Zm401-120h162v-60H480v60Zm-319 0h147v-60H161v60Zm260 150v-280 280Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoConveyorBelt;
