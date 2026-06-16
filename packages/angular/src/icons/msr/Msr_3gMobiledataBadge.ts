import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-3g-mobiledata-badge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Msr_3gMobiledataBadge {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M100-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h760q24 0 42 18t18 42v600q0 24-18 42t-42 18H100Zm0-60h760v-600H100v600Zm0 0v-600 600Zm450-100h151q25 0 42-17.62T760-340v-142q0-12.75-8.62-21.37T730-512h-60q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T670-452h31v112H550v-280h210q-3-24-19.45-42T701-680H550q-24.75 0-42.37 17.63T490-620v280q0 24.75 17.63 42.38T550-280Zm-183 0q24.75 0 42.38-17.62T427-340v-83q0-23.33-14-39.67Q399-479 378-479q22 0 35.5-17t13.5-40v-84q0-24.75-17.62-42.37T367-680H230q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T230-620h137v110H232q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T232-450h135v110H230q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T230-280h137Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Msr_3gMobiledataBadge;
