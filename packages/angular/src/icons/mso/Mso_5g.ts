import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-5g",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mso_5g {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-280v-60h220v-110H120v-230h280v60H180v110h160q24.75 0 42.38 17.63T400-450v110q0 24.75-17.62 42.38T340-280H120Zm720-232v172q0 24.75-17 42.38T781-280H550q-24.75 0-42.37-17.62T490-340v-280q0-24.75 17.63-42.37T550-680h231q23.1 0 39.55 18Q837-644 840-620H550v280h231v-112H678v-60h162Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mso_5g;
