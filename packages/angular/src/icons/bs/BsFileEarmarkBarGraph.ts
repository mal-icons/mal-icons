import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-file-earmark-bar-graph",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFileEarmarkBarGraph {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 13.5a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-6a0.50.5 0 0 0-0.5-0.5h-1a0.50.5 0 0 0-0.50.5zm-2.50.5a0.50.5 0 0 1-0.5-0.5v-4a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v4a0.50.5 0 0 1-0.50.5zm-3 0a0.50.5 0 0 1-0.5-0.5v-2a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v2a0.50.5 0 0 1-0.50.5z"}],["path",{"d":"M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFileEarmarkBarGraph;
