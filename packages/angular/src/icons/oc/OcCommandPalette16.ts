import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-command-palette-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcCommandPalette16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m6.35 8.04-4.77 4.77a0.750.75 0 1 0 1.06 1.06L7.95 8.57a0.750.75 0 0 0 0-1.06L2.64 2.21a0.750.75 0 0 0-1.06 1.06L6.35 8.04ZM8.75 11.5a0.750.75 0 0 0 0 1.5h5.5a0.750.75 0 0 0 0-1.5h-5.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcCommandPalette16;
