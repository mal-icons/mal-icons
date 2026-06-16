import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-male",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMale {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M380-160q-92 0-156-64t-64-156q0-92 64-156t156-64q36 0 70 11.5t63 32.5l184-184h-87q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T610-800h160q12.75 0 21.38 8.63T800-770v160q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T740-610v-87L556-514q21 29 32.5 63.5T600-380q0 92-64 156t-156 64Zm0.2-380Q314-540 267-493.2t-47 113Q220-314 266.8-267t113 47Q446-220 493-266.8t47-113Q540-446 493.2-493t-113-47Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMale;
