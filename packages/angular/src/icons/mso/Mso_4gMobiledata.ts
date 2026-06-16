import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-4g-mobiledata",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mso_4gMobiledata {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M284-280v-130H120v-270h60v210h104v-210h60v210h85v60h-85v130h-60Zm556-232v172q0 24.75-17 42.38T781-280H550q-24.75 0-42.37-17.62T490-340v-280q0-24.75 17.63-42.37T550-680h231q23.1 0 39.55 18Q837-644 840-620H550v280h231v-112H678v-60h162Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mso_4gMobiledata;
