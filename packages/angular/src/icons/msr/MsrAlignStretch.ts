import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-align-stretch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAlignStretch {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320-570q-12.75 0-21.37-8.62T290-600v-220H110q-12.75 0-21.37-8.68Q80-837.35 80-850.17 80-863 88.63-871.5T110-880h740q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-820H670v220q0 12.75-8.62 21.38T640-570H320ZM110-80q-12.75 0-21.37-8.68Q80-97.35 80-110.17 80-123 88.63-131.5T110-140h180v-220q0-12.75 8.63-21.37T320-390h320q12.75 0 21.38 8.63T670-360v220h180q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5Q880-97 871.38-88.5T850-80H110Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAlignStretch;
