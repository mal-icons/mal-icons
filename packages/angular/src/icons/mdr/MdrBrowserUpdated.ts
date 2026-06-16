import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-browser-updated",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBrowserUpdated {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 3c0.55 0 1 0.45 1 1v6h1.59c0.89 0 1.34 1.080.71 1.71l-2.59 2.59a11 0 0 1-1.41 0l-2.59-2.59c-0.63-0.63-0.19-1.710.7-1.71H14V4c0-0.550.45-1 1-1zM6 19.59c0 0.780.63 1.41 1.41 1.41h9.17c0.78 0 1.41-0.63 1.41-1.41 0-0.72-0.44-1.03-1-1.59h3c1.1 0 2-0.9 2-2v-2c0-0.55-0.45-1-1-1s-1 0.45-1 1v2H4V5h7c0.55 0 1-0.45 1-1s-0.45-1-1-1H4c-1.1 0-2 0.9-2 2v11c0 1.10.9 2 2 2h3c-0.550.55-1 0.87-1 1.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBrowserUpdated;
