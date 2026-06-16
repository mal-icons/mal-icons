import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-save-as",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSaveAs {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 12.4V7l-4-4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.4l8.6-8.6zM15 15c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zM6 6h9v4H6V6zm13.99 10.25 1.77 1.77L16.77 23H15v-1.77l4.99-4.98zm3.260.26-0.850.85-1.77-1.770.85-0.85c0.2-0.20.51-0.20.71 0l1.06 1.06c0.20.20.20.52 0 0.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSaveAs;
