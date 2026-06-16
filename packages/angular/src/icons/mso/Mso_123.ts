import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-123",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mso_123 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-360v-192h-60v-48h108v240h-48Zm132 0v-110q0-15 9.5-24.5T386-504h98v-48H352v-48h146q15 0 24.5 9.5T532-566v76q0 15-9.5 24.5T498-456h-98v48h132v48H352Zm248 0v-48h132v-48h-92v-48h92v-48H600v-48h146q15 0 24.5 9.5T780-566v172q0 15-9.5 24.5T746-360H600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mso_123;
