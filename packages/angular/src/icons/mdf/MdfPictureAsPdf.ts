import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-picture-as-pdf",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfPictureAsPdf {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 2H8c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-8.5 7.5c0 0.83-0.67 1.5-1.5 1.5H9v2H7.5V7H10c0.83 0 1.50.67 1.5 1.5v1zm5 2c0 0.83-0.67 1.5-1.5 1.5h-2.5V7H15c0.83 0 1.50.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.10.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfPictureAsPdf;
