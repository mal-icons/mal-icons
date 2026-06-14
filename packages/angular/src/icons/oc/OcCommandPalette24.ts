import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-command-palette-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcCommandPalette24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.05 18.89 9.94 12 3.05 5.11a0.750.75 0 0 1 1.06-1.06l7.43 7.43a0.750.75 0 0 1 0 1.06l-7.42 7.43a0.750.75 0 0 1-1.06-1.06Zm8.210.61a0.750.75 0 0 0 0 1.5h9.5a0.750.75 0 0 0 0-1.5h-9.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcCommandPalette24;
