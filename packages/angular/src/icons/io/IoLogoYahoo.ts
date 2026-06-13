import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-logo-yahoo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoLogoYahoo {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 139.01H97.65L154.51 284.74L212.11 139.01H307.17L164.02 484H68.34L107.53 392.58L0 139.01H0ZM417.5 256H311L405.91 28L512 28L417.5 256ZM339.29 277.22C371.96 277.22 398.45 303.75 398.45 336.48C398.45 369.21 371.96 395.74 339.29 395.74C306.63 395.74 280.15 369.21 280.15 336.48C280.15 303.75 306.63 277.22 339.29 277.22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoLogoYahoo;
