import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-file-zip-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFileZip24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 2.5a0.50.5 0 0 0-0.50.5v18a0.50.5 0 0 0 0.50.5h1.75a0.750.75 0 0 1 0 1.5H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h9.98a2 2 0 0 1 1.410.59l4.02 4.02A2 2 0 0 1 21 7.02V21a2 2 0 0 1-2 2h-2.75a0.750.75 0 0 1 0-1.5H19a0.50.5 0 0 0 0.5-0.5V7.02a0.50.5 0 0 0-0.15-0.35l-4.02-4.02a0.50.5 0 0 0-0.35-0.15H5Z"}],["path",{"d":"M11.5 15.75a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75Zm0.75-3.75a0.750.75 0 0 0 0 1.5h1a0.750.75 0 0 0 0-1.5h-1Zm-0.75-2.25a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75ZM12.25 6a0.750.75 0 0 0 0 1.5h1a0.750.75 0 0 0 0-1.5h-1Zm-0.75-2.25a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75ZM9.75 13.5a0.750.75 0 0 0 0 1.5h1a0.750.75 0 0 0 0-1.5h-1ZM9 11.25a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75Zm0.75-3.75a0.750.75 0 0 0 0 1.5h1a0.750.75 0 0 0 0-1.5h-1ZM9 5.25a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1A0.750.75 0 0 1 9 5.25ZM11 17h1a2 2 0 0 1 2 2v4.25a0.750.75 0 0 1-0.750.75h-3.5a0.750.75 0 0 1-0.75-0.75V19a2 2 0 0 1 2-2Zm-0.5 2v3.5h2V19a0.50.5 0 0 0-0.5-0.5h-1a0.50.5 0 0 0-0.50.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFileZip24;
