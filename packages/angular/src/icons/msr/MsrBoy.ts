import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-boy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBoy {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.9-680Q455-680 437.5-697.6t-17.5-42.5Q420-765 437.6-782.5t42.5-17.5Q505-800 522.5-782.4t17.5 42.5Q540-715 522.4-697.5t-42.5 17.5Zm-30.12 520Q437-160 428.5-168.62 420-177.25 420-190v-170h-10q-13 0-21.5-8.5T380-390v-170q0-24.75 17.63-42.37T440-620h80q24.75 0 42.38 17.63T580-560v170q0 13-8.5 21.5T550-360h-10v170q0 12.75-8.65 21.38T509.93-160h-60.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBoy;
