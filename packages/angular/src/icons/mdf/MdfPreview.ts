import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-preview",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfPreview {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-0.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-5.5-6c0 0.83-0.67 1.5-1.5 1.5s-1.5-0.67-1.5-1.50.67-1.5 1.5-1.5 1.50.67 1.5 1.5zM12 9c-2.73 0-5.06 1.66-6 4 0.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-0.94-2.34-3.27-4-6-4zm0 6.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfPreview;
